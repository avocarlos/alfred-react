import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

interface Props {
  title: string;
  amount: number;
  onClick?: () => void;
}

const FeaturedCard: React.FC<Props> = (props) => {
  const {
    title,
    amount,
    onClick
  } = props;

  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="subtitle1" color="textSecondary">Productos ({amount})</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default FeaturedCard;