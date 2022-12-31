import { useState, useEffect } from "react";
import BagClear from "../components/bag-components/BagClear";
import BagItems from "../components/bag-components/BagItems";
import BagOrder from "../components/bag-components/BagOrder";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';


const ShopBag = () => {
  const [ subtotal, setSubtotal] = useState(0);
  const shoppingCart = useSelector((store) => store.cart);

  useEffect(() => {
    const sum = shoppingCart.reduce((accumulator, item) => {
      return accumulator + item.price * item.count; 
  }, 0);
  
   const shipingSum = shoppingCart.reduce((accumulator, item) => {
    return accumulator + item.costDelivery * item.count; 
  }, 0);



   setSubtotal({sum, shipingSum});
  }, [shoppingCart]);
  
  
  return (
    <div className="line">
      <div className="container">
        <h2 className="shop-bag__title title">Shopping bag</h2>
        <div className="shop-bag ">
          <div className="shop-bag__col1">
            <div className="bag">
              <div className="bag__title">
                <span className="bag__title-text item">Item</span>
                <span className="bag__title-text price">Price</span>
                <span className="bag__title-text quantity">Quantity</span>
                <span className="bag__title-text total">Total</span>
              </div>
              {shoppingCart.map((item, index) => {
                return <BagItems key={`bag_srh${index}`} {...item} />;
              })}
              <BagClear subtotal = {subtotal.sum} />
            </div>
          </div>
          <div className="shop-bag__col2">
            <BagOrder subtotal = {subtotal.sum} shipingSum = {subtotal.shipingSum}/>
          </div>
        </div>
        {/* <div className="shop-bag__slider">
          <Slider head="You may also like" />
        </div> */}
        {/* <Brands /> */}
      </div>
    </div>
  );
};
export default ShopBag;
