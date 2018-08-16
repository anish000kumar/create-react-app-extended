import { BrowserRouter, Route } from 'react-router-dom';
import React, { Component } from 'react';
import App from '@views/app/App';

export default class RootRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    );
  }
}
