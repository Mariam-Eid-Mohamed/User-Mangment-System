import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState, type ReactNode } from "react";
export interface User {
  id: number;
  firstName: string;
  email: string;
  lastName: string;
  image: string;
}
interface AuthContextType {
  userData: User | null;
  saveUserData: () => void;
}
export const AuthContext = createContext<AuthContextType | null>(null);
export interface AuthContextProviderProps {
  children: ReactNode;
}
export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [userData, setuserData] = useState<User | null>(null);
  const saveUserData = () => {
    const encodedToken = localStorage.getItem("userToken");
    if (encodedToken) {
      const decodedToken = jwtDecode<User>(encodedToken);

      setuserData(decodedToken);
    }
  };
  //refresh so that every rerender the user ob ject still be in userData
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveUserData();
    }
  }, []);
  return (
    <AuthContext.Provider value={{ saveUserData, userData }}>
      {children}
    </AuthContext.Provider>
  );
}
