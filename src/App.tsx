import UserForm from './components/UserForm';
import UsersBoarder from './components/UsersBoarder';
import './index.css';

function App() {
  return (
    <>
      <div className="flex flex-wrap container gap-10 justify-center items-center max-w-[1500px] h-[90vh]  mt-4">
        <UserForm />
        <UsersBoarder />
      </div>
    </>
  );
}

export default App;
