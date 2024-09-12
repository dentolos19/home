"use client";

import { getUser, loginUser, logoutUser, registerUser, UserPrefs } from "@/lib/auth";
import { Models } from "appwrite";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextProps = {
  loading: boolean;
  session?: Models.Session;
  user?: Models.User<UserPrefs>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string, name?: string) => Promise<void>;
  refresh: () => Promise<void>;
};

const AuthContext = createContext<AuthContextProps>({
  loading: true,
  session: undefined,
  user: undefined,
  login: () => {
    throw new Error("Function not implemented.");
  },
  logout: () => {
    throw new Error("Function not implemented.");
  },
  register: () => {
    throw new Error("Function not implemented.");
  },
  refresh: () => {
    throw new Error("Function not implemented.");
  },
});

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider(props: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<Models.Session>();
  const [user, setUser] = useState<Models.User<UserPrefs>>();

  const login = async (email: string, password: string) => {
    await loginUser(email, password).then((data) => {
      setSession(data.session);
      setUser(data.user);
    });
  };

  const logout = async () => {
    await logoutUser().then(() => {
      setSession(undefined);
      setUser(undefined);
    });
  };

  const register = async (email: string, password: string, name?: string) => {
    await registerUser(email, password, name).then((data) => {
      setSession(data.session);
      setUser(data.user);
    });
  };

  const refresh = async () => {
    setLoading(true);
    await getUser().then((data) => {
      if (data) {
        setSession(data.session);
        setUser(data.user);
      } else {
        setUser(undefined);
        setSession(undefined);
      }
    });
    setLoading(false);
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <AuthContext.Provider value={{ loading, user, session, login, logout, register, refresh }}>
      {props.children}
    </AuthContext.Provider>
  );
}