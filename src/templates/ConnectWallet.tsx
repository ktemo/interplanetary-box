import {
  useMetamask,
  useNetwork,
  useAddress,
  useDisconnect,
} from '@thirdweb-dev/react';
import { useEffect } from "react";
import { ceramicAuthenticate } from '../utils/web3Profile';
import * as dataManager from '../utils/dataManager'


export const ConnectMetamaskButtonComponent = () => {
  async function connectProfile(address) {
      const { id } = await ceramicAuthenticate(address=address);
      console.log(">> ceramic id: ", id)
      if (id) {
        await dataManager.default.createUserDataStorage(id);
        await dataManager.default.getUserFiles();
      }
  }

  // const connectWithCoinbaseWallet = useCoinbaseWallet();
  const connectWithMetamask = useMetamask();
  // const connectWithWalletConnect = useWalletConnect();
  const disconnectWallet = useDisconnect();
  const address = useAddress();
  const network = useNetwork();

  useEffect(() => {
    if (!address) return;

    console.log(">> address: ", address)
    if (address) {
      connectProfile(address);
    }
  }, [address]);

  if (address) {
    return (
      <div>
        Address: <br /> {address}
        <br />
        Chain ID: {network[0].data.chain && network[0].data.chain.id}
        <br />
        <button onClick={disconnectWallet}>Disconnect</button>
      </div>
    );
  }

  // If no wallet is connected, show connect wallet options
  return (
    <div>
      {/* <button onClick={() => connectWithCoinbaseWallet()}>
        Connect Coinbase Wallet
      </button> */}
      <button onClick={() => connectWithMetamask()}>Connect MetaMask</button>
      {/* <button onClick={() => connectWithWalletConnect()}>
        Connect WalletConnect
      </button> */}
    </div>
  );
};
