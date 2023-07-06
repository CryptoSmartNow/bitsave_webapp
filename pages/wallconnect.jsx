'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { ethers } from 'ethers';

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: '3484a4b745f94a74b7b82bc3cfd32356',
    },
  },
};

const WalletConnectButton = () => {
  const [connected, setConnected] = useState(false);
  const [signer, setSigner] = useState(null);
  const router = useRouter();
  const connectWallet = async () => {
    try {
      const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });
      const provider = await web3Modal.connect();
      const web3Provider = new ethers.providers.Web3Provider(provider);
      const signerRetrieved = web3Provider.getSigner();
      const accounts = await signerRetrieved.getAddress();
      if (accounts) {
        setConnected(true);
        setSigner(signerRetrieved);
        console.log('Connected successfully', accounts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    if(signer) {
      console.log(signer) // the signer is now correct, I dont know how you want to pass it to the other file
      router.push('/dashboard'); // Navigate to the dashboard page
    }
  }, [signer])
  

  const disconnectWallet = () => {
    setConnected(false);
    setSigner(null);
  };

  return (
    <div>
      {connected ? (
        <button onClick={disconnectWallet}>Disconnect</button>
      ) : (
        <button onClick={connectWallet}>Connect</button>
      )}
    </div>
  );
};

export default WalletConnectButton;
