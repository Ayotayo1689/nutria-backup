import React, { FC, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home";
import { authRoutes, pageRoutes } from "./routes/index.routes";
import SignUp from "./pages/auth/sign-up";
import Login from "./pages/auth/login";
import OnboardingPage from "pages/onboarding-page";
import Registration from "pages/registration/Index";
import BreakfastOption from "pages/breakfast-options";
import LunchOption from "pages/lunch-options";
import DinnerOption from "pages/dinner-options";
import SnacksOption from "pages/snack-options";
import Recipe from "pages/recipe";
import MealDetail from "pages/meal-detail";
import PrivateRoutes from "utils/PrivateRoute";
import RestaurantsNearby from "pages/restaurants-nearby";
import Loading from "components/loading";
import StoresNearby from "pages/stores-nearby";
import MealHeader from "components/mealheader";
import PageNotFound from "pages/404-page";
import TestPage from "pages/test-page";

const App: FC = () => {
  const isOnboarded = localStorage.getItem("onboarding");

  const CheckOnboarding: FC = () => {
    if (isOnboarded === "true") {
      return <Navigate to={pageRoutes.home} />;
    } else {
      return <Navigate to={pageRoutes.onboarding} />;
    }
  };

  return (
    <Routes>
      <Route path="/test-page" element={<TestPage />} />
      <Route index path={pageRoutes.onboarding} element={<OnboardingPage />} />
      <Route path={authRoutes.signUp} element={<SignUp />} />
      <Route path={authRoutes.login} element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path={pageRoutes.app} element={<CheckOnboarding />} />
        <Route path={pageRoutes.registration} element={<Registration />} />
        <Route path={pageRoutes.onboarding} element={<OnboardingPage />} />
        <Route path={authRoutes.signUp} element={<SignUp />} />
        <Route path={authRoutes.login} element={<Login />} />
        <Route
          path={pageRoutes.breakfastOption}
          element={
            <>
              <MealHeader title="Breakfast" link="" />
              <Suspense fallback={<Loading />}>
                <BreakfastOption />
              </Suspense>
            </>
          }
        />
        <Route
          path={pageRoutes.lunchOptions}
          element={
            <>
              <MealHeader title="lunch" link="" />
              <Suspense fallback={<Loading />}>
                <LunchOption />
              </Suspense>
            </>
          }
        />
        <Route
          path={pageRoutes.dinnerOption}
          element={
            <>
              <MealHeader title="Dinner" link="" />
              <Suspense fallback={<Loading />}>
                <DinnerOption />
              </Suspense>
            </>
          }
        />
        <Route path={pageRoutes.snacksOption} element={<SnacksOption />} />
        <Route index path={pageRoutes.home} element={<Home />} />
        <Route path={pageRoutes.registration} element={<Registration />} />
        <Route path={pageRoutes.recipe} element={<Recipe />} />
        <Route path={pageRoutes.mealDetail} element={<MealDetail />} />
        <Route
          path={pageRoutes.restaurantsNearby}
          element={
            <>
              <MealHeader title="Restaurants" link="" />
              <Suspense fallback={<Loading />}>
                <RestaurantsNearby />
              </Suspense>
            </>
          }
        />
        <Route
          path={pageRoutes.storesNearby}
          element={
            <>
              <MealHeader title="Stores" link="" />
              <Suspense fallback={<Loading />}>
                <StoresNearby />
              </Suspense>
            </>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <PageNotFound />
        }
      />
    </Routes>
  );
};

export default App;
