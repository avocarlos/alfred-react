import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Summary from '../OrderSummary';
import useLanguage from '../../hooks/useLanguage';
import { SubmittedOrder } from '../../reducer/types';

interface Props {
  order: SubmittedOrder;
  onClose: () => void;
}

const ConfirmationDialog: React.FC<Props> = ({order, onClose}) => {
  const {t} = useLanguage();
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>{t('root.dialog.summary.title', {number: order.number})}</DialogTitle>
      <DialogContent>
        <Summary items={order.items}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t('root.dialog.summary.close')}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationDialog;