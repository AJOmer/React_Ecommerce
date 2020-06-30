import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { addShirt } from "../../../actions/shirt";

import "./ShirtsForm.css";

const ShirtsForm = ({
    auth: { isAdmin },
    shirt: { isAddingShirtsSuccessful },
    addShirt,
}) => {
    const [formData, setFormData] = useState({
        brand: "",
        name: "",
        retail_price: "",
        description: "",
        colors: "",
        images: "",
    });

    const { brand, name, retail_price, description, colors, images } = formData;

    // Changes the value of the target every keystroke
    const onChange = (e) =>
        setFormData({...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        addShirt({ formData });
    };

    if (isAddingShirtsSuccessful) {
        return <Redirect to = "/" / > ;
    }

    return ( <
        > { " " } {
            isAdmin ? ( <
                div className = "wrapper-shirtsform" >
                <
                h1 className = "large text-dark" > add shirts to inventory < /h1>{" "} <
                form onSubmit = {
                    (e) => onSubmit(e) } >
                <
                div className = "form-group" >
                <
                label htmlFor = "brand" > brand < /label>{" "} <
                input className = "form-control"
                type = "text"
                name = "brand"
                value = { brand }
                onChange = {
                    (e) => onChange(e) }
                />{" "} <
                /div>{" "} <
                div className = "form-group" >
                <
                label htmlFor = "name" > name < /label>{" "} <
                input className = "form-control"
                type = "text"
                name = "name"
                value = { name }
                onChange = {
                    (e) => onChange(e) }
                />{" "} <
                /div>{" "} <
                div className = "form-group" >
                <
                label htmlFor = "retail_price" > retail price < /label>{" "} <
                input className = "form-control"
                type = "text"
                name = "retail_price"
                value = { retail_price }
                onChange = {
                    (e) => onChange(e) }
                />{" "} <
                /div>{" "} <
                div className = "form-group" >
                <
                label htmlFor = "description" > description < /label>{" "} <
                input className = "form-control"
                type = "text"
                name = "description"
                value = { description }
                onChange = {
                    (e) => onChange(e) }
                />{" "} <
                /div>{" "} <
                div className = "form-group" >
                <
                label htmlFor = "colors" > colors < /label>{" "} <
                input className = "form-control"
                type = "text"
                name = "colors"
                value = { colors }
                onChange = {
                    (e) => onChange(e) }
                />{" "} <
                /div>{" "} <
                div className = "form-group" >
                <
                label htmlFor = "images" > images < /label>{" "} <
                textarea className = "form-control"
                rows = "3"
                name = "images"
                value = { images }
                onChange = {
                    (e) => onChange(e) }
                />{" "} <
                /div>{" "} <
                div className = "add-shirts-button" >
                <
                input type = "submit"
                className = "btn btn-dark btn-block"
                value = "add shirts to inventory" /
                >
                <
                /div>{" "} <
                /form>{" "} <
                /div>
            ) : null
        } { " " } <
        />
    );
};

ShirtsForm.propTypes = {
    auth: PropTypes.object.isRequired,
    addShirt: PropTypes.func.isRequired,
    shirt: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    shirt: state.shirt,
});

export default connect(mapStateToProps, { addShirt })(ShirtsForm);