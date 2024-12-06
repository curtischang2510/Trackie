import React, {useContext} from "react";
import { createExpense } from "../hooks/ExpenseHook";
import { postExpenseToDatabase } from "../services/PostExpenseService";
import { AuthenticatedUserContext } from "../contexts/AuthenticatedUserContext";

const sendExpenseToService = async (
  eventName,
  existingEvents,
  expenseName,
  tag,
  amount,
  expenseCurrency,
  userID
) => {
  console.log("Event Name:", eventName)
  console.log("Existing Events:", existingEvents)
  console.log("ExpenseName:", expenseName)
  console.log("Tag:", tag)
  console.log("Amount:", amount)
  console.log("Currency:", expenseCurrency)

  const expense = await createExpense(expenseName, tag, amount, expenseCurrency);
  const event = existingEvents.find(
    (event) => event.name.toLowerCase() === eventName.toLowerCase()
  );
  postExpenseToDatabase(event.id, expense, userID);
};

const SaveExpenseButton = ({
  eventName,
  existingEvents,
  expenseName,
  expenseTag,
  amount,
  expenseCurrency,
}) => {
  const { userID } = useContext(AuthenticatedUserContext);

  return (
    <React.Fragment>
      <button
        type="button"
        onClick={() =>
          sendExpenseToService(
            eventName,
            existingEvents,
            expenseName,
            expenseTag,
            amount,
            expenseCurrency,
            userID
          )
        }
      >
        Save Expense
      </button>
    </React.Fragment>
  );
};

export default SaveExpenseButton;
