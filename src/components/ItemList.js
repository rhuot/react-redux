import React from 'react';

import Article from './Article';

const ItemList = (props) => {
    return (
        <div>
            <h3>Votre liste de courses</h3>
            {props.articles.map(article => <Article data={article} key={article.id} editArticle={props.editArticle}/>)}
        </div>
    );
};

export default ItemList;