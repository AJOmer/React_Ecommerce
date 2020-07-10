import React, { useEffect } from "react";
import { connect } from "react-redux";
import Shirt from "./Shirt";
import PropTypes from "prop-types";
import Loading from "../../pagelayout/Loading/Loading";
import { getShirts } from "../../../actions/shirt";

const ShirtCollection = ({ getShirts, shirts, loadingShirts }) => {
    useEffect(() => {
        getShirts();
    }, [getShirts]);

    return ( <
        div className = "recent_releases" >
        <
        div className = "recent_release_header" >
        <
        p > Latest Drops < /p>{" "} <
        /div>{" "} {
            shirts.length > 0 ? ( <
                div className = "grid-latestrelease" >
                <
                div className = "row" > { " " } {
                    shirts.slice(0, 12).map((shirt) => ( <
                        Shirt key = { shirt._id }
                        shirt = { shirt }
                        />
                    ))
                } { " " } <
                /div>{" "} <
                /div>
            ) : ( <
                Loading / >
            )
        } { " " } <
        /div>
    );
};

ShirtCollection.propTypes = {
    getShirts: PropTypes.func.isRequired,
    shirts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    shirts: state.shirt.shirts,
});

export default connect(mapStateToProps, { getShirts })(ShirtCollection);