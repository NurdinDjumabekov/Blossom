import React from "react";
import "./SendDataOrder.scss";
import { useState } from "react";
import good from "../../assets/icons/goodSend.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeZakaz, createZakaz } from "../../store/reducers/requestSlice";
import { changeAlertText } from "../../store/reducers/stateSlice";
import { useNavigate } from "react-router-dom";

const SendDataOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { listBasket } = useSelector((state) => state.saveDataSlice);
  const { zakaz } = useSelector((state) => state.requestSlice);
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const sendData = (e) => {
    e.preventDefault();
    if (listBasket?.length === 0) {
      dispatch(
        changeAlertText({
          text: "Добавьте что-нибудь в корзину",
          backColor: "#c14e77",
          state: true,
        })
      );
    } else {
      dispatch(
        createZakaz({
          zakaz_summ: 0,
          zakaz_comment: "",
          client_fio: "",
          client_phone: "",
          zakaz_date: "",
          address_from: "",
          address_to: "",
          summ_chek: "",
        })
      );
      dispatch(
        changeAlertText({
          text: "Ваша заявка была принята, с вами свяжется оператор для уточнения дополнительной информации. ",
          backColor: "#c14e77",
          state: true,
        })
      );
      navigate("/");
    }
  };

  const changeInput = (e) => {
    if (e.target.name === "client_phone") {
      const text = e.target.value.replace(/\D/g, ""); // Оставляем только цифры
      dispatch(changeZakaz({ ...zakaz, client_phone: text }));
    } else {
      dispatch(changeZakaz({ ...zakaz, [e.target.name]: e.target.value }));
    }
  };
  // console.log(zakaz, "zakaz");

  return (
    <div className="sendData">
      <h5>Оформление заказа</h5>
      <form onSubmit={sendData}>
        <div className="data">
          <label>
            <b>Имя отправителя *</b>
            <input
              type="text"
              placeholder="Введите имя"
              required
              onChange={changeInput}
              name="client_fio"
              value={zakaz.client_fio}
            />
          </label>
          <label>
            <b>Телефон отправителя *</b>
            <input
              type="text"
              placeholder="Введите номер телефона"
              required
              name="client_phone"
              onChange={changeInput}
              value={zakaz.client_phone}
            />
          </label>
        </div>
        <h5>Доставка</h5>
        <div className="choice">
          <div className="choice__inner" onClick={() => setOne(0)}>
            <div>{one === 0 && <img src={good} alt="" />}</div>
            <p>Самовывоз</p>
          </div>
          <div className="choice__inner" onClick={() => setOne(1)}>
            <div>{one === 1 && <img src={good} alt="" />}</div>
            <p>Доставка</p>
          </div>
        </div>
        {one === 1 && (
          <>
            <label>
              <b>Введите точный адрес</b>
              <input
                type="text"
                placeholder="Ваш адрес"
                onChange={changeInput}
                required
                name="address_to"
                value={zakaz.address_to}
              />
            </label>
            {/* <h5>Адрес доставки (cвяжемся для уточнения)</h5>
            <div className="choice">
              <div className="choice__inner" onClick={() => setTwo(0)}>
                <div>{two === 0 && <img src={good} alt="" />}</div>
                <p>Узнать у получателя</p>
              </div>
              <div className="choice__inner" onClick={() => setTwo(1)}>
                <div>{two === 1 && <img src={good} alt="" />}</div>
                <p>Знаю адрес</p>
              </div>
            </div> */}
          </>
        )}
        <label>
          <b>Добавить комментарий</b>
          <input
            type="text"
            placeholder="комментарий"
            onChange={changeInput}
            name="zakaz_comment"
            value={zakaz.zakaz_comment}
          />
        </label>
        <button type="submit">
          ЗАПОЛНИТЕ ВСЕ ДАННЫЕ ДЛЯ ОФОРМЛЕНИЯ ЗАКАЗА
        </button>
      </form>
    </div>
  );
};

export default SendDataOrder;
