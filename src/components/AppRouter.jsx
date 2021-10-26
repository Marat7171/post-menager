import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router";


const AppRouter = () => {
    const isAuth = true;
    return (
        isAuth
            ?
            <Switch>
                {/*Свич необходим, чтобы при указании неправильного адреса можно было бы с помощью*/}
                {/*редиректа указать дефолтную страницу*/}
                {privateRoutes.map(route =>
                    <Route component={route.component}
                           path={route.path}
                           exact={route.exact}
                    />
                )}
                <Redirect to='/posts'/>
            </Switch>
            :
            <Switch>
                {/*Свич необходим, чтобы при указании неправильного адреса можно было бы с помощью*/}
                {/*редиректа указать дефолтную страницу*/}
                {publicRoutes.map(route =>
                    <Route component={route.component}
                           path={route.path}
                           exact={route.exact}
                    />
                )}
                <Redirect to='/login'/>
            </Switch>
    );
};

export default AppRouter;