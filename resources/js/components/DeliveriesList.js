import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DeliveriesList extends Component {
  constructor () {
    super()
    this.state = {
      deliveries: []
    }
  }

  componentDidMount () {
    axios.get('/api/deliveries').then(response => {
      this.setState({
        deliveries: response.data
      })
    })
  }

  render () {
    const { deliveries } = this.state
    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card'>
              <div className='card-header'>All deliveries</div>
              <div className='card-body'>
                <ul className='list-group list-group-flush'>
                  {deliveries.map(delivery => (
                    <Link
                      className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                      to={`/${delivery.id}`}
                      key={delivery.id}
                    >
                      {delivery.client_name}
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DeliveriesList
