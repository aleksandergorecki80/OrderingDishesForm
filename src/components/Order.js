import React, { Fragment, useState, useEffect } from 'react';
import OrderForm from './OrderForm';
import { connect } from 'react-redux';
import { submitNewOrder } from '../actions/orderActions';



const Order = props => {

    const [ formaData, setFormData ] = useState({});

    const submit = (values) =>{
        

        // PIZZA
        if(values.type === 'pizza'){
            setFormData({
                name: values.name,
                preparation_time: values.preparation_time,
                type: values.type,
                diameter: parseFloat(values.diameter),
                no_of_slices: parseInt(values.no_of_slices, 10)
            })
        }
        // SOUP
        if(values.type === 'soup'){
            setFormData({
                name: values.name,
                preparation_time: values.preparation_time,
                type: values.type,
                spiciness_scale: parseInt(values.spiciness_scale, 10)
            })
        }
        // SANDWICH
        if(values.type === 'sandwich'){
            setFormData({
                name: values.name,
                preparation_time: values.preparation_time,
                type: values.type,
                slices_of_bread: parseInt(values.slices_of_bread, 10)
            })
        }
    }

    useEffect(() => {
        submitNewOrder(formaData);
    }, [formaData]);
    
    console.log(formaData)
       return (
            <Fragment>
                <OrderForm onSubmit={submit}/>
            </Fragment>
        );

}
 
const mapDispatchToProps = (dispatch) => {
    return {
        submitNewOrder: (formData) => {
            dispatch(submitNewOrder(formData));
        }
    }
}

export default connect(null, mapDispatchToProps)(Order);