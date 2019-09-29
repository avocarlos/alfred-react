import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Summary from '../OrderSummary';
import useLanguage from '../../hooks/useLanguage';
interface Item {
  id: string | number;
  name: string;
  quantity: number;
  category: {
    id: string | number;
    name: string;
  };
  price: number;
  thumbnail: string;
}

interface Props {
  order: {
    id: string | number;
    number: number;
    items:  Array<Item>;
  };
  onClose: () => void;
  onAccept: () => void;
}

const ConfirmationDialog: React.FC<Props> = ({order, onAccept, onClose}) => {
  const {t} = useLanguage();
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>{t('root.dialog.confirmation.title', {number: order.number})}</DialogTitle>
      <DialogContent>
        <Summary items={order.items}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t('root.dialog.confirmation.cancel', {number: order.number})}</Button>
        <Button color="secondary" onClick={onAccept}>{t('root.dialog.confirmation.submit', {number: order.number})}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationDialog;