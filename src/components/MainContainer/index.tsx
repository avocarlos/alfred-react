import React, { useState, useEffect, ReactNode } from 'react';
import TopBar from '../TopBar';
import OrderSidebar from '../OrderSidebar';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import OrdersSidebar from '../OrdersSidebar';

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  drawer: {
    width: 314
  }
}));

export enum Sidebars {
  ORDER = 'order',
  ORDERS = 'orders'
}

const MainContainer: React.FC<RouteComponentProps> = (props) => {
  const [sidebar, setSidebar] = useState<Sidebars | null>(null);
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location.pathname]);
  
  function closeSidebar(): void {
    setSidebar(null);
  }

  function renderSidebar(): ReactNode | null {
    switch (sidebar) {
      case Sidebars.ORDER:
        return <OrderSidebar onClose={closeSidebar} />
      case Sidebars.ORDERS:
        return <OrdersSidebar onClose={closeSidebar} />
      default:
        return null;
    }
  }

  return (
    <div>
      <TopBar sidebar={!!sidebar} setSidebar={setSidebar} />
      <Container className={classes.main}>
        {props.children}
      </Container>
      <Drawer
        anchor="right"
        open={!!sidebar}
        classes={{paper: classes.drawer}}
        onClose={closeSidebar}
      >
        {renderSidebar()}
      </Drawer>
    </div>
  );
};

export default withRouter(MainContainer);