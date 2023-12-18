import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

function SiteTitle() {
  return (
    <div>
      <h1>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          react online alışveriş
        </Link>
      </h1>
      <h6>hızlı ve güvenli 🎁❤😊</h6>
      <Stack direction="horizontal" gap={3}>
        <Link to={"/login"}>giriş yap</Link>
        <Link to={"/cart"}>sepet</Link>
      </Stack>
      <hr />
    </div>
  );
}

export default SiteTitle;
