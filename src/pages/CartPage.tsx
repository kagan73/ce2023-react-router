import { ListGroup } from "react-bootstrap";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";

function CartPage() {
  return (
    <div>
      <PageTitle>Sepet</PageTitle>
      <ListGroup>
        <ListGroup.Item>Elma 1 KG</ListGroup.Item>
      </ListGroup>
      <h5 className="text-end">
        Toplam: <b>12 TL</b>
      </h5>

      <Link to={"/checkout"}>Ödeme yap</Link>
    </div>
  );
}

export default CartPage;
