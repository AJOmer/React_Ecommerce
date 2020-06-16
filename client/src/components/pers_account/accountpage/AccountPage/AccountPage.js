import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout, addAddress } from "../../../../actions/auth";
import { Link } from "react-router-dom";

import AddAddressForm from "../../../forms/AddressForm/AddressForm";
import EditAddressForm from "../../../forms/AddressForm/EditAddress";

import "./AccountPage.css";

const AccountPage = ({
    auth: { user, isAdmin, isAddingAddressSuccess },
    logout,
    addAddress,
}) => {
    const [toggleAddress, setToggleAddress] = useState(false);

    const onClickToggle = () => {
        setToggleAddress(!toggleAddress);
    };

    return ( <
        div className = "accountpage-wrapper" >
        <
        div className = "accountpage-header" >
        <
        h2 > My Account Management < /h2>{" "} <
        div className = "accountpage-header-butons" > { " " } {
            isAdmin && ( <
                >
                <
                Link to = "/products/add/shirts" >
                <
                button className = "btn btn-outline-primary" >
                Admin Add Route { " " } <
                /button>{" "} <
                /Link>{" "} <
                />
            )
        } { " " } <
        Link to = "/" >
        <
        button onClick = { logout }
        className = "btn btn-outline-danger" >
        Logout { " " } <
        /button>{" "} <
        /Link>{" "} <
        /div>{" "} <
        /div>{" "} {
            user ? ( <
                >
                <
                div className = "account_deets" >
                <
                h3 > My Information < /h3>{" "} <
                p className = "text-capitalize" > { " " } { user.firstname } { user.lastname } { " " } <
                /p>{" "} <
                p > { user.email } < /p>{" "} {
                    user.address ? ( <
                        >
                        <
                        p className = "text-capitalize" > { " " } { user.address.street } { user.address.city }. { " " } { user.address.state }. { user.address.zipcode } { " " } <
                        /p>{" "} <
                        />
                    ) : null
                } { " " } { /* // button that shoes depends on condition of if the user has an address on file or not. Varies to EditAddressForm, cancel or add // */ } { " " } {
                    user.address ? (!toggleAddress ? ( <
                        button onClick = {
                            () => onClickToggle() }
                        className = "btn btn-primary" >
                        Edit Address { " " } <
                        /button>
                    ) : ( <
                        button onClick = {
                            () => onClickToggle() }
                        className = "btn btn-secondary" >
                        Cancel { " " } <
                        /button>
                    )) : !toggleAddress ? ( <
                        button onClick = {
                            () => onClickToggle() }
                        className = "btn btn-outline-success" >
                        Add Address { " " } <
                        /button>
                    ) : ( <
                        button onClick = {
                            () => onClickToggle() }
                        className = "btn btn-secondary" >
                        Cancel { " " } <
                        /button>
                    )
                } { " " } { /* // display form if toggle is true, if user has an address it will show edit form \\  */ } { " " } {
                    toggleAddress ? (
                        user.address ? ( <
                            EditAddressForm address = { user.address }
                            addAddress = { addAddress }
                            onClickToggle = { onClickToggle }
                            />
                        ) : ( <
                            AddAddressForm addAddress = { addAddress }
                            onClickToggle = { onClickToggle }
                            />
                        )
                    ) : null
                } { " " } <
                /div>{" "} <
                />
            ) : null
        } { " " } <
        /div>
    );
};

AccountPage.propTypes = {
    logout: PropTypes.func.isRequired,
    addAddress: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout, addAddress })(AccountPage);