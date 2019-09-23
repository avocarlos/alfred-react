import React, {useState} from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import OrderItem from './OrderItem';
import List from '@material-ui/core/List';
import ConfirmationDialog from './ConfirmationDialog';

import {order} from './faker';

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
  footer: {
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
  const [confirmation, setConfirmation] = useState(false);
  const classes = useStyles();

  const renderItems = () => order.items.map(({id, name, quantity, thumbnail}) => {
    return <OrderItem key={id} title={name} quantity={quantity} thumbnail={thumbnail} />
  });

  return (
    <Grid container direction="column" classes={{container:classes.container}}>
      <Grid item classes={{item:classes.header}}>
        <Toolbar disableGutters classes={{root:classes.toolbar}}>
          <IconButton color="inherit" onClick={() => setDrawer(false)}>
              <ChevronRightIcon />
          </IconButton>
          <Typography variant="h6">Orden #{order.number}</Typography>
        </Toolbar>
        <Divider/>
      </Grid>
      <Grid item classes={{item:classes.list}}>
        <List disablePadding>
          {renderItems()}
        </List>
      </Grid>
      <Grid item classes={{item:classes.footer}}>
        <Button 
          variant="contained" 
          color="secondary"
          size="large" 
          fullWidth 
          classes={{root:classes.button}}
          onClick={() => setConfirmation(true)}
        >
          Realizar Pedido
        </Button>
      </Grid>
      {confirmation && <ConfirmationDialog order={order} setConfirmation={setConfirmation} />}
    </Grid>
  );
}

export default OrderSideBar;