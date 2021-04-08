import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import * as S from './Main.style';
import Header from '../Header/Header';
import MenuElement from '../MenuElement/MenuElement';
import City from '../City/City';
import SearchBar from '../Searchbar/Searchbar';
import useHint from '../../hooks/useHints';

function Main() {
  const {
    cities: { cityList, editList },
    menu: { isMenuOpen, isEdit, isSearch },
  } = useSelector((state) => state);

  const { isHintShow, handleHint } = useHint();

  useEffect(handleHint, []);

  const display = () => {
    if (isSearch) return null;

    if (!isMenuOpen) return <City />;

    const activeList = isEdit ? editList : cityList;
    const list = activeList.map((city) => <MenuElement city={city} key={city} />);

    return list;
  };

  return (
    <S.SiteWrapper>
      <Header />
      <S.Background />
      {isEdit && <SearchBar />}
      {display()}
      <S.Hint className="hintOne" isHintShow={isHintShow}>
        &#8674; Swipe from left to open menu
      </S.Hint>
      <S.Hint className="hintTwo" isHintShow={isHintShow}>
        Swipe from right to change city &#8672;
      </S.Hint>
    </S.SiteWrapper>
  );
}

export default Main;
