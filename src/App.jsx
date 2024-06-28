import React, { useState } from "react";
import "./styles.css";
import one from "../src/assests/founder.png";
import two from "../src/assests/suraj.jpeg";
import three from "../src/assests/testimonialmgOne.png";
import four from "../src/assests/testimonialmgThree.png";
import five from "../src/assests/vijaybhai.jpeg";

const App = () => {
  const [carouselDeg, setCarouselDeg] = useState(0);
  const [centerItem, setCenterItem] = useState(0);

  const carousel = [
    { name: "Suraj", id: 0, image: four },
    { name: "aamir", id: 1, image: four },
    { name: "Alkesh", id: 2, image: four },
    { name: "john", id: 3, image: four },
    { name: "vohn", id: 4, image: four },
    { name: "alia", id: 5, image: four },
    { name: "visasa", id: 6, image: four },
    { name: "lussas", id: 7, image: four },
    { name: "humayu", id: 8, image: four },
    { name: "akabar", id: 9, image: four }
  ];

  const next = () => {
    setCenterItem((prev) => (prev + 1) % carousel.length);
    setCarouselDeg((prev) => prev - 36);
  };

  const prev = () => {
    setCenterItem((prev) => (prev - 1 + carousel.length) % carousel.length);
    setCarouselDeg((prev) => prev + 36);
  };

  const getCssClass = (index) => {
    if (index === centerItem) return "active";
    if (index === (centerItem + 1) % carousel.length) return "next";
    if (index === (centerItem - 1 + carousel.length) % carousel.length) return "prev";
    return "";
  };

  return (
    <>
      <div className="App">
        <div className="carousel" style={{ transform: `rotate(${carouselDeg}deg)` }}>
          {carousel.map((item, index) => (
            <div
              className={`item-carousel ${getCssClass(index)}`}
              key={item.id}
              style={{ transform: `rotate(${index * 36}deg)` }}>
              <span className="text-dark">{item.name}</span>
              {index === centerItem && (
                <div className="image-container">
                  <img src={item.image} alt={item.name} className="center-image" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="button-container">
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </>
  );
};

export default App;
