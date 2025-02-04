import { createContext, useContext, useEffect } from "react";
import { account } from "../lib/appwrite";
import { useNavigate } from "react-router-dom";
//Step1 Create context. //
export const AuthContext = createContext();

// third step is to export a components that accepts children and pass them to

export function AuthContextProvider({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    async function getCurrentUser() {
      try {
        const user = await account.get();
        if (!user.emailVerification) {
          await account.deleteSessions();
          navigate("/signin");
        }
      } catch (error) {
        navigate("/signin");
      }
    }
    getCurrentUser();
  }, []);
  useEffect(() => {
    async function getCurrentUser() {
      try {
        const user = await account.get();
        if (!user.emailVerification) {
          await account.deleteSessions();
          navigate("/signin");
        }
      } catch (error) {
        navigate("/signin");
      }
    }
    getCurrentUser();
  }, []);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

// Second step is to use the context by exporting a hook from this file
// that uses and returns the value from useContext()
export const useAuthContext = () => {
  return useContext(AuthContext);
};
