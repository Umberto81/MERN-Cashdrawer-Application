export const subTotal = (total) => ({
    type: 'SAVE_TOTAL',
    total: total
});

export const zeroTotal = () =>({
    type: 'ZERO_TOTAL',
    total: null
});

export const finalSubTotal = (total) => ({
    type: 'FINAL_SUBTOTAL',
    total: total
});