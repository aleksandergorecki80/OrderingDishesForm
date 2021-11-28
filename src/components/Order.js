import React, { Fragment } from 'react';
import OrderForm from './OrderForm';

const Order = props => {
    const submit = (values) => {
        console.log(values)
    }
    return (
        <Fragment>
            <OrderForm onSubmit={submit}/>
        </Fragment>
    );
};

export default Order;