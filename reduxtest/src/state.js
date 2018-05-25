const START_FETCHING = 'state/START_FETCHING'
const FETCH_USERS_SUCCESS = 'state/FETCH_USERS_SUCCESS'

export const startFetching = () => ({type: START_FETCHING})
export const fetchusersSuccess = (jsonUsers) => ({
    type: FETCH_USERS_SUCCESS,
    jsonUsers
})

export const initUsers = () => (dispatch, getState) => {
    dispatch(startFetching())
    fetch("https://randomuser.me/api/?results=5")
        .then(res => res.json())
        .then(jsonUsers => {
            dispatch(fetchusersSuccess(jsonUsers))
            return console.log(jsonUsers)
        })
}


const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                users: action.jsonUsers,
            }

        default:
            return state
    }
}