import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import conf from "../../config/index";
import useFetch from "../useFetch";
import { toast } from 'react-toastify';
import { adminAuthState } from "../../state/authenticatedState/authenticatedState";

const useLogin = () => {
  const [fetchData] = useFetch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const setUserInfo = useSetRecoilState(adminAuthState);

  const adminLogin = async (email, password) => {
    const data = {email, password}
    setLoading(true);
    try {
      const res = await fetchData({
        method: "POST",
        url: `${conf.apiBaseUrl}`,
        data,
      });
      console.log(res.success)
      if (res.success) {
        setLoading(false);
        toast.success(res?.message);
        setUserInfo({
          isAuthenticated: true,
        });
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const resetAdmin = () => {
    setSAdminResponse(null);
  };

  return {
    resetAdmin,
    adminLogin, 
    loading,
  }
}

export default useLogin;