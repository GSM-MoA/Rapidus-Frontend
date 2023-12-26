import DrawPage from '@/components/DrawPage';
import Footer from '@/components/Footer';
import Custom404 from '@/pages/404';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const isValidId = (id: string) => {
  return id === 'ten-seconds' || id === 'thirty-seconds' || id === 'one-minute';
};

const Draw = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const [time, setTime] = useState<number>(0);
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    setIsValid(isValidId(id));

    switch (id) {
      case 'ten-seconds':
        setTime(1);
        break;
      case 'thirty-seconds':
        setTime(2);
        break;
      case 'one-minute':
        setTime(3);
        break;
      default:
        setTime(0);
        break;
    }
  }, [id]);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.location.href = url;
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  if (!isValid) {
    return <Custom404 />;
  }

  return (
    <>
      <DrawPage time={time} />
      <Footer/>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = [
    { params: { id: 'ten-seconds' } },
    { params: { id: 'thirty-seconds' } },
    { params: { id: 'one-minute' } },
  ];

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: { params: { id: string } }) => {
  const isValid = isValidId(params.id);

  return {
    props: {
      isValid,
    },
  };
};

export default Draw;