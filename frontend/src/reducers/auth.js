import { AUTH_SUCCESS, LOGOUT } from "../constants/actionTypes";
export const authReducer = (state = null, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));

      return {
        ...state,
        authData: action.payload,
        loading: false,
        errors: null,
      };
    case LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};
