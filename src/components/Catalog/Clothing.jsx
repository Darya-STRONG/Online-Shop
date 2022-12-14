import './Clothing.scss';
import { useSelector } from "react-redux";
import Loader from '../Loader';


const Clothing = () => {
  const {loading, error, clothing} = useSelector((store)=> store.clothing);
  
  return (
        <div className="container">
        <h1>New in</h1>
        <p>1403 items</p>
        <div className="spinner" >
          {loading && <Loader/>}
        </div>
        <div className='clothing'>
          {clothing && clothing.map(({title,description,price,image,id}) => 
              <div key={`clothingItems_${id}`}>
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