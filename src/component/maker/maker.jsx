import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { useState } from 'react';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Chu',
      company: 'Loona',
      theme: 'light',
      title: 'Perfect lovely girl',
      email: 'chlehdnjs@gmail.com',
      message: '츄에요!',
      fileName: 'chuchu',
      fileURL: '/images/chu.png',
    },
    2: {
      id: '2',
      name: 'Yves',
      company: 'Loona',
      theme: 'dark',
      title: '이쁘데이 하부장님',
      email: 'chlehdnjs@gmail.com',
      message: '우우우~~예예예~안녕히계세요 여러분~!',
      fileName: 'Yveses',
      fileURL: '/images/yves.png',
    },
    3: {
      id: '3',
      name: 'Hyunjin',
      company: 'Loona',
      theme: 'colorful',
      title: 'Real cat',
      email: 'chlehdnjs@gmail.com',
      message: '안들려!',
      fileName: 'kitty',
      fileURL: '/images/hyunjin.png',
    },
  });

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
