import React, { Children } from 'react';
import { Route } from 'react-router-dom';


//Criado um clone do ROUTE, o que botar la vai repetir aqui dentro
export default ({ children, ...rest }) => {
    return <Route {...rest}>{Children}</Route>
}