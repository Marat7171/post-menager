import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";


const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    if (isLoading) {
        return <Loader/>
    }

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
                           key={route.path}
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
                           key={route.path}
                    />
                )}
                <Redirect to='/login'/>
            </Switch>
    );
};

export default AppRouter;