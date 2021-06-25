import React from "react";
import { nullUser } from "../lib/auth";
import { UserModel } from "../types/index";


let isSignedIn: any;
let setSignedIn: any;
let currentUser: any;
let setCurrentUser: any;

const AppContext = React.createContext({
  isSignedIn,
  setSignedIn,
  currentUser,
  setCurrentUser
});

export default AppContext;