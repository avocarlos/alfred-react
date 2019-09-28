import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

interface Props {
  id: string;
  title: string;
  amount: number;
  onClick: (category: string) => void;
}

const CategoryCard: React.FC<Props> = (props) => {
  const {
    id,
    title,
    amount,
    onClick
  } = props;

  return (
    <Card elevation={2}>
      <CardActionArea onClick={() => onClick(id)}>
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="subtitle1" color="textSecondary">Productos ({amount})</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CategoryCard;