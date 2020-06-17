import GAListener from "./components/GAListener";
import { EmptyLayout, LayoutRoute, MainLayout } from "./components/Layout";
import PageSpinner from "./components/PageSpinner";
import React from "react";
import componentQueries from "react-component-queries";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./styles/sharreit.scss";
import "antd/dist/antd.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SignInPage from "./pages/signIn";
import RegistrationPage from "./pages/registration";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
// import authService from "./services/authService";
import routes from "./config/routes";

const store = configureStore();

const HomePage = React.lazy(() => import("./pages/homePage"));
const CategoriesPage = React.lazy(() => import("./pages/categoriesPage"));
const PostItemPage = React.lazy(() => import("./pages/postItemPage"));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split("/").pop()}`;
};
// const user = authService.getUser();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename={getBasename()}>
          <GAListener>
            <Switch>
              <LayoutRoute
                exact
                path={routes.login}
                layout={EmptyLayout}
                component={SignInPage}
              />
              <LayoutRoute
                exact
                path={routes.registration}
                layout={EmptyLayout}
                component={RegistrationPage}
              />
              <React.Fragment>
                <MainLayout breakpoint={this.props.breakpoint}>
                  <React.Suspense fallback={<PageSpinner />}>
                    <Route exact path={routes.homePage} component={HomePage} />
                    <Route
                      exact
                      path={routes.categories}
                      component={CategoriesPage}
                    />
                    <Route
                      exact
                      path={routes.postItem}
                      component={PostItemPage}
                    />
                  </React.Suspense>
                </MainLayout>
                <Redirect to={routes.homePage} />
              </React.Fragment>
            </Switch>
          </GAListener>
        </BrowserRouter>
      </Provider>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: "xs" };
  }

  if (576 < width && width < 767) {
    return { breakpoint: "sm" };
  }

  if (768 < width && width < 991) {
    return { breakpoint: "md" };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: "lg" };
  }

  if (width > 1200) {
    return { breakpoint: "xl" };
  }

  return { breakpoint: "xs" };
};

export default componentQueries(query)(App);
