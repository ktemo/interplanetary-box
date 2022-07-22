import {
  useMetamask,
  useNetwork,
  useAddress,
  useDisconnect,
} from '@thirdweb-dev/react';

export const ConnectMetamaskButtonComponent = () => {
  // const connectWithCoinbaseWallet = useCoinbaseWallet();
  const connectWithMetamask = useMetamask();
  // const connectWithWalletConnect = useWalletConnect();
  const disconnectWallet = useDisconnect();
  const address = useAddress();
  const network = useNetwork();
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
