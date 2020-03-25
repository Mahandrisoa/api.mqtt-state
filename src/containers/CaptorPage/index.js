import React, { useState, useEffect } from 'react';
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom';
import { CaptorDetail } from '../../components';

function CaptorPage() {
  let { path, url } = useRouteMatch();
  const [captors, setCaptors] = useState([
    { label: 'Porte de garage', id: 'captor-1' },
    { label: 'Temp de bureau', id: 'captor-2' },
    { label: 'Ventialeur', id: 'captor-3' },
  ]);

  useEffect(() => {
    // Api call
    // then setCaptors();
  });

  return (
    <div>
      <aside>
        <ul>
          {captors.map(({ label, id }) => (
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
        <Route path={`${path}/:captorId`}>
          <CaptorDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default CaptorPage;
