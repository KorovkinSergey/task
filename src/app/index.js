import React from 'react';
import {observer, Provider} from 'mobx-react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import routes, { routesMap } from '~/routes';

import stores from '~s';

@observer class App extends React.Component{
    render(){
        let routesComponents = routes.map((route) => {
            return <Route path={route.url}
                          component={route.component}
                          exact={route.exact}
                          key={route.url}
                    />;
        });

        return (
            <Provider stores={stores}>
                <Router>
                    <div className="container">
                        Интернет магазин
                        <hr/>
                        <div className="row">
                            <div className="col col-3">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <Link to={routesMap.home}>Список товаров</Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to={routesMap.cart}>Корзина</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col col-9">
                                <Switch>
                                    {routesComponents}
                                </Switch>
                            </div>
                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App;
