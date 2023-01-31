import Transition from '@/shared/components/Transition';
import useRouterChange from '@/shared/hooks/useRouterChange';
import { AppPropsWithLayout } from '@/shared/interfaces/base';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { loading } = useRouterChange();
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <Transition>
      {loading ? <h1>loading...</h1> : <Component {...pageProps} />}
    </Transition>
  );
}
