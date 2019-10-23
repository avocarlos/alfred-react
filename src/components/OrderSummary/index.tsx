import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import useLanguage from '../../hooks/useLanguage';
import { Order } from '../../reducer/types';

const useStyles = makeStyles({
  tableFooter: {
    border:'none'
  }
});

const TAX_RATE = 0.1;

interface Props {
  items: Order['items'];
}

const OrderSummary: React.FC<Props> = ({items}) => {
  const {t} = useLanguage();
  const classes = useStyles();
  const subtotal = items.reduce((acc, item) => acc += (item.price * item.quantity), 0)
  const itbms = subtotal * TAX_RATE;
  const total = subtotal + itbms;

  const footer = [{
    name: t('root.summary.subtotal'),
    value: subtotal
  }, {
    name: t('root.summary.tax'),
    value: itbms
  }, {
    name: t('root.summary.total'),
    value: total
  }];

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell colSpan={3}>{t('root.summary.item')}</TableCell>
          <TableCell align="right">{t('root.summary.price')}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map(({id, thumbnail, name, quantity, price}) => (
          <TableRow key={id}>
            <TableCell>
              <Avatar src={thumbnail}/>
            </TableCell>
            <TableCell>
              {name}
            </TableCell>
            <TableCell align="right">
              ${price.toFixed(2)} x{quantity}
            </TableCell>
            <TableCell align="right">
              <strong>${(price * quantity).toFixed(2)}</strong>
            </TableCell>
          </TableRow>
        ))}
        {footer.map(({name, value}) => (
          <TableRow key={name}>
            <TableCell 
              size="small"
              colSpan={3} 
              align="right"
              classes={{root:classes.tableFooter}}
            >
              {name}
            </TableCell>
            <TableCell 
              size="small" 
              align="right"
              classes={{root:classes.tableFooter}}
            >
              <strong>${value.toFixed(2)}</strong>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default OrderSummary;