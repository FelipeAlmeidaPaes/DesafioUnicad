import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Header/'
import Home from './Home/'
import NewDelivery from './NewDelivery/'
import DeliveriesList from './DeliveriesList/'
import DeliveryMap from './DeliveryMap/'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/list" component={DeliveriesList} />
                        <Route path="/create" component={NewDelivery} />
                        <Route path="/:id" component={DeliveryMap} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
