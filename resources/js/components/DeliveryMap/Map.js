import React, { Component } from 'react'

class SimpleMap extends Component {

  render() {
    const { from } = this.props
    const { destiny } = this.props

    const mapStyles = {
      width: '100%',
      height: '100%',
    };

    function initMap() {
      var directionsService = new window.google.maps.DirectionsService();
      var directionsRenderer = new window.google.maps.DirectionsRenderer();
      var mapOptions = {
        zoom: 14,
        center: from
      }
      var map = new google.maps.Map(document.getElementById('map'), mapOptions);
      directionsRenderer.setMap(map);

      calcRoute()
    }
    
    function calcRoute() {
      var selectedMode = 'DRIVING';
      var request = {
          origin: from,
          destination: destiny,
          travelMode: google.maps.TravelMode[selectedMode]
      };
      directionsService.route(request, function(response, status) {
        if (status == 'OK') {
          directionsRenderer.setDirections(response);
        }
      });
    }

    return (
      <>
        <div id="map" style={mapStyles}>
          
        </div>
      </>
    )
  }
}

export default SimpleMap