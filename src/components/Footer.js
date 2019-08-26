import React from 'react'
import './Footer.css'
import { MapPin, Smartphone, Mail } from 'react-feather'

export default ({ address, phone, email }) => (
  <footer className="footer">
    <div>
      {/* <section className="section"> */}
        <div className="container">
          <h2>Creekside Bikes</h2>
          {address && (
            <a
              className="Contact--Details--Item"
              href={`https://www.google.com/maps/search/${encodeURI(address)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {address}
            </a>
          )}
          {phone && (
            <a className="Contact--Details--Item" href={`tel:${phone}`}>
              {phone}
            </a>
          )}
          {email && (
            <a className="Contact--Details--Item" href={`mailto:${email}`}>
              {email}
            </a>
          )}
        </div>
      {/* </section> */}
    </div>
  </footer>
)
