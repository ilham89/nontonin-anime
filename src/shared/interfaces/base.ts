import { NextPage } from 'next';
import { AppProps } from 'next/app';
import React, { ReactElement, ReactNode } from 'react';

export interface IBaseLayout {
  children: React.ReactElement;
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (_page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
