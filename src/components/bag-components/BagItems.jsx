import { useState } from "react";
import { DecrSvg, IncrSvg, CrossSvg } from "../../assets/img/icons";
import img from "../../components/bag-components/image/Swimwear.png";

const BagItems = ({image, category, title, size, price, count:itemCount}) => {
  const [count, setCount] = useState(itemCount);
  return (
    <div className="bag__items">
      <div className="bag__item">
        <div className="bag-card">
          <div className="bag-card__wrap item">
            <div className="bag-card__img">
              <img className="bag-card__img" src={image} alt="" />
            </div>
            <div className="bag-card__desc">
              <span className="bag-card__title">{category}</span>
              <h3 className="bag-card__subtitle">
                {title}
              </h3>
              <div className="bag-card__cloth-color">
                <span className="bag-card__text">Color:</span>
                <span className="bag-card__text">White/Red patterned</span>
              </div>
              <span className="bag-card__cloth-size bag-card__text">
                Size: {size}
              </span>
            </div>
          </div>
          <div className="bag-price price">${price}</div>
          <div className="bag-quantity quantity">
            <button
              className="bag-quantity__decr butn-shop"
              onClick={() => {
                if (count >= 2) {
                  setCount(count - 1);
                }
              }}
            >
              <DecrSvg />
            </button>
            <span className="bag-quantity__score">{count}</span>
            <button
              className="bag-quantity__incr butn-shop"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <IncrSvg />
            </button>
          </div>
          <div className="bag-total total">
            <span className="bag-total__price">${price * count}</span>
            <button
              className="bag-total__delete butn-shop"
              onClick={() => {
                setCount(0);
              }}
            >
              <CrossSvg />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagItems;
