import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import FeaturedCard from '../FeaturedCard';
import CategoryCard from '../CategoryCard';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import {featured, categories} from './faker';

const useStyles = makeStyles((theme) => ({
  bottomSpace: {
    marginBottom: theme.spacing(4)
  }
}));

const Categories: React.FC<RouteComponentProps> = (props) => {
  const classes = useStyles();
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
    return featured.map(({id, name, thumbnail, category}) => (
      <Grid key={id} item xs={3}>
        <FeaturedCard title={name} thumbnail={thumbnail} category={category} onClick={onCategoryClick} />
      </Grid>
    ));
  }

  return (
    <Grid container>
      <Grid item xs={12} classes={{item: classes.bottomSpace}}>
        <Typography gutterBottom variant="h5">Recomendados</Typography>
        <Grid container spacing={4}>
          {renderFeatured()}
        </Grid>
      </Grid>
      <Grid item xs={12} classes={{item: classes.bottomSpace}}>
        <Typography gutterBottom variant="h5">Categorias</Typography>
        <Grid container spacing={4}>
          {renderCategories()}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withRouter(Categories);