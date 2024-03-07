import React from "react";
import "./MainContent.scss";

import { useDispatch, useSelector } from "react-redux";
import { getSortData } from "../../store/reducers/requestSlice";
import EveryCard from "../EveryCard/EveryCard";
import {
  changeListCategory,
  changeListPrice,
  changeLookPrice,
} from "../../store/reducers/stateSlice";

const MainContent = () => {
  const dispatch = useDispatch();
  const { mainList } = useSelector((state) => state.requestSlice);
  const { listPrice, lookPrice, listCategory } = useSelector(
    (state) => state.stateSlice
  );

  React.useEffect(() => {
    // dispatch(getSortData({ start: "", end: "", type: 0 }));
  }, []);

  const clickPrice = (id, start, end) => {
    const newData = listPrice.map((button) => ({
      ...button,
      active: +id === +button.id,
    }));
    dispatch(changeListPrice(newData));
    // const obj = listCategory.find((category) => category.active === true);
    // dispatch(getSortData({ start, end, type: obj?.id }));
  };

  const clickCategory = (id) => {
    const newData = listCategory.map((button) => ({
      ...button,
      active: +id === +button.id,
    }));
    dispatch(changeListCategory(newData));
    // dispatch(getSortData({ start, end, type: 10414 }));
  };

  console.log(listPrice, "listPrice");

  return (
    <div className="maincontent">
      <div className="container">
        <div className="maincontent__inner">
          <button onClick={() => dispatch(changeLookPrice(!lookPrice))}>
            ₸ Выбрать бюджет
          </button>
          {lookPrice && (
            <div className="priceSort">
              {listPrice?.map((price) => (
                <div
                  className={`priceSort__every ${
                    price.active ? "activePrice" : ""
                  }`}
                  onClick={() => clickPrice(price?.id, price.start, price?.end)}
                  key={price?.id}
                >
                  {price?.name}
                </div>
              ))}
            </div>
          )}
          <ul className="categoryType">
            {listCategory?.map((i) => (
              <li key={i.id} onClick={clickCategory(i?.id)}>
                <p>{i?.name}</p>
                {i?.img && <img src={i?.img} alt="выбор" />}
              </li>
            ))}
          </ul>
          <div className="list">
            {mainList?.length === 0 ? (
              <p className="absent">Цветы отсутствуют</p>
            ) : (
              <>
                {mainList?.map((i) => (
                  <EveryCard key={i.codeid} content={i} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
