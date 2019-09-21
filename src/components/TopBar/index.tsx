import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import LogoSrc from './logo-horizontal.png';

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
  logo: {
    maxHeight:80 - theme.spacing(4)
  },
  headerFix: {
    ...theme.mixins.toolbar
  }
}));

interface Props {
  drawer: boolean;
  drawerWidth: number;
  setDrawer: (opened: boolean) => void;
}

const TopBar: React.FC<Props> = (props) => {
  const {drawer, drawerWidth, setDrawer} = props;
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
          <img className={classes.logo} src={LogoSrc} alt="Best Western logo"/>
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

export default TopBar;