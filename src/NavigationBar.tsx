import { FC } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/** The type annotation for a navigation bar item. */
type NavigationItems = {
  /** A navigation item. The key of an entry would be displayed directly on the webpage. */
  [displayName: string]: {
    /** The navigation link. */
    link: string
  }
};

/** All items in the navigation bar. */
const navigationItems: NavigationItems = {
  Bio: { link: '/' },
  Works: { link: '/works' },
  CV: { link: '/' },
};

/** The navigation bar to be displayed on the top of the webpage. */
const NavigationBar: FC = () => (
  <Box>
    <Divider />
    <Grid container>
      {Object.entries(navigationItems).map(([displayName, { link }]) => (
        <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
          <Link href={link} passHref>
            <Typography
              variant="h6"
              sx={{ cursor: 'pointer', ':hover, :active': { textDecoration: 'underline 1px' } }}
            >
              {displayName}
            </Typography>
          </Link>
        </Grid>
      ))}
    </Grid>
    <Divider />
  </Box>
);

export default NavigationBar;
