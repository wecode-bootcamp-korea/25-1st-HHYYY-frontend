import React, { Component } from 'react';
import './FooterIcons.scss';

class FooterIcons extends Component {
  render() {
    return (
      <div className="fIcons">
        <ul className="fIconList">
          <li>
            <img
              className="fIconsV"
              src="./images/footer/crueltyfree.png"
              title="Vegetarian"
              alt="Vegetarian"
            />
          </li>
          <li>
            <img
              className="fIconsEB"
              src="./images/footer/crueltyfree.png"
              title="Ethical Buying"
              alt="Vegetarian"
            />
          </li>
          <li>
            <img
              className="fIconsCF"
              src="./images/footer/crueltyfree.png"
              title="Cruelty Free"
              alt="Vegetarian"
            />
          </li>
          <li>
            <img
              className="fIconsFC"
              src="./images/footer/crueltyfree.png"
              title="Freshest Cosmetics"
              alt="Vegetarian"
            />
          </li>
          <li>
            <img
              className="fIconsHM"
              src="./images/footer/crueltyfree.png"
              title="Handmade"
              alt="Vegetarian"
            />
          </li>
          <li>
            <img
              className="fIconsNP"
              src="./images/footer/crueltyfree.png"
              title="Naked Packaging"
              alt="Vegetarian"
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default FooterIcons;
