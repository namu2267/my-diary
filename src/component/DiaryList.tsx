import DiaryItem from "./DiaryItem";
import { DiaryListTypes } from "../types/DiaryListTypes";

export default function DiaryList({
  serverData,
}: {
  serverData: DiaryListTypes[];
}) {
  return (
    <div>
      {serverData.map((item: DiaryListTypes) => (
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
