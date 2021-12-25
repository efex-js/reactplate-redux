import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as initialActions from '../../store/modules/initial/actions';

const Main = () => {
  const dispatch = useDispatch();
  const { loadingData } = useSelector((state) => state.initial);

  useEffect(() => {
    setTimeout(() => {
      dispatch(initialActions.setLoadingData(false));
    }, 2000);
  }, []);

  return (
    <>
      {loadingData ? (
        <h1>Carregando...</h1>
      ) : (
        <h1>Olá dev, bem vindo(a) ao React-Redux.</h1>
      )}
    </>
  );
};

export default Main;
