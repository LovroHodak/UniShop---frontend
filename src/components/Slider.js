import React, { useContext } from "react";
//import { MyContext } from "../MyContext";

import { Carousel } from "react-bootstrap";

import { useCategories } from "../hooks/use-categories";

export default function Slider() {
  //const [sliderInfo, setSliderInfo] = useContext(MyContext);

  const { categories, loading, error } = useCategories();

  console.log(categories);
  console.log(loading);

  return (
    <div>
      {categories === undefined ? (
        <h1>Loading</h1>
      ) : (
        <Carousel className="d-none d-md-block">
          {categories.map((item, i) => {
            return (
              <Carousel.Item key={i}>
                <img
                  className="d-block w-100"
                  src={item.categoryImg}
                  alt={item.categoryName}
                />
                <Carousel.Caption>
                  <h3>{item.categoryName}</h3>
                  <p>{item.categoryDesc}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
    </div>
  );
}
