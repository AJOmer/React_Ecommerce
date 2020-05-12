import {
    GET_SHIRTS,
    GET_SHIRT,
    SHIRT_ERROR,
    CLEAR_SELECTED_SHIRT,
    ADD_PRODUCT_SHIRTS_SUCCESS,
    DONE_LOADING_SHIRTS,
    DONE_DELETING_SHIRTS,
} from "./types";

import axios from "axios";
import { setAlert } from "./alert";

// Get all shirts
export const getShirts = () => async(dispatch) => {
    try {
        const res = await axios.get("/api/shirts");

        dispatch({
            type: GET_SHIRTS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: SHIRT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status },
        });
    }
};

// change 'loading' to true
export const doneLoading = () => async(dispatch) => {
    dispatch({
        type: DONE_LOADING_SHIRTS,
    });
};

// Get a specific shoe by ID
export const getShirt = (id) => async(dispatch) => {
    try {
        const res = await axios.get(`/api/shirts/${id}`);

        dispatch({
            type: GET_SHIRT,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: SHIRT_ERROR,
            payload: {
                status: err.response.status,
                statusText: err.response.statusText,
            },
        });
    }
};

// clears selected shirts
export const clearSelectedShirt = () => (dispatch) => {
    dispatch({
        type: CLEAR_SELECTED_SHIRT,
    });
};

// Add a product
export const addShirt = ({ formData }) => async(dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const res = await axios.post("api/shirts", formData, config);

        dispatch({
            type: ADD_PRODUCT_SHIRTS_SUCCESS,
        });

        dispatch(setAlert(res.data.msg, "success"));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
        }
    }
};

// Delete selected shirt
export const deleteShirts = (shirts_id) => async(dispatch) => {
    try {
        const res = await axios.delete(`/api/shirts/${shirts_id}`);

        dispatch({
            type: CLEAR_SELECTED_SHIRT,
        });

        dispatch({
            type: DONE_DELETING_SHIRTS,
        });

        dispatch(setAlert(res.data.msg, "success"));
    } catch (err) {
        dispatch({
            type: SHIRT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status },
        });
    }
};