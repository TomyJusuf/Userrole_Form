import UserForm from './components/UserForm';
import UsersBoarder from './components/UsersBoarder';
import { useState } from 'react';
import './index.css';
import { Inputs } from './components/UserForm';

function App() {
  const [formData, setFormData] = useState<Inputs | undefined>();

  const handleDataSubmit = (data: Inputs) => {
    setFormData(data);
  };
  return (
    <>
      <div className="flex flex-wrap container justify-center items-center h-[100vh] xl:max-w-[1400px] lg:max-w-[1200px] lg:pr-8 sm:gap-y-5 px-3 sm:mt-0">
        <UserForm onDataSubmit={handleDataSubmit} />
        <UsersBoarder formData={formData} />
      </div>
    </>
  );
}

export default App;
