import React, { useState, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Pic1 from '../pictures/cold.jpg'
import Pic3 from '../pictures/sunny.jpg'
import Pic4 from '../pictures/hot.jpg'
import Pic2 from '../pictures/wind.jpg'

const Display = ({ language, cityData}) => {

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city.toLowerCase()}&format=json&u=f`, options)
  //     const data = await response.json()
  //     setCityData(data)
  //   }
  //   getData()
  //   setRefresh(true)
  // }, [])

  console.log(cityData)
  const renderDisplay = () => {
    if (!Object.keys(cityData).length) {
      return 'loading'
    }
    return (
      <div style={{ fontSize: '1.1rem' }}>
        <Row>
          <Col>{language ? '國家' : 'Country'}</Col>
          <Col>{cityData.location.country}</Col>
        </Row>
        <Row>
          <Col>{language ? '城市' : 'City'}</Col>
          <Col>{cityData.location.city}</Col>
        </Row>
        <Row>
          <Col>{language ? '天氣' : 'Weather'}</Col>
          <Col>{cityData.current_observation.condition.text}</Col>
        </Row>
        <Row>
          <Col>{language ? '攝氏' : 'Temperature (Celsius)'}</Col>
          <Col>{Math.round((cityData.current_observation.condition.temperature - 32) * 5 / 9)}°C</Col>
        </Row>
        <Row>
          <Col>{language ? '華氏' : 'Temperature (Fahrenheit)'}</Col>
          <Col>{cityData.current_observation.condition.temperature}°F</Col>
        </Row>
        <Row>
          <Col>{language ? '風速' : 'Wind Speed'}</Col>
          <Col>{cityData.current_observation.wind.speed}kt</Col>
        </Row>
        <Row>
          <Col>{language ? '濕度' : 'Humidity'}</Col>
          <Col>{cityData.current_observation.atmosphere.humidity}rh</Col>
        </Row>
        <div style={{ marginTop: '2rem', opacity: "0.9",height:'800px'}}>
          <img
            src={
              Math.round((cityData.current_observation.condition.temperature - 32) * 5 / 9) <= 10 ? Pic1 : Math.round((cityData.current_observation.condition.temperature - 32) * 5 / 9) >= 30 ? Pic4 :
                Math.round((cityData.current_observation.condition.temperature - 32) * 5 / 9) >= 20 ? Pic3 : Math.round((cityData.current_observation.condition.temperature - 32) * 5 / 9) >= 10 ? Pic2 : 'red'
            }
            alt="weather" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    )
  }

  return (
    <Container >
      {renderDisplay()}
    </Container>
  )
}

export default Display