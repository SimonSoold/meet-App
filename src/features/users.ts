import { createReducer, createAction } from '@reduxjs/toolkit'
import { authUser, getUsers } from "../testData"
import {User} from "../models/user"

type state = {
    user: User | null,
    list: User[]
}
type loginData = {
    name: string,
    password: string
}
const loginUser = createAction<loginData>("auth user")

const actions = {
    loginUser
}

const initialState:state = {user: null, list: getUsers()}

const reducer = createReducer(initialState, (builder) => {
    builder.addCase(loginUser, (state, action) => {
        const user = authUser(action.payload.name, action.payload.password)
        if (user) state.user = {name:user.name, id: user.id}
    })
    .addDefaultCase((state, action) => {})
})


export { actions, reducer }