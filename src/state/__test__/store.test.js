import { createStore } from '../store';
import sensorReducer from '../reducer';
import { addSensor, updateSensor, deleteSensor } from '../actions';

describe('Testing createStore hoc', () => {
  let store;
  beforeEach(() => {
    store = createStore([sensorReducer]);
  });

  /**
   * testing that intialized store is an object instance
   */
  test('should return Store object', () => {
    expect(store).toBeDefined();
    expect(typeof store).toBe('object');
  });

  /**
   * testing that getState methods returns exactlly the corresponding reducer's state
   */
  test('should return state on getState call', () => {
    expect(store.getState()).toMatchObject({
      selectedSensor: null,
      sensors: [],
    });
  });

  describe('should work on all action creator dispatch', () => {
    /**
     * testing when adding new value should increment the array length
     */
    test('dispatching some actions should update the store ', () => {
      const newSensor = {
        id: 14,
        label: 'SENSOR_TEST_LABEL',
        value: Math.random() * 10,
      };
      expect(store.getState().sensors).toHaveLength(0);
      store.dispatch(addSensor(newSensor));
      expect(store.getState().sensors).toHaveLength(1);

      const toUpdateSensor = {
        id: 14,
        label: 'SENSOR_TEST_UPDATED_LABEL',
        value: Math.random() * 10,
      };
      store.dispatch(updateSensor(toUpdateSensor));
      expect(store.getState()).toMatchObject({
        selectedSensor: null,
        sensors: [{ ...toUpdateSensor }],
      });

      const toDeleteSensor = store.getState().sensors[0];
      store.dispatch(deleteSensor(toDeleteSensor));
      expect(store.getState().sensors).toHaveLength(0);
    });
  });
});
