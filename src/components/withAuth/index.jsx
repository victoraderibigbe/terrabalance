"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const { isAuthenticated } = useSelector((state) => state.auth);

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/login");
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
      return null; // or a loading spinner if you prefer
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
