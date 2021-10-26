import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {routes} from "../router";


const AppRouter = () => {
    return (
            <Switch>
                {/*Свич необходим, чтобы при указании неправильного адреса можно было бы с помощью*/}
                {/*редиректа указать дефолтную страницу*/}
                {routes.map(route =>
                    <Route component={route.component}
                           path={route.path}
                           exact={route.exact}
                    />
                )}
                <Redirect to='/posts'/>
            </Switch>
    );
};

export default AppRouter;