import Transition from '@/shared/components/Transition';
import useRouterChange from '@/shared/hooks/useRouterChange';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const { loading } = useRouterChange();
  return (
    <Transition>
      {loading ? <h1>loading...</h1> : <Component {...pageProps} />}
    </Transition>
  );
}
