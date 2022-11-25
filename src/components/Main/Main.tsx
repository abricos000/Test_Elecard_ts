import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useWindowScroll } from 'react-use';
import s from './Main.module.css';
import { PageTreeList } from '../PageTreeList/PageTreeList';
import { CardsPage } from '../CardsPage/CardsPage';
import { renderMethodPage } from '../../constants/render-method';
import { host } from '../../constants/host';
import { ICard, PropsMain } from '../../Interfaces/Interfaces';

export const Main = ({ renderMethod }: PropsMain) => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      axios.get(host).then(({ data }) => {
        const newData = data.map((imageData: ICard, index: number) => ({ ...imageData, id: index }));
        setPosts(newData);
      }).finally(() => {
        setLoading(false);
      });
    };
    getPosts();
  }, []);

  const handleScrollToTop = () => scroll.scrollToTop();

  const { y } = useWindowScroll();

  if (loading) {
    return <h1 className={s.noPost}>loading...</h1>;
  }
  return (
    <main id="top" className={s.mainContent}>
      {posts.length && (
        renderMethod === renderMethodPage.cards
          ? (
            <CardsPage
              posts={posts}
              onScrollToTop={handleScrollToTop}
            />
          )
          : <PageTreeList posts={posts} />
      )}

      {(y > 2000) && (
        <button
          type="button"
          className={s.scrollTop}
          onClick={handleScrollToTop}
        >
          <Link to="top" smooth>
            &#9650;
            вверх
          </Link>
        </button>
      )}
    </main>
  );
};
