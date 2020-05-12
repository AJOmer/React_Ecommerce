import {
    GET_SHIRTS,
    GET_SHIRT,
    SHIRT_ERROR,
    CLEAR_SELECTED_SHIRT,
    ADD_PRODUCTS_SHIRTS_SUCCESS,
    DONE_LOADING_SHIRTS,
    DONE_DELETING_SHIRTS,
} from "../actions/types";

const initialState = {
    selectedShirt: null, // latest shirt you clicked
    shirts: [], // all the shirts
    loadingShirts: true,
    error: null,
    loadingSelectedShirt: true,
    isAddingShirtsSuccessful: false,
    deletingShirts: false,
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_SHIRTS:
            return {
                ...state,
                shirts: payload,
                loadingShirts: false,
                isAddingShirtsSuccessful: false,
                deletingShirts: false,
            };
        case DONE_LOADING_SHIRTS:
            return {
                ...state,
                loadingShirts: true,
            };
        case GET_SHIRT:
            return {
                ...state,
                selectedShirt: payload,
                loadingSelectedShirt: false,
            };
        case CLEAR_SELECTED_SHIRT:
            return {
                ...state,
                selectedShirt: null,
                loadingSelectedShirt: false,
            };
        case ADD_PRODUCTS_SHIRTS_SUCCESS:
            return {
                ...state,
                isAddingShirtsSuccessful: true,
            };
        case SHIRT_ERROR:
            return {
                ...state,
                error: payload,
            };
        case DONE_DELETING_SHIRTS:
            return {
                ...state,
                deletingShirts: true,
            };
        default:
            return state;
    }
}