import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Foot from '../../footer/Foot';
import PrincetonLogo from '../../components/PrincetonLogo';
import { Link } from 'react-router-dom';

const images = [
  {
    url: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_768,q_50,w_1024/v1/clients/princetonnj/princeton_university_main_building_at_front_gate_geraldine_scull_209cbd93-c4fc-4485-a274-66b4076c71e0.jpg',
    title: 'Room Draw Guide',
    width: '33%',
    link: '/howToApplyToDraw'
  },
  {
    url: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/blair-arch-at-princeton-university-princeton-new-jersey-geraldine-scull.jpg',
    title: 'Apply to Room Draw',
    width: '34%',
    link: '/applyToDraw'
  },
  {
    url: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/princeton-university-library-meeting-hall-and-grounds-in-snow-geraldine-scull-.jpg',
    title: 'Room Draw Time',
    width: '33%',
    link: '/roomDrawTime'
  },
];


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
  },
  image: {
    position: 'relative',
    height: 500,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 150,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.10,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PrincetonLogo />
      <AppBar
        position="static"
        style={{backgroundColor: "#e77500"}}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Welcome to the Department of Undergraduate Housing
          </Typography>
        </Toolbar>
      </AppBar>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
          component={Link} to={image.link}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
      <Foot />
    </div>
  );
}
