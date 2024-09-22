function Map() {
    return (
      <section>
          <div id="map-container">
              <div id="map">
                  <img width="100%" src="https://raw.githubusercontent.com/shivani17saxena/showcase/refs/heads/main/map.png" alt="map" />
                  <img className="map-pin" src="https://raw.githubusercontent.com/shivani17saxena/showcase/refs/heads/main/pin1.png" alt="pin" />
                  <img className="map-zoom" src="https://raw.githubusercontent.com/shivani17saxena/showcase/refs/heads/main/zoom.png" alt="zoom" />
              </div>
          
              <div className="location-box">
                  <h2>LOCATION</h2>
                  <p>12 Upper St. Martin's Lane<br />WC2H 9FB, London</p>
              </div>
          </div>
      </section>
    )
  }
  
  export default Map