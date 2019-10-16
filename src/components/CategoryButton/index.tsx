import React from 'react';
import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import * as MuiIcons from '@material-ui/icons';
import * as MuiColor from '@material-ui/core/colors';

interface Props {
  id: string;
  title: string;
  onClick: (category: string) => void;
}

interface IconProps {
  color: 'primary';
}

interface IconDictionary {
  [key: string]: {
    color: string;
    Icon: React.FC<IconProps>
  }
}

const Icons: IconDictionary = {
  '1': {
    color: MuiColor.red[500],
    Icon: (props: IconProps) => <MuiIcons.Restaurant {...props} />
  },
  '2': {
    color: MuiColor.blue[500],
    Icon: (props: IconProps) => <MuiIcons.LocalCafe {...props} />
  },
  '3': {
    color: MuiColor.green[500],
    Icon: (props: IconProps) => <MuiIcons.Cake {...props} />
  },
  '4': {
    color: MuiColor.orange[500],
    Icon: (props: IconProps) => <MuiIcons.Storefront {...props} />
  },
  '5': {
    color: MuiColor.cyan[600],
    Icon: (props: IconProps) => <MuiIcons.RoomService {...props} />
  },
  '6': {
    color: MuiColor.purple[500],
    Icon: (props: IconProps) => <MuiIcons.LocalOffer {...props} />
  },
};

interface CategoryIconProps {
  id: string;
  onClick: () => void;
}

const CategoryIcon = ({id, onClick}: CategoryIconProps) => {
  const { color, Icon } = Icons[id];
  return (
    <Fab size="large" style={{backgroundColor: color, boxShadow: 'unset'}} onClick={onClick}>
      <Icon color="primary" />
    </Fab>
  );
};

const CategoryButton: React.FC<Props> = (props) => {
  const {
    id,
    title,
    onClick
  } = props;

  const onIconClick = () => onClick(id);

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Box mb={2}>
        <CategoryIcon id={id} onClick={onIconClick}/>
      </Box>
      <Typography align="center" variant="subtitle2">{title}</Typography>
    </Box>
  );
}

export default CategoryButton;