"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define types
type ModalContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

// Create context
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Custom hook to use modal context
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

// Modal provider component
type ModalProviderProps = {
  children: ReactNode;
};

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
