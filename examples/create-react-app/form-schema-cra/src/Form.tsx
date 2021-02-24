import React, { useEffect, useState } from 'react';
import { Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import { Forms, getHandler } from './pangolin';

interface IState {
  formIndex: number;
  formData: object;
  validPage: boolean;
  redirect: string;
}

// Can just pass regular rjsf templates to override fieldsets, layout, etc. and will pass through
function ObjectFieldTemplate({ properties }: { properties: any }) {
  return (
    <>
      <div>
        {properties.map((prop: any) => (
          <div>{prop.content}</div>
        ))}
      </div>
    </>
  );
}

class Home extends React.Component<RouteComponentProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      validPage: true,
      formData: {},
      formIndex: 0,
      redirect: '',
    };
    this.rerouteHandler = this.rerouteHandler.bind(this);
  }

  componentDidUpdate(prevProps) {
    this.onUpdate(prevProps);
  }

  onUpdate(prevProps: any) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.getInfo();
      this.setState({ redirect: '' });
    }
  }

  async getInfo() {
    const res = await axios.get(`${this.props.location.pathname}`);
    this.setState(res.data);
  }

  rerouteHandler(nextPage: string, _isValid: boolean, lastPage: boolean) {
    this.setState({ redirect: nextPage });
  }

  render() {
    const Form = Forms[this.state.formIndex];
    return (
      <>
        {this.state.redirect && <Redirect to={this.state.redirect} push />}
        <h1>Form</h1>
        {this.state.validPage && (
          <Form
            formData={this.state.formData}
            ObjectFieldTemplate={ObjectFieldTemplate}
            rerouteHandler={this.rerouteHandler}
          />
        )}
        {!this.state.validPage && <h1>page out of range</h1>}
      </>
    );
  }
}

export default withRouter(Home);
