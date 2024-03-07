import React from "react";
import "./SendDataOrder.scss";
import { useState } from "react";
import good from "../../assets/icons/goodSend.svg";
import { useDispatch } from "react-redux";
import { createZakaz } from "../../store/reducers/requestSlice";

const SendDataOrder = () => {
  const dispatch = useDispatch();
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const sendData = (e) => {
    e.preventDefault();
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
  };

  return (
    <div className="sendData">
      <h5>Оформление заказа</h5>
      <form onSubmit={sendData}>
        <div className="data">
          <label>
            <b>Имя отправителя *</b>
            <input type="text" placeholder="Введите имя" required />
          </label>
          <label>
            <b>Телефон отправителя *</b>
            <input type="text" placeholder="Введите номер телефона" required />
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
              <input type="text" placeholder="Ваш адрес" />
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
          <input type="text" placeholder="комментарий" />
        </label>
        <button type="submit">
          ЗАПОЛНИТЕ ВСЕ ДАННЫЕ ДЛЯ ОФОРМЛЕНИЯ ЗАКАЗА
        </button>
      </form>
    </div>
  );
};

export default SendDataOrder;
