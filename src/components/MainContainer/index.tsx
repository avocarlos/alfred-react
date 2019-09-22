import React, { useState } from 'react';
import TopBar from '../TopBar';
import OrderSideBar from '../OrderSideBar';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles'

const DRAWER_WIDTH = 314;

const useStyles = makeStyles((theme) => ({
  main: {
    width: (props: StyleProps): string => (
      props.drawer ? `calc(100% - ${DRAWER_WIDTH}px)` : '100%'
    ),
    marginRight: (props: StyleProps): string | number => (
      props.drawer ? DRAWER_WIDTH : 'auto'
    ),
    marginLeft: (props: StyleProps): string | number => (
      props.drawer ? 0 : 'auto'
    ),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  drawer: {
    width: DRAWER_WIDTH
  }
})); 

interface StyleProps {
  drawer: boolean;
}

const MainContainer: React.FC = ({children}) => {
  const [drawer, setDrawer] = useState(false);
  const classes = useStyles({drawer});
  return (
    <div>
      <TopBar drawerWidth={DRAWER_WIDTH} drawer={drawer} setDrawer={setDrawer} />
      <Container className={classes.main}>
        {children}
      </Container>
      <Drawer
        variant="persistent"
        anchor="right"
        open={drawer}
        classes={{paper: classes.drawer}}
      >
        <OrderSideBar setDrawer={setDrawer}/>
      </Drawer>
    </div>
  );
};

export default MainContainer;