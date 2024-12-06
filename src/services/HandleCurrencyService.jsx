import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const baseCurrency = "SGD"; // hard coded for now
const freecurrencyapi = new Freecurrencyapi(
  "fca_live_CGiBmBieHtUkBVZ576rUh8BlLKnvXiKWIb9whJyG"
);

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
      console.log("Response from currency api is :", response);

      const conversionRate = response.data[targetCurrency];
      if (conversionRate) {
        const amountInTarget = srcAmount * conversionRate;
        
        // Convert to 2DP
        return parseFloat(amountInTarget.toFixed(2)) 
      } else {
        console.log("Conversion rate not available");
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
  console.log("Source currency: ", sourceCurrency);
  if (sourceCurrency == baseCurrency) {
    return Promise.resolve(srcAmount);
  }
  return convertToCurrency(srcAmount, sourceCurrency, baseCurrency);
  // return Promise.resolve(srcAmount);
};

export { currencyOptions, convertToCurrency, convertToBaseCurrency };
