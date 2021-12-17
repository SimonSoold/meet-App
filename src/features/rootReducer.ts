import { combineReducers } from 'redux'

import { reducer as searchReducer } from './search'
import { reducer as meetupReducer } from './meetups'
import { reducer as usersReducer } from "./users"
import { reducer as viewReducer } from "./view"

export const rootReducer = combineReducers({
	searchString: searchReducer,
	meetups: meetupReducer,
	users: usersReducer,
	view: viewReducer
})