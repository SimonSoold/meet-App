import { createReducer, createAction } from '@reduxjs/toolkit'

import Meetup from '../models/meetup'
import Comment from "../models/comment"
import Point from "../models/point"
import {meetupList} from "../testData"

type CommentPayload = {
	id: string,
	comment: Comment
}
type PointPayload = {
	point: Point,
	id: string
}
type guestListPayload = {
	userId: string,
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
const editMeetup = createAction<Meetup>("edit meetup")
const attendMeetup = createAction<guestListPayload>("attend to meetup")

const initialState:state = {list:meetupList, index: 0}

const actions = {
	addMeetup,
	addComment,
	addPoint, 
	changeIndex,
	deleteMeetup,
	editMeetup,
	attendMeetup
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
	.addCase(editMeetup, (state, action) => {
		const index = state.list.findIndex(item => item.id === action.payload.id)
		state.list[index] = action.payload
	})
	.addCase(attendMeetup, (state, action) => {
		state.list.map(item => {
			if (item.id === action.payload.id) {
				if (item.guestList.includes(action.payload.userId)) {
					item.guestList = item.guestList.filter(item => item !== action.payload.userId)
				} else {
					item.guestList.push(action.payload.userId)
				}
			}
			return item
		})
	})
	.addDefaultCase((state, action) => {})
})

export { actions, reducer }