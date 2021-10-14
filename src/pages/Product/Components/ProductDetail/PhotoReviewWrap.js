// import React, { Component } from 'react';

// class PhotoReviewWrap extends Component {
//   constructor() {
//     super();
//     this.state = {
//       closeBtnOFF: false,
//     };
//   }
//   render() {
//     const { imgClick, reviewData } = this.props;
//     return (
//       <article className={imgClick ? 'imgPopUpON' : 'imgPopUpOFF'}>
//         <div className="imgSection">
//           <img className="photo" alt="photoReview_IMG" src={reviewData.image} />
//         </div>
//         <div className="bottomWrap">
//           <div className="reviewUserInfo">
//             <p className="userName">{reviewData.user_name}</p>
//             <p className="userStar">★★★★★</p>
//           </div>
//           <div className="reviewContentWrap">
//             <p className="reviewProductName">{reviewData.product_name}</p>
//             <div className="reviewProductContent">{reviewData.content}</div>
//             <p className="likeCount">
//               <span className="countNumber">
//                 추천 수 : {reviewData.like_count}
//               </span>
//             </p>
//           </div>
//         </div>
//       </article>
//     );
//   }
// }

// export default PhotoReviewWrap;
