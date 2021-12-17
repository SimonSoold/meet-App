import { createReducer, createAction } from '@reduxjs/toolkit'

import Meetup from '../models/Meetup'
import Comment from "../models/Comment"
import Point from "../models/Point"
import {meetupList} from "../testData"

type CommentPayload = {
	id: string,
	comment: Comment
}
type PointPayload = {
	point: Point,
	id: string
}

type state = {
	list: Array<Meetup>,
	index: number
}

const addMeetup = createAction<Meetup>('add new meetup')
const addComment = createAction<CommentPayload>('add new comment')
const addPoint = createAction<PointPayload>('add point')
const changeIndex = createAction<number>("change index")
const deleteMeetup = createAction<Meetup>("delete meetup")

const initialState:state = {list:meetupList, index: 0}

const actions = {
	addMeetup,
	addComment,
	addPoint, 
	changeIndex,
	deleteMeetup
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
	.addCase(addPoint, (state, action) => {
		state.list.map(item => {
			if (item.id === action.payload.id) {
				const index = item.points.findIndex(item => item.userId === action.payload.point.userId)
				index ? item.points[index] = action.payload.point : item.points.push(action.payload.point)
			}
			return item
		})
	})
	.addCase(changeIndex, (state, action) => {
		state.index = action.payload
	})
	.addCase(deleteMeetup, (state, action) => {
		state.list = state.list.filter(item => item.id !== action.payload.id)
	})
	.addDefaultCase((state, action) => {})
})

export { actions, reducer }