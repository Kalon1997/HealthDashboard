import {configureStore} from '@reduxjs/toolkit'
import { userReducer } from './reducers/user';

const store = configureStore({
    reducer: {
        myweb: userReducer,
    }
});
export default store;