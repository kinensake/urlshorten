import * as redux from "redux";

const initialState = {
    data: [],
    tempData: [],
    isAddShow: false
};

const reducer  = function(state = initialState, action) {
    switch(action.type) {
    case "SEARCH": 
        return {
            ...state,
            tempData: state.data.filter(item => {
                return item.originUrl.includes(action.search);
            }),
        }
    case "IMPORT_DATA": 
        return {
            ...state,
            data: action.data,
            tempData: action.data
        }
    case "CHANGE_ADD_STATUS":
        return {
            ...state,
            isAddShow: !state.isAddShow
        }
    case "ADD_DATA": {
        const newData = state.data.concat([action.data]);
        return {
            ...state,
            data: newData,
            tempData: newData,
        }
    }
    case "DELETE_DATA": {
        const  newData = state.data.filter(item => item._id !== action.id);
        return {
            ...state,
            data: newData,
            tempData: newData,
        }   
    }
    case "CHANGE_ACTIVE": {
        const newData = [...state.data];
        newData.forEach(item => {
            item._id === action.id && (item.active = action.active);
        });
        return {
            ...state,
            data: newData,
            tempData: newData
        }
    }
    default:
        return state;
    }
}

const store = redux.createStore(reducer);

// store.subscribe(function(){
//     console.log(store.getState());
// })

export default store;