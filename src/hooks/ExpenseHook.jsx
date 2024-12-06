import { convertToBaseCurrency } from "../services/HandleCurrencyService"
const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
};

const createExpense = async (description, tag, amount, currency) => {
    const amountInBaseCurrency = await convertToBaseCurrency(amount, currency);

    return {
        id: uid(),
        description,
        tag,
        amount,
        currency,
        amount_in_base_currency: amountInBaseCurrency
    }
}

export { createExpense }