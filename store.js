import * as redux from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';


const rootReducer = redux.combineReducers({
    
    form: formReducer,
  }
);

const store = redux.createStore(rootReducer, redux.applyMiddleware(thunk));
export default store;
