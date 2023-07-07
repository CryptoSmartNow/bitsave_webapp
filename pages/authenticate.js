import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';

function Authenticate() {
  const router = useRouter();
  const [signer, setSigner] = useState(null);

  useEffect(() => {
    const connectToWallet = async () => {
      try {
        const web3Modal = new Web3Modal();
        const provider = await web3Modal.connect();
        const ethersProvider = new ethers.providers.Web3Provider(provider);
        const signer = ethersProvider.getSigner();
        setSigner(signer);

        // Redirect to the dashboard page once the signer value is available
        if (signer) {
          router.push('/dashboard');
        }
      } catch (error) {
        console.error('Error connecting to wallet:', error);
      }
    };

    connectToWallet();
  }, [router]);

  useEffect(() => {
    // Log the signer to the console
    console.log('Signer:', signer);
  }, [signer]);

  return (
    <div>
      <h1>Connecting to MetaMask...</h1>
    </div>
  );
}

export default Authenticate;
