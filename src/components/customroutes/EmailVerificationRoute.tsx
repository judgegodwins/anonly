// import { getAuthData, userEmailIsVerified } from 'helpers/authHelpers';
// import React from 'react';
// import { RouteProps, Route, Redirect } from 'react-router-dom';

// export default (props: RouteProps) => (
//   getAuthData()
//     ? !userEmailIsVerified() // if user email is not verified, show component
//       ? <Route
//         {...props}
//       />
//       : <Redirect to={{ pathname: '/' }} />
//     : <Redirect to={{pathname: '/signup'}} />
// );