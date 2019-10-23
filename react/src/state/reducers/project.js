export default function project(state, action) {
    switch (action.type) {
        case 'SET_PROJECT':
            return {
                ...state,
                loading: false,
                list:  action.payload.list,
                error: action.payload.error
            }

        case 'SET_LOADING':
            const loadingStatus = action.status
            return {
                ...state,
                loading: loadingStatus,
            }
        default:
            return state;
    }
}
