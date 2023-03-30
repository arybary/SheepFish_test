import { Box, Link, Typography } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 1 }}>
        <Typography variant="caption">
          <Link href="https://github.com/arybary" target="_blank" rel="noopener noreferrer">
            <GitHub fontSize="small" sx={{ mr: 1 }} />
            GitHub
          </Link>{' '}
          <Link href="https://djinni.co/q/9cb1284d7e/" target="_blank" rel="noopener noreferrer">
            Djinni
          </Link>{' '}
          <Link
            href="https://www.linkedin.com/in/rostislav-medvid-9584081a2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn fontSize="small" sx={{ mr: 1 }} />
            LinkedIn
          </Link>{' '}
          <Link
            href="https://docs.google.com/document/d/1UPVi2a9BNfme9zNLBeGaL41hKIwaAwfiADpX5A8pYIY/edit#heading=h.gjdgxs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Doc
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;