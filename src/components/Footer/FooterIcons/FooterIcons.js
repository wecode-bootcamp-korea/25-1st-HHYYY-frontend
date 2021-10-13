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
              alt="Vegetarian"
              src="/images/footer/vegetarian.png"
              title="Vegetarian"
            />
          </li>
          <li>
            <img
              className="fIconsEB"
              alt="Ethical Buying"
              src="/images/footer/ethical.png"
              title="Ethical Buying"
            />
          </li>
          <li>
            <img
              className="fIconsCF"
              alt="Cruelty Free"
              src="/images/footer/crueltyfree.png"
              title="Cruelty Free"
            />
          </li>
          <li>
            <img
              className="fIconsFC"
              alt="Freshest Cosmetics"
              src="/images/footer/fresh.png"
              title="Freshest Cosmetics"
            />
          </li>
          <li>
            <img
              className="fIconsHM"
              alt="Handmade"
              src="/images/footer/handmade.png"
              title="Handmade"
            />
          </li>
          <li>
            <img
              className="fIconsNP"
              alt="Naked Packaging"
              src="/images/footer/nakedpackaging.png"
              title="Naked Packaging"
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default FooterIcons;
