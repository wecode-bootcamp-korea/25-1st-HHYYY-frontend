import React, { Component } from 'react';

class StarRatings extends Component {
  render() {
    return (
      <div className="starRatings">
        <li>
          <input
            type="radio"
            className="radioStarLvl"
            name="starLvl"
            id="rating5"
            value="5"
            checked
          ></input>
          <label for="rating5">
            <span className="rating05">★★★★★</span>
          </label>
        </li>

        <li>
          <input
            type="radio"
            className="radioStarLvl"
            name="starLvl"
            id="rating4"
            value="4"
            //checked
          ></input>
          <label for="rating4">
            <span className="rating04">★★★★☆</span>
          </label>
        </li>

        <li>
          <input
            type="radio"
            className="radioStarLvl"
            name="starLvl"
            id="rating3"
            value="3"
            //checked
          ></input>
          <label for="rating3">
            <span className="rating03">★★★☆☆</span>
          </label>
        </li>

        <li>
          <input
            type="radio"
            className="radioStarLvl"
            name="starLvl"
            id="rating2"
            value="2"
            //checked
          ></input>
          <label for="rating2">
            <span className="rating02">★★☆☆☆</span>
          </label>
        </li>

        <li>
          <input
            type="radio"
            className="radioStarLvl"
            name="starLvl"
            id="rating1"
            value="1"
            //checked
          ></input>
          <label for="rating1">
            <span className="rating01">★☆☆☆☆</span>
          </label>
        </li>
      </div>
    );
  }
}

export default StarRatings;
