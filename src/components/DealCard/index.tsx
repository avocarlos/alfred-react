import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

interface Props {
  title: string;
  thumbnail: string;
}

const DealCard: React.FC<Props> = (props) => {
  const {
    title,
    thumbnail,
  } = props;

  return (
    <Card elevation={1}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          image={thumbnail}
          title={title}
        />
      </CardActionArea>
    </Card>
  );
}

export default DealCard;