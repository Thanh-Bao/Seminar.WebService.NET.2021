import { createStore } from 'redux';


const initialState = {
    AddressSelected: [],
    Provinces: [],
    Districts: [],
    Ward: []
}
function AllReducer(state = initialState, action){
    switch (action.type) {
        case "GET_PROVINCES":
           return {
               ...state,
               Provinces : [
                   ...state.Provinces,
                   {
                       id : 123,
                       name : "9999"
                   }
               ]
           }
        case "GET_DISTRICTS":
                return {
                    ...state,
                    Districts : action.data
                };
          
        default:
            break;
    }
    return state;
}
const store = createStore(AllReducer);
export default store;