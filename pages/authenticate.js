import React, { useEffect } from 'react';
import Web3 from 'web3';

function Authenticate() {
  useEffect(() => {
    const connectToWallet = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          // Request access to the user's MetaMask accounts
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

          // Store the signer in local storage
          localStorage.setItem('signer', accounts[0]);

          // Redirect to the dashboard page on successful connection
          if (accounts.length > 0) {
            window.location.href = '/dashboard';
          }
        } catch (error) {
          console.error('Error connecting to MetaMask:', error);
        }
      } else {
        console.error('MetaMask is not installed');
      }
    };

    connectToWallet();
  }, []);

  return (
    <div>
      <h1>Connecting to MetaMask...</h1>
    </div>
  );
}

export default Authenticate;
