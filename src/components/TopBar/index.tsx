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
import InboxIcon from '@material-ui/icons/Inbox';
import { makeStyles } from '@material-ui/core/styles';
import LogoSrc from './logo-horizontal.png';
import useLanguage from '../../hooks/useLanguage';
import {useStore} from '../../context';
import { Languages } from '../../i18n';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Sidebars } from '../MainContainer';
import { SubmittedOrder } from '../../reducer/types';

const useStyles = makeStyles((theme) => ({
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

const languages = [{
  code: Languages.ES,
  label: 'Español'
}, {
  code: Languages.US,
  label: 'English'
}, {
  code: Languages.ZH,
  label: '中文'
}]

interface Props {
  sidebar: boolean;
  setSidebar: (sibebar: Sidebars) => void;
}

const LanguageButton = () => {
  const [menu, setMenu] = useState<HTMLElement | null>(null);
  const { state } = useStore();
  const { setSelectedLanguage } = useLanguage();

  function onIconClick(event: React.MouseEvent<HTMLButtonElement>) {
    setMenu(event.currentTarget)
  }

  function onLanguageClick(language: string) {
    setSelectedLanguage(language);
    setMenu(null)
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
          { 
            languages.map(({code, label}) => (
              <MenuItem 
                key={code}
                selected={state.language === code} 
                onClick={() => onLanguageClick(code)}
              >
                {label}
              </MenuItem>
            ))
          }
        </Menu>
      )}
    </>
  );
}

const TopBar: React.FC<Props & RouteComponentProps> = (props) => {
  const {sidebar, setSidebar} = props;
  const { state } = useStore();
  const { t } = useLanguage();
  const classes = useStyles();

  function onLogoClick(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    props.history.push(`/`);
  }

  return (
    <>
      <AppBar position="fixed" elevation={0}>
        <Toolbar
          classes={{root: classes.toolbar}}
        >
          <a className={classes.logo} onClick={onLogoClick} href="/">
            <img src={LogoSrc} alt="Best Western logo"/>
          </a>
          <Typography classes={{root:classes.primaryText}} variant="h6" color="textSecondary">
            {t('root.room', {number: 15})}
          </Typography>
          <LanguageButton />
          {!!state.orders.length && (
            <IconButton
              color="inherit"
              onClick={() => setSidebar(Sidebars.ORDERS)}
            >
              <Badge 
                invisible={arePendingOrders(state.orders)}
                variant="dot"
                color="error"
              >
                <InboxIcon />
              </Badge>
            </IconButton>
          )}
          {!sidebar && (
            <IconButton
              color="inherit"
              onClick={() => setSidebar(Sidebars.ORDER)}
            >
              <Badge badgeContent={state.order.totalItems} color="secondary">
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

function arePendingOrders(orders: SubmittedOrder[]) {
  return orders.every((order) => ['cancelled'].includes(order.status));
}

export default withRouter(TopBar);