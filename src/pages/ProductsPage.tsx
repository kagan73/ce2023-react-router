import { Badge, ListGroup } from "react-bootstrap";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";

function ProductsPage() {
  return (
    <div>
      <PageTitle>Ürünler</PageTitle>
      <Link to={"/cart"}>sepete git</Link>
      <ListGroup>
        <ListGroup.Item>
          Bilgisayar <Badge>15.000 TL</Badge>
        </ListGroup.Item>
        <ListGroup.Item>
          Cep telefonu<Badge>20.000 TL</Badge>
        </ListGroup.Item>
        <ListGroup.Item>
          Monitor <Badge>5.000 TL</Badge>
        </ListGroup.Item>
        <ListGroup.Item>
          Yazıcı<Badge>4.000 TL</Badge>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
export default ProductsPage;
