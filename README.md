# LUSH Clone Project

- 비건 프레쉬 코스메틱 브랜드 - 러쉬(LUSH) 사이트 클론.

## HHYYY - 훈훈한 연들
- 팀워크를 다지고자, 팀원들 이름을 바탕으로 팀명을 정했습니다.
- 팀원들 각자의 기술에 익숙해지는 것을 목표로 하여, 페이지 단위로 개발하였습니다.
- 팀원들 수준별로 적절한 역할 분담과 애자일한 스크럼 방식의 미팅, 그리고 활발한 의사소통으로 프로젝트를 성공적으로 마무리하였습니다.
- 기획 과정 없이 짧은 기간 안에 기술 습득 및 기본 기능 구현에 집중하기 위해 러쉬 사이트를 참고하였으며, 실제 서비스 개발 과정과 마찬가지로 무에서 유를 창조했습니다.


## 개발 기간 및 개발 인원
- 개발 기간 : 2021-10-04 ~ 2021-10-15 (공휴일 포함)
- 개발 인원<br />
   ✔️  **Front-End** 3명 : 박미연, 박세연, 윤수연<br />
   ✔️  **Back-End** 2명 : 김지훈, 박치훈<br />
   
## 프로젝트 구현 영상
- 📎 [유튜브 영상 링크](https://youtu.be/dZ92JHGZodI)
- **Reference** : 이 프로젝트는 러쉬 사이트를 참조하여 학습 목적으로 만들었습니다.
실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.

## 적용 기술 및 구현 페이지
> ✔️ **Front-End** : React, SASS, JSX<br />
> ✔️ **Back-End** : Django, Python, MySQL, jwt, bcypt, AWS RDS, AWS EC2<br />
> ✔️ **Common** : Git, Github, Slack, Trello, Postman<br />

### Front-End 구현 페이지
- 메인 페이지
  - 헤더 : 박세연
  - 바디 : 박미연 
  - 푸터 : 윤수연

- 로그인 페이지 : 박세연
- 회원가입 페이지 : 윤수연
- 장바구니 페이지 : 박세연
- 검색창 드롭 메뉴 : 박세연
- 검색 결과 페이지 : 윤수연
- 상품 목록 페이지 : 박미연
- 상품 상세 페이지 : 박미연

# 구현 기능 상세

### 박세연
   - **헤더 레이아웃 구현**
   - mouse hover 시, navigation bar 툴팁 창 및 user page (로그인, 회원가입 등) 툴팁 창이 뜨도록 구현
   - Nav 돋보기 아이콘 클릭 시 Search Modal 구현
   - **장바구니 레이아웃 구현**
   - 회원과 비회원을 토큰값으로 구분하여, 회원인 경우 장바구니에 담은 물건을 수량 그대로 옮겨와 장바구니 페이지 결과에 보이게 함
   - **로그인 레이아웃 구현**
   - 로그인 유효성 검사 (아이디 @과 . 포함, 비밀번호 8자 이상 및 특수문자 포함, 조건에 충족하지 않으면 버튼 비활성화)
   - 로그인 버튼 클릭시 유효성 검사 후 메인으로 이동
   - 로그인 후 백엔드로부터 토큰값을 받아 유지되게 함
   
### 윤수연
   - **푸터 레이아웃 구현**
   - **검색 결과 페이지 레이아웃 구현**
   - 상품명에 따른 검색 결과를 나타나게 함
   - **회원 가입 레이아웃 구현**
   - 회원 가입 유효성 검사 (아이디 @과 . 포함, 비밀번호 8자 이상 및 특수문자 포함, 조건에 충족하지 않으면 버튼 비활성화)
   - `input` 창에 글자 입력수가 부족할 시 안내 문구가 띄워짐
   - 회원가입 버튼 클릭시 유효성 검사 후 로그인 페이지로 이동

### 박미연
   - **바디 레이아웃 구현**
   - **상품 목록 페이지 레이아웃 구현**
   - 동적 라우팅을 통한 상품 목록 페이지 및 상세 페이지 연결
   - 상품 목록의 서브 카테고리인 Nav바를 백엔드 API와 동적 라우팅으로 연결
   - **상품 상세 페이지 레이아웃 구현**
   - 백엔드 API로부터 상품 상세 정보를 받아와, 적재적소에 맞춤
   - 상품 수량 state에 따른 가격 변화
   - 상품 수량 state와 상품 id를 장바구니 백엔드 API로 전송
   - 똑같은 UI 단위인 상품 공통 안내 정보를 상수 데이터로 만들고, `map` 메서드로 돌림
   - 포토 리뷰 창 클릭시 해당 리뷰 내용(이름, 평점, 좋아요 수, 내용, 포토 리뷰 사진) 담긴 팝업 ON/OFF

