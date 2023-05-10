import { DiaryListProps } from "../types/DiaryListProps";
import { getDetailArticleApi } from "../api/Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  const [detailServerData, setDetailServerData] = useState<DiaryListProps>({
    id: 0,
    title: "",
    content: "",
  });

  // id를 useParams로 받아와 parseInt() 함수를 사용하여 number 타입으로 변환
  const { id } = useParams<{ id: string }>();
  const detailArticleId: number = id ? parseInt(id, 10) : NaN;

  console.log(detailServerData);

  useEffect(() => {
    getDetailArticleApi(detailArticleId).then((res: any) => {
      setDetailServerData(res.data);
    });
  }, [detailArticleId]);
  console.log(window.location);
  return (
    <div>
      <h1>디테일페이지</h1>
      <p>현재 페이지는 {detailServerData.id}입니다</p>
      <p>{detailServerData.title}</p>
      <p>{detailServerData.content}</p>
    </div>
  );
}
