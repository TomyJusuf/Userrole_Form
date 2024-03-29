import { useState, useEffect } from 'react';

import { Inputs } from './UserForm';

export default function UsersBoarder({ formData }: { formData?: Inputs }) {
  const [data, setData] = useState<Inputs[]>([]);

  useEffect(() => {
    if (formData) {
      setData((prevData) => [...prevData, formData]);
    }
  }, [formData]);

  useEffect(() => {
    // Show data in array
    // console.log('Data Array:', data);
  }, [data]);

  const handleDelete = (index: number) => {
    // Create a new array without the element at the specified index
    const newData: Inputs[] = data.filter((_, i) => i !== index);
    setData(newData);
  };
  return (
    <div>
      <div className=" border-[3px] border-stone-300 2xl:min-w-[900px]  xl:w-[950px] lg:min-w-[650px] md:min-w-[700px] sm:min-w-[610px] h-[750px]  container mx-auto overflow-y-scroll block md:h-[450px] md:mb-5 md:mt-[-95px] sm:mt-[-95px] sm:mb-10 sm:h-[450px] xs:mt-[-155px] xs:h-[400px] xs:w-[470px]">
        {data.map((person, index) => {
          const { firstName, lastname, selectRole, newsLetter } = person;
          return (
            <div
              className=" mx-auto flex flex-wrap justify-between items-center w-5/6 mt-10 xs:w-[400px] xs:mt-5"
              key={index + 1}
            >
              <div className="flex flex-wrap justify-between">
                <h1 className="w-full text-3xl xl:text-2xl lg:text-xl xs:text-lg ">
                  {firstName} {lastname}
                </h1>
                <span
                  className={`text-green-500 font-bold                
                ${newsLetter ? 'text-green-500' : 'text-red-600'}`}
                >
                  Newlatter
                </span>
              </div>

              <div className="flex flex-wrap justify-between items-center w-28 xl:w-24 lg:w-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-5 h-5 cursor-pointer xl:w-5 xl:h-5 lg:w-4 xs:w-[50px]"
                  onClick={() => handleDelete(index)}
                >
                  <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                </svg>
                <span className="text-blue-400 font-bold text-2xl xl:text-xl lg:text-lg xs:text-lg">
                  {selectRole}
                </span>
              </div>
              <hr className="h-[3px] w-full bg-stone-300" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
