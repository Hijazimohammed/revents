import {
  FORM_OPEN,
  FORM_CLOSE,
  RESET_INPUTS,
  UPDATE_EVENT,
  DELETE_EVENT,
} from '../actions';
import { CREATE_EVENT, ON_CHANGE, VIEW_EVENT } from './../actions';

const event_reducer = (state, action) => {
  if (action.type === FORM_OPEN) {
    return {
      ...state,
      event: {
        category: '',
        city: '',
        date: '',
        description: '',
        title: '',
        venue: '',
      },
      open_form: true,
      selected_event: null,
    };
  }
  if (action.type === FORM_CLOSE) {
    return { ...state, open_form: false };
  }
  if (action.type === ON_CHANGE) {
    const { name, value } = action.payload;
    return { ...state, event: { ...state.event, [name]: value } };
  }
  if (action.type === CREATE_EVENT) {
    const event = action.payload;

    return { ...state, events: [...state.events, event] };
  }
  if (action.type === VIEW_EVENT) {
    const event = action.payload;
    return { ...state, event: event, selected_event: event };
  }
  if (action.type === RESET_INPUTS) {
    return {
      ...state,
      event: {
        category: '',
        city: '',
        date: '',
        description: '',
        title: '',
        venue: '',
      },
      open_form: false,
      selected_event: null,
    };
  }
  if (action.type === UPDATE_EVENT) {
    const updatedEvent = action.payload;
    const ev = state.events.map((evt) =>
      evt.id === updatedEvent.id ? updatedEvent : evt
    );
    return { ...state, events: ev, selected_event: null, open_form: false };
  }
  if (action.type === DELETE_EVENT) {
    const id = action.payload;
    const evs = state.events.filter((ev) => ev.id !== id);
    return { ...state, events: evs };
  }
  return state;
};

export default event_reducer;
