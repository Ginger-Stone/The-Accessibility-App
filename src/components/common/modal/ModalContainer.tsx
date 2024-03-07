import React from "react";
import Exit from "../icons/Exit";
import { useModal } from "../../../context/ModalContext";

type ModalProps = {
  children: React.ReactNode;
};

const ModalContainer: React.FC<ModalProps> = ({ children }) => {
  const { isOpen, closeModal } = useModal();

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 z-10 flex justify-center items-center"
          style={{
            height: "100%",
            width: "calc(100%)",
            backgroundColor: "rgba(255,255,255,.2)",
          }}
        >
          <div className="rounded-2xl relative pt-1 border-2 border-gray-color-100 md:w-1/2 xs:w-full xs:h-[100vh] h-5/6 bg-white">
            <div className="flex justify-between px-5 pt-8">
              <div>
                <h3>Create Blog Post</h3>
                <p>
                  Enter your blog details here. Click save when you&apos;re
                  done.
                </p>
              </div>
              <div
                className={`w-16 h-12 flex items-center justify-center xs:fixed xs:right-4 xs:top-4`}
                onClick={closeModal}
              >
                <Exit />
              </div>
            </div>
            <div className="px-6 h-5/6 overflow-y-scroll">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalContainer;
