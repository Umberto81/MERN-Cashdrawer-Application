//saves the total in store
export const subTotal = (total) => ({
    type: 'SAVE_TOTAL',
    total: total
});

// zeroes the total
export const zeroTotal = () =>({
    type: 'ZERO_TOTAL',
    total: null
});

export const finalSubTotal = (total) => ({
    type: 'FINAL_SUBTOTAL',
    total: total
});

  //calculates the amount of change due after transaction

export const calculatedChange = (total) =>({
    type: 'CALCULATED_CHANGE',
    total: total
})