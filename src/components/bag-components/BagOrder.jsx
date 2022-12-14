import FormOrder from "./FormOrder";

const BagOrder = ({subtotal, shipingSum}) => {
  return (
    <div className="order">
      <h2 className="order__title">Order summary</h2>
      <div className="order__price">
        <span className="order__text">Subtotal</span>
        <span className="order__text">${subtotal}</span>
      </div>
      <div className="order__price">
        <span className="order__text">Shipping</span>
        <span className="order__text">${shipingSum}</span>
      </div>
      <FormOrder />
      <div className="order__total">
        <span className="order__total-title">Order total</span>
        <span className="order__total-price">${subtotal + shipingSum}</span>
      </div>
      <button className="order__btn-push btn">Proceed to checkout</button>
    </div>
  );
};

export default BagOrder;
