import { createReducer, createAction } from '@reduxjs/toolkit'

const changeSearchString = createAction<string>('change search string')

const actions = {
	changeSearchString
}

const initialState = ''

const reducer = createReducer(initialState, {
	[changeSearchString.toString()]: (state, action) => action.payload
})


export { actions, reducer }