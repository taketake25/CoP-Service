const initialState = {
    task: '',
    tasks: []
};

export default function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case 'TASK':
            return {
                ...state,
                task: action.payload.task
            };
        case 'INCREMENT':
            return {};

        default:
            return state;
    }
}