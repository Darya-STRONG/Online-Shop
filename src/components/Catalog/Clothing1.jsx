// import './Clothing.scss';
// import { useSelector, useDispatch } from "react-redux";
// import Loader from '../Loader';
// import {HeartFavorites} from "../../assets/img/icons";
// import { favoritesAdd, favoritesRemove} from '../../store/actions/favoritesActions';
// import React, {useEffect, useState} from 'react';
// import "../Main/Main.styles.scss";


// const Clothing = () => {

//   const {loading, error, clothing} = useSelector((store) => store.clothing);

//   const dispatch = useDispatch();
//   const favorites = useSelector((store) => store.favorites); 
//   const {id} = useSelector((store) => store.favorites); //undefined
 

//   const inFavorites = () => {
//     const result = favorites.filter((item) => item.id === id);
//     console.log(id);
//     if(result.lenght > 0) {
//       return true;
//     }
//     return false;
//   };

//   const toggleFevorites = ({title, price, description, category, image, rating, id}) => {
//     if (inFavorites()) {
//       dispatch(favoritesRemove({title, price, description, category, image, rating, id}))
//     } else {
//       dispatch(favoritesAdd({title, price, description, category, image, rating, id}));
//     }

//   }

//   return (
//         <div className="container">
//         <h1>New in</h1>
//         <p>1403 items</p>
//         <div className="spinner" >
//           {loading && <Loader/>}
//         </div>
//         <div className='clothing'>
//           {clothing && clothing.map(({title, price, description, category, image, rating, id}) => 
//               <div key={`clothingItems_${id}`}>
//                 <img className='clothing__image' src={`${image}`} alt="" />
//                 <button onClick={()=>{toggleFevorites({title, price, description, category, image, rating, id})
//                 }} className={`heart-favorites position ${inFavorites() ? "heart-favorites position heart-favorites_active" : null}`}><HeartFavorites></HeartFavorites></button>

//                 <div className='clothing__content'>
//                   <span className='clothing__title' title={title}>{`${title}`}</span>
//                   <p className='clothing__description'>{`${description}`}</p>
//                   <p className='clothing__price'>{`${price}`}</p>
//                 </div>

//               </div>
//           )}
//         </div>

//         {error && error}
//       </div>
//   );
// };

// export default Clothing;