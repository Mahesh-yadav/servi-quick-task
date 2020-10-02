import React, { useRef, useEffect } from 'react';
import classes from './Header.module.css';
import logo from '../assets/images/logo.png';

const Header = () => {
  const headerRef = useRef();

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollPos = window.pageYOffset;

      const isSticky = headerRef.current.classList.contains(
        classes.headerSticky
      );

      if (scrollPos > 91 && !isSticky) {
        headerRef.current.classList.add(classes.headerSticky);
      } else if (scrollPos <= 91 && isSticky) {
        headerRef.current.classList.remove(classes.headerSticky);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headerRef]);

  return (
    <div className={classes.headerContainer} ref={headerRef}>
      <div className={classes.content}>
        <img src={logo} alt="ServiQuick Logo" className={classes.logoImg} />
        <div className={classes.searchBox}>
          <i className={`fas fa-search ${classes.searchIcon}`}></i>
          <input
            className={classes.searchInput}
            placeholder="Which service do you need?"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
