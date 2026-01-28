import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Iprops{
    allowed: boolean;
    redirectTo: string;
    children: React.ReactNode;
}

function RequireAuth({ allowed, redirectTo, children }: Iprops) {
    const { token } = useSelector((state: any) => state.authSlice);
    const isLogin = token ? true : false;
    const navigate = useNavigate();
    useEffect(() => {
        if (allowed !== isLogin) {
            navigate(redirectTo);
        }
    }, [isLogin, allowed, redirectTo]); 

    return allowed === isLogin ? <>{children}</> : <></>;
}

export default RequireAuth;