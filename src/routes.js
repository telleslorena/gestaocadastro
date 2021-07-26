import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

import Home from './pages/home';
import Clientes from './pages/clientes';
import Produtos from './pages/produtos';


export default function Routes(){
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/clientes">Clientes</Link>
                        </li>
                        <li>
                        <Link to="/produtos">Produtos</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/clientes" component={Clientes} />
                    <Route path="/produtos" component={Produtos} />
                </Switch>
            </div>
        </Router>
    )
}