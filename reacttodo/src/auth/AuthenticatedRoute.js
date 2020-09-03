import React from 'react';
import { Route } from "react-router-dom";
export default function AuthenticatedRoute({ component: C,...rest }) {
    return (
      <Route
        {...rest}
        render={props =><C {...props} />}
      />
    );
  }