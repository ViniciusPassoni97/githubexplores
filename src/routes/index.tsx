import React from 'react';
import Dashbord from '../pages/dashbord/index';
import Repository from '../pages/repository/index';
import {Switch,Route} from 'react-router-dom';

const Routes:React.FC = () => (
    <Switch>
      <Route path = '/' exact component={Dashbord} />
      <Route path = '/repository' component={Repository}/>
    </Switch>
);
export default Routes;