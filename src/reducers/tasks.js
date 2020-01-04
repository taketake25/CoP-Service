const initialState = {
    articles: [],
};

export default function articleReducer(state = initialState, action) {
    switch (action.type) {
        case 'INPUTARTICLES':
            return {
                ...state,
                articles: action.payload.articles
            };
        case 'INCREMENT':
            return state;
        case 'DECREMENT':
            return state;

        default:
            return state;
    }
}