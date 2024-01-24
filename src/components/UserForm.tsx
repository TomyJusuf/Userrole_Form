export default function UserForm() {
  return (
    <div className=" flex flex-row  items-center justify-center 2xl:max-w-[500px] xl:max-w-[450px] lg:w-[300px]  h-[530px] mx-auto  md:max-w-[700px] sm:min-w-[500px] ">
      <div className=" xl:max-w-[300px]  flex flex-wrap justify-center xl:flex xl:justify-center">
        <h1 className="text-center text-blue-400 uppercase text-5xl font-bold xl:text-3xl  lg:text-4xl md:mt-[-75px] sm:mt-[-45px] xs:mt-[-85px]">
          User form
        </h1>
        <form
          action=""
          className="flex flex-wrap gap-3 text-stone-600  mt-4 text-2x  lg:mt-2  md:mt-0 sm:mt-[25px] xs:mt-0"
        >
          <input
            type="text"
            placeholder="Vorname"
            className="w-full bg-stone-300 pl-5 py-5 text-2xl  text-stone-500 placeholder:text-stone-500 xl:w-[300px] xl:text-xl xl:p-3 lg:p-2 md:p-2 sm:p-2 xs:p-2"
          />
          <input
            type="text"
            placeholder="Nachname"
            className="w-full bg-stone-300 pl-5 py-5 text-2xl text-stone-500 placeholder:text-stone-500 xl:w-[300px] xl:text-xl xl:p-3 lg:p-2 md:p-2 sm:p-2 xs:p-2"
          />
          <div className="selectContainer relative w-full flex items-center justify-end ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className=" absolute w-8 h-9 mr-10 xl:w-5 xl:h-6 xl:left-64 lg:w-6 lg:h-7 md:h-7 sm:w-6 sm:h-6 xs:h-7 "
            >
              <path
                fill="#70706f"
                d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
              />
            </svg>
            <select
              name=""
              id=""
              className="w-full bg-stone-300 pl-5 py-5 text-2xl text-stone-500 placeholder:text-stone-500 appearance-none xl:w-[300px] xl:text-xl   xl:p-3 lg:p-2  md:p-2 sm:p-2 xs:p-2"
            >
              <option selected className="text-2xl">
                Userrole
              </option>
              <option selected value="admin" className="text-2xl xl:text-xl">
                Admin
              </option>
              <option selected value="editor">
                Editor
              </option>
              <option selected value="user">
                User
              </option>
            </select>
          </div>
          <div className="newsLetter flex flex-wrap items-center gap-3 my-2">
            <input
              type="checkbox"
              name="newsLetter"
              id="newsLetter"
              className="w-9 h-9 xl:w-5 lg:w-5 lg:h-5 md:w-5 sm:w-5 xs:w-5 xs:h-5"
            />
            <label
              htmlFor="newsLetter"
              className="font-medium text-xl xl:text-xl"
            >
              Newsletter
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-400 py-5 text-white font-bold uppercase text-2xl xl:w-[300px] xl:text-xl xl:p-3 lg:p-2 md:p-2 sm:p-2 xs:p-2"
          >
            Absenden
          </button>
        </form>
      </div>
    </div>
  );
}
