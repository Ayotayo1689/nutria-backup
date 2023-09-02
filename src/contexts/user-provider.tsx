import React, {
  useState,
  useContext,
  createContext,
  FC,
  ReactNode,
  useEffect,
} from "react";

type UserProviderProps = {
  children: ReactNode;
};

type User = {
  username: string;
  email: string;
};

type IUserContext = {
  // user: User;
  // setUser: React.Dispatch<React.SetStateAction<User | undefined>>
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserContext = createContext<null | IUserContext>(null);

export function login() {}

export function logout() {}

export function signup() {}

export function useAuth() {
  return useContext(UserContext);
}

function getUser(url: string) {}

const UserProvider: FC<UserProviderProps> = (props) => {
  const { children } = props;
  const [user, setUser] = useState();
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    getUser("");
  }, []);

  

  const value = {
    // user,
    // setUser,
    token,
    setToken,
    isAuthenticated,
    setIsAuthenticated,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
