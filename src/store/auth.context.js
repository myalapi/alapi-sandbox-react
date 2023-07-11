import React, { useState, useReducer } from "react";
// import UserService from "../services/user.service";

const AuthContext = React.createContext({
  login: () => {},
  logout: () => {},
  updateUser: () => {},
  isLoggedIn: false,
  email: null,
  alapiId: null,
  companyName: null,
});

const userReducer = (prevState, action) => {
  return {
    email: action.email,
    alapiId: action.alapiId,
    companyName: action.companyName,
  };
};

export const AuthContextProvider = (props) => {
  const [login, setLogin] = useState(false);
  // const [loading, setLoading] = useState(true);
  const [user, dispatchUser] = useReducer(userReducer, {
    email: "",
    companyName: "",
    alapiId: "",
  });

  const logoutHandler = async () => {
    setLogin(false);
    window.location.reload(false);
  };

  const loginHandler = () => setLogin(true);
  const updateUserHandler = (user) => dispatchUser(user);

  // useEffect(() => {
  //   UserService.getUserDetails().then(async (data) => {
  //     if (!data) {
  //       setLogin(false);
  //       setLoading(false);
  //       return;
  //     }

  //     if (data.auth) {
  //       setLogin(true);
  //       dispatchUser({
  //         name: data.user.name,
  //         email: data.user.email,
  //         companyName: data.user.companyName,
  //         userId: data.user.userId,
  //       });
  //       setLoading(false);
  //     } else {
  //       setLogin(false);
  //       setLoading(false);
  //     }
  //   });
  // }, []);

  const contextValue = {
    isLoggedIn: login,
    name: user.name,
    email: user.email,
    alapiId: user.alapiId,
    companyName: user.companyName,
    userId: user.userId,
    login: loginHandler,
    logout: logoutHandler,
    updateUser: updateUserHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
