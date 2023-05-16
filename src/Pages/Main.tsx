import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Main.css";
import DiaryList from "../component/DiaryList";
import {
  createArticleApi,
  getArticleApi,
  getDetailArticleApi,
  getMockArticleApi,
  createMockArticleApi,
} from "../api/Api";
import { ArticleTypes } from "../types/ArticleTypes";
import { DiaryListTypes } from "../types/DiaryListTypes";
import DetailPage from "./DetailPage";

function App() {
  const [serverData, setServerData] = useState<DiaryListTypes[]>([]);

  const [inputs, setInputs] = useState({
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

  // // 백엔드 API로 데이터 가져옴
  // useEffect(() => {
  //   getArticleApi().then((res: any) => {
  //     setServerData(res.data);
  //   });
  // }, []);

  //mock API로 데이터를 가져옴
  useEffect(() => {
    getMockArticleApi().then((res) => {
      setServerData(res.data);
    });
  }, []);

  //백엔드 서버로 create
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   createArticleApi(inputs)
  //     .then(() => {
  //       // 생성이 성공한 뒤 서버 데이터를 다시 가져옴
  //       getArticleApi().then((res: any) => {
  //         setServerData(res.data);
  //       });
  //       // createMockArticleApi(inputs);
  //     })
  //     .catch((error) => {
  //       // 생성 실패 시 에러처리
  //       console.log(error);
  //     });
  //   console.log(inputs);
  // };

  //mockData로 create
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createMockArticleApi(inputs)
      .then(() => {
        // 생성이 성공한 뒤 서버 데이터를 다시 가져옴
        getMockArticleApi().then((res: any) => {
          setServerData(res.data);
        });
        // createMockArticleApi(inputs);
      })
      .catch((error) => {
        // 생성 실패 시 에러처리
        console.log(error);
      });
    console.log(inputs);
  };

  console.log("serverData====>", serverData);

  return (
    <>
      <div className="App">
        <div className="black-nav">
          <h4>My-diary</h4>
        </div>
        {serverData ? (
          <DiaryList serverData={serverData} />
        ) : (
          "데이터가 안들어왔습니다 🔫"
        )}

        {/* <DiaryList serverData={serverData} /> */}

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
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="제목을 입력하세요"
            required
          />
          <input
            type="text"
            name="content"
            placeholder="내용을 입력하세요"
            onChange={handleChange}
            required
          />
          <button type="submit">글등록</button>
        </form>
      </div>
    </>
  );
}

export default App;
