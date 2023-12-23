import React, { useState, createContext } from "react";

export const AccountContext = createContext(null);

function AccountProvider({ children }) {
  let [sid, setSid] = useState('');
  let [eid, setEid] = useState('');
  
  return (
    <AccountContext.Provider value={{ sid, setSid, eid, setEid }}>
      {children}
    </AccountContext.Provider>
  );
}
export default AccountProvider;
