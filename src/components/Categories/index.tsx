import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FeaturedCard from '../FeaturedCard';
import CategoryCard from '../CategoryCard';
import OrderCard from '../OrderCard';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import useLanguage from '../../hooks/useLanguage';
import { OrderStatus } from '../OrderCard';
import StoreContext from '../../context';

import {featured, categories} from './faker';

const useStyles = makeStyles((theme) => ({
  bottomSpace: {
    marginBottom: theme.spacing(6)
  }
}));

const Categories: React.FC<RouteComponentProps> = (props) => {
  const classes = useStyles();
  const { state: { orders } } = useContext(StoreContext);
  const {t} = useLanguage();
  const {history} = props;

  function onCategoryClick(name: string): void {
    history.push(`/categories/${name}`);
  }

  function renderCategories() {
    return categories.map(({id, name, amount}) => (
      <Grid key={id} item xs={3}>
        <CategoryCard id={id} title={name} amount={amount} onClick={onCategoryClick} />
      </Grid>
    ));
  }

  function renderFeatured() {
    return featured.map(({id, name, thumbnail, category, price}) => (
      <Grid key={id} item xs={3}>
        <FeaturedCard price={price} title={name} thumbnail={thumbnail} category={category} onClick={onCategoryClick} />
      </Grid>
    ));
  }

  function renderOrders() {
    return orders.map((order) => (
      <Grid key={order.id} item xs={3}>
        <OrderCard status={order.status as OrderStatus} number={order.number} order={order} />
      </Grid>
    ));
  }

  return (
    <Grid container>
      {!!orders.length && (
        <Grid item xs={12} classes={{item: classes.bottomSpace}}>
          <Typography paragraph variant="h5">{t('categories.orders.title')}</Typography>
          <Grid container spacing={4} classes={{container: classes.bottomSpace}}>
            {renderOrders()}
          </Grid>
          <Divider/>
        </Grid>
      )}
      <Grid item xs={12} classes={{item: classes.bottomSpace}}>
        <Typography paragraph variant="h5">{t('categories.featured.title')}</Typography>
        <Grid container spacing={4}>
          {renderFeatured()}
        </Grid>
      </Grid>
      <Grid item xs={12} classes={{item: classes.bottomSpace}}>
        <Typography paragraph variant="h5">{t('categories.categories.title')}</Typography>
        <Grid container spacing={4}>
          {renderCategories()}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withRouter(Categories);