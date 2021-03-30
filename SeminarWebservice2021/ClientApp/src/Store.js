import { createStore } from 'redux';


const initialState = {
    SelectedProvinceID: 0,
    SelectedDistrictID: 0,
    SelectedWardID: 0,
    Provinces: [],
    Districts: [],
    Wards: [],
    ////////////////////
    FromDistricts: [],
    FromSelectedDistrictID: 0,
    ///////////////////
    ToDistricts: [],
    ToWards: [],
    ToSelectedDistrictID: 0,
    ToSelectedWardID: 0,
    ////////////////////
    MoMos: [
        {
            TransactionId : 0,
            partner: 0,
            partnerId: 0,
            amount: 0,
            content: 0,
            time: 0
        }
    ]
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
        ///////////////////////////////////////
        case "GET_FROM_DISTRICTS":
            return {
                ...state,
                FromDistricts: action.data
            };
        case "SAVE_FROM_DISTRICT_ID":
            return {
                ...state,
                FromSelectedDistrictID: action.data
            };
        ///////////////////////////////////////////////
        case "GET_TO_DISTRICTS":
            return {
                ...state,
                ToDistricts: action.data
            };
        case "GET_TO_WARDS":
            return {
                ...state,
                ToWards: action.data
            };
        case "SAVE_TO_DISTRICT_ID":
            return {
                ...state,
                ToSelectedDistrictID: action.data
            };
        case "SAVE_TO_WARD_ID":
            return {
                ...state,
                ToSelectedWardID: action.data
            };
        ///////////////////////////
        case "GET_MOMOS":
            return {
                ...state,
                MoMos: action.data
            };
        default:
            break;
    }
    return state;
}
const store = createStore(AllReducer);
export default store;