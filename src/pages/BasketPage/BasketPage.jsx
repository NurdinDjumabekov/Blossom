import React from "react";
import { NavLink } from "react-router-dom";
import "./BasketPage.scss";
import { useDispatch, useSelector } from "react-redux";
import krestik from "../../assets/icons/krestik.svg";
import {
  addListBasket,
  delEveryBasket,
  delListBasket,
} from "../../store/reducers/saveDataSlice";
import { countOrder, sumOrder } from "../../helpers/sumOrder";
import SendDataOrder from "../../components/SendDataOrder/SendDataOrder";

const BasketPage = () => {
  const dispatch = useDispatch();
  const { listBasket } = useSelector((state) => state.saveDataSlice);
  console.log(listBasket, "listBasket");
  const bottomRef = React.useRef();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="basketPage">
      <div className="container">
        <div className="navigateWeb">
          <NavLink to={"/"}>Доставка цветов</NavLink>
          <span>Оформление заказа</span>
        </div>
        <div className="basketPage__inner">
          <div className="basketMain">
            <h3 className="title">Корзина</h3>
            <div className="line"></div>
            {listBasket?.map((flow) => (
              <div className="everyBasket" key={flow?.codeid}>
                <div className="everyBasket__inner">
                  <div className="imgBasket">
                    <img src={flow?.foto} alt="" />
                  </div>
                  <div className="textsBasket">
                    <h4>{flow?.product_name}</h4>
                    <p>{flow?.sostav}</p>
                    <span>{flow?.product_price} сом</span>
                  </div>
                </div>
                <div className="actionsCounter">
                  <div className="counter">
                    <button
                      onClick={() => dispatch(delListBasket(flow?.codeid))}
                    >
                      -
                    </button>
                    <span>{flow?.count}</span>
                    <button onClick={() => dispatch(addListBasket(flow))}>
                      +
                    </button>
                  </div>
                  <button
                    className="deleteFlow"
                    onClick={() =>
                      dispatch(delEveryBasket({ codeid: flow?.codeid }))
                    }
                  >
                    <img src={krestik} alt="x" />
                  </button>
                </div>
              </div>
            ))}
            <SendDataOrder />
          </div>
          <div className="basketSum" ref={bottomRef}>
            <div>
              <span>ВАШ ЗАКАЗ</span>
            </div>
            <div>
              <div>
                <p>Кол-во товаров.... </p>
                <p>{sumOrder()}</p>
              </div>
              <div>
                <p>Стоимость.... </p>
                <p>{countOrder()} сом</p>
              </div>
            </div>
            <button onClick={scrollToBottom}>
              ЗАПОЛНИТЕ ВСЕ ДАННЫЕ ДЛЯ ОФОРМЛЕНИЯ ЗАКАЗА
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
