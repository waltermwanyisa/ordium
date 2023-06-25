import React, { useState, useEffect } from 'react';
import MyRoutes from './routers/routes';
import UnisatContext from './context/UnisatContext';
import { WalletProvider } from './context/WalletContext';

function App() {
  
  const [unisatState, setUnisatState] = useState({
    unisatInstalled: false,
    connected: false,
    accounts: [],
    publicKey: '',
    address: '',
    balance: { confirmed: 0, unconfirmed: 0, total: 0 },
    network: 'livenet',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUnisat = async () => {
      try {
        if (window.unisat && typeof window.unisat.enable === 'function') {
          await window.unisat.enable();
          const unisat = window.unisat;
          const accounts = await unisat.getAccounts();
          setUnisatState((prevState) => ({
            ...prevState,
            unisatInstalled: true,
            connected: true,
            accounts,
            address: accounts[0],
          }));
          setLoading(false);
          unisat.on('accountsChanged', (accounts) => {
            setUnisatState((prevState) => ({
              ...prevState,
              accounts,
              address: accounts[0],
            }));
          });
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error('Error accessing Unisat:', error);
        setLoading(false);
      }
    };

    const interval = setInterval(() => {
      checkUnisat();
    }, 100);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (loading) {
    return null;
  }

  return (
    <WalletProvider>
      <UnisatContext.Provider value={{ unisatState, setUnisatState }}>
        <MyRoutes />
      </UnisatContext.Provider>
    </WalletProvider>
  );
}

export default App;