// import { toast } from "react-toastify";

import {
  GET_USER_NOTIFICATIONS_START,
  GET_USER_NOTIFICATIONS_SUCCESS,
  GET_USER_NOTIFICATIONS_FAILURE,
  UPDATE_USER_NOTIFICATION_START,
  UPDATE_USER_NOTIFICATION_SUCCESS,
  UPDATE_USER_NOTIFICATION_FAILURE
} from "../actions/notificationsAction.js";

const initialState = {
  isLoading: false,
  userNotifications: []
};

export default function notificationsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_NOTIFICATIONS_START:
      return {
        ...state,
        isLoading: true
      };

    case GET_USER_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        userNotifications: action.payload,
        isLoading: false
      };

    case GET_USER_NOTIFICATIONS_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    case UPDATE_USER_NOTIFICATION_START:
      return {
        ...state,
        isLoading: true
      };

    case UPDATE_USER_NOTIFICATION_SUCCESS:
      return {
        ...state,
        userNotifications: "",
        isLoading: false
      };

    case UPDATE_USER_NOTIFICATION_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
}
