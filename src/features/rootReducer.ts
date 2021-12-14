import { combineReducers } from 'redux'

import { reducer as searchReducer } from './search'
import { reducer as meetupReducer } from './meetups'

export const rootReducer = combineReducers({
	searchString: searchReducer,
	meetups: meetupReducer
})