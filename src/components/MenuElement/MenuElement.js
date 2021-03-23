import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCity, deleteCity } from '../../store/actions';
import * as S from './MenuElement.style';

function MenuElement({ city }) {
  const dispatch = useDispatch();
  const { isEdit } = useSelector((state) => state.menu);

  const handleSelect = () => {
    if (!isEdit) dispatch(selectCity(city));
  };

  const handleDelete = () => dispatch(deleteCity(city));

  return (
    <S.Wrapper onClick={handleSelect}>
      <S.Name>{city}</S.Name>
      <S.Image src="http://www.openweathermap.org/img/wn/10d@2x.png" />
      <S.Section>
        <S.Text>16:00</S.Text>
        {isEdit ? <S.Delete onClick={handleDelete} /> : <S.Text>15°C</S.Text>}
      </S.Section>
    </S.Wrapper>
  );
}

export default MenuElement;
