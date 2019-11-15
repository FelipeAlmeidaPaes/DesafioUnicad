import React, { Component } from 'react'

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
      <>

      </>
    )
  }
}

export default DeliveryMap