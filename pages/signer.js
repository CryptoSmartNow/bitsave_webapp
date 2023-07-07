import { createContext, useState } from 'react';

const SignerContext = createContext(null);

export const SignerProvider = ({ children }) => {
  const [signer, setSigner] = useState(null);

  const setGlobalSigner = (newSigner) => {
    setSigner(newSigner);
  };

  return (
    <SignerContext.Provider value={{ signer, setGlobalSigner }}>
      {children}
    </SignerContext.Provider>
  );
};

export default SignerContext;
