import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { findSensorById } from '../../utils';
import { data } from '../../mocks/sensorsData';

export default function CaptorDetail() {
  let { sensorId } = useParams();
  const [sensor, setSensor] = useState({});

  return (
    <div>
      <h3>Captor: {sensor.name}</h3>
      <div>
        <h4>Actual value: {sensor.value}</h4>
      </div>
    </div>
  );
}
