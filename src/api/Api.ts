import axios from "axios";
import { ArticleTypes } from "../types/ArticleTypes";

const instance = axios.create({
  baseURL: "http://192.168.1.103:3030/posts",
});

// 프론트에서 데이터를 담아서 백으로 보낼때
export const createArticleApi = (article: ArticleTypes) => {
  const response = instance.post("/", article);
  return response;
};

//article의 전체목록을 가져온다.
export const getArticleApi = () => {
  const response = instance.get("/");
  return response;
};

//article의 detail을 가져온다.
export const getDetailArticleApi = (id: number) => {
  const response = instance.get(`/${id}`);
  return response;
};

// article 수정
export const updateArticleApi = (id: number, article: ArticleTypes) => {
  const response = instance.patch(`/${id}`, article);
  return response;
};

// article 삭제하기
export const deleteArticleApi = (id: number) => {
  const response = instance.delete(`/${id}`);
  return response;
};

// patch, delete, detail => get 메소드, path parameter를 사용해서 디테일을 볼 수 있는 요청
