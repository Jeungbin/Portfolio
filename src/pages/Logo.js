import React, { useEffect, useState } from "react";
import Home from "./Home";
import data from "../components/data";

const newData = [];
const items = data.map((item) => {
  item.stack.map((stack) => {
    return newData.push(stack);
  });
});
const allCategories = ["all", ...new Set(newData)];
//console.log(allCategories);

const Logo = () => {
  const [works, setWorks] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setWorks(data);
      return;
    }
    const newItems = data.filter((item) => item.stack.includes(category));
    setWorks(newItems);
  };

  return (
    <>
      <h1>JEUNGBIN'S PORTFOLIO</h1>
      <div>
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              type="button"
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <Home works={works} />
    </>
  );
};

export default Logo;
