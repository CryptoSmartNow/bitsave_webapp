import React, { useEffect } from 'react';
import Script from 'next/script';
import '../styles/animate.min.css'
// import './css/aos.css'
import '../styles/bootstrap.min.css'
import '../styles/style.css'
import '../styles/responsive.css'
import CustomScript from './custome';



function MyApp({ Component, pageProps }) {

  return (
    <>
        <CustomScript/>
        <Component {...pageProps} />

    </>
    
  );
}

export default MyApp;
