import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import {
  Me, Projects, fetchMe, fetchProjects,
} from '../src/personal';

type WorksPageProps = {
  me: Me,
  projects: Projects
};

export const getStaticProps: GetStaticProps<WorksPageProps> = async () => {
  const me = await fetchMe();
  const projects = await fetchProjects();
  return { props: { me, projects } };
};

const Works: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ me, projects }) => (
  <>
    <Head>
      <title>{`${me.legalName.pinyin} | Works`}</title>
    </Head>
    <Typography>
      Contents will be placed soon!
    </Typography>
  </>
);

export default Works;
