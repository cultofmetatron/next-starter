import { Map } from 'immutable';

const initialState = Map({
  foo: "bar"
});

const authReducer = (state=initialState, action) => {
  return state;
};

export { authReducer };
