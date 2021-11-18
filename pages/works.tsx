import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
    {projects.map((project) => (
      <Accordion key={project.name}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{project.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {project.description.en}
        </AccordionDetails>
      </Accordion>
    ))}
  </>
);

export default Works;
