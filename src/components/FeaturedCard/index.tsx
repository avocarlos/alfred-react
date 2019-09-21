import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

interface Props {
  title: string;
  price?: number;
  category?: string;
  thumbnail: string;
  onClick?: () => void;
}

const FeaturedCard: React.FC<Props> = (props) => {
  const {
    title,
    price,
    category,
    thumbnail,
    onClick
  } = props;

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          image={thumbnail}
          title={title}
        />
        <CardContent>
          <Typography variant="h6" noWrap>{title}</Typography>
          <Typography variant="subtitle1" color="textSecondary">{category}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default FeaturedCard;