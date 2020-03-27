import React, { Component } from 'react';

/**
 * HOC to which will wrap components
 * our global state is stored as State
 * @param {Component} WrappedComponent
 */

import PropTypes from 'prop-types';

function Provider(WrappedComponent) {
  // returns React.Component
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        store: { ...this.props.store },
      };
    }

    componentDidUpdate() {
      this.setState({ store: { ...this.props.store } });
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

Provider.propType = {
  store: PropTypes.object,
};

export default Provider;
