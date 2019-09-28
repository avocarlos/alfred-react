import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LanguageIcon from '@material-ui/icons/Language';
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

interface Props {
  drawer: boolean;
  drawerWidth: number;
  setDrawer: (opened: boolean) => void;
}

const LanguageButton = () => {
  const [menu, setMenu] = useState<HTMLElement | null>(null);
  
  function onIconClick(event: React.MouseEvent<HTMLButtonElement>) {
    setMenu(event.currentTarget)
  }

  return (
    <>
      <IconButton color="inherit" onClick={onIconClick}>
        <LanguageIcon />
      </IconButton>
      {menu &&(
        <Menu
          id="language"
          anchorEl={menu}
          keepMounted
          open={true}
          onClose={() => setMenu(null)}
        >
          <MenuItem onClick={() => setMenu(null)}>Espanol</MenuItem>
          <MenuItem onClick={() => setMenu(null)}>Ingles</MenuItem>
        </Menu>
      )}
    </>
  );
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
          <a className={classes.logo} href='/'>
            <img src={LogoSrc} alt="Best Western logo"/>
          </a>
          <Typography classes={{root:classes.primaryText}} variant="h6" color="textSecondary">
            Habitacion #234
          </Typography>
          <LanguageButton />
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