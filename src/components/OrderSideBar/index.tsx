import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import {order} from './faker';
import OrderItem from './OrderItem';
import List from '@material-ui/core/List';

const useStyles = makeStyles({
  container: {
    height:'100%',
    alignItems:'stretch'
  },
  header: {
    width:'100%'
  },
  toolbar: {
    paddingLeft:8,
    paddingRight:8
  },
  list: {
    flexGrow:1,
    width:'100%'
  },
  button: {
    height:80,
    borderRadius:0,
    boxShadow:'unset'
  }
});

interface Props {
  setDrawer: (opened: boolean) => void;
}

const OrderSideBar: React.FC<Props> = (props) => {
  const {setDrawer} = props;
  const classes = useStyles();

  const renderItems = () => order.items.map((item) => {
    return <OrderItem title={item.name} quantity={item.quantity} thumbnail={item.thumbnail} />
  });

  return (
    <Grid container direction="column" classes={{container:classes.container}}>
      <Grid item classes={{item:classes.header}}>
        <Toolbar disableGutters classes={{root:classes.toolbar}}>
          <IconButton color="inherit" onClick={() => setDrawer(false)}>
              <MenuIcon />
          </IconButton>
          <Typography variant="h6">Orden #1</Typography>
        </Toolbar>
        <Divider/>
      </Grid>
      <Grid item classes={{item:classes.list}}>
        <List disablePadding>
          {renderItems()}
        </List>
      </Grid>
      <Grid item>
        <Button 
          variant="contained" 
          color="secondary"
          size="large" 
          fullWidth 
          classes={{root:classes.button}}
        >
          Realizar Pedido
        </Button>
      </Grid>
    </Grid>
  );
}

export default OrderSideBar;