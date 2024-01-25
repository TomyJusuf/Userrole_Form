// DataContext.js
import { createContext, useContext, useState } from 'react';

const DataContext = createContext<unknown>('unknown');

export const DataProvider = ({ children }: any) => {
  const [formData, setFormData] = useState();

  const updateFormData = (newData: any) => {
    setFormData(newData);
  };

  return (
    <DataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
