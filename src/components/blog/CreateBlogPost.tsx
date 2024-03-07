"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import CustomInput from "../common/inputs/CustomInput";
import CustomButton from "../common/buttons/CustomButton";
import blogData, {
  calculateReadTime,
  trimToExcerptLength,
} from "../../../blogData";
import { BlogPost } from "@/types/type";

export default function CreateBlogPost() {
  const { register, handleSubmit, setValue } = useForm<BlogPost>();

  const onSubmit: SubmitHandler<BlogPost> = async (data) => {
    try {
      data.readTime = calculateReadTime(data.content);
      data.excerpt = trimToExcerptLength(data.content);
      console.log("Form data submitted:", data);
      blogData.push(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <CustomInput
        title="Blog Title"
        placeholder="Harry Potter"
        {...register("title", { required: "Blog Title is required" })}
      />
      <CustomInput
        title="Blog Date"
        inputType="date"
        {...register("updatedAt", { required: "Blog Date is required" })}
      />
      <CustomInput
        title="Slug"
        placeholder="harrypotter"
        {...register("slug", { required: "Slug is required" })}
      />
      <CustomInput
        title="Image"
        name="image"
        inputType="file"
        onChange={(e) => {
          setValue("image", e.target.files);
        }}
      />
      <CustomInput
        title="Content"
        inputType="textarea"
        rows={10}
        maxLength={100}
        {...register("content", { required: "Content is required" })}
      />
      <div className="clear-both"></div>
      <div className="py-5">
        <CustomButton
          type="submit"
          value="Save Changes"
          className=" float-right"
        />
      </div>
    </form>
  );
}
