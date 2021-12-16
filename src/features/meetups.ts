import { createReducer, createAction } from '@reduxjs/toolkit'

import Meetup from '../models/Meetup'
import Comment from "../models/Comment"
import {meetupList} from "../testData"

type commentPayload = {
	id: string,
	comment: Comment
}

type state = {
	list: Array<Meetup>,
	index: number
}

const addMeetup = createAction<Meetup>('add new meetup')
const addComment = createAction<commentPayload>('add new comment')
const changeIndex = createAction<number>("change index")

const initialState:state = {list:meetupList, index: 0}

const actions = {
	addMeetup,
	addComment, 
	changeIndex
}

const reducer = createReducer(initialState, (builder) => {
	builder
	.addCase(addMeetup, (state, action) => {
		state.list.push(action.payload)
	})
	.addCase(addComment, (state, action) => {
		state.list.map(item => {
			if (item.id === action.payload.id) item.comments.push(action.payload.comment)
			return item
		})
	})
	.addCase(changeIndex, (state, action) => {
		state.index = action.payload
	})
	.addDefaultCase((state, action) => {})
})

export { actions, reducer }