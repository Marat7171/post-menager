import React from 'react';
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import {Redirect, Route, Switch} from "react-router-dom";

const AppRouter = () => {
    return (
            <Switch>
                {/*Свич необходим, чтобы при указании неправильного адреса можно было бы с помощью*/}
                {/*редиректа указать дефолтную страницу*/}
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/posts">
                    <Posts/>
                </Route>
                <Route path="/error">
                    <Error/>
                </Route>
                <Redirect to='/error'/>
            </Switch>
    );
};

export default AppRouter;