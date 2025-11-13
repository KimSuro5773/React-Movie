import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h4>MovieDetail</h4>
      <p>Movie ID : {id}</p>
    </div>
  );
}

export { MovieDetail };
