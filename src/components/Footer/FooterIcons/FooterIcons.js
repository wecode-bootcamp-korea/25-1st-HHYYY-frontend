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
              src="/images/footer/vegetarian.png"
              title="Vegetarian"
              alt="Vegetarian"
            />
          </li>
          <li>
            <img
              className="fIconsEB"
              src="/images/footer/ethical.png"
              title="Ethical Buying"
              alt="Ethical Buying"
            />
          </li>
          <li>
            <img
              className="fIconsCF"
              src="/images/footer/crueltyfree.png"
              title="Cruelty Free"
              alt="Cruelty Free"
            />
          </li>
          <li>
            <img
              className="fIconsFC"
              src="/images/footer/fresh.png"
              title="Freshest Cosmetics"
              alt="Freshest Cosmetics"
            />
          </li>
          <li>
            <img
              className="fIconsHM"
              src="/images/footer/handmade.png"
              title="Handmade"
              alt="Handmade"
            />
          </li>
          <li>
            <img
              className="fIconsNP"
              src="/images/footer/nakedpackaging.png"
              title="Naked Packaging"
              alt="Naked Packaging"
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default FooterIcons;
