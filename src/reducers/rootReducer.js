
const initState = {
    logged: false,
    product: []
};

console.log(initState);

const rootReducer = (state = initState, action) => {

    switch(action.type){

        case 'ADD_PRODUCT':
            return{
                ...state,
                product: action.payload
            };

        default:
            return state;
    }
}

export default rootReducer;