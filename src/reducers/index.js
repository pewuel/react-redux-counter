import rootReducer from './root';
import { combineReducers} from 'redux';


const reducers = combineReducers({
    values: rootReducer
});

export default reducers;