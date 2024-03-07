// Import Image component from 'next/image'
import Image from "next/image";
import React, {
  useState,
  ChangeEvent,
  useRef,
  ChangeEventHandler,
} from "react";
import CustomButton from "../buttons/CustomButton";

interface CustomInputProps {
  title: string;
  name: string;
  inputType?: string;
  placeholder?: string;
  maxLength?: number;
  rows?: number;
  cols?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const CustomInput: React.FC<CustomInputProps> = ({
  title,
  inputType = "text",
  placeholder,
  maxLength = 100,
  rows,
  cols,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [inputLength, setInputLength] = useState<number>(0);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (maxLength && event.target.value.length <= maxLength) {
      setInputValue(event.target.value);
      setInputLength(event.target.value.length);
    }
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBrowseFiles = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    fileInputRef.current?.click();
  };

  const commonProps = {
    value: inputValue,
    onChange: handleChange,
    placeholder,
    className:
      "w-full border-2 border-gray-200 py-1 px-2 rounded-md outline-none",
    maxLength,
  };

  return (
    <div className="w-full py-1">
      <h6 className="">{title}</h6>
      {inputType !== "textarea" && inputType !== "file" && (
        <input type={inputType} {...commonProps} />
      )}
      {inputType === "textarea" && (
        <div>
          <textarea {...commonProps} rows={rows} cols={cols} />
          <span className="float-right">
            {inputLength}/{maxLength}
          </span>
        </div>
      )}
      {inputType === "file" && (
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-100"
          >
            <svg
              className="w-8 h-8 mb-1 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt="Selected"
                  className="mb-4 object-cover"
                  width={100}
                  height={100}
                />
              )}
              <p className="mb-2 text-sm text-gray-500">
                Please upload images in 100x100 pixels size, in either PNG or
                JPEG format.
              </p>
              <CustomButton value="Browse Files" onClick={handleBrowseFiles} />
            </div>
            <input
              ref={fileInputRef}
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleFileUpload}
              accept="image/*"
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default CustomInput;
