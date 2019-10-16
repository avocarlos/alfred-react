import React, {useState, useContext} from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import MenuItem from './MenuItem';
import List from '@material-ui/core/List';
import ConfirmationDialog from './ConfirmationDialog';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import useLanguage from '../../hooks/useLanguage';
import {setOrder, setOrders} from '../../reducer/actions';
import { Order } from '../../reducer';

import StoreContext from '../../context';

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
    height:150,
    overflowY:'scroll',
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

interface Props extends RouteComponentProps {
  setDrawer: (opened: boolean) => void;
}

const OrderSideBar: React.FC<Props> = (props) => {
  const {setDrawer} = props;
  const { state: { order, orders }, dispatch } = useContext(StoreContext);
  const {t} = useLanguage();
  const [confirmation, setConfirmation] = useState(false);
  const classes = useStyles();

  const renderItems = () => order && order.items.map(({id, name, quantity, thumbnail}) => {
    return <MenuItem 
      key={id}
      itemId={id}
      title={name}
      quantity={quantity}
      thumbnail={thumbnail}
      onRemove={removeItem}
      onQuantityChange={changeQuantity}
    />
  });

  function confirmOrder():void {
    dispatch(setOrders([...orders, order]));
    setConfirmation(false);
    setDrawer(false);
  }

  function removeItem(itemId: string): void {
    dispatch(setOrder({
      ...order,
      items: order.items.filter(({id}) => id !== itemId)
    }));
  }

  function changeQuantity(itemId: string, quantity: number): void {
    const newItems = order.items.reduce<Order['items']>((acc, item) => {
      if (item.id === itemId) {
        item.quantity = quantity;
      }
      acc.push(item);
      return acc;
    }, []);

    dispatch(setOrder({
      ...order,
      items: newItems
    }));
  }

  return (
    <Grid container direction="column" classes={{container:classes.container}}>
      <Grid item classes={{item:classes.header}}>
        <Toolbar disableGutters classes={{root:classes.toolbar}}>
          <IconButton color="inherit" onClick={() => setDrawer(false)}>
              <ChevronRightIcon />
          </IconButton>
          <Typography variant="h6">{t('root.order.title', {number: order.number})}</Typography>
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
          disabled={!order.items.length}
          variant="contained" 
          color="secondary"
          size="large" 
          fullWidth 
          classes={{root:classes.button}}
          onClick={() => setConfirmation(true)}
        >
          {t('root.order.submit')}
        </Button>
      </Grid>
      {confirmation && <ConfirmationDialog order={order} onClose={() => setConfirmation(false)} onAccept={confirmOrder} />}
    </Grid>
  );
}

export default withRouter(OrderSideBar);