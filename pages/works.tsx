import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
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
  return { props: { me, projects }, revalidate: 10 };
};

const Works: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ me, projects }) => (
  <>
    <Head>
      <title>{`${me.legalName.pinyin} | Works`}</title>
    </Head>
    <Box sx={{ p: 2 }}>
      {projects.map((project) => (
        <Accordion key={project.name}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box>
              <Typography variant="h6">{project.name}</Typography>
              <Typography variant="subtitle2" gutterBottom>{project.shortDescription?.en}</Typography>
              {project.kinds.map((kind) => <Chip key={kind} label={kind} size="small" />)}
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" gutterBottom>
              {project.description.en}
            </Typography>
            {Object.entries(project.url).map(([key, url]) => (
              <MuiLink href={url} key={key} sx={{ mr: 1 }}>{key}</MuiLink>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  </>
);

export default Works;
