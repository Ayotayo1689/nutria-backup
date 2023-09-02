import React, { ReactNode, FC } from "react";
import "./registration.styles.scss";

type RegistrationLayoutProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

const RegistrationLayout: FC<RegistrationLayoutProps> = (props) => {
  const { title, description, children } = props;
  return (
    <div className="registration-layout">
      <div className="registration-layout__text">
        <h1 className="registration-layout__text__title">{title}</h1>
        <p className="registration-layout__text__description">{description}</p>
      </div>
      <div className="registration-layout__content">{children}</div>
    </div>
  );
};

export default RegistrationLayout;
