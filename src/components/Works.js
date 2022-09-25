import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import data from "./data";

const newArray = data.map((item) => {
  return item.stack;
});
const arrayItem = [];
let newData = newArray.filter((item) => {
  for (let i = 0; i < item.length; i++) {
    arrayItem.push(item[i]);
  }
  return arrayItem;
});
newData = arrayItem;
const allCategories = ["all", ...new Set(newData)];
//
const Works = () => {
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
    <div className="main-container">
      <section className="section-center">
        <div className="category-container">
          <div className="button-center">
            {categories.map((category, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  className="category"
                  onClick={() => filterItems(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="works-container">
          {works?.map((item) => {
            const { id, name, img, website, figma, git, explain, href } = item;
            return (
              <section className="work" key={id}>
                <div className="workInnerContainer">
                  {img ? (
                    <img className="work-img" src={img} alt="" />
                  ) : (
                    <p className="not-yet">I'm working on it now!</p>
                  )}
                  <h1 className="work-name">{name}</h1>
                  <p className="work-explain">{explain}</p>
                  <div className="stack-containers">
                    {item.stack.map((item, index) => (
                      <li key={index} className="stack">
                        {item}
                      </li>
                    ))}
                  </div>
                  <div className="icons">
                    {website ? (
                      <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-solid fa-w"></i>
                      </a>
                    ) : (
                      ""
                    )}
                    {figma ? (
                      <a href={figma} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-figma"></i>
                      </a>
                    ) : (
                      ""
                    )}
                    {git ? (
                      <a href={git} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                  {href ? (
                    <p>
                      <Link className="detailInfo" to={href}>
                        Detail Info
                      </Link>
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Works;
