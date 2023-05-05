import { useState } from "react";
import "./App.css";
import Modal from "./component/Modal";
import { createArticleApi } from "./api/Api";

function App() {
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createArticleApi(inputs);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

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
        <input type="text" name="inputTitle" onChange={handleChange} required />
        <input
          type="text"
          name="content"
          placeholder="내용을 입력하세요"
          onChange={handleChange}
          required
        />
        <button>글등록</button>
      </form>
      {modal === true ? (
        <Modal color="skyblue" modalTitle={modalTitle} />
      ) : null}
    </div>
  );
}

export default App;
