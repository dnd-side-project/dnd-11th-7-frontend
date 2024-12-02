import Lottie from 'react-lottie';

import LoadingJson from './Loading.json';

export const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingJson,
  };

  return <Lottie options={defaultOptions} height={150} width={150} />;
};
