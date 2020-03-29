import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Provider from '../react-adapter';
import { createStore } from '../store';
import sensorReducer from '../reducer';

describe('React homemade state managment component', () => {
  let store;
  let wrapper;
  beforeEach(() => {
    store = createStore([sensorReducer]);
    wrapper = shallow(<Provider store={store} />);
  });

  test('renders without crashing given the required props', () => {
    expect(wrapper).toBeDefined();
  });

  describe('State test', () => {
    test('provider component should set store props as global its state', () => {
      // use of state() method

      const intialState = sensorReducer();
      const expectedState = { ...intialState };
      expect(wrapper.state().store).toEqual(expectedState);
      // expect(wrapper.state()).toContain({ store: expectedState });
    });

    test('Props update should set new state', () => {
      const defaultStoreProps = sensorReducer();
      const expectedStoreProps = { ...defaultStoreProps, sensors: [{}, {}] };

      wrapper.setProps({ store: { ...expectedStoreProps } });
      expect(wrapper.state().store).toEqual(expectedStoreProps);
    });

    test('provider returns component with props', () => {});

    test('renders children component', () => {
      // shallow
    });
  });
});
