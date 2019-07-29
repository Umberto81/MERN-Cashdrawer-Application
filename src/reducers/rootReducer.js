
const initState = {
    member: false,
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
        
            case 'APPLY_DISCOUNT':  
             return{
                 ...state,
                 member: action.member
             }
        


        default:
            return state;
    }
}

export default rootReducer;