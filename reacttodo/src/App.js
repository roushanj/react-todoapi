import React from 'react';
import AuthenticatedRoute from "auth/AuthenticatedRoute";
import AdminLayout from "layouts/Admin.js";
import { Switch, Redirect } from "react-router-dom";


export default function App() {
 
  
    return (
      <div className="App">
       
        <Switch>
      
         
          <AuthenticatedRoute
            path="/admin"
            component={AdminLayout}
          />
         <Redirect from="/" to={'/admin/dashboard'} />
        
        </Switch>
      </div>
    );
  } 
