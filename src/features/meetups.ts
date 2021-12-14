import { createReducer, createAction } from '@reduxjs/toolkit'
import Meetup from '../models/Meetup'
import {meetupList} from "../testData"

const addMeetup = createAction<Meetup>('add new meetup')

const actions = {
	addMeetup
}


const initialState = meetupList

const reducer = createReducer(initialState, {
	[addMeetup.toString()]: (state, action) => [ ...state, action.payload ]
})


export { actions, reducer }