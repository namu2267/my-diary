import { useNavigate } from "react-router-dom";
import { DiaryListTypes } from "../types/DiaryListTypes";

export default function DiaryItem({ id, title, content }: DiaryListTypes) {
  const navigate = useNavigate();

  console.log("id콘솔", id);
  return (
    <div
      onClick={() => navigate(`/posts/${id}`, { state: { title, content } })}
    >
      <div>
        <span>title: {title}</span>
        <span>content: {content}</span>
      </div>
    </div>
  );
}
