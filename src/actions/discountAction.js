
export const applyDiscount = () =>({
    
    type: 'APPLY_DISCOUNT',
    member: true
});

export const removeDiscount = () =>({
    
    type: 'REMOVE_DISCOUNT',
    member: false
});