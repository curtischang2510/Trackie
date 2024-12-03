import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const baseCurrency = "SGD"; // hard coded for now
const freecurrencyapi = new Freecurrencyapi("YOUR-API-KEY");

const currencyOptions = [
  { value: "USD", label: "USD - United States Dollar" },
  { value: "EUR", label: "EUR - Euro" },
  { value: "JPY", label: "JPY - Japanese Yen" },
  { value: "GBP", label: "GBP - British Pound" },
  { value: "SGD", label: "SGD - Singapore Dollar" },
];

const convertToCurrency = (srcAmount, sourceCurrency, targetCurrency) => {
  return freecurrencyapi
    .latest({
      base_currency: sourceCurrency,
      currencies: targetCurrency,
    })
    .then((response) => {
      console.log(response);

      const conversionRate = response.data.targetCurrency;
      if (conversionRate) {
        return srcAmount * conversionRate;
      } else {
        console.log('Conversion rate not available');
        return null;
      }
    })
    .catch((error) => {
      console.error("Error during API call:", error);
      return null; // Provide a fallback value in case of an error
    })
    .finally(() => {
      console.log("API call completed."); // Always executes, regardless of success or failure
    });
};

const convertToBaseCurrency = (srcAmount, sourceCurrency) => {
  if (sourceCurrency == baseCurrency) {
    return Promise.resolve(srcAmount);
  }
  return convertToCurrency(srcAmount, sourceCurrency, baseCurrency);
}

export { currencyOptions, convertToCurrency, convertToBaseCurrency };
