import DiaryItem from "./DiaryItem";
import { DiaryListProps } from "../types/DiaryListProps";

export default function DiaryList({ data }: { data: DiaryListProps[] }) {
  return (
    <div>
      {data.map((item: DiaryListProps) => (
        <DiaryItem key={item.id} title={item.title} content={item.content} />
      ))}
    </div>
  );
}
