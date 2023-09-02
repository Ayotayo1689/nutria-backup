import React, { FC } from "react";
import "./404-page.styles.scss";
import notFound from "../../assets/images/404.png";
import { Button } from "components";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "routes/index.routes";


const PageNotFound: FC = (props) => {
    const navigate = useNavigate()

  return (
    <div className="page__notfound-container">
      <div>
        <img src={notFound} alt="notFound" />
      </div>

      <div className="page__notfound-text">
        <h1>Page Not Found</h1>
        <Button onClick={() => navigate(pageRoutes.home)} variant="primary">
            Return to Homepage
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
