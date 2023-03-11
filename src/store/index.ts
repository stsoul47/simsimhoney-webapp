import { combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // 로컬 스토리지
import storageSession from 'redux-persist/lib/storage/session'; // 세션 스토리지
import modal from '@store/modal';

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const rootReducer = combineReducers({
  modal
});

export type RootState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);

export * from './modal';