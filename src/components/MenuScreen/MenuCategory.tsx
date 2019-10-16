import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MenuItem from './MenuItem';
import StoreContext from '../../context';
import { setOrder } from '../../reducer/actions';
import { Box } from '@material-ui/core';

import { Order } from '../../reducer';
export interface Item {
  id: string;
  name: string;
  description?: string;
  price: number;
  thumbnail: string;
}

interface MenuCategoryProps {
  title: string;
  items: Item[];
}

const MenuCategory: React.FC<MenuCategoryProps> = ({title, items}) => {
  const {state, dispatch} = useContext(StoreContext);

  function onAddItem(item: Order['items'][0]) {
    const { order } = state;

    if (order) {
      const orderItem = order.items.find(({id}) => id === item.id);

      if (orderItem) {
        orderItem.quantity += 1;
      } else {
        order.items.push(item);
      }

      dispatch(setOrder(order));
    }
  }

  const renderItems = () => items.map(({id, name, thumbnail, price, description}) => {
    return (
      <Grid key={id} item xs={12}>
        <MenuItem itemId={id} title={name} thumbnail={thumbnail} price={price} subtitle={description} onClick={onAddItem} />
        <Divider/>
      </Grid>
    );
  })

  return (
    <Box mb={6}>
      <Typography gutterBottom variant="h5">{title}</Typography>
      <Grid container>
        {renderItems()}
      </Grid>
    </Box>
  );
}

export default MenuCategory;