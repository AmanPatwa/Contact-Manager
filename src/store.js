import { createStore} from 'redux'
import thunk from 'react-thunk'
import rootReducer from './reducers'

const initialState = {};

const middleware = [thunk]

const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store
