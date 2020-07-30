import axios from 'axios';
import {
  GET_DATES,
  ADD_DATE,
  DELETE_DATE,
  UPDATE_DATE,
  DATES_LOADING,
} from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getDates = () => (dispatch, getState) => {
  dispatch(setDatesLoading());
  axios
    .get(`/api/dates/`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: GET_DATES,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteDate = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/dates/${id}`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: DELETE_DATE,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addDate = (datee) => (dispatch, getState) => {
  axios
    .post('/api/dates', datee, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: ADD_DATE,
        payload: datee, //res.data
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateDate = (event) => (dispatch, getState) => {
  axios.put(`/api/dates/${event}`, event, tokenConfig(getState)).then((res) => {
    dispatch({
      type: UPDATE_DATE,
      payload: event,
    });
  });
};

export const setDatesLoading = () => {
  return {
    type: DATES_LOADING,
  };
};
