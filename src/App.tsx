import { DataProvider } from './components/DataContext';
import UserForm from './components/UserForm';
import UsersBoarder from './components/UsersBoarder';
import './index.css';

function App() {
  const datatoSend = (data: any) => {
    // Do any additional processing if needed
    console.log('Form submitted:', data);
  };
  return (
    <>
      <div className="flex flex-wrap container justify-center items-center h-[100vh] xl:max-w-[1400px] lg:max-w-[1200px] lg:pr-8 sm:gap-y-5 px-3 sm:mt-0">
        <DataProvider>
          <UserForm />
          <UsersBoarder />
        </DataProvider>
      </div>
    </>
  );
}

export default App;
