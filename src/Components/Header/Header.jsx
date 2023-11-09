'use client';

import { useEffect, useRef } from 'react';

const Header = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      scrollRef.current.style.setProperty('--scrollTop', `${window.scrollY}px`);
    }

    // Добавляем слушатель события скролла к window
    window.addEventListener('scroll', handleScroll);

    // Убираем слушатель события при размонтировании компонентcobа
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={scrollRef}>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugiat maiores aperiam,
          exercitationem fuga illum voluptate, voluptatem aut sequi eius ab voluptates perspiciatis
          inventore, sed obcaecati aspernatur esse qui. Tenetur.
        </p>
        <div className="copy">IvanYakauleu</div>
      </article>
    </div>
  );
};

export default Header;
