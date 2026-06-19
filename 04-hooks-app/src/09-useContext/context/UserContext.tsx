import { createContext, useState, type PropsWithChildren } from "react";
import type { User } from "../data/user-mock.data";

type AuthStatus = "checking" | "authenticated" | "not-authenticated";

interface UserContextProps {
  //State
  authStatus: AuthStatus;
  user: User | null;

  // Methods
  login: (userId: number) => boolean;
  logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

// ** This a HOC (High Order Component)
export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>("checking");
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userId: number) => {
    console.log({ userId });
    return true;
  };

  const handleLogOut = () => {
    console.log("Logout");
  };

  return (
    <UserContext
      value={{
        authStatus: "checking",
        user: null,
        login: handleLogin,
        logout: handleLogOut,
      }}
    >
      {children}
    </UserContext>
  );
};
