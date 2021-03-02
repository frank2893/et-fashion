import { ADD_INFO, DATA_LOADED, USER_LOADED, USER_OUT, USERDATA_LOADED } from '../Constant/action-types';
import { userInterface } from "../../Models/UserInterface";

const initialState = {
  remoteCategories: [],
  userData: userInterface
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_INFO:
      console.log('payload', action.payload);
      break;
    case DATA_LOADED:
      return Object.assign({}, state, {
        remoteCategories: state.remoteCategories.concat(action.payload)
      });
      break;
    case USER_LOADED:
      return Object.assign({}, state, {
        userData: state.userData = action.payload
      });
      break;
    case USER_OUT:
      return Object.assign({}, state, {
        userData: state.userData = {
          email: '',
          familyName: '',
          givenName: '',
          googleId: '',
          imageUrl: '',
          name: ''
        }
      });
      break;
    case USERDATA_LOADED:
      return Object.assign({}, state, {
        userData: state.userData
      })
      break;
  }

  return state
}

export default rootReducer