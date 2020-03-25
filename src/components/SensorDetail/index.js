import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { findCaptorById } from '../../utils';

export default function CaptorDetail() {
  let { captorId } = useParams();
  const [captor, setCaptor] = useState({});

  useEffect(() => {
    setCaptor(findCaptorById(captorId));
  }, []);

  return (
    <div>
      <h3>Captor: {captor.label}</h3>
      <div>
        <h4>Actual value: {captor.value}</h4>
      </div>
    </div>
  );
}
