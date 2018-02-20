
import requireAuthenticated from '../components/auth/require-authenticated';
import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>#Dashboardiii</h1>
      </div>
    )
  }
}

export default requireAuthenticated((props) => <Dashboard {...props} />);
