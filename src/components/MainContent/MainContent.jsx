import React from 'react';
import './MainContent.scss';
import roze from '../../assets/images/roze.png';
import fire from '../../assets/images/fire.png';
import klub from '../../assets/images/klubn.png';
import fruit from '../../assets/images/fruit.png';
import { useDispatch, useSelector } from 'react-redux';
import { getMainProd } from '../../store/reducers/requestSlice';
import EveryCard from '../EveryCard/EveryCard';
import {
  changeListPrice,
  changeLookPrice,
} from '../../store/reducers/stateSlice';

const MainContent = () => {
  const dispatch = useDispatch();
  const { listFlowers } = useSelector((state) => state.requestSlice);
  const { listPrice, lookPrice } = useSelector((state) => state.stateSlice);

  const listCategory = [
    { id: 1, name: 'Розы', img: roze },
    { id: 2, name: 'Пионы' },
    { id: 3, name: 'Шары' },
    { id: 4, name: 'Хиты', img: fire },
    { id: 5, name: 'Клубника', img: klub },
    { id: 6, name: 'Фруктовые', img: fruit },
    { id: 7, name: 'В коробке' },
    { id: 8, name: 'Акции' },
  ];

  React.useEffect(() => {
    dispatch(getMainProd());
  }, []);

  const clickPrice = (id) => {
    const newData = listPrice.map((button) => ({
      ...button,
      active: +id === +button.id,
    }));
    dispatch(changeListPrice(newData));
  };

  console.log(listPrice, 'listPrice');

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
                    price.active ? 'activePrice' : ''
                  }`}
                  onClick={() => clickPrice(price?.id)}
                  key={price?.id}
                >
                  {price?.name}
                </div>
              ))}
            </div>
          )}
          <ul className="categoryType">
            {listCategory?.map((i) => (
              <li key={i.id}>
                <p>{i?.name}</p>
                {i?.img && <img src={i?.img} alt="выбор" />}
              </li>
            ))}
          </ul>
          <div className="list">
            {listFlowers?.map((i) => (
              <EveryCard key={i.codeid} content={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
