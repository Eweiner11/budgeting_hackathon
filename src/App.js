import React from 'react';

import NavBar from './components/NavBar.jsx';
import YearlyTotals from './components/YearlyTotals.jsx';
import MonthlyTotals from './components/MonthlyTotals.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'Yearly Totals',
    };
    this.renderView = this.renderView.bind(this);
    this.changeView = this.changeView.bind(this);
  }
  changeView(view) {
    this.setState({ view: view });
  }

  renderView() {
    if (this.state.view === 'Yearly Totals') {
      return <YearlyTotals />;
    } else if (this.state.view === 'Monthly Totals') {
      return <MonthlyTotals />;
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar view={this.state.view} changeView={this.changeView} />
          <div className="chartContainer">{this.renderView()}</div>
        </header>
      </div>
    );
  }
}

export default App;
