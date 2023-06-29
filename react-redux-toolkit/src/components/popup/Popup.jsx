import React from 'react';
import s from './Popup.module.css';
import {useNavigate} from "react-router-dom";

const Popup = ({title, text, popupOpened, setPopupOpened}) => {
  const navigate = useNavigate();
 const closePopup = () => setPopupOpened(false);

  const goToList = () => {
    closePopup();
    setTimeout(() => navigate('/'), 600);
  }

  return (
    <div className={`${s.popup} ${popupOpened && s.open}`}>
      <div className={s.body}>
        <h2 className={s.title}>{title}</h2>
        <div className={s.text}>{text}</div>
        <div className={s.buttons}>
          <button className={s.btn} onClick={goToList}>to list</button>
          <button className={s.btn} onClick={closePopup}>stay on</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;