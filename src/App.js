import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from './layout/layout';
import Main from './components/Main/Main';
import { restoreCityList } from './store/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('cityList')) || ['Sarbinowo'];
    dispatch(restoreCityList(savedList));
  }, []);

  return (
    <Layout>
      <Main />
    </Layout>
  );
}

export default App;
