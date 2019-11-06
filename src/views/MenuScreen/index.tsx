import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { menuCategories } from './faker';
import MenuCategory from './MenuCategory';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const MenuScreen: React.FC = () => {
  const [tab, setTab] = useState(0);
  const category = menuCategories[tab];
  return (
    <>
      <Box mb={4}>
        <Tabs value={tab} onChange={(_, tab) => setTab(tab)}>
          { menuCategories.map(({id, name}) => <Tab key={id} label={name} />) }
        </Tabs>
      </Box>
      <MenuCategory title={category.name} items={category.items} />
    </>
  );
};

export default MenuScreen;