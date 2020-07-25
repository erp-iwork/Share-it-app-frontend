import GAListener from "./components/GAListener";
import { EmptyLayout, LayoutRoute, MainLayout } from "./components/Layout";
import { ToastContainer, Zoom } from "react-toastify";
import PageSpinner from "./components/PageSpinner";
import React from "react";
import componentQueries from "react-component-queries";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./styles/sharreit.scss";
import "antd/dist/antd.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toastify/dist/ReactToastify.css";
import SignInPage from "./pages/signIn";
import RegistrationPage from "./pages/registration";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import routes from "./config/routes";
import ProtectedRoute from "./components/protectedRoute";
import Chat from "./components/ChatComponent";

const store = configureStore();
const HomePage = React.lazy(() => import("./pages/homePage"));
const CategoriesPage = React.lazy(() => import("./pages/categoriesPage"));
const PostItemPage = React.lazy(() => import("./pages/postItemPage"));
const AllItemsPage = React.lazy(() => import("./pages/allItems"));
const SingleItemPage = React.lazy(() => import("./pages/singleItemView"));
const ProfilePage = React.lazy(() => import("./pages/profilePage"));
const Messages = React.lazy(() => import("./pages/messages/messages"));
const SettingsPage = React.lazy(() => import("./pages/settings"));
const BuyAndSell = React.lazy(() => import("./pages/buySellHistory"));
const AvailabilityPage = React.lazy(() => import("./pages/availabilityPage"));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split("/").pop()}`;
};
// const user = authService.getUser();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          transition={Zoom}
          rtl={false}
          pauseOnFocusLoss
          closeButton={false}
          draggable
          pauseOnHover
        />

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
                      path={routes.Categories}
                      component={CategoriesPage}
                    />
                    <ProtectedRoute
                      exact
                      path={routes.postItem}
                      component={PostItemPage}
                    />

                    <Route
                      exact
                      path={routes.singleItem}
                      component={SingleItemPage}
                    />
                    <Route
                      exact
                      path={routes.allItems}
                      component={AllItemsPage}
                    />
                    <Route
                      exact
                      path={routes.profile}
                      component={ProfilePage}
                    />
                    <Route
                      exact
                      path={routes.settings}
                      component={SettingsPage}
                    />
                    <Route
                      exact
                      path={routes.buyAndSell}
                      component={BuyAndSell}
                    />
                    <Route
                      exact
                      path={routes.Availability}
                      component={AvailabilityPage}
                    />
                   
                    <Route exact path="/chat" component={Chat} />
                    <Route exact path="/messages" component={Messages} />
                  </React.Suspense>
                </MainLayout>
              </React.Fragment>
              <Redirect to={routes.homePage} />
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
// import React, { Component } from 'react';
// import './static/css/App.css';
// import InitializeChatComponent from './components/InitializeChatComponent';
// import ChatComponent from './components/ChatComponent';
// import WebSocketInstance from './WebSocket';

// class App extends Component {
// 	constructor(props) {
// 		super(props)

// 		this.state = {
// 			username: '',
// 			loggedIn: false
// 		};
// 	}

// 	handleLogin = (e, username) => {
// 		e.preventDefault();
// 		this.setState({ loggedIn: true, username: username });
// 		WebSocketInstance.connect();
// 		console.log(this.state);

// 	}

// 	render() {
// 		const { username, loggedIn } = this.state;
// 		return (
// 			<div className="App">
// 				{
// 					loggedIn ?
// 						<ChatComponent currentUser={username}
// 						/>
// 						:
// 						<InitializeChatComponent
// 							handleLogin={this.handleLogin}
// 						/>
// 				}

// 			</div>
// 		);
// 	}

// }

// export default App;
