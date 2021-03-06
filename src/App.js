import React, { Component } from 'react';

import './App.less';

import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notifications from './pages/ui/notifications'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallerys from './pages/ui/gallerys'
import Carousels from './pages/ui/carousels'
import FormLogin from './pages/form/formLogin'
import FormRegister from './pages/form/formRegister'

import BasicsTable from './pages/table/basicsTable'
import SeniorTable from './pages/table/seniorTable'
import RichText from './pages/rich/index'
import City from './pages/city/index'
import Order from './pages/order/index'
import Details from './pages/order/details'
import User from './pages/user/index'
import BikeMap from './pages/map/bikeMap'

import Bar from './pages/bizcharts/bar'
import Pie from './pages/bizcharts/pie'
import Line from './pages/bizcharts/line'
import Permission from './pages/permission'


import Admin from './admin'
import Home from './pages/home';
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>

        
          <Route path="/order/details/:id"  component={Details} />

          <Route path="/admin"   render={() => <Admin>
            <Route path="/admin/ui/buttons" component={Buttons} />
            <Route path="/admin/ui/modals" component={Modals} />
            <Route path="/admin/ui/loadings" component={Loadings} />
            <Route path="/admin/ui/notification" component={Notifications} />
            <Route path="/admin/ui/messages" component={Messages} />
            <Route path="/admin/ui/tabs" component={Tabs} />
            <Route path="/admin/ui/gallery" component={Gallerys} />
            <Route path="/admin/ui/carousel" component={Carousels} />

            <Route path="/admin/form/login" component={FormLogin} />
            <Route path="/admin/form/reg" component={FormRegister} />

            <Route path="/admin/table/basic" component={BasicsTable} />

            <Route path="/admin/table/hight" component={SeniorTable} />
            <Route path="/admin/rich" component={RichText} />
            <Route path="/admin/city" component={City} />
            <Route path="/admin/order" component={Order} />
            <Route path="/admin/user" component={User} />
            <Route path="/admin/BikeMap" component={BikeMap} />
            <Route path="/admin/charts/bar" component={Bar} />
            <Route path="/admin/charts/pie" component={Pie} />
            <Route path="/admin/charts/line" component={Line} />
            <Route path="/admin/permission" component={Permission} />
            <Route path="/admin/home" component={Home} />
            
           
          </Admin>} />
          <Route path="/BikeMap" component={BikeMap} />
          <Route path="/" component={Login} />
        </Switch>
      </HashRouter>

    );
  }
}

export default App;
