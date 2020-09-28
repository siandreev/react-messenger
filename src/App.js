import React from 'react';
import {ContactsList} from "components"


function App() {
  let contacts = [
      {
          firstName: "Луи",
          lastName: "Армстронг",
          img: "https://24smi.org/public/media/resize/800x-/2017/4/26/05_SUGf1Kr.jpg",
          message: "Привет скинь дз Привет скинь дз Привет скинь дз Привет скинь дз Привет скинь дз Привет скинь дз"
      },
      {
          firstName: "Дмитрий",
          lastName: "Мозжухин",
          img: "https://old.hsepress.ru/images/41996.jpg",
          message: "Сам еще не делал("
      },
      {
          firstName: "Эм",
          lastName: "Калинин",
          img: "https://onrockwave.com/wp-content/uploads/2018/11/e3936720-6551-46f0-b800-e49649d57bc2.jpeg",
          message: "Мечтаааа... Мелькая в далекеее, не оставляй меня, мечтааа"
      }
  ]

  return (
    <div className="content">
        <div className="header"></div>
        <div className="main-wrapper">
            <div className="main-wrapper__column-s">
                <ContactsList contacts={contacts}/>
            </div>
          <div className="main-wrapper__column"></div>
        </div>
        <div className="footer"></div>
    </div>
  );
}

export default App;
