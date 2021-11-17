import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import { Me, fetchMe } from '../src/personal';

type HomePageProps = { me: Me };

export const getStaticProps: GetStaticProps<HomePageProps> = async (ctx) => {
  const me = await fetchMe();
  return {
    props: { me },
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ me }) => (
  <>
    <Head>
      <title>{`${me.legalName.pinyin} | About Me`}</title>
    </Head>
    <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
      {me.bio.work.replaceAll('\n', '\n\n')}
    </Typography>
  </>
);

export default Home;
