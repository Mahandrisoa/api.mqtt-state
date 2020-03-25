import React, { useState, useEffect } from 'react';
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom';
import { SensorDetail } from '../../components';
import { data } from '../../mocks/sensorsData';

function SensorPage() {
  let { path, url } = useRouteMatch();
  const [sensors, setSensors] = useState(data);

  useEffect(() => {
    // Api call
    // then setSensors();
  });

  return (
    <div>
      <aside>
        <ul>
          {sensors.map(({ name, id }) => (
            <li>
              <Link to={`${url}/${id}`}>
                {name} {id}
              </Link>
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
