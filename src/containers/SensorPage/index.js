import React, { useState, useEffect } from 'react';
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom';
import { SensorDetail } from '../../components';

function SensorPage() {
  let { path, url } = useRouteMatch();
  const [sensors, setSensors] = useState([
    { label: 'Porte de garage', id: 'captor-1' },
    { label: 'Temp de bureau', id: 'captor-2' },
    { label: 'Ventialeur', id: 'captor-3' },
  ]);

  useEffect(() => {
    // Api call
    // then setSensors();
  });

  return (
    <div>
      <aside>
        <ul>
          {sensors.map(({ label, id }) => (
            <li>
              <Link to={`${url}/${id}`}>{label}</Link>
            </li>
          ))}
        </ul>
      </aside>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:sensorId`}>
          <SensorDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default SensorPage;
