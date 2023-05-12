import { useEffect, useState } from 'react';

const useDevice = () => {
  const [deviceType, setDeviceType] = useState<string>('');

  const resizeFunction = () => {
    if (typeof window !== 'undefined' && window.innerWidth) {
      setDeviceType('mobile');

      if (typeof window !== 'undefined' && window.innerWidth > 500) {
        setDeviceType('table');
      }

      if (typeof window !== 'undefined' && window.innerWidth > 1024) {
        setDeviceType('desktop');
      }
    }
  };

  useEffect(() => {
    resizeFunction();
    window.addEventListener('resize', resizeFunction);

    return () => {
      window.removeEventListener('resize', resizeFunction);
    };
  }, []);

  return deviceType;
};

export default useDevice;
