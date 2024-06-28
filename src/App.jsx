import React, { useState } from "react";
import "./styles.css";
import one from "../src/assests/founder.png";
import two from "../src/assests/suraj.jpeg";
import three from "../src/assests/testimonialmgOne.png";
import four from "../src/assests/testimonialmgThree.png";
import five from "../src/assests/vijaybhai.jpeg";

const App = () => {
  const [carouselDeg, setCarouselDeg] = useState(17);
  const [itemDeg, setItemDeg] = useState(-17);
  const [centerItem, setCenterItem] = useState(0);
  const [nextItem, setNextItem] = useState(1);
  const [prevItem, setPrevItem] = useState(9);
  const lastItem = 9;

  const carousel = [
    { name: "Jone", id: 0, position: 1, image: four },
    { name: "Wong", id: 1, position: 2, image: four },
    { name: "Kaylem", id: 2, position: 3, image: four },
    { name: "Aila", id: 3, position: 4, image: four },
    { name: "Amin", id: 4, position: 5, image: four },
    { name: "Jannat", id: 5, position: 6, image: four },
    { name: "Rohaan", id: 6, position: 7, image: four },
    { name: "Malaki", id: 7, position: 8, image: four },
    { name: "Kade", id: 8, position: 9, image: four },
    { name: "Alex", id: 9, position: 10, image: four }
  ];

  const getIdItems = (side) => {
    if (side) {
      setCenterItem(nextItem);
      prevNext(nextItem);
    } else {
      setCenterItem(prevItem);
      prevNext(prevItem);
    }
  };

  const prevNext = (itemId) => {
    if (itemId === lastItem) {
      setNextItem(0);
      setPrevItem(lastItem - 1);
    } else if (itemId === 0) {
      setPrevItem(lastItem);
      setNextItem(1);
    } else {
      setNextItem(itemId + 1);
      setPrevItem(itemId - 1);
    }
  };

  const next = () => {
    getIdItems(true);
    setCarouselDeg(carouselDeg - 36);
    setItemDeg(itemDeg + 36);
  };

  const prev = () => {
    getIdItems(false);
    setCarouselDeg(carouselDeg + 36);
    setItemDeg(itemDeg - 36);
  };

  const getCssClass = (id) => {
    if (id === centerItem) {
      return "active";
    } else if (id === nextItem) {
      return "next";
    } else if (id === prevItem) {
      return "prev";
    }
  };

  return (
    <>
      <div className="App">
        <div className="carousel" style={{ transform: `rotate(${carouselDeg}deg)` }}>
          {carousel.map((item, index) => (
            <div
              className={`item-carousel ${getCssClass(index)}`}
              key={item.id}
              id={item.id}
              style={{ transform: `rotate(${itemDeg}deg)` }}>
              <span className="text-dark">  {item.name}  </span>
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
        <button onClick={next}>Next</button>
        <button onClick={prev}>Prev</button>
      </div>
    </>
  );
};

export default App;
