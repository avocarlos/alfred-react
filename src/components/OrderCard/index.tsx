import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SummaryDialog from './SummaryDialog';
import useLanguage from '../../hooks/useLanguage';

import { Order } from '../../reducer';

enum statuses {
  Pending = 'Recibida',
  'In Progress' = 'Preparacion',
  Finished = 'Finalizada',
  Delivered = 'Enviada'
}

export type OrderStatus = 'Pending' | 'In Progress' | 'Finished' | 'Delivered';

interface Props {
  status: OrderStatus;
  number: number;
  order: Order;
}

const OrderCard: React.FC<Props> = (props) => {
  const [summary, setSummary] = useState(false);
  const {t} = useLanguage();
  const {
    number,
    status,
    order
  } = props;
  
  return (
    <Card elevation={2}>
      <CardActionArea onClick={() => setSummary(true)}>
        <CardContent>
          <Typography variant="h6">{t('categories.orders.order', {number})}</Typography>
          <Typography variant="subtitle1" color="textSecondary">{statuses[status]}</Typography>
        </CardContent>
      </CardActionArea>
      {summary && <SummaryDialog order={order} setSummary={setSummary}/>}
    </Card>
  );
}

export default OrderCard;