import { useEffect, useState } from "react";
import "./Main.css";
import Modal from "./component/Modal";
import DiaryList from "./component/DiaryList";
import {
  createArticleApi,
  getArticleApi,
  getDetailArticleApi,
} from "./api/Api";
import { ArticleTypes } from "../src/types/ArticleTypes";
import { DiaryListProps } from "./types/DiaryListProps";

function App() {
  let [serverData, setServerData] = useState<DiaryListProps[]>([]);

  let [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  useEffect(() => {
    getArticleApi().then((res: any) => {
      setServerData(res.data);
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createArticleApi(inputs);
    console.log(inputs);
  };

  console.log(serverData);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>My-diary</h4>
      </div>
      <DiaryList data={serverData} />

      {/* {title?.map(function (item, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setModalTitle(i);
              }}
            >
              {item}
            </h4>

            <button>삭제</button>
          </div>
        );
      })} */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" onChange={handleChange} required />
        <input
          type="text"
          name="content"
          placeholder="내용을 입력하세요"
          onChange={handleChange}
          required
        />
        <button>글등록</button>
      </form>
    </div>
  );
}

export default App;
