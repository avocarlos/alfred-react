import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import LanguageIcon from '@material-ui/icons/Language';
import { makeStyles } from '@material-ui/core/styles';
import LogoSrc from './logo-horizontal.png';

import {withRouter, RouteComponentProps} from 'react-router-dom';

interface StyleProps {
  drawer: boolean;
  drawerWidth: number;
}

const useStyles = makeStyles((theme) => ({
  header: {
    width: (props: StyleProps): string => (
      props.drawer ? `calc(100% - ${props.drawerWidth}px)` : '100%'
    ),
    marginRight:(props: StyleProps): number => (
      props.drawer ? props.drawerWidth : 0
    )
  },
  toolbar: {
    justifyContent:'space-between'
  },
  primaryText: {
    flexGrow:1
  },
  logo: {
    marginRight: theme.spacing(4),
    '& img': {
      maxHeight:80 - theme.spacing(4)
    }
  },
  headerFix: {
    ...theme.mixins.toolbar
  }
}));

interface Props extends RouteComponentProps {
  drawer: boolean;
  drawerWidth: number;
  setDrawer: (opened: boolean) => void;
}

const TopBar: React.FC<Props> = (props) => {
  const {drawer, drawerWidth, setDrawer, history} = props;
  const classes = useStyles({drawer, drawerWidth});

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        classes={{
          root: classes.header
        }}
      >
        <Toolbar
          classes={{root: classes.toolbar}}
        >
          <a className={classes.logo} href='/'>
            <img src={LogoSrc} alt="Best Western logo"/>
          </a>
          <Typography classes={{root:classes.primaryText}} variant="h6" color="textSecondary">
            Habitacion #234
          </Typography>
          <IconButton
            color="inherit"
          >
            <LanguageIcon />
          </IconButton>
          {!drawer && (
            <IconButton
              color="inherit"
              onClick={() => setDrawer(!drawer)}
            >
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <div className={classes.headerFix} />
    </>
  );
};

export default withRouter(TopBar);