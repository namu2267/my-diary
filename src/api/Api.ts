import axios from "axios";
import { ArticleTypes } from "../types/ArticleTypes";

const instance = axios.create({
  baseURL: "http://192.168.1.103/post",
});

//article의 전체목록을 가져온다.
export const getArticleApi = () => {
  const response = instance.get("/");
  return response;
};

// 프론트에서 데이터를 담아서 백으로 보낼때
export const createArticleApi = (article: ArticleTypes) => {
  const response = instance.post("/create", article);

  return response;
};

// patch, delete, detail => get 메소드, path paramete를 사용해서 디테일을 볼 수 있는 요청을 만들 예정
