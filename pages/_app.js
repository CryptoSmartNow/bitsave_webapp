import '../styles/animate.min.css'
// import '../styles/icofont.min.css'
import '../styles/bootstrap.min.css'
import '../styles/style.css'
import '../styles/responsive.css'
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import SignerProvider from './signer';



export default function App({ Component, pageProps }) {
  useEffect(() => {
    const connectToWallet = async () => {
      try {
        const web3Modal = new Web3Modal();
        const provider = await web3Modal.connect();
        const ethersProvider = new ethers.providers.Web3Provider(provider);
        const signer = ethersProvider.getSigner();

        // Store the signer object in the global context
        // You can access it using useContext(SignerContext)
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
