import { forwardRef } from 'react';
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Me, fetchMe } from '../src/personal';

const GitHubIcon = forwardRef(() => <FontAwesomeIcon icon={faGithub} size="2x" />);
const LinkedInIcon = forwardRef(() => <FontAwesomeIcon icon={faLinkedin} size="2x" />);

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
      {me.bio.work.replaceAll('\n', '\n\n')}
    </Typography>
    <Divider />
    <Box component="footer" sx={{ display: 'flex', justifyContent: 'center', '*': { m: 1, cursor: 'pointer' } }}>
      <Link href={me.socialMedia.github} passHref>
        <GitHubIcon />
      </Link>
      <Link href={me.socialMedia.linkedin} passHref>
        <LinkedInIcon />
      </Link>
    </Box>
    <Divider />
  </>
);

export default Home;
