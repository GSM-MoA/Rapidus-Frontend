import DrawPage from '@/components/DrawPage';
import Custom404 from '@/pages/404';
import { useRouter } from 'next/router';

const isValidId = (id : string) => {
  return id === 'ten-second' || id === 'thirty-seconds' || id === 'one-minute';
};

const Draw = ({ isValid } : {isValid:boolean}) => {
  const router = useRouter();
  const { id } = router.query;

  if (!isValid) {
    return <Custom404 />;
  }

  return (
    <div>
        <DrawPage/>
    </div>
  );
};

export const getStaticPaths = async () => {
  // 여기서 유효한 경로들을 정의
  const paths = [
    { params: { id: 'ten-seconds' } },
    { params: { id: 'thirty-seconds' } },
    { params: { id: 'one-minute' } },
  ];

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params } : {params : {id : string}}) => {

  const isValid = isValidId(params.id);

  return {
    props: {
      isValid,
    },
  }
}
