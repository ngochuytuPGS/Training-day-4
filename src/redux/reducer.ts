import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import authReducer, { AuthState } from '../modules/auth/redux/authReducer';
import intlReducer, { IntlState } from '../modules/intl/redux/intlReducer';
import photosReducer, {IPhotoState} from '../modules/home/redux/photosReducer';

export interface AppState {
  router: RouterState;
  intl: IntlState;
  profile: AuthState;
  photos: IPhotoState[];
}

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    intl: intlReducer,
    profile: authReducer,
    photos: photosReducer,
  });
}
