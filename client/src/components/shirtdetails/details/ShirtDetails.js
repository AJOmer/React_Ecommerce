import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';


const ShirtDetails = props => {
    const {
        _id,
        brand,
        name,
        description,
        images,
        retail_price
    } = props.selectedShirt;

    const { deleteShirt } = props;

    return ( <
        div className = "details-wrapper" >
        <
        div className = "shirt-info" >
        <
        h1 className = "shirt-info-brand" > { brand } < /h1> <
        p className = "shirt-info-name" > { name } < /p> <
        p className = "shirt-info-price" > retail price: < span > $ { retail_price } < /span></p >
        <
        /div> {
            props.isAdmin ? ( <
                >
                <
                button className = "shirtinfo-button btn btn-danger btn-block btn-sm"
                onClick = {
                    () => deleteShirt(_id) } >
                Delete Shirt <
                /button> <
                />
            ) : null
        } <
        /div>
    )
}

export defualt withRouter(ShirtDetails);