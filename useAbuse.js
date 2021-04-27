import { useReducer} from 'react'
const abuseReducer = (state, action) => ({
    ...state,
    ...(typeof action === "function" ? action(state) : action)
})
export const useAbuse = (initialState) => {
    const [state, setState] = useReducer(abuseReducer, initialState)


    const setStateWithCallback = (next, callback) => {
        setState(next)
        callback && callback()
    }
    return [state, setStateWithCallback]
}
