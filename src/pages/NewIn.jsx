import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  clothingLoading,
  clothingLoadingSuccess,
  clothingLoadingFailed,
} from "../store/actions/clothingActions";
import { getClothing } from "../api/clothing";
import Card from "../components/Card";
import Loader from "../components/Loader";
import img from "../components/catalog-components/image/newInImg.png";


const NewIn = () => {
  const dispatch = useDispatch();
  const { loading, error, clothing } = useSelector((store) => store.clothing);

  useEffect(() => {
    dispatch(clothingLoading());
    getClothing()
      .then(({ data }) => {
        dispatch(clothingLoadingSuccess(data));
      })
      .catch((error) => dispatch(clothingLoadingFailed(error.message)));
  }, [dispatch]);

  return (
    <>
      <div className="line">
        <div className="container">
          <div className="new">
            <div
              className="new__img-back"
              style={{ backgroundImage: `url(${img})` }}
            >
              <h2 className="new__head">New in</h2>
              <p className="new__head-text">This season, inside is cancelled</p>
            </div>
            <h2 className="new__text">New in</h2>
            <div className="new__card">
              {loading && <Loader className="loading-anim" />}
              {clothing &&
                clothing.map((item, index) => <Card value={item} key={index} />)}
              {error && error}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewIn;
