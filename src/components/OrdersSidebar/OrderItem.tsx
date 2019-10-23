import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';

import useLanguage from '../../hooks/useLanguage';
import {makeStyles} from '@material-ui/core/styles';
import {SubmittedOrder} from '../../reducer/types';

const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingRight: theme.spacing(9)
  },
  text: {
    display:'flex',
    flexDirection:'column'
  }
}))

interface Props {
  order: SubmittedOrder;
  onClick: (order: SubmittedOrder) => void,
  onCancel: (order: SubmittedOrder) => void
}

const OrderItem: React.FC<Props> = (props) => {
  const {order, onClick, onCancel} = props;
  const {t} = useLanguage();
  const classes = useStyles();

  return (
    <ListItem 
      classes={{root:classes.listItem}}
      button
      divider
      onClick={() => onClick(order)}
    >
      <ListItemText 
        classes={{root:classes.text}}
        primary={t('root.orders.order.title', {number: order.number})}
        primaryTypographyProps={{
          noWrap: true,
          variant: 'body2'
        }}
        secondary={t(`root.orderStatuses.${order.status}`)}
      />
      {order.status !== 'cancelled' && (
        <ListItemSecondaryAction>
          <Button onClick={() => onCancel(order)}>{t('root.orders.order.cancel')}</Button>
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
}

export default OrderItem;