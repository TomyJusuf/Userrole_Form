export default function UserForm() {
  return (
    <div className=" flex flex-row  items-center 2xl:max-w-[500px]  xl:max-w-[400px] h-[530px] mx-auto lg:max-w-[700px] md:max-w-[700px] sm:min-w-[500px] ">
      <div className="">
        <h1 className="text-center text-blue-400 uppercase text-5xl font-bold">
          User form
        </h1>
        <form
          action=""
          className="flex flex-wrap gap-3 text-stone-600  mt-12 text-2x "
        >
          <input
            type="text"
            placeholder="Vorname"
            className="w-full bg-stone-300 pl-5 py-5 text-2xl  text-stone-500 placeholder:text-stone-500"
          />
          <input
            type="text"
            placeholder="Nachname"
            className="w-full bg-stone-300 pl-5 py-5 text-2xl text-stone-500 placeholder:text-stone-500"
          />
          <div className="selectContainer relative w-full flex items-center justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className=" absolute w-8 h-9 mr-10 "
            >
              <path
                fill="#70706f"
                d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
              />
            </svg>
            <select
              name=""
              id=""
              className="w-full bg-stone-300 pl-5 py-5 text-2xl text-stone-500 placeholder:text-stone-500 appearance-none "
            >
              <option selected className="text-2xl">
                Userrole
              </option>
              <option value="admin" className="text-2xl">
                Admin
              </option>
              <option value="editor">Editor</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="newsLetter flex items-center gap-3 my-2">
            <input
              type="checkbox"
              name="newsLetter"
              id="newsLetter"
              className="w-9 h-9 "
            />
            <label htmlFor="newsLetter" className="font-medium text-xl">
              Newsletter
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-400 py-5 text-white font-bold uppercase text-2xl"
          >
            Absenden
          </button>
        </form>
      </div>
    </div>
  );
}
