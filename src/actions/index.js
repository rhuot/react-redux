import * as constant from '../constants/Action';

export const addArticleActionCreator = (article) => {
    return {
        type: constant.ADD_ARTICLE,
        payload: article
    };
};

export const editArticleActionCreator = (article) => {
    return {
        type: constant.EDIT_ARTICLE,
        payload: article
    };
};