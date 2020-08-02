import React, { useReducer } from 'react'
const abuseReducer = (state, action) => ({
    ...state,
    ...(typeof action === "function" ? action(state) : action)
})
export const useAbuse = (initialState) => useReducer(abuseReducer, initialState)
