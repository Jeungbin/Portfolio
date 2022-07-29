import React from "react";
import { useState } from "react";
import data from "../components/data";

const newData = [];

const allCategories = ["all", ...new Set(newData)];

const Buttons = () => {
  const [works, setWorks] = useState(data);

  const categories = allCategories;
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
      <div className="works-container">
        {works?.map((item) => {
          return (
            <section className="work" key={item.id}>
              <h1>{item.name}</h1>
              {item.stack.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Buttons;
