import React from 'react';
import { connect } from 'react-redux';

import { addArticleActionCreator, editArticleActionCreator} from '../actions'
import Form from '../components/Form';
import ItemList from '../components/ItemList';

let Article = (props) => {

    return (
        <div>
            <h3>Liste de courses</h3>
            < Form formTitle="Ajouter un article" addArticle={props.addArticle} />
            < ItemList articles={props.articles} editArticle={props.editArticle}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addArticle: (article) => {
            dispatch(addArticleActionCreator(article));
        },
        editArticle: (article) => {
            dispatch(editArticleActionCreator(article))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);