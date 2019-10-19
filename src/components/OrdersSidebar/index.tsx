import React, {useState} from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import OrderItem from './OrderItem';
import List from '@material-ui/core/List';
import ConfirmationDialog from './OrderDialog';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import useLanguage from '../../hooks/useLanguage';

import { setOrders } from '../../reducer/actions';
import { SubmittedOrder } from '../../reducer/types';
import { useStore } from '../../context';

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
  onClose: () => void;
}

const OrdersSideBar: React.FC<Props> = (props) => {
  const {onClose} = props;
  const { state: { orders }, dispatch } = useStore();
  const {t} = useLanguage();
  const [selectedOrder, setSelectedOrder] = useState<SubmittedOrder | null>();
  const classes = useStyles();

  const renderItems = () => orders.map((order) => {
    return <OrderItem 
      key={order.id}  
      order={order}
      onClick={setSelectedOrder}
      onCancel={cancelOrder}
    />
  });

  function cancelOrder(order: SubmittedOrder): void {
    order.status = 'cancelled';
    dispatch(setOrders(orders));
  }

  return (
    <Grid container direction="column" classes={{container:classes.container}}>
      <Grid item classes={{item:classes.header}}>
        <Toolbar disableGutters classes={{root:classes.toolbar}}>
          <IconButton color="inherit" onClick={() => onClose()}>
              <ChevronRightIcon />
          </IconButton>
          <Typography variant="h6">{t('root.orders.title')}</Typography>
        </Toolbar>
        <Divider/>
      </Grid>
      <Grid item classes={{item:classes.list}}>
        <List disablePadding>
          {renderItems()}
        </List>
      </Grid>
      {selectedOrder && <ConfirmationDialog order={selectedOrder} onClose={() => setSelectedOrder(null)} />}
    </Grid>
  );
}

export default withRouter(OrdersSideBar);