import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Header'
import NewDelivery from './NewDelivery'
import DeliveriesList from './DeliveriesList'
import Teste from './Teste'

class App extends Component {

    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={DeliveriesList} />
                        <Route path="/teste" component={Teste} />
                        <Route path="/create" component={NewDelivery} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
