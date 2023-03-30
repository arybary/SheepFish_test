import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';


export const Footer = styled('footer')(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  backgroundColor: '#fff',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  zIndex: 100,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: theme.spacing(1),
  },
}));


export const IconsWrapper = styled('div')({
  display: 'flex',
});

export const IconLink = styled('a')(({ theme }) => ({
  display: 'flex',
  marginLeft: theme.spacing(3),
  color: '#111',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export const GitHubIconStyled = styled(GitHubIcon)({
  fontSize: '2rem',
});

export const LinkedInIconStyled = styled(LinkedInIcon)({
  fontSize: '2rem',
  marginLeft: 10,
});

export const GoogleDocsIconStyled = styled(GoogleIcon)({
  fontSize: '2rem',
  marginLeft: 10,
});
