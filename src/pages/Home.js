import React from "react";
const Home = ({ works }) => {
  return (
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
  );
};

export default Home;
