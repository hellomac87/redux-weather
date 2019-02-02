import { FETCH_WEATHER } from "../actions/index";

export const weather = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.push(action.payload.data); // wrong way
      // return state.concat([action.payload.data]); // old way
      return [action.payload.data, ...state]; // es6 way
  }

  return state;
};
