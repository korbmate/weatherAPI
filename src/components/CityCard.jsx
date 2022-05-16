import React, {useState, useEffect} from 'react'
import CityCardCSS from "./css/CityCard.module.css"
const appid = process.env.REACT_APP_APPID;

const CityCard = (props) => {
  const city = props.cityName;
  const picture = props.pic

    useEffect(() => {
      getData();
    })

    const [item, setItems] = useState({})

    const getData = async () => {
        const data = await fetch ('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + appid);
        const items = await data.json();
        console.log(items);
        setItems(items);
    }

    return (
      <div className={CityCardCSS.container}>
        <img src={picture} alt="zzz" className={CityCardCSS.img}/>
        <h2 className={CityCardCSS.city}> {item.name} </h2>
        <h3 className={CityCardCSS.weather}> {item.weather[0].description.slice(0,1).toUpperCase()}{item.weather[0].description.slice(1,item.weather[0].description.length)} </h3>
        <h4 className={CityCardCSS.details}>It feels like {Math.floor(item.main.feels_like)} °C.</h4>
        <h4 className={CityCardCSS.details}>It is actually {Math.floor(item.main.temp)} °C.</h4>
        <h4 className={CityCardCSS.details}>Humidity is {item.main.humidity} %</h4>
      </div>
    )
}

export default CityCard