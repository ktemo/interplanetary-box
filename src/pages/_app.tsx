import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';
import { AppProps } from 'next/app';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
};

export default MyApp;
