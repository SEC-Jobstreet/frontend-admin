import Nav from "./components/appnav";
import AppRouter from "./components/approuter";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { useEffect, useState } from "react";
import { decodeJWT, getCurrentUser } from "aws-amplify/auth";
import { loginAccount } from "./store/user";
import { useDispatch } from "react-redux";

function App() {
  const [rehydrated, setReHydated] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const res = await getCurrentUser();
        let userinfo = {
          username: res.username,
        };
        try {
          const idToken = localStorage.getItem(
            `CognitoIdentityServiceProvider.${process.env.REACT_APP_COGNITO_USER_POOL_CLIENT_ID}.${res.username}.idToken`
          );

          const data = decodeJWT(idToken);
          userinfo = {
            ...userinfo,
            email: data.payload.email,
          };
        } catch (err) {
          console.log(err);
        }
        dispatch(loginAccount(userinfo));
        setReHydated(true);
      } catch (err) {
        console.log(err);
        setReHydated(true);
      }
    };

    checkToken();
  }, []);
  return (
    rehydrated && (
      <div className="App">
        <Nav />
        <AppRouter />
      </div>
    )
  );
}

export default App;
