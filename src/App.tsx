import UserForm from './components/UserForm';
import UsersBoarder from './components/UsersBoarder';
import './index.css';

function App() {
  return (
    <>
      <div className="flex flex-wrap container gap-10 justify-center items-center 2xl:max-w-[1500px] h-[90vh]  mt-14  xl:max-w-[1400px] lg:max-w-[1300px] md:max-w-[1000px] sm:max-w-[650px] sm:gap-y-5  px-3">
        <UserForm />
        <UsersBoarder />
      </div>
    </>
  );
}

export default App;
