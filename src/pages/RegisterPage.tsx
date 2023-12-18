import { Button } from "react-bootstrap";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div>
      <PageTitle>Üye ol</PageTitle>
      <div>eposta</div>
      <input />
      <div></div>
      <Button>Kayıt</Button>
      <hr />
      <Link to={"/login"}>Kayıtlı üyeyim</Link>
    </div>
  );
}
export default RegisterPage;
