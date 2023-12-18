import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle";

function CheckOutPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-danger p-2">
      <PageTitle>Ödeme ve Adres bilgileri</PageTitle>
      <div>Kredi kartı numarası</div>
      <input />
      <div>Alıcı adı</div>
      <input />
      <div>Adres</div>
      <input />
      <div></div>
      <Button
        onClick={() => {
          navigate("/success");
        }}
      >
        Siparişi tamamla
      </Button>
    </div>
  );
}

export default CheckOutPage;
