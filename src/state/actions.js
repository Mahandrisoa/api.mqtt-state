/**
 * action creators
 *
 */

import {
  ADD_SENSOR,
  UPDATE_SENSOR,
  DELETE_SENSOR,
  SET_SELECTED_SENSOR,
} from './types';

export function addSensor(sensor) {
  return { type: ADD_SENSOR, sensor: sensor };
}

export function updateSensor(sensor) {
  return { type: UPDATE_SENSOR, sensor: sensor };
}

export function deleteSensor(sensor) {
  return { type: DELETE_SENSOR, sensor: sensor };
}

export function setSelectedSensor(selectedSensor) {
  return { type: SET_SELECTED_SENSOR, selectedSensor: selectedSensor };
}
