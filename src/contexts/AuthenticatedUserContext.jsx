import { createContext, useState } from "react";

const AuthenticatedUserContext = createContext(null);

const AuthenticatedUserProvider = ({ children }) => {
  const tempUserID = "opqCTzwGyPaMNqacyB20";

  const [userID, setUserID] = useState(tempUserID);

  return (
    <AuthenticatedUserContext.Provider value={{ userID, setUserID }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

export { AuthenticatedUserContext, AuthenticatedUserProvider };
