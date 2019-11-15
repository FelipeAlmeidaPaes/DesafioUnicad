import React, { Component } from 'react'

import Map from './Map'

class DeliveryMap extends Component {
  constructor() {
    super()
    this.state = {
      deliveries: []
    }
  }

  componentDidMount() {
    const id = this.props.location.pathname.split('/').pop()

    axios.get('/api/deliveries/' + id).then(response => {
      this.setState({
        deliveries: response.data
      })
    })
  }

  render() {
    const { deliveries } = this.state

    const { from } = deliveries
    const { destiny } = deliveries

    return (
      <Map from={from} destiny={destiny}>

      </Map>
    )
  }
}

export default DeliveryMap