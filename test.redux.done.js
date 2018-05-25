// make redux "duck" for data fetched from api (array of names), 
// *which is sortable and searchable

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

            const users = action.jsonUsers
            const myUsers = users.results.map(el => {
                return el.name.first
            })


            return {
                ...state,
                loading: false,
                users: myUsers,
            }

        default:
            return state
    }
}


/////////////////////////////////////////////////////
// in this case store would look like this:
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import mystate, {initUsers} from './state'

export const reducer = combineReducers({
    mystate,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)


store.dispatch(initUsers())