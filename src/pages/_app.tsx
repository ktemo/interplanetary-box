import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';
import { AppProps } from 'next/app';
import { StoreProvider } from '../store/zustandProvider'
import { useHydrate } from '../store/index'

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useHydrate(pageProps.initialZustandState)

  return (
    <StoreProvider store={store}>
      <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </StoreProvider>
  );
};

export default MyApp;
