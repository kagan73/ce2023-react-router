import { Button } from "react-bootstrap";
import PageTitle from "../components/PageTitle";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div>
      <PageTitle>Üye girişi</PageTitle>
      <div>UserName</div>
      <input />
      <div>Password</div>
      <input />
      <div></div>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Login
      </Button>
      <hr />
      <Link to={"/register"}>Yeni Üye olmak istiyorum</Link>
    </div>
  );
}

export default LoginPage;
