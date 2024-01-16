// THIS CONTAINS YOUR DEVELOPERS CODE FROM THE DASHBOARD.JSX

 // useEffect(() => {
    //   const checkWalletConnection = async () => {
    //     if (window.ethereum) {
    //       try {
    //         if (!permissionRequested) {
    //           setPermissionRequested(true);

    //           const accounts = await window.ethereum.request({ method: 'eth_accounts' });

    //           const accountAddress = accounts[0];
    //           const provider = new ethers.providers.Web3Provider(window.ethereum, {
    //             name: "ZetaChain Athens Testnet",
    //             chainId: 7001
    //           });
    //           const signer = provider.getSigner();
    //           console.log('User is already connected to MetaMask');
    //           console.log('Account Address:', accountAddress);
    //           console.log(signer);
    //           setSigner(signer);
    //           const join = await joinBitsave(signer)
    //           console.log(join)
    //           myrouter.push('/dashboard');
    //         }
    //       } catch (error) {
    //         console.error('MetaMask error:', error);
    //         // Redirect user to connect with MetaMask
    //         // router.push('/dashboard');
    //       }
    //     } else {
    //       console.error('MetaMask not found');
    //       // Redirect user to connect with MetaMask
    //       router.push('/');
    //     }
    //   };

    //   checkWalletConnection();
    // }, [permissionRequested]);

    // const savingsTokenAddress = '0x91d18e54DAf4F677cB28167158d6dd21F6aB3921';
    // const nameOfSaving = 'Saving for rent';
    // const amountToIncrement = 1;

    // increaseSaving(
    //   signer,
    //   savingsTokenAddress,
    //   nameOfSaving,
    //   amountToIncrement
    // );

    // const savingsTokenAddress = '0x91d18e54DAf4F677cB28167158d6dd21F6aB3921';
    //         const nameOfSaving = 'Saving for rent';
    //         const amountToSave = 100;
    //         const endTime = 1656789000;
    //         const startTime = 1656700000;
    //         const penalty = 1;
    //         const isSafeMode = false;

    //         createSavings(
    //           signer,
    //           savingsTokenAddress,
    //           nameOfSaving,
    //           amountToSave,
    //           endTime,
    //           startTime,
    //           penalty,
    //           isSafeMode
    //         );



    // useEffect(() => {
    //   const createSavingsAfterLoad = async () => {
    //     if (signer) {
    //       const savingsTokenAddress = '0x91d18e54DAf4F677cB28167158d6dd21F6aB3921';
    //       const nameOfSaving = 'Saving for rent';
    //       const amountToSave = 100;
    //       const endTime = 1656789000;
    //       const startTime = 1656700000;
    //       const penalty = 0.1;
    //       const isSafeMode = false;

    //       await createSavings(
    //         signer,
    //         savingsTokenAddress,
    //         nameOfSaving,
    //         amountToSave,
    //         endTime,
    //         startTime,
    //         penalty,
    //         isSafeMode
    //       );
    //     }
    //   };

    //   createSavingsAfterLoad();
    // }, [signer]);