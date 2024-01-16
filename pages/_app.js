import React, { useEffect } from 'react';
import Script from 'next/script';
import '../styles/animate.min.css'
// import './css/aos.css'
import '../styles/bootstrap.min.css'
import '../styles/style.css'
import '../styles/responsive.css'
import CustomScript from './custome';

import algosdk from 'algosdk';
import { WalletProvider, useInitializeProviders, PROVIDER_ID } from '@txnlab/use-wallet';
import { DeflyWalletConnect } from '@blockshake/defly-connect';
import { PeraWalletConnect } from '@perawallet/connect';
import { DaffiWalletConnect } from '@daffiwallet/connect';



function MyApp({ Component, pageProps }) {

    const providers = useInitializeProviders({
        providers: [
            // { id: PROVIDER_ID.DEFLY, clientStatic: DeflyWalletConnect },
            { id: PROVIDER_ID.PERA, clientStatic: PeraWalletConnect },
            // { id: PROVIDER_ID.DAFFI, clientStatic: DaffiWalletConnect },
            // { id: PROVIDER_ID.EXODUS }
        ],

        nodeConfig: {
            network: 'testnet',
            nodeServer: 'https://testnet-api.algonode.cloud',
            nodeToken: '',
            nodePort: '443'
        },
        algosdkStatic: algosdk
    })





    return (
        <>
        <WalletProvider value={providers}>
            <CustomScript/>
            <Component {...pageProps} />
        </WalletProvider>
            

        </>
        
    );
}

export default MyApp;
