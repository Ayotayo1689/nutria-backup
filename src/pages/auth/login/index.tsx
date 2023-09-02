import React, { FC, useState } from "react";
import { ILoginProps } from "./login.types";
import { BaseInput, Button, Socials } from "components";
import "./login.styles.scss";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "config/api";
import Location from "pages/location";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "routes/index.routes";
import { useForm } from "react-hook-form";

type LoginData = {
  email: string;
  password: string;
};


const Login: FC<ILoginProps> = (props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const { enqueueSnackbar } = useSnackbar();
  
  const navigate = useNavigate();
  const location = useLocation();
  const signUpEmail = location.state;
  
  const defaultLoginData: LoginData = {
    email: signUpEmail || "",
    password: "",
  };
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    defaultValues: defaultLoginData,
  });

  const {active }= JSON.parse(localStorage.getItem('user') || '{}')
  

  const onSubmit = async (loginData: LoginData) => {
    try {
      setIsLoading(true);

      const res = await axios.post(` ${baseUrl}/users/login`, loginData);
      const token = res.data?.data?.token;
      const user = res.data?.data?.userDetails;

      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        enqueueSnackbar({
          message: res.data.message,
          variant: "success",
          preventDuplicate: true,
          autoHideDuration: 2000,
        });
        setOpenModal(true);

        if (active === true) {
          navigate(pageRoutes.home)
        } else {
          navigate(pageRoutes.registration);
        }
      }
    } catch (error: any) {
      enqueueSnackbar({
        message: error.response.data.error,
        variant: "error",
        preventDuplicate: true,
        autoHideDuration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex__login-container">
        <div className="sign-in app-container">
          <div className="sign-in__content app-container__section">
            <h3 className="sign-in__content__heading">Sign In</h3>
            <Socials />
            <div className="sign-in__content__or">
              <p>or</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="sign-in__form">
              <div className="sign-in__form__input">
                <BaseInput
                  id="email"
                  placeholder="Anuoluwapo Adedeji"
                  type="email"
                  label="Email"
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Email is not valid.",
                    },
                  })}
                />
                <p>{errors?.email?.message}</p>

                <BaseInput
                  id="password"
                  placeholder="************"
                  type="password"
                  label="Password"
                  {...register("password", {
                    required: "Password is required.",
                  })}
                />
                <p>{errors?.password?.message}</p>
              </div>
              <a href="">
                <p className="sign-in__form__password">Forgot password?</p>
              </a>
              <Button
                variant="primary"
                children="Sign In"
                disabled={isLoading}
                className={`sign-up__button ${
                  isLoading ? "disabled__state" : ""
                }`}
                loader={isLoading}
              />
            </form>
          </div>

          <div className="sign-in__account">
            <p className="account">Already have an account? </p>
            <Link to="/auth/sign-up" className="account-signin">
              Sign Up
            </Link>
          </div>
        </div>

        {openModal ? <Location /> : ""}
      </div>
      {/* <DevTool control={control} /> */}
    </>
  );
};

export default Login;
