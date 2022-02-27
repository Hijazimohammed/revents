import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/EventReducer';
import {
  FORM_OPEN,
  FORM_CLOSE,
  CREATE_EVENT,
  ON_CHANGE,
  VIEW_EVENT,
  RESET_INPUTS,
  UPDATE_EVENT,
  DELETE_EVENT,
} from '../actions';
import { sampleData } from './../app/api/sampleData';
import cuid from 'cuid';
const initialState = {
  events: sampleData,
  open_form: false,
  selected_event: null,
  event: {
    category: '',
    city: '',
    date: '',
    description: '',
    title: '',
    venue: '',
  },
};

const EventContext = React.createContext();

export const EventProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openForm = () => {
    dispatch({ type: FORM_OPEN });
  };
  const closeForm = () => {
    dispatch({ type: FORM_CLOSE });
  };
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: ON_CHANGE, payload: { name, value } });
  };
  const handleSubmit = () => {
    const event = state.event;
    dispatch({
      type: CREATE_EVENT,
      payload: { ...event, id: cuid(), hostedBy: 'Bob', attendees: [] },
    });
    state.open_form = false;

    dispatch({ type: RESET_INPUTS });
  };

  const viewEvent = (event) => {
    state.open_form = true;
    dispatch({ type: VIEW_EVENT, payload: event });
  };
  const resetInputs = () => {
    dispatch({ type: RESET_INPUTS });
  };
  const updateEvent = () => {
    dispatch({ type: UPDATE_EVENT, payload: state.event });
  };
  const deleteEvent = (eventId) => {
    dispatch({ type: DELETE_EVENT, payload: eventId });
  };

  return (
    <EventContext.Provider
      value={{
        ...state,
        openForm,
        closeForm,
        handleInputChange,
        handleSubmit,
        viewEvent,
        resetInputs,
        updateEvent,
        deleteEvent,
      }}>
      {children}
    </EventContext.Provider>
  );
};
// make sure use
export const useEventContext = () => {
  return useContext(EventContext);
};
