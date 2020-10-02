import React from 'react';
import classes from './Services.module.css';
import sprite from '../assets/icons.svg';

const SERVICES = [
  {
    id: '1',
    name: 'Appliance Repair',
    icon: 'electrical-appliance',
  },
  {
    id: '2',
    name: 'Painter',
    icon: 'paint-roller',
  },
  {
    id: '3',
    name: 'Virus Fumigation',
    icon: 'fumigate',
  },
  {
    id: '4',
    name: 'Carpenter',
    icon: 'carpenter',
  },
  {
    id: '5',
    name: 'Plumber',
    icon: 'water-tap',
  },
  {
    id: '6',
    name: 'Electrician',
    icon: 'plug',
  },
];

const Service = ({ service, selectedId, setSelectedId }) => {
  return (
    <div
      onClick={() => setSelectedId(service.id)}
      className={classes.serviceWrapper}
    >
      <svg
        className={`icon ${classes.serviceIcon} ${
          selectedId === service.id ? classes.selectedIcon : ''
        }`}
      >
        <use href={`${sprite}#${service.icon}`} />
      </svg>
      <p
        className={`${classes.serviceName} ${
          selectedId === service.id ? classes.serviceSelected : ''
        }`}
      >
        {service.name}
      </p>
    </div>
  );
};

const Services = ({ selectedId, setSelectedId }) => {
  return (
    <div className={classes.servicesContainer}>
      <header>
        <h1 className={classes.servicesTitle}>Which service do you need?</h1>
        <p className={classes.servicesSubtitle}>
          Hire Local Professional Servicemen in Bangalore
        </p>
      </header>
      <section className={classes.services}>
        {SERVICES.map((service) => (
          <Service
            setSelectedId={setSelectedId}
            key={service.id}
            service={service}
            selectedId={selectedId}
          />
        ))}
      </section>
    </div>
  );
};

export default Services;
