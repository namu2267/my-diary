import { useNavigate } from "react-router-dom";
import { DiaryListProps } from "../types/DiaryListProps";
import DetailPage from "../Pages/DetailPage";

export default function DiaryItem({ id, title, content }: DiaryListProps) {
  const navigate = useNavigate();
  console.log("id", id);
  return (
    <div
      onClick={() => navigate(`/detail/:${id}`, { state: { title, content } })}
    ></div>
  );
}
