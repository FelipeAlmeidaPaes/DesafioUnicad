import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import DeliveriesList from './DeliveriesList'

class App extends Component {
    render () {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exat path="/" Component={DeliveriesList} />
                </Switch>
            </div>
        </BrowserRouter>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))