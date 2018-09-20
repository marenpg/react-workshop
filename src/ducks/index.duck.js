import {createAction, handleActions} from "redux-actions"

export const myFirstAction = createAction("MY_FIRST_ACTION", (id) => (id))

export const reducer = handleActions({
	[myFirstAction]: (state, action) => {
		return {
			...state,
			counter: (state.counter || 0) + 1
		}
	}
}, {})

export default reducer