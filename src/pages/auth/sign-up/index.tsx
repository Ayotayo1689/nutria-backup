import React, { FC, useState } from "react";
import { ISignUpProps } from "./sign-up.types";
import { BaseInput, Button, Socials } from "components";
import "./sign-up.styles.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import { ClipLoader } from "react-spinners";
import { authRoutes } from "routes/index.routes";
import { baseUrl } from "config/api";


const defaultSignupFormData = {
  name: "",
  email: "",
  phone: "",
  password: "",
  checkbox: false,
};

interface IDefaultSignupFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  checkbox: boolean;
}

const SignUp: FC<ISignUpProps> = () => {
  const [signupFormData, setSignupFormData] = useState<IDefaultSignupFormData>(
    defaultSignupFormData
  );
  const { name, email, phone, checkbox, password } = signupFormData;
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const signupUser = async (userData: IDefaultSignupFormData) => {
    try {
      setIsLoading(true);

      const response = await axios.post(
        `${baseUrl}/users/register`,
        userData
      );
      enqueueSnackbar({
        message: response.data.message,
        variant: "success",
        preventDuplicate: true,
        autoHideDuration: 2000,
      });

      setSignupFormData(defaultSignupFormData);
      navigate(authRoutes.login, { state: email });
    } catch (err: any) {
      enqueueSnackbar({
        message: err?.response?.data?.error,
        variant: "error",
        preventDuplicate: true,
        autoHideDuration: 3000,
      });
      // console.log(err.response.data.error)
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signupUser(signupFormData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;

    setSignupFormData((prevData) => {
      return {
        ...prevData,
        [id]: type === "checkbox" ? checked : value,
      };
    });
  };

  const Loader = () => (
    <ClipLoader
      color="#FAFAFA"
      loading={isLoading}
      size={24}
      aria-label="loading spinner"
      data-testid="loader"
    />
  );

  return (
    <div className="flex__signup-container">
      <div className="sign-up app-container">
        <div className="sign-up__content app-container__section">
          <h3 className="sign-up__content__heading">Sign Up</h3>
          <Socials />
          <div className="sign-up__content__or">
            <p>or</p>
          </div>
          <form onSubmit={handleSubmit} action="" className="sign-up__form">
            <div className="sign-up__form__input">
              <BaseInput
                placeholder="Anuoluwapo Adedeji"
                id="name"
                value={name}
                onChange={handleChange}
                type="text"
                label="Name"
              />
              <BaseInput
                placeholder="noutria@gmail.com"
                id="email"
                value={email}
                onChange={handleChange}
                type="email"
                label="Email"
              />
              <BaseInput
                placeholder="08012948322"
                id="phone"
                value={phone}
                onChange={handleChange}
                type="number"
                label="Phone number"
              />
              <BaseInput
                placeholder="************"
                id="password"
                value={password}
                onChange={handleChange}
                type="password"
                label="Password"
              />
            </div>
            <div className="sign-up__form__terms">
              <input
                id="checkbox"
                type="checkbox"
                checked={checkbox}
                onChange={handleChange}
              />
              <label htmlFor="privacy" className="form-privacy">
                I agree with the <em className="span-privacy"> Terms </em> and{" "}
                <em className="span-privacy">Privacy</em>
              </label>
            </div>

            {/* Sign Up Button */}
            <Button
              disabled={isLoading}
              variant="primary"
              className={`sign-up__button ${
                isLoading ? "disabled__state" : ""
              }`}
            >
              <div className="sign-up__children">
                <Loader />
                {isLoading ? "Signing Up" : "Sign Up"}
              </div>
            </Button>
          </form>
          <div className="sign-up__account">
            <p className="account">Already have an account? </p>
            <Link to="/auth/login" className="account-signin">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
