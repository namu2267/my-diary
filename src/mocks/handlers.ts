import { DiaryListTypes } from "./../types/DiaryListTypes";
import { rest } from "msw";

const diaryMockData: DiaryListTypes[] = [
  {
    id: 1,
    title: "제목 11",
    content: "내용 11",
  },
  {
    id: 2,
    title: "제목 22",
    content: "내용 22",
  },
  {
    id: 3,
    title: "제목 33",
    content: "내용 33",
  },
];

export const handlers = [
  //다이어리목록
  rest.get("/posts", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(diaryMockData));
  }),

  //다이어리 디테일목록
  rest.get("/posts/:id", (req, res, ctx) => {
    const { id } = req.params;
    const data = diaryMockData.find((item) => item.id === Number(id));

    console.log("detailId ===>", id);

    if (!data) {
      return res(
        ctx.status(404),
        ctx.json({ message: `Post with id ${id} not found.` })
      );
    }

    return res(ctx.status(200), ctx.json(data));
  }),

  //다이어리 목록 추가
  rest.post("/posts/:id", (req, res, ctx) => {
    const { id, title, content } = req.body as DiaryListTypes;
    diaryMockData.push({ id, title, content });
    return res(ctx.status(201));
  }),
];
