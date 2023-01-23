import { useEffect } from "react";
import { getUser } from "../api/apiBasicAuth";
import { CancelToken } from "apisauce";
import { useNavigate } from "react-router-dom";

//hooks have to be called with "use" at the beginning. So function below uses 
//name "useLogin"
export default function useLogin(loginCreds, setLoginCreds, setError, setUser) {
  const navigate = useNavigate();
  useEffect(() => {
    const source = CancelToken.source();
    if (loginCreds.email && loginCreds.password) {
      const login = async (cancelToken) => {
        const response = await getUser(
          loginCreds.email,
          loginCreds.password,
          cancelToken
        );
        console.log(response);
        if (response.user?.token) {
          console.log("logged in");
          setUser(response.user);
          setLoginCreds({});
          navigate("/LoginSuccessView");
        }
        setError(response.error);
      };
      login(source.token);
    }
    return () => {
      source.cancel();
    };
  }, [loginCreds, setLoginCreds, setError, setUser, navigate]);
}