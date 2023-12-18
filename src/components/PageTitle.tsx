import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PageTitle({ children }: React.PropsWithChildren) {
  const navigate = useNavigate();

  return (
    <div>
      <h3 className="bg-secondary p-2 text-light">
        <Button variant="light" className="me-2" onClick={() => navigate(-1)}>
          {"<<"}
        </Button>
        {children}
      </h3>
    </div>
  );
}

export default PageTitle;
