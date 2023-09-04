import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import CatagoryButton from "./components/CatagoryButton";
import Items from "./components/Items";

// ALL data by categoryId API
const categoryUsingIdAPI = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const responseData = await res.json();
  return responseData.data;
};

function App() {
  const [isDisplayBlog, setIsDisplayBlog] = useState(false);
  const [data, setData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  let value = useRef(0);
  console.log(value);

  //handler
  const handleDynamicBtnClick = async (id) => {
    setCategoryData(await categoryUsingIdAPI(id));
    value.current += 1;
  };

  useEffect(() => {
    // category API
    const initialRender = async () => {
      // fetch categories
      let res = await fetch(
        "https://openapi.programming-hero.com/api/videos/categories"
      );
      let responseData = await res.json();
      setData(responseData.data);

      // fetch category by id
      res = await fetch(
        `https://openapi.programming-hero.com/api/videos/category/1000`
      );
      responseData = await res.json();
      setCategoryData(responseData.data);
    };
    initialRender();
  }, []);

  return (
    <div>
      <Navbar
        categoryData={categoryData}
        setCategoryData={setCategoryData}
        setIsDisplayBlog={setIsDisplayBlog}
      />
      {isDisplayBlog ? (
        <Blog setIsDisplayBlog={setIsDisplayBlog} />
      ) : (
        <>
          <CatagoryButton
            data={data}
            handleDynamicBtnClick={handleDynamicBtnClick}
          />
          <Items data={categoryData} value={value} />
        </>
      )}
    </div>
  );
}

export default App;
