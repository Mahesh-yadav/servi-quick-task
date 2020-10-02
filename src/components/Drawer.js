import React from 'react';
import classes from './Drawer.module.css';
import sprite from '../assets/icons.svg';

const DRAWER_ITEMS = [
  {
    id: '1',
    text: 'AC Repair',
    icon: 'air-conditioner',
  },
  {
    id: '2',
    text: 'Geyser Repair',
    icon: 'boiler',
  },
  {
    id: '3',
    text: 'Refrigerator Repair',
    icon: 'fridge',
  },
  {
    id: '4',
    text: 'Washing Machine',
    icon: 'washing-machine',
  },
];

const Item = ({ item, setSelectedId }) => {
  return (
    <li className={classes.DrawerItem} onClick={() => setSelectedId(undefined)}>
      <svg className={`icon ${classes.DrawerItemIcon}`}>
        <use href={`${sprite}#${item.icon}`} />
      </svg>
      <span>{item.text}</span>
    </li>
  );
};

const Drawer = ({ open, selectedId, setSelectedId }) => {
  return (
    <aside className={`${classes.Drawer} ${open ? classes.ShowDrawer : ''}`}>
      <header className={classes.DrawerHeader}>
        <i
          className="fas fa-long-arrow-alt-right fa-2x"
          onClick={() => setSelectedId(undefined)}
        ></i>
        <p>Please Select</p>
      </header>
      <section>
        <ul className={classes.DrawerItems}>
          {DRAWER_ITEMS.map((item) => (
            <Item key={item.id} item={item} setSelectedId={setSelectedId} />
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default Drawer;
