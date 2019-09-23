import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import CategoryItem from './CategoryItem';

import {category} from './faker';

const useStyles = makeStyles((theme) => ({
  bottomSpace: {
    marginBottom: theme.spacing(4)
  }
}));

const Category: React.FC = (props) => {
  const classes = useStyles();

  const renderItems = () => category.items.map(({id, name, thumbnail, price, description}) => {
    return (
      <Grid item xs={12}>
        <CategoryItem key={id} title={name} thumbnail={thumbnail} price={price} subtitle={description} />
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

export default withRouter(Category);