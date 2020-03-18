import React from 'react';

import classes from './Collection.module.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

const Collection = ({ title, items }) => {
    return (
        <div className={classes.collection}>
            <h1 className={classes.title}>{title.toUpperCase()}</h1>
            <div className={classes.preview}>
                {
                    items.slice(0, 4).map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    );
}

export default Collection;