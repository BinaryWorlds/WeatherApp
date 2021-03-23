import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSearch, setResults } from '../../store/actions';
import * as S from './Searchbar.style';
import { checkAllowed, findMatches } from '../../utils/search';
import cityList from '../../city.list.min.json';

function Searchbar() {
  const {
    menu: { isSearch },
    cities: { results },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [term, setTerm] = useState('');
  const [err, setErr] = useState(false);

  const handleChange = ({ target: { value } }) => setTerm(value);

  const onSubmit = (e) => {
    e.preventDefault();
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

  const resultsList = results.map((el) => (
    <S.Result type="button" key={el} value={el}>
      {el}
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
      </S.Label>
      <S.Button />
      {isSearch && resultsList}
    </S.Form>
  );
}

export default Searchbar;
