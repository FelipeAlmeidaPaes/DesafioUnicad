import axios from 'axios'
import React, { Component } from 'react'

class NewDelivery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            client_name: '',
            from: '',
            destiny: '',
            errors: []

        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleFromChange = this.handleFromChange.bind(this)
        this.handleDestinyChange = this.handleDestinyChange.bind(this)
        this.handleCreateNewDelivery = this.handleCreateNewDelivery.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }

    handleNameChange(event) {
        this.setState({
            client_name: event.target.value
        })
    }

    handleFromChange(event) {
        this.setState({
            from: event.target.value
        })
    }

    handleDestinyChange(event) {
        this.setState({
            destiny: event.target.value
        })
    }

    handleCreateNewDelivery(event) {
        event.preventDefault()

        const { history } = this.props

        const delivery = {
            client_name: this.state.client_name,
            from: this.state.from,
            destiny: this.state.destiny
        }

        axios.post('/api/deliveries', delivery).then(response => {
            history.push('/')
        })
            .catch(error => {
                this.setState({
                    errors: error.response.data.errors
                })
            })
    }

    hasErrorFor(field) {
        return !!this.state.errors[field]
    }

    renderErrorFor(field) {
        if (this.hasErrorFor(field)) {
            return (
                <span className="invalid-feedback">
                    <strong>{this.state.errors[field][0]}</strong>
                </span>
            )
        }
    }

    render() {
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>Create new delivery</div>
                            <div className='card-body'>
                                <form onSubmit={this.handleCreateNewDelivery}>
                                    <div className='form-group'>
                                        <label htmlFor='client_name'>Delivery name</label>
                                        <input
                                            id='client_name'
                                            type='text'
                                            className={`form-control ${this.hasErrorFor('client_name') ? 'is-invalid' : ''}`}
                                            name='client_name'
                                            value={this.state.client_name}
                                            onChange={this.handleNameChange}
                                        />
                                        {this.renderErrorFor('client_name')}
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='from'>From</label>
                                        <input
                                            id='from'
                                            className={`form-control ${this.hasErrorFor('from') ? 'is-invalid' : ''}`}
                                            name='from'
                                            rows='10'
                                            value={this.state.from}
                                            onChange={this.handleFromChange}
                                        />
                                        {this.renderErrorFor('from')}
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='destiny'>destiny</label>
                                        <input
                                            id='destiny'
                                            className={`form-control ${this.hasErrorFor('destiny') ? 'is-invalid' : ''}`}
                                            name='destiny'
                                            rows='10'
                                            value={this.state.destiny}
                                            onChange={this.handleDestinyChange}
                                        />
                                        {this.renderErrorFor('destiny')}
                                    </div>
                                    <button className='btn btn-primary'>Create</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewDelivery
