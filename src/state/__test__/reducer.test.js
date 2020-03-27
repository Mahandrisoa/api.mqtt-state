import sensorReducer from '../reducer';
import {
  addSensor,
  deleteSensor,
  updateSensor,
  setSelectedSensor,
} from '../actions';

describe('Testing main reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      sensors: [
        { id: 18, label: 'SENSOR_TEST_LABEL_2', value: Math.random() * 10 },
      ],
      selectedSensor: null,
    };
  });

  test('should return default state', () => {
    expect(
      sensorReducer(initialState, () => ({
        type: 'NOT_FOUND_ACTION_TYPE',
        sensor: {},
      })),
    ).toEqual(initialState);
  });

  test('call to ADD_SENSOR action type should add new sensor', () => {
    const newSensor = { label: 'SENSOR_TEST_LABEL', value: Math.random() * 10 };
    expect(sensorReducer(initialState, addSensor(newSensor))).toEqual({
      ...initialState,
      sensors: [...initialState.sensors, newSensor],
    });
  });

  test('call to DELETE_SENSOR action type should remove sensor', () => {
    const firstInitialSensor = initialState.sensors[0];
    expect(
      sensorReducer(initialState, deleteSensor(firstInitialSensor)),
    ).toMatchObject({
      sensors: [],
      selectedSensor: null,
    });
  });

  test('call to UPDATE_SENSOR action type should update sensor', () => {
    const newSensorValue = {
      id: 18,
      label: 'NEW_SENSOR_TEST_LABEL_2',
      value: Math.random() * 10,
    };
    expect(
      sensorReducer(initialState, updateSensor(newSensorValue)),
    ).toMatchObject({
      sensors: [newSensorValue],
      selectedSensor: null,
    });
  });

  test('call to SET_SELECTED_SENSOR action type should update selectedSensor', () => {
    const firstInitialSensor = initialState.sensors[0];
    expect(
      sensorReducer(initialState, setSelectedSensor(firstInitialSensor)),
    ).toMatchObject({
      ...initialState,
      selectedSensor: firstInitialSensor,
    });
  });
});
