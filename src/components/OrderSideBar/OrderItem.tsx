import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingRight: theme.spacing(9)
  },
  text: {
    display:'flex'
  }
}))

interface Props {
  title: string;
  quantity: number;
  thumbnail: string;
}

const OrderItem: React.FC<Props> = (props) => {
  const {title, quantity, thumbnail} = props;
  const classes = useStyles();

  return (
    <ListItem 
      classes={{root:classes.listItem}}
      divider
    >
      <ListItemAvatar>
        <Avatar>
          <img src={thumbnail}/>
        </Avatar>
      </ListItemAvatar>
      <ListItemText 
        classes={{root:classes.text}}
        primary={title}
        primaryTypographyProps={{
          noWrap: true,
          variant: 'body2'
        }}
      />
      <ListItemSecondaryAction>
        <Select
          value={quantity}
          inputProps={{
            name: 'quantity',
            id: 'quantity',
          }}
        >
          {[0,1,2,3,4,5,6,7,8,9].map((value) => (
            <MenuItem 
              key={value} 
              value={value}
            >
              {value.toString()}
            </MenuItem>
          ))}
        </Select>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default OrderItem;