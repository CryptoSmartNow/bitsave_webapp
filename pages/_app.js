import React, { useEffect } from 'react';
import { ethers } from 'ethers';
import { SignerProvider } from './signer'; 
import '../styles/animate.min.css'
// import './css/aos.css'
import '../styles/bootstrap.min.css'
import '../styles/style.css'
import '../styles/responsive.css'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const connectToWallet = async () => {
      try {
        const web3Modal = new Web3Modal();
        const provider = await web3Modal.connect();
        const ethersProvider = new ethers.providers.Web3Provider(provider);
        const signer = ethersProvider.getSigner();

       
        setGlobalSigner(signer);
      } catch (error) {
        console.error('Error connecting to wallet:', error);
      }
    };

    connectToWallet();
  }, []);

  return (
    <SignerProvider>
      <Component {...pageProps} />
    </SignerProvider>
  );
}

export default MyApp;
