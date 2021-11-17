import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
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
  <Grid container>
    <Head>
      <title>{`${me.legalName.pinyin} | About Me`}</title>
    </Head>
    <Grid item>
      <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
        {me.bio.work.replaceAll('\n', '\n\n')}
      </Typography>
    </Grid>
    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', '*': { m: 1 } }}>
      <Link href={me.socialMedia.github} passHref>
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </Link>
      <Link href={me.socialMedia.linkedin} passHref>
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </Link>
    </Grid>
  </Grid>
);

export default Home;
