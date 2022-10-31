import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type State = {
  apiKey: string;
  isLoggedIn: boolean;
  storeApiKey: (newApiKey: string) => void;
};
type AuthProviderProps = { children: ReactNode };

const AuthContext = createContext<State | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [apiKey, setApiKey] = useState("");

  const storeApiKey = (newApiKey: string) => {
    setApiKey(newApiKey);
  };

  const isLoggedIn = useMemo(() => {
    return Boolean(apiKey);
  }, [apiKey]);

  const value = { apiKey, isLoggedIn, storeApiKey };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
