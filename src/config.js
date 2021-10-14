const BASE_URL = 'http://10.58.7.141:8000';

export const API = {
  BASE_URL: `${BASE_URL}`,
  PRODUCT_DETAIL: `${BASE_URL}/products`, // search_result
  SEARCH: `${BASE_URL}/products?search=`,
  SIGNUP: `${BASE_URL}/users/signup`,
  SIGNIN: `${BASE_URL}/users/signin`,
  CART: `${BASE_URL}/carts`, //  post & get
  REVIEW: `${BASE_URL}/reviews`, // 상품리뷰 하나보기
  TOTAL_REVIEW: `${BASE_URL}/products/reviews`, // 상품리뷰 전체보는거
};
