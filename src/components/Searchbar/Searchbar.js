import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSearch, setResults, addCity } from '../../store/actions';
import * as S from './Searchbar.style';
import { checkAllowed, findMatches } from '../../utils/search';
import cityList from '../../city.list.min.json';
import { checkWeather } from '../../api';
import useHint from '../../hooks/useHints';

function Searchbar() {
  const {
    menu: { isSearch, isCelcius },
    cities: { results },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { isHintShow, handleHint } = useHint();

  const [term, setTerm] = useState('');
  const [err, setErr] = useState(false);

  const handleChange = ({ target: { value } }) => setTerm(value);

  const onSubmit = async (e) => {
    e.preventDefault();
    const city = e.target[0].defaultValue;
    const result = await checkWeather(city, isCelcius);

    if (result) {
      dispatch(addCity(result.name, isCelcius));
      setTerm('');
      return;
    }

    handleHint();
    setErr(true);
  };

  useEffect(() => {
    if (!term) {
      setErr(false);
      dispatch(toggleSearch(false));
      return;
    }
    if (!isSearch) dispatch(toggleSearch(true));
    const isOk = checkAllowed(term);
    setErr(!isOk);
    if (isOk) {
      const result = findMatches(term, cityList);
      dispatch(setResults(result));
    }
  }, [term]);

  useEffect(() => () => dispatch(toggleSearch(false)), []);

  const autocomplete = async (e) => {
    dispatch(addCity(e[0], isCelcius));
    setTerm('');
  };

  const resultsList = results.map((el) => (
    <S.Result type="button" key={el[0]} onClick={() => autocomplete(el)}>
      {`${el[0]}, ${el[1]}`}
    </S.Result>
  ));

  return (
    <S.Form onSubmit={onSubmit}>
      <S.Label>
        <span id="label">Searchbar</span>
        <S.Input
          type="text"
          value={term}
          onChange={handleChange}
          err={err}
          placeholder="Search city"
        />
        <S.Hint isHintShow={isHintShow}>No results</S.Hint>
      </S.Label>
      {isSearch && !err && (
        <S.Result className="searchBtn" type="submit">
          Search
        </S.Result>
      )}
      {isSearch && !err && resultsList}
    </S.Form>
  );
}

export default Searchbar;
