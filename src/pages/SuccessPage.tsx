import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

function SuccessPage() {
  return (
    <div>
      <PageTitle>Tebrikler !</PageTitle>

      <div>siparişleriniz gönderilmek üzere yola çıktı</div>

      <Link to={"/"}>ürünlere gözat</Link>
    </div>
  );
}

export default SuccessPage;
