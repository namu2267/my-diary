import { DiaryListTypes } from "../types/DiaryListTypes";
import { getDetailArticleApi, getDetailMockArticleApi } from "../api/Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  // const [detailServerData, setDetailServerData] = useState<DiaryListTypes>({
  //   id: 0,
  //   title: "",
  //   content: "",
  // });

  const [detailServerData, setDetailServerData] = useState<DiaryListTypes[]>(
    []
  );

  // id를 useParams로 받아와 parseInt() 함수를 사용하여 number 타입으로 변환
  const { id } = useParams<{ id: string }>();
  const mockDetailArticleId: number = id
    ? parseInt(id.replace(/:/g, ""), 10)
    : NaN;

  // const detailArticleId: number = id ? parseInt(id, 10) : NaN;

  //백엔드에서 디테일 id받아옴
  // useEffect(() => {
  //   getDetailArticleApi(detailArticleId).then((res: any) => {
  //     setDetailServerData(res.data);
  //   });
  // }, [detailArticleId]);

  //mock데이터로 디테일id 받아옴
  useEffect(() => {
    getDetailMockArticleApi(mockDetailArticleId).then((res) => {
      setDetailServerData(res.data);
    });
  }, [mockDetailArticleId]);

  console.log("id:===>", id);
  console.log("mockDetailArticleId====>", mockDetailArticleId);
  console.log("detailServerdata", detailServerData);

  // console.log(window.location);
  return (
    <>
      {detailServerData.map((item: DiaryListTypes) => (
        <div key={mockDetailArticleId}>
          <h1>디테일페이지</h1>
          <p>현재 페이지는 {mockDetailArticleId}입니다</p>
          <p>{item.title}</p>
          <p>{item.content}</p>
        </div>
      ))}
    </>
  );
}
