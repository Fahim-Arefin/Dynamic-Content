import React, { useState } from "react";

function CatagoryButton({ data, handleDynamicBtnClick }) {
  const [activeBtn, setActiveBtn] = useState(-1);
  const handleClick = (id, index) => {
    handleDynamicBtnClick(id);
    setActiveBtn(index);
  };

  return (
    <div className="flex justify-center flex-wrap gap-3 text-center mt-12">
      {data.map((category, index) => (
        <div key={category.category_id} id={category.category_id}>
          <button
            onClick={() => handleClick(category.category_id, index)}
            // className="px-6 py-2 rounded-md bg-[#25252533] hover:bg-[#05050533] active:bg-[#00000041]"
            className={`px-6 py-2 rounded-md ${
              activeBtn === index
                ? "bg-[#FF1F3D] hover:bg-[#DF1F3DFF] active:bg-[#BF1F3DFF] text-white"
                : "bg-[#25252533] hover:bg-[#05050533] active:bg-[#00000041]"
            }`}
          >
            {category.category}
          </button>
        </div>
      ))}
    </div>
  );
}

export default CatagoryButton;
