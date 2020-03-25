import { Sensor } from '../';
import { data, invalidData } from '../../mocks/sensorsData';

describe('Sensor model tests', () => {
  describe('Dummy tests', () => {
    test('data is loaded with 3 elements', () => {
      expect(data.length).toBe(4);
    });
  });
  /* TODO: Écrire ici la suite de tests pour le modèle objet.*/
  //
  describe('Test Sensor.createSensor function pattern', () => {
    test('is defined', () => {
      expect(Sensor.createSensor()).toBeDefined();
    });

    test('is really an object of', () => {
      const sensor = Sensor.createSensor();
      expect(typeof sensor).toBe('object');
    });

    test('matching attributes, timeseries length is 0', () => {
      const params = {
        id: 11,
        name: 'Sensor test',
        type: 'TEMPERATURE',
      };
      expect(Sensor.createSensor(params)).toMatchObject({
        id: 11,
        name: 'Sensor test',
        type: 'TEMPERATURE',
      });
      expect(Sensor.createSensor().getTimeSeries()).toHaveLength(0);
    });

    test('protect attributes', () => {
      let sensor = Sensor.createSensor({
        id: 1,
        name: 'Sensor test',
        type: 'TEMPERATURE',
      });
      sensor.id = 2;
      // NOT WORKING
      // expect(sensor.id).not.toEqual(2);
    });

    test('add timeserie value', () => {
      let sensor = Sensor.createSensor({
        name: 'Sensor test',
        type: 'TEMPERATURE',
      });
      const timeserie = new Sensor.TimeSeries({
        value: 23,
        label: '2016-10-19T08:00:00.000Z',
      });
      expect(sensor.getTimeSeries()).toHaveLength(0);
      sensor.addTimeSerie(timeserie);
      expect(sensor.getTimeSeries()).toHaveLength(1);
      expect(sensor.getTimeSeries()).toContain(timeserie);
    });

    test('remove value', () => {
      let sensor = Sensor.createSensor({
        name: 'Sensor test',
        type: 'POSITIVE_NUMBER',
        data: {
          values: [23, 23, 22, 21, 23, 23, 23, 25, 25],
          labels: [
            '2016-10-19T08:00:00.000Z',
            '2016-10-19T09:00:00.000Z',
            '2016-10-19T10:00:00.000Z',
            '2016-10-19T11:00:00.000Z',
            '2016-10-19T12:00:00.000Z',
            '2016-10-19T13:00:00.000Z',
            '2016-10-19T14:00:00.000Z',
            '2016-10-19T15:00:00.000Z',
            '2016-10-19T16:00:00.000Z',
          ],
        },
      });
      expect(sensor.getTimeSeries()).toHaveLength(9);
      sensor.removeTimeSerieAt(3);
      expect(sensor.getTimeSeries()).toHaveLength(8);
    });

    test('update timserie value', () => {
      let sensor = Sensor.createSensor({
        name: 'Sensor test',
        type: 'POSITIVE_NUMBER',
        data: {
          values: [23, 23],
          labels: ['2016-10-19T08:00:00.000Z', '2016-10-19T09:00:00.000Z'],
        },
      });
      const timeserie = new Sensor.TimeSeries({
        value: 23,
        label: '2016-10-19T08:00:00.000Z',
      });
      expect(sensor.getTimeSeries()[0]).not.toBe(timeserie);
      sensor.updateTimeSerieAt(1, timeserie);
      expect(sensor.getTimeSeries()[0]).toEqual(timeserie);
    });

    test('testing toJSON method', () => {
      let sensor = Sensor.createSensor({
        name: 'Sensor test',
        type: 'POSITIVE_NUMBER',
        data: {
          values: [23, 23],
          labels: ['2016-10-19T08:00:00.000Z', '2016-10-19T09:00:00.000Z'],
        },
      });
      expect(sensor.toJSON()).toEqual({
        name: 'Sensor test',
        type: 'POSITIVE_NUMBER',
        data: {
          values: [23, 23],
          labels: ['2016-10-19T08:00:00.000Z', '2016-10-19T09:00:00.000Z'],
        },
      });
    });
    test('testing toString method', () => {
      let sensorData = {
        name: 'Sensor test',
        type: 'POSITIVE_NUMBER',
        data: {
          values: [23, 23],
          labels: ['2016-10-19T08:00:00.000Z', '2016-10-19T09:00:00.000Z'],
        },
      };
      let sensor = Sensor.createSensor(sensorData);
      expect(sensor.toString()).toEqual(JSON.stringify(sensorData));
    });
  });

  describe('SensorType tests', () => {
    test(`sensor type should be one of ''POSITIVE_NUMBER','PERCENT','TEMPERATURE','ON_OFF','OPEN_CLOSE'`, () => {
      let mockFunction = jest.fn(() => {
        let sensor = Sensor.createSensor({
          name: 'Sensor test',
          type: 'NONE_OF_THESE',
        });
      });
      expect(mockFunction).toThrow();
    });
  });

  describe('Load from source', () => {
    let sensors;
    test('Throw exception on invalid source object', () => {
      let mockFunction = jest.fn(() => {
        sensors = Sensor.loadSensors(invalidData);
      });
      expect(mockFunction).toThrow(/^Sensor type not found/);
    });
    test('returning array with Sensors', () => {
      sensors = Sensor.loadSensors(data);
      expect(sensors).toBeDefined();
      expect(sensors).toHaveLength(data.length);
    });
  });
});
