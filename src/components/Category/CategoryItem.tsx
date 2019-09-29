import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import { Item } from './index';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3)
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius:0
  },
  primaryText: {
    flexGrow:1
  }
}));
interface Props {
  title: string;
  subtitle?: string;
  thumbnail: string;
  price: number;
  onClick: (item: Item) => void;
}

const CategoryItem: React.FC<Props> = ({thumbnail, title, subtitle, price, onClick}) => {
  const classes = useStyles();

  function onAddItem() {
    const item = {
      name: title,
      quantity: 1,
      thumbnail,
      price
    }
    onClick(item);
  }

  return (
    <Grid container classes={{container: classes.container}} spacing={4} alignItems="center">
      <Grid item>
        <Avatar src={thumbnail} classes={{root:classes.avatar}} />
      </Grid>
      <Grid item classes={{item:classes.primaryText}}>
        <Typography variant="h6">{title}</Typography>
        {subtitle && <Typography variant="subtitle1" color="textSecondary">{subtitle}</Typography>}
      </Grid>
      <Grid item>
        <Typography variant="h6">${price.toFixed(2)}</Typography>
      </Grid>
      <Grid item>
        <Fab size="medium" color="secondary" onClick={onAddItem}>
          <AddShoppingCartIcon />
        </Fab>
      </Grid>
    </Grid>
  );
}

export default CategoryItem;