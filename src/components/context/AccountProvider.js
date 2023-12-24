import React, { useState, createContext } from "react";

export const AccountContext = createContext(null);

function AccountProvider({ children }) {
  let [sid, setSid] = useState('');
  let [ename, setEname] = useState('');
  
  return (
    <AccountContext.Provider value={{ sid, setSid, ename, setEname }}>
      {children}
    </AccountContext.Provider>
  );
}
export default AccountProvider;
