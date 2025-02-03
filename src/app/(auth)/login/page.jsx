import Link from "next/link";
import LoginForm from "@/components/LoginForm";

export const generateMetadata = () => {
  return {
    title: "Login - Terra Balance Enterprises",
    description:
      "Log in to your account to shop our farm products and services, and manage your orders.",
  };
};

const LoginPage = () => {
  return (
    <div>
      <h2>Welcome Back</h2>
      <p>Sign in to access your account and manage your orders.</p>
      <LoginForm />
      <p className="flex items-center gap-2">
        Don&apos;t have an account?{" "}
        <Link href={"/register"} className="">
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
