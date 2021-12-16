import { combineReducers } from 'redux'

import { reducer as searchReducer } from './search'
import { reducer as meetupReducer } from './meetups'
import { reducer as usersReducer } from "./users"

export const rootReducer = combineReducers({
	searchString: searchReducer,
	meetups: meetupReducer,
	users: usersReducer
})