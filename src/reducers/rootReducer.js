
const initState = {
    member: false,
    product: [],
    total: null,
};


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
            };
        
        case 'REMOVE_DISCOUNT':
            return {
                ...state,
                member: action.member
            }
    case 'SAVE_TOTAL':
            return{
                ...state,
                total: action.total
            }
        case 'ZERO_TOTAL':
            return{
                ...state,
                total: action.total
            }
        case 'FINAL_SUBTOTAL':
            return{
                ...state,
                total: action.total
            }

        case 'CALCULATED_CHANGE':
            return{
                ...state,
                total: action.total
            }
      
        default:
            return state;
    }
}

export default rootReducer;