import React, { createContext, useState, useContext } from "react";

const ShowFormContext = createContext();

export default function ShowFormProvider({ children }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <ShowFormContext.Provider
      value={{
        showForm,
        setShowForm,
      }}
    >
      {children}
    </ShowFormContext.Provider>
  );
}

export function useShowForm() {
  const context = useContext(ShowFormContext);

  const { showForm, setShowForm } = context;
  return { showForm, setShowForm };
}
