import { combineReducers } from 'redux';

import articlesReducer from './Article';

const mainReducers = combineReducers({articles: articlesReducer});

export default mainReducers;