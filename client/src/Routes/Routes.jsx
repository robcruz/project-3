import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from '../Layout/Home/Home';
import Info from '../Layout/Info/Info';
import NavBar from '../Layout/NavBar/NavBar';
import Add from '../Layout/Add/Add';
import Edit from '../Layout/Edit/Edit';
import Chat from '../Layout/Chat/Chat';
import Upload from '../Layout/Upload/Upload';

const Routes = () => {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/add' component={Add} exact />
        <Route path='/info' component={Info} exact />
        <Route path='/edit' component={Edit} exact />
        <Route path='/chat' component={Chat} exact />
        <Route path='/upload' component={Upload} exact />
      </Switch>
    </Fragment>
  );
};

export default Routes;
