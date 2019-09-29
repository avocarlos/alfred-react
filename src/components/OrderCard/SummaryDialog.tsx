import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Summary from '../OrderSummary';
import useLanguage from '../../hooks/useLanguage';
import { Order } from '.';


interface Props {
  order: Order;
  setSummary: (open: boolean) => void
}

const SummaryDialog: React.FC<Props> = (props) => {
  const {t} = useLanguage();
  const {order, setSummary} = props;

  return (
    <Dialog open={true} onClose={() => setSummary(false)}>
      <DialogTitle>{t('root.dialog.summary.title', {number: order.number})}</DialogTitle>
      <DialogContent>
        <Summary items={order.items}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setSummary(false)}>{t('root.dialog.summary.close')}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default SummaryDialog;