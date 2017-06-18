import * as constants from '../constants/Action';

const articlesReducer = (state = [], action) => {
    switch (action.type) {
        case constants.ADD_ARTICLE:
            action.payload.id = Date.now();
            return [...state, action.payload];

        case constants.EDIT_ARTICLE:
            return state.map((article) => {
                if (article.id !== action.payload.id) {
                    return article;
                }

                return action.payload;
            });

        default:
            return state;
    }
};

export default articlesReducer;