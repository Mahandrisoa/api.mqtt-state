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
function sensorReducer(state = initialState, action) {
  if (!state || !action) {
    return state;
  }
  switch (action.type) {
    case ADD_SENSOR:
      return { ...state, sensors: [...state.sensors, action.sensor] };

    case UPDATE_SENSOR:
      const sensorId = state.sensors.findIndex(s => s.id === action.sensor.id);
      let newSensors = [...state.sensors];
      newSensors[sensorId] = action.sensor;
      return { ...state, sensors: newSensors };

    case DELETE_SENSOR:
      const newSensor = state.sensors.filter(s => s !== action.sensor);
      return { ...state, sensors: newSensor };

    case SET_SELECTED_SENSOR:
      return { ...state, selectedSensor: action.selectedSensor };
    default:
      return state;
  }
}

export default sensorReducer;
