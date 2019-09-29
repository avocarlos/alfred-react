import React, { useState, useEffect } from 'react';
import TopBar from '../TopBar';
import OrderSideBar from '../OrderSideBar';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {withRouter, RouteComponentProps} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  drawer: {
    width: 314
  }
})); 

const MainContainer: React.FC<RouteComponentProps> = (props) => {
  const [drawer, setDrawer] = useState(false);
  const classes = useStyles({drawer});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location.pathname]);

  return (
    <div>
      <TopBar drawer={drawer} setDrawer={setDrawer} />
      <Container className={classes.main}>
        {props.children}
      </Container>
      <Drawer
        anchor="right"
        open={drawer}
        classes={{paper: classes.drawer}}
        onClose={() => setDrawer(false)}
      >
        <OrderSideBar setDrawer={setDrawer}/>
      </Drawer>
    </div>
  );
};

export default withRouter(MainContainer);