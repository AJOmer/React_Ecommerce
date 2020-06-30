import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import Loading from "../../pagelayout/Loading/Loading";
import {
    getShirt,
    getShirts,
    clearSelectedShirt,
    deleteShirts,
} from "../../../actions/shirt";

import ShirtDetails from "../details/ShirtDetails";

const PageLayout = ({
    getShirt,
    getShirts,
    clearSelectedShirt,
    deleteShirts,
    match: {
        params: { id },
    },
    shirt: { selectedShirt, shirts, deleteShirt, error },
    auth: { isAdmin },
}) => {
    useEffect(() => {
        selectShirt(id);
        getShirts();
    }, []);

    const selectShirt = (id) => {
        clearSelectedShirt();
        getShirt(id);
    };

    if (deleteShirts) {
        return <Redirect to = { "/products/shirts" }
        />;
    }

    return selectedShirt === null ? (
        error ? ( <
            div >
            <
            p > { error.msg } < /p>{" "} <
            /div>
        ) : ( <
            Loading / >
        )
    ) : null;
};

const mapStateToProps = (state) => ({
    shirt: state.shirt,
    auth: state.auth,
});

PageLayout.PropTypes = {
    getShirt: PropTypes.func,
    getShirts: PropTypes.func,
    clearSelectedShirt: PropTypes.func,
    deleteShirts: PropTypes.func,
    shirt: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
    getShirt,
    getShirts,
    clearSelectedShirt,
    deleteShirts,
})(PageLayout);