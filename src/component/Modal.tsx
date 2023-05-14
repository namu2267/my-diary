export default function Modal(props: any) {
  console.log(props);
  return (
    <div className="modal">
      <h4>{props.title}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
