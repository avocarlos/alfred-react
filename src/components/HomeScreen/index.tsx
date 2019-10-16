import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FeaturedCard from '../FeaturedCard';
import DealCard from '../DealCard';
import CategoryButton from '../CategoryButton';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import useLanguage from '../../hooks/useLanguage';
import Carousel from '../Carousel';
import chunk from 'lodash.chunk';

import {deals, featured, categories, events} from './faker';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  bottomSpace: {
    marginTop: theme.spacing(4)
  }
}));

const HomeScreen: React.FC<RouteComponentProps> = (props) => {
  const classes = useStyles();
  const {t} = useLanguage();
  const {history} = props;

  function onCategoryClick(id: string): void {
    history.push(`/categories/${id}`);
  }

  function renderCategories() {
    return categories.map(({id, name}) => (
      <Grid key={id} item xs={2}>
        <CategoryButton id={id} title={name} onClick={onCategoryClick} />
      </Grid>
    ));
  }

  function renderFeatured() {
    return featured.map(({id, name, thumbnail, category, price}) => (
      <Grid key={id} item xs={6}>
        <FeaturedCard price={price} title={name} thumbnail={thumbnail} category={category} onClick={onCategoryClick} />
      </Grid>
    ));
  }

  function renderDeals() {
    const dealsChunks = chunk(deals, 2);
    return dealsChunks.map((item, idx) => (
      <Grid key={idx} container spacing={2} style={{width:'100%', margin:0}}>
        {item.map(({title, image}) => (
          <Grid key={title} item xs={6}>
            <DealCard title={title} thumbnail={image} />
          </Grid>
        ))}
      </Grid>
    ));
  }

  function renderEvents() {
    const dealsChunks = chunk(events, 1);
    return dealsChunks.map((item, idx) => (
      <Grid key={idx} container spacing={2} style={{width:'100%', margin:0}}>
        {item.map(({title, image}) => (
          <Grid key={title} item xs={12}>
            <DealCard title={title} thumbnail={image} />
          </Grid>
        ))}
      </Grid>
    ));
  }

  return (
    <Grid container>
      <Grid item xs={12} classes={{item: classes.bottomSpace}}>
        <Grid container spacing={2}>
          {renderCategories()}
        </Grid>
        <Box mt={3}>
          <Divider />
        </Box>
      </Grid>
      <Grid item xs={12} classes={{item: classes.bottomSpace}}>
        <Typography variant="h5">{t('home.deals.title')}</Typography>
        <Typography paragraph color="textSecondary" variant="subtitle1">{t('home.deals.subtitle')}</Typography>
        <Grid container spacing={2}>
          <Carousel>
            {renderDeals()}
          </Carousel>
        </Grid>
      </Grid>
      <Grid item xs={12} classes={{item: classes.bottomSpace}}>
        <Typography variant="h5">{t('home.events.title')}</Typography>
        <Typography paragraph color="textSecondary" variant="subtitle1">{t('home.events.subtitle')}</Typography>
        <Grid container spacing={2}>
          <Carousel>
            {renderEvents()}
          </Carousel>
        </Grid>
      </Grid>
      <Grid item xs={12} classes={{item: classes.bottomSpace}}>
        <Typography variant="h5">{t('home.featured.title')}</Typography>
        <Typography paragraph color="textSecondary" variant="subtitle1">{t('home.featured.subtitle')}</Typography>
        <Grid container spacing={2}>
          {renderFeatured()}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withRouter(HomeScreen);