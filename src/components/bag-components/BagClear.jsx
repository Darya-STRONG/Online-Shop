import { TrashSvg } from "../../../src/assets/img/icons";
import { useDispatch } from "react-redux";
import { cartRemoveAll } from "../../store/actions/cartActions";


const BagClear = ({subtotal}) => {
  const dispatch = useDispatch();

  return (
    <div className="bag-clear">
      <div className="bag-clear__button">
        <button 
          className="bag-clear__delete"
          onClick={() => {
          dispatch(cartRemoveAll())
        }}>
          <TrashSvg />

        </button>
        <span className="bag-clear__text text">Clear bag</span>
      </div>
      <div className="bag-clear__summ">
        <span className="bag-clear__summ-text text">Subtotal:</span>
        <span className="bag-clear__summ-price">${subtotal}</span>
      </div>
    </div>
  );
};

export default BagClear;
