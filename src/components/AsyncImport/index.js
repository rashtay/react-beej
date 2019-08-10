// @flow
import React from 'react';
import Loadable from 'react-loadable';

type LoadingProps = {
  isLoading: boolean,
  error: string,
  retry: Function,
};

const Loader = ({ isLoading, error, retry }: LoadingProps) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle the error state
  if (error) {
    return (
      <div>
        Sorry, there was a problem loading the page.{' '}
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }

  return null;
};

const AsyncImport = (path: string) =>
  Loadable({
    loader: () => import(`containers/${path}`),
    loading: Loader,
  });

export default AsyncImport;
