import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import useLanguage from '../../hooks/useLanguage';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingRight: theme.spacing(9)
  },
  text: {
    display:'flex',
    flexDirection:'column'
  }
}))

interface Props {
  itemId: string;
  title: string;
  quantity: number;
  thumbnail: string;
  onRemove: (itemId: string) => void,
  onQuantityChange: (itemId: string, quanity: number) => void
}

const OrderItem: React.FC<Props> = (props) => {
  const {itemId, title, quantity, thumbnail, onRemove, onQuantityChange} = props;
  const {t} = useLanguage();
  const classes = useStyles();

  function onQuantitySelected(event: React.ChangeEvent<{ value: unknown }>) {
    const quantity = event.target.value as number;
    onQuantityChange(itemId, quantity);
  }

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
          gutterBottom: true,
          variant: 'body2'
        }}
        secondary={t('root.order.remove')}
        secondaryTypographyProps={{
          variant: 'button',
          onClick: () => onRemove(itemId)
        }}
      />
      <ListItemSecondaryAction>
        <Select
          onChange={onQuantitySelected}
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