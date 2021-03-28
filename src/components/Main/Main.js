import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './Main.style';
import Header from '../Header/Header';
import MenuElement from '../MenuElement/MenuElement';
import City from '../City/City';
import SearchBar from '../Searchbar/Searchbar';

function Main() {
  const {
    cities: { cityList, editList },
    menu: { isMenuOpen, isEdit, isSearch },
  } = useSelector((state) => state);

  const display = () => {
    if (isSearch) return null;

    if (!isMenuOpen) return <City />;

    const activeList = isEdit ? editList : cityList;
    const list = activeList.map((city) => <MenuElement city={city} key={city} />);

    return list;
  };

  return (
    <>
      <Header />
      <S.Background />
      <S.SiteWrapper>
        {isEdit && <SearchBar />}
        {display()}
      </S.SiteWrapper>
    </>
  );
}

export default Main;
