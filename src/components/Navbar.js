function Navbar({ categoryData, setCategoryData, setIsDisplayBlog }) {
  const handleClick = () => {
    const sortedData = [...categoryData].sort((a, b) => {
      const valueA = parseInt(a.others.views);
      const valueB = parseInt(b.others.views);

      return valueB - valueA;
    });
    setCategoryData(sortedData);
  };

  return (
    <header className="sticky top-0 bg-white z-50">
      <nav className="grid grid-cols-2 md:grid-cols-3 md:w-[85%] md:mx-auto gap-4 px-4 md:px-0 py-10 border-b border-[#17171733]">
        <div className="md:order-1">
          <img src="./images/Logo.png" alt="" />
        </div>
        <div className="text-center order-last md:order-2 col-span-2 md:col-span-1">
          <button
            onClick={handleClick}
            className="px-4 py-2 rounded-md bg-[#25252533] hover:bg-[#05050533] active:bg-[#00000041]"
          >
            Sort by view
          </button>
        </div>
        <div className=" text-end md:order-3">
          <button
            onClick={() => setIsDisplayBlog(true)}
            className="px-4 py-2 text-white rounded-md bg-[#FF1F3D] hover:bg-[#DF1F3DFF] active:bg-[#BF1F3DFF] "
          >
            Blog
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
