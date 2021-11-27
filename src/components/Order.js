import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
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

Order.propTypes = {
    
};

export default Order;