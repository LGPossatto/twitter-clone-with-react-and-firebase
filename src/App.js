import { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import UserContext from "./context/user/userContext";

import "./assets/styles/globals.style.scss";
import Home from "./pages/home/Home.page";
import Login from "./pages/login/Login.page";
import Follow from "./pages/follow/Follow.page";
import Explore from "./pages/explore/Explore.page";
import Comment from "./pages/comment/Comment.page";
import ProfileEdit from "./pages/profile-edit/ProfileEdit.page";

function App() {
  const { user, followers, following } = useContext(UserContext);

  return (
    <BrowserRouter>
      {user && followers && following ? (
        <>
          <Route component={Home}></Route>
          <Switch>
            <Route
              path={`/user/:userUID/tweet/:tweetID`}
              component={Comment}
            ></Route>
            <Route path="/explore" component={Explore}></Route>
            <Route path="/profile-edit" component={ProfileEdit}></Route>
            <Route path="/:follow" component={Follow}></Route>
          </Switch>
        </>
      ) : (
        <Route component={Login}></Route>
      )}
    </BrowserRouter>
  );
}

export default App;
