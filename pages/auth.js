import { ethers } from 'ethers';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useWallet } from "@txnlab/use-wallet";

export default function MetaMask(){
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    setLoading(true);

    try {
      if (window.ethereum) {
        // Request access to MetaMask accounts
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Check if MetaMask is connected to a provider
        if (window.ethereum?.isConnected()) {
          // Create an ethers.js provider using MetaMask
          const provider = new ethers.providers.Web3Provider(window.ethereum, {
            name: "ZetaChain Athens Testnet",
            chainId: 7001
          });

          // Get the current account address
          const accounts = await provider.listAccounts();

          // You can store the account address in your app's state or context
          const currentAccount = accounts[0];
          console.log('Connected Account:', currentAccount);

          // Redirect to the dashboard page on successful connection
          router.push('/dashboard');
        } else {
          console.error('MetaMask is not connected to a provider');
        }
      } else {
        console.error('MetaMask not found');
      }
    } catch (error) {
      console.error('MetaMask error:', error);
    }

    setLoading(false);
  };

  return (
    <div className="">
      <button className="btn btn_main" onClick={connectWallet} disabled={loading}>
        {loading ? 'Connecting...' : 'Connect Wallet'} 
      </button>
    </div>
  );
};

;

export function AlgorandWallet() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { activeAccount,providers } = useWallet();
  

  const connectWallet =()=>{
      setLoading(true);
      const provider = providers[0]
      
      if (provider.isConnected) {
          provider.disconnect().then(()=>{
              setLoading(false);
          })
      } else {
          provider.connect().then(()=>{
              setLoading(false)
              router.push('/dashboard');
          });
          provider.setActiveProvider();
          
      }
      
  }


  return (
      <>
          <button className="btn btn_main" onClick={connectWallet} disabled={loading}>
              {loading ? 'Connecting...' : activeAccount?.address? `${activeAccount.address.slice(0, 10)}.....` : 'Connect Wallet'} 
          </button>
      </>
  )
}

