import React from 'react';

/**
 * HOC to which will wrap components
 * our global state is stored as State
 * @param {Component} WrappedComponent
 */

import PropTypes from 'prop-types';

class Provider extends React.Component {
  constructor(props) {
    super(props);

    const store = this.props.store.getState();
    this.state = {
      store: store,
    };
    /**
     * todo: set reducer: state to state
     */
  }

  static propType = {
    store: PropTypes.object,
  };

  componentWillReceiveProps(nextProps) {
    const { store } = nextProps;
    this.setState({ store: { ...store } });
  }

  render() {
    const propsToPass = this.state;
    return (
      <React.Component {...propsToPass}>{this.props.children}</React.Component>
    );
  }
}

export default Provider;
