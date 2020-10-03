import React from 'react';
import {ContactsList, MessagesWindow} from "components"
import { stack as Menu } from 'react-burger-menu'

import 'styles/burger.scss';

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
      },
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
      },
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

  let messages = [
      {
          id: 1,
          text: "Привет!",
          time: `${Date.now()}`,
          isIncoming: true
      },
      {
          id: 2,
          text: "Здарова",
          time: `${Date.now()}`,
          isIncoming: false
      },
      {
          id: 3,
          text: "Как дела?",
          time: `${Date.now()}`,
          isIncoming: true
      },
      {
          id: 4,
          text: "Как обычно",
          time: `${Date.now()}`,
          isIncoming: false
      },
      {
          id: 5,
          text: "Привет скинь дз Привет скинь дз Привет скинь дз Привет скинь дз Привет скинь дз Привет скинь дз  скинь дз Привет скинь дз",
          time: `${Date.now()}`,
          isIncoming: true
      },
  ]

  return (
    <div className="content">
        <Menu pageWrapId={"page-wrap"}>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
        <main  id="page-wrap" className="content">
            <div className="header">
            </div>
            <div className="main-wrapper">
                <div className="main-wrapper__column-s">
                    <ContactsList contacts={contacts}/>
                </div>
              <div className="main-wrapper__column">
                  <MessagesWindow messages={messages} person="Луи Армстронг" />
              </div>
            </div>
            <div className="footer"></div>
        </main>
    </div>
  );
}

export default App;
