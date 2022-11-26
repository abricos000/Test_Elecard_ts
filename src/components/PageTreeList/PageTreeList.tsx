import React, { useState } from 'react';
import { useLockBodyScroll, useToggle } from 'react-use';
import s from './PageTreeList.module.css';
import { dataHost } from '../../constants/host';
import { Button } from '../Buttons/Button';
import { Modal } from '../Modal/Modal';
import { TreeList } from './TreeList/TreeList';
import { IMainBranch } from '../../Interfaces/Interfaces';

const pref: string = 'pref';
const next: string = 'next';

interface IBranch {
  image: string;
  filesize: number;
  timestamp: number;
  category: string;
  id: number;
}

interface PropsPageTreeList {
  posts: IBranch[];
}

interface IColection {
  [key: string]: IMainBranch;
}

export const PageTreeList = ({ posts }: PropsPageTreeList) => {

  const normalizeArray = posts.reduce((newArray: IColection, item: IBranch) => {
    newArray[item.category]
      ? newArray[item.category].nestedValues.push(item)
      : newArray[item.category] = {
        bool: false,
        id: item.id,
        category: item.category,
        nestedValues: [item],
      };
    return newArray;
  }, {});

  const [arrayTree, setArrayTree] = useState(Object.values(normalizeArray));
  const [flagTree, setFlagTree] = useToggle(false);
  const [modal, setModal] = useState({ img: '', id: 0 });
  const [showModal, setShowModal] = useToggle(false);

  const handleAddTree = (category: string) => {
    setArrayTree(sortTreeArray => sortTreeArray.map((mainBranch: IMainBranch) => ({
      ...mainBranch,
      bool: (mainBranch.category === category ? !mainBranch.bool : mainBranch.bool),
    })));
  };

  useLockBodyScroll(showModal);

  const handleClickImageModal = (name: string, id: number) => {
    setModal({ img: `${dataHost}${name}`, id });
    setShowModal();
  };

  const handleSwitchingModalImage = (currentId: number, value: string) => {
    const currentIndex = posts.findIndex((post: IBranch) => post.id === currentId);

    if (currentId > 0 && value === pref) {
      const currentPost = posts.find((post: IBranch, index: number) => index === currentIndex - 1);
      setModal({ img: `${dataHost}${(currentPost as IBranch).image}`, id: (currentPost as IBranch).id });
    }
    if (currentId < posts.length - 1 && value === next) {
      const currentPost = posts.find((post: IBranch, index: number) => index === currentIndex + 1);
      setModal({ img: `${dataHost}${(currentPost as IBranch).image}`, id: (currentPost as IBranch).id });
    }
  };

  return (
    <div className={s.listPosition}>
      <Button onClick={setFlagTree}>древовидный список</Button>
      {flagTree && arrayTree.map((elementArray: IMainBranch) => (
        (
          <TreeList
            key={elementArray.id}
            elementArray={elementArray}
            onAddTree={handleAddTree}
            onClickImageModal={handleClickImageModal}
          />
        )))}
      { showModal && (
        <Modal onClose={setShowModal}>
          <span className={s.wrapImgModal}>
            <div className={s.btns}>
              <button
                className={s.btnPref}
                onClick={() => handleSwitchingModalImage(modal.id, pref)}
                type="button"
              >
                &#10094;
              </button>
              <button
                className={s.btnNext}
                onClick={() => handleSwitchingModalImage(modal.id, next)}
                type="button"
              >
                &#10095;
              </button>
            </div>
            <img className={s.imgModal} src={modal.img} alt="изображение из категории, которое выводится в модальное окно" />
          </span>
          <div className={s.rightPanelModal} />
        </Modal>
      )}
    </div>
  );
};
