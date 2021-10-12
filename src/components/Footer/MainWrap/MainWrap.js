import React, { Component } from 'react';
import FooterLinks from '../FooterLinks/FooterLinks';
import './MainWrap.scss';

class MainWrap extends Component {
  render() {
    return (
      <div className="mainWrap">
        <div className="footerWrap">
          <ul className="footerLinks">
            {LINK_LIST.map(businesslink => {
              return (
                <FooterLinks
                  key={businesslink.id}
                  link={businesslink.link}
                  content={businesslink.content}
                />
              );
            })}
          </ul>
          <div className="copyright">
            서울특별시 강남구 테헤란로 427 워워 타워(워워 선릉 2호점) 13층 |
            사이트 운영자: 주식회사 그레이스풀제인 | 대표이사: 황연욱
            <br />
            <br />
            사업자 등록번호: 200-40-14047 사업자정보확인 | 통신판매업 신고번호:
            2021-서울강남-0011 | 개인정보보호 <br />
            책임자: 홍래영
          </div>
          <div className="copy">
            COPYRIGHT © HOONHOONHAHNYEONDLE CO. LTD. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    );
  }
}

export default MainWrap;

const LINK_LIST = [
  {
    id: 1,
    link: '#',
    content: '스카우트',
  },
  {
    id: 2,
    link: '#',
    content: '회사소개',
  },
  {
    id: 3,
    link: '#',
    content: '개인정보처리방침',
  },
  {
    id: 4,
    link: '#',
    content: '영상정보관리지침',
  },
  {
    id: 5,
    link: '#',
    content: '이용약관',
  },
  {
    id: 6,
    link: '#',
    content: '고객센터',
  },
];
