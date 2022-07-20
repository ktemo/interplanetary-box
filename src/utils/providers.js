import Web3Modal from 'web3modal'

export const web3Modal = new Web3Modal({
  network: 'mainnet',
  cacheProvider: true,
})

// import Web3 from "web3";
// import Web3Modal from "web3modal";

// const providerOptions = {
//   /* See Provider Options Section */
// };

// const web3Modal = new Web3Modal({
//   network: "mainnet", // optional
//   cacheProvider: true, // optional
//   providerOptions // required
// });

// const provider = await web3Modal.connect();

// export const web3 = new Web3(provider);
