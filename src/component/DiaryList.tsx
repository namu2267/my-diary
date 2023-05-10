import DiaryItem from "./DiaryItem";
import { DiaryListProps } from "../types/DiaryListProps";

export default function DiaryList({
  serverData,
}: {
  serverData: DiaryListProps[];
}) {
  return (
    <div>
      {serverData.map((item: DiaryListProps) => (
        <DiaryItem
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
}
