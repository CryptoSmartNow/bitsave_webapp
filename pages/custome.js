// components/CustomScript.js

import Head from 'next/head';
import Script from 'next/script';

const CustomScript = () => (
  <Head>
    <Script src="./js/jquery.js" />
    <Script src="./js/bootstrap.min.js" />
    <Script src="./js/aos.js" />
    <Script src="./js/main.js" />
    <Script src="/js/bitsave.js" />
    <script src="https://kit.fontawesome.com/b1df893006.js" crossorigin="anonymous"></script>

  </Head>
);

export default CustomScript;
