import { useState } from 'react';

const initialState = {
  pageIsOpenFirstTime: true,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const changePageIsOpenFirstTime = () => {
    setState({
      ...state,
      pageIsOpenFirstTime: !state.pageIsOpenFirstTime,
    });
  };

  return {
    state,
    changePageIsOpenFirstTime,
  };
};

export default useInitialState;
