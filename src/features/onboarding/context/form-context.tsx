import React, { createContext, useContext, useState } from "react";

type OnboardingFormData = {
  nombre?: string;
  email?: string;
  telefono?: string;
  genero?: "masculino" | "femenino" | "otro";
  aceptaTerminos?: boolean;
};
type FormContextType = {
  formData: OnboardingFormData;
  updateFormData: (newData: Partial<OnboardingFormData>) => void;
  resetForm: () => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext debe usarse dentro de FormProvider");
  }
  return context;
};

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState<OnboardingFormData>({});

  const updateFormData = (newData: Partial<OnboardingFormData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const resetForm = () => {
    setFormData({});
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, resetForm }}>
      {children}
    </FormContext.Provider>
  );
};
