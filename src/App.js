import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from './layout/layout';
import Main from './components/Main/Main';
import { restoreCityList } from './store/actions';
import useTouch from './hooks/useTouch';

function App() {
  const dispatch = useDispatch();

  useTouch();

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('cityList')) || ['Sarbinowo'];
    dispatch(restoreCityList(savedList));
    window.onbeforeunload = () => window.scrollTo(0, 0);
  }, []);

  return process.env.REACT_APP_WEATHER_API_KEY ? (
    <Layout>
      <Main />
    </Layout>
  ) : (
    'Set REACT_APP_WEATHER_API_KEY in .env !!! '
  );
}

export default App;
