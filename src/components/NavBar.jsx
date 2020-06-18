import React from 'react';

var NavBar = ({ changeView, view }) => (
  <div className="navBar">
    <span
      className={
        view === 'Yearly Totals' ? 'selectedNavButton' : 'navBarButton'
      }
      onClick={() => changeView('Yearly Totals')}
    >
      Yearly Totals
    </span>
    <span
      className={
        view === 'Monthly Totals' ? 'selectedNavButton' : 'navBarButton'
      }
      onClick={() => changeView('Monthly Totals')}
    >
      Monthly Totals
    </span>
  </div>
);

export default NavBar;
