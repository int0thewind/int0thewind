import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Me, fetchMe } from '../src/personal';

type HomePageProps = { me: Me };

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const me = await fetchMe();
  return { props: { me } };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ me }) => (
  <>
    <Head>
      <title>{`${me.legalName.pinyin} | About Me`}</title>
    </Head>
    <Typography variant="body1" sx={{ whiteSpace: 'pre-line', p: 2 }}>
      {me.bio.work.split('\n').join('\n\n')}
    </Typography>
    <Divider />
    <Box component="footer" sx={{ display: 'flex', justifyContent: 'center', '*': { m: 1, cursor: 'pointer' } }}>
      {/* FIXME: forwardRef fails, but the routing works. */}
      <Link href={me.socialMedia.github} passHref>
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </Link>
      <Link href={me.socialMedia.linkedin} passHref>
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </Link>
    </Box>
    <Divider />
  </>
);

export default Home;
