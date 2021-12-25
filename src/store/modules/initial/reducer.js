import { SET_LOADING_DATA } from './contants';

const INITIAL_STATE = {
  loadingData: true,
};

const initialReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOADING_DATA: {
      return {
        ...state,
        loadingData: action.payload,
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default initialReducer;
