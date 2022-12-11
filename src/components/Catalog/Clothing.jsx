import './Clothing.scss';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clothingLoading, clothingLoadingSuccess,clothingLoadingFailed } from "../../store/actions/clothingActions";
import { getClothing } from "../../api/clothing";
import spinner from "../Catalog/spinner.svg";


const Clothing = () => {
  const dispatch = useDispatch();
  const {loading, error, clothing} = useSelector((store)=> store.clothing)

  useEffect(()=> {
    dispatch(clothingLoading(true));
    getClothing()
    .then(({data}) => {
      dispatch(clothingLoadingSuccess(data))
    })
    .catch((error)=> {
      dispatch(clothingLoadingFailed(error.message));
    })
  },[])
  return (
        <div className="container">
        <h1>New in</h1>
        <p>1403 items</p>
        <div className="spinner" >
          {loading && <img src={spinner} alt="spinner"/>}
        </div>
        <div className='clothing'>
          {clothing && clothing.map(({title,description,price,image}, index) => 
              <div key={index}>
                <img className='clothing__image' src={`${image}`} alt="" />

                <div className='clothing__content'>
                  <h3 className='clothing__title'>{`${title}`}</h3>
                  <p className='clothing__description'>{`${description}`}</p>
                  <p className='clothing__price'>{`${price}`}</p>
                </div>

              </div>
          )}
        </div>

        {error && error}
      </div>
  );
};

export default Clothing;