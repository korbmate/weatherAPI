import React from 'react';
import PoolCSS from "./css/Pool.module.css";
import CityCard from './CityCard';
import img01 from './pictures/budapest.jpg'
import img02 from './pictures/london.jpg'
import img03 from './pictures/paris.jpg'
import img04 from './pictures/moscow.jpg'
import img05 from './pictures/berlin.jpg'
import img06 from './pictures/oslo.jpg'
import img07 from './pictures/amsterdam.jpg'
import img08 from './pictures/lisbon.jpg'
import img09 from './pictures/madrid.jpg'
import img10 from './pictures/rome.jpg'
import img11 from './pictures/athen.jpg'
import img12 from './pictures/helsinki.jpg'

const cityNames = [{city:"Budapest", img: img01}, {city:"London", img: img02}, {city:"Paris", img: img03}, {city:"Moscow", img:img04}, {city:"Berlin", img: img05}, {city:"Oslo", img: img06}, {city:"Amsterdam", img: img07}, {city:"Lisbon", img: img08}, {city:"Madrid", img: img09}, {city:"Rome", img: img10}, {city:"Athen", img: img11}, {city:"Helsinki", img: img12}];



const Pool = () => {

      
      return (
        <div className={PoolCSS.container}>
          {cityNames.map((item) => <CityCard key={item.city} cityName={item.city} pic={item.img}></CityCard> )}
      </div>
      )
  }

export default Pool