import { createStore } from 'redux';


const initialState = {
    SelectedProvinceID: 0,
    SelectedDistrictID: 0,
    SelectedWardID: 0,
    Provinces: [],
    Districts: [],
    Wards: []
}
function AllReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_PROVINCES":
            return {
                ...state,
                Provinces: action.data
            }
        case "GET_DISTRICTS":
            return {
                ...state,
                Districts: action.data
            };
        case "GET_WARDS":
            return {
                ...state,
                Wards: action.data
            };
        case "SAVE_PROVINCE_ID":
            return {
                ...state,
                SelectedProvinceID: action.data
            };
        case "SAVE_DISTRICT_ID":
            return {
                ...state,
                SelectedDistrictID: action.data
            };
        case "SAVE_WARD_ID":
            return {
                ...state,
                SelectedWardID: action.data
            };
        default:
            break;
    }
    return state;
}
const store = createStore(AllReducer);
export default store;