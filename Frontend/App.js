jsx
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StudentLogin from './StudentLogin';
import StudentRegister from './StudentRegister';
import StudentProfile from './StudentProfile';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import ElectiveList from './ElectiveList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/student/login" component={StudentLogin} />
        <Route path="/student/register" component={StudentRegister} />
        <Route path="/student/profile" component={StudentProfile} />
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/admin/dashboard" component={AdminDashboard} />
        <Route path="/electives" component={ElectiveList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;