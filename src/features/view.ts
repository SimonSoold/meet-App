import { createReducer, createAction } from '@reduxjs/toolkit'
import AppPanel from '../models/AppPanel'

type state = {
    current: string
}
const view = createAction<string>("view")

const actions = {
    view
}

const initialState:state = {current:AppPanel.VIEW_MEETUP}

const reducer = createReducer(initialState, (builder) => {
    builder
    .addCase(view, (state, action) => {
        state.current = action.payload
    })
    .addDefaultCase((state, action) => {})
})

export { actions, reducer }