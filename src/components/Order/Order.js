import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
    return (
        <div className={classes.Order}>
            <p>Ingredients: Salad (1)</p>
            <p>Price: <strong>NZD $5.45</strong></p>
        </div>
    )
};

export default order;
