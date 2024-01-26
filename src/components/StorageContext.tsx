import { createContext, useContext, useState, ReactNode } from 'react';

interface StorageContextProps {
  storageChange: boolean;
  handleStorageChange: () => void;
}

const StorageContext = createContext<StorageContextProps | undefined>(
  undefined
);

interface StorageProviderProps {
  children: ReactNode;
}

export const StorageProvider: React.FC<StorageProviderProps> = ({
  children,
}) => {
  const [storageChange, setStorageChange] = useState(false);

  const handleStorageChange = () => {
    setStorageChange((prev) => !prev);
  };

  return (
    <StorageContext.Provider value={{ storageChange, handleStorageChange }}>
      {children}
    </StorageContext.Provider>
  );
};

export const useStorage = (): StorageContextProps => {
  const context = useContext(StorageContext);
  if (!context) {
    throw new Error('useStorage must be used within a StorageProvider');
  }
  return context;
};
