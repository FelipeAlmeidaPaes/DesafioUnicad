import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './style.css'

class DeliveriesList extends Component {
  constructor() {
    super()
    this.state = {
      deliveries: []
    }
  }

  componentDidMount() {
    axios.get('/api/deliveries').then(response => {
      this.setState({
        deliveries: response.data
      })
    })
  }

  render() {
    const { deliveries } = this.state
    return (
      <div className="root">
        <Paper className="paper">
          <Table className="table" size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Nome do Cliente</TableCell>
                <TableCell align="right">Partida</TableCell>
                <TableCell align="right">Destino</TableCell>
                <TableCell align="right">Data da Entrega</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {deliveries.map(delivery => (
                <TableRow key={delivery.client_name}>
                  <TableCell component="th" scope="row">
                    <Link 
                      to={`/${delivery.id}`}
                      key={delivery.id}
                    >
                      {delivery.client_name}
                    </Link>
                  </TableCell>
                  <TableCell align="right">{delivery.from}</TableCell>
                  <TableCell align="right">{delivery.destiny}</TableCell>
                  <TableCell align="right">{delivery.delivery_date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

export default DeliveriesList
