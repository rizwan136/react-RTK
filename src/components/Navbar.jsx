const Navbar = () => {
  return (
    <>
      <div className="flex flex-col justify-center text-center  font-bold gap-5 mt-10">
        <h1>Welcome</h1>
        <h1 className="text-6xl text-slate-300">Admin Table</h1>
        <h1>Web site</h1>
        <div>
          <ul className="flex  text-center mt-10 mx-96  rounded justify-between bg-slate-200 text-lg font-semibold">
            <li className="hover:bg-slate-300 w-full p-3">Home</li>
            <li className="hover:bg-slate-300 w-full p-3">About</li>
            <li className="hover:bg-slate-300 w-full p-3">Project</li>
            <li className="hover:bg-slate-300 w-full p-3">Code</li>
            <li className="hover:bg-slate-300 w-full p-3">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
