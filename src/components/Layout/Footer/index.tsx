import * as React from 'react';
import { Link, Typography } from '@mui/material';
import { GitHub, Google } from '@mui/icons-material';
import { FooterContainer } from './Footer.styled';

const Footer: React.FC = () => (
  <FooterContainer>
    <Link href="https://github.com/arybary" target="_blank" rel="noopener noreferrer">
      <GitHub fontSize="small" sx={{ mr: 1 }} />
      GitHub
    </Link>
    <Typography variant="h5">created by 2023</Typography>
    <Link
      href="https://docs.google.com/document/d/1UPVi2a9BNfme9zNLBeGaL41hKIwaAwfiADpX5A8pYIY/edit#heading=h.gjdgxs"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Google fontSize="small" sx={{ mr: 1 }} />
      Google Doc: MY_RESUME
    </Link>
  </FooterContainer>
);

export default Footer;
