import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div>
      <h2>Create an account</h2>
      <p>Register with us to get full access and manage your orders.</p>
      <div className="my-5">
        <RegisterForm />
      </div>
      <p className="flex items-center gap-2">
        Already have an account?{" "}
        <Link href={"/login"} className="">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
