import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import CategoryItem from './CategoryItem';
import StoreContext from '../../context';
import { setOrder } from '../../reducer/actions';
import { category } from './faker';

export interface Item {
  name: string;
  quantity: number;
  price: number;
  thumbnail: string;
}

const useStyles = makeStyles((theme) => ({
  bottomSpace: {
    marginBottom: theme.spacing(4)
  }
}));

const Category: React.FC = () => {
  const classes = useStyles();
  const {state, dispatch} = useContext(StoreContext);

  function onAddItem(item: Item) {
    const { order } = state;

    if (order) {
      const orderItem = order.items.find(({name}) => name === item.name);

      if (orderItem) {
        orderItem.quantity += 1;
      } else {
        order.items.push(item);
      }

      dispatch(setOrder(order));
    }
  }

  const renderItems = () => category.items.map(({id, name, thumbnail, price, description}) => {
    return (
      <Grid item xs={12}>
        <CategoryItem key={id} title={name} thumbnail={thumbnail} price={price} subtitle={description} onClick={onAddItem} />
        <Divider/>
      </Grid>
    );
  })

  return (
    <Grid container>
      <Grid item xs={12} classes={{item: classes.bottomSpace}}>
        <Typography gutterBottom variant="h5">{category.name}</Typography>
        <Grid container>
          {renderItems()}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Category;