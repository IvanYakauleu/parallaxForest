'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollTop(window.scrollY);
    }

    // Добавляем слушатель события скролла к window
    window.addEventListener('scroll', handleScroll);

    // Убираем слушатель события при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const bodyStyles = {
    '--scrollTop': `${scrollTop}px`, // Устанавливаем значение CSS переменной
  };

  return (
    <body style={bodyStyles}>
      <div className="wrapper">
        <div className="content">
          <header className="main">
            <div className="layers">
              <div className="layer__header">
                <div className="layers__caption">Welcom to Parallax</div>
                <div className="layers__title">Fairy Forest</div>
              </div>
              <div
                className="layer layers__base"
                style={{ backgroundImage: 'url("/layer-base.png")' }}></div>
              <div
                className="layer layers__middle"
                style={{ backgroundImage: 'url("/layer-middle.png")' }}></div>
              <div
                className="layer layers__front"
                style={{ backgroundImage: 'url("/layer-front.png")' }}></div>
            </div>
          </header>
          <article className="main-article" style={{ backgroundImage: "url('/dungeon.jpg')" }}>
            <h2 className="main-article__header">to be continued</h2>
            <p className="main-article__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugiat maiores
              aperiam, exercitationem fuga illum voluptate, voluptatem aut sequi eius ab voluptates
              perspiciatis inventore, sed obcaecati aspernatur esse qui. Tenetur.
            </p>
            <div className="copy">IvanYakauleu</div>
          </article>
        </div>
      </div>
    </body>
  );
}
