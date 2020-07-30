import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from './Components/home';
import About from './Components/about';
import LogIn from './Components/login';
import SignUp from './Components/signUp';
import Scheduler from './Components/scheduler';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        <Redirect exact to={{ pathname: '/' }} />
      )
    }
  />
);

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <NavigationBar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/logIn' component={LogIn} />
          <Route path='/signUp' component={SignUp} />
          <PrivateRoute path='/scheduler' component={Scheduler} />
          <Footer />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
