import {
  ADD_SENSOR,
  UPDATE_SENSOR,
  DELETE_SENSOR,
  SET_SELECTED_SENSOR,
} from './types';

const initialState = {
  sensors: [],
  selectedSensor: null,
};

/**
 *
 * @param {Object} state by default is our initial state
 * @param {Object} action that contains type and sensor payload
 * @param {Object} selectedSensor that will hold selectedSensor
 */
function sensorReducer(
  state = initialState,
  { type, sensor = {}, selectedSensor = {} },
) {
  switch (type) {
    case ADD_SENSOR:
      return { ...state, sensors: [...state.sensors, sensor] };

    case UPDATE_SENSOR:
      const sensorId = state.sensors.findIndex(s => s.id === sensor.id);
      let newSensors = [...state.sensors];
      newSensors[sensorId] = sensor;
      return { ...state, sensors: newSensors };

    case DELETE_SENSOR:
      const newSensor = state.sensors.filter(s => s !== sensor);
      return { ...state, sensors: newSensor };

    case SET_SELECTED_SENSOR:
      return { ...state, selectedSensor };
    default:
      return state;
  }
}

export default sensorReducer;
