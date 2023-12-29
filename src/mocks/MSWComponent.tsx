import { useState, useEffect, ReactNode } from 'react';

const isMockingMode = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';

export default function MSWComponent({ children }: { children: ReactNode }) {
  const [mswReady, setMSWReady] = useState(() => !isMockingMode);

  useEffect(() => {
    const init = async () => {
      if (isMockingMode) {
        const initMocks = await import('./index').then((res) => res.initMocks);
        await initMocks();
        setMSWReady(true);
      }
    };

    if (!mswReady) {
      init();
    }
  }, [mswReady]);

  if (!mswReady) {
    return null;
  }

  return <>{children}</>;
}
