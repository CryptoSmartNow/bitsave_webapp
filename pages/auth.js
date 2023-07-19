import { ethers } from 'ethers';
import { useState } from 'react';
import { useRouter } from 'next/router';

const MetaMask = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    setLoading(true);

    try {
      if (window.ethereum) {
        // Request access to MetaMask accounts
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Create an ethers.js provider using MetaMask
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Get the current account address
        const accounts = await provider.listAccounts();

        // You can store the account address in your app's state or context
        const currentAccount = accounts[0];
        console.log('Connected Account:', currentAccount);

        // Redirect to the dashboard page on successful connection
        router.push('/dashboard');
      } else {
        console.error('MetaMask not found');
      }
    } catch (error) {
      console.error('MetaMask error:', error);
    }

    setLoading(false);
  };

  return (
    <button onClick={connectWallet} disabled={loading}>
      {loading ? 'Connecting...' : 'Connect Wallet'}
    </button>
  );
};

export default MetaMask;