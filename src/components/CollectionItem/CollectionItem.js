import React from 'react';

import classes from './CollectionItem.module.scss';

const CollectionItem = ({item}) => {
    const { name, price, imageUrl } = item;
    
    return (
        <div className={classes.collectionItem}>
            <div className={classes.image} style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className={classes.footer}>
                <span className={classes.name}>{name}</span>
                <span className={classes.price}>{price}</span>
            </div>
        </div>
    )
};

export default CollectionItem;