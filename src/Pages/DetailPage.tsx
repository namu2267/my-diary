import { DiaryListTypes } from "../types/DiaryListTypes";
import {
  getDetailArticleApi,
  getDetailMockArticleApi,
  deleteArticleApi,
} from "../api/Api";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function DetailPage() {
  const navigate = useNavigate();

  const [detailServerData, setDetailServerData] = useState<DiaryListTypes>({
    id: 0,
    title: "",
    content: "",
  });

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    try {
      if (id) {
        // const articleId = parseInt(id, 10);
        await deleteArticleApi(detailArticleId);
        // 삭제후 필요한 작업 수행
        navigate("/posts");
      }
    } catch (error) {
      console.log("에러가 발생했습니다.");
    }
  };

  // id를 useParams로 받아와 parseInt() 함수를 사용하여 number 타입으로 변환
  const { id } = useParams<{ id: string }>();
  const detailArticleId: number = id ? parseInt(id.replace(/:/g, ""), 10) : NaN;

  // 백엔드에서 디테일 id받아옴
  useEffect(() => {
    getDetailArticleApi(detailArticleId).then((res: any) => {
      setDetailServerData(res.data);
    });
  }, [detailArticleId]);

  //mock데이터로 디테일id 받아옴
  // useEffect(() => {
  //   getDetailMockArticleApi(mockDetailArticleId).then((res) => {
  //     setDetailServerData(res.data);
  //   });
  // }, [mockDetailArticleId]);

  console.log("id:===>", id);
  console.log("detailArticleId====>", detailArticleId);
  console.log("detailServerData", detailServerData);

  // console.log(window.location);
  return (
    <>
      <h1>디테일 페이지</h1>
      <p> 현재 페이지는 {id}</p>
      <p>title: {detailServerData.title}</p>
      <p>content: {detailServerData.content} </p>
      <button onClick={handleDelete}>삭제</button>
    </>
  );
}
