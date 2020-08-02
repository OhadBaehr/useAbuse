import React, { useReducer } from 'react'
const abuseReducer = (state, action) => ({
    ...state,
    ...(typeof action === "function" ? action(state) : action)
})
//  const [state,setState]=useAbuse({loading:12, hasFinished:1, visible:2})
//  setState(prev => ({loading: prev.loading +5}))
export const useAbuse = (initialState) => useReducer(abuseReducer, initialState)
