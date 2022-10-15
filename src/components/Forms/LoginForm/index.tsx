import CustomInput from "@/components/FormComponents/CustomInput";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FiArrowRight } from "react-icons/fi";
import { CustomButton } from "../../../core/Button/Button";
import styles from "./login.module.css";

const LoginForm = ({ onSubmit, isSubmitting, onLoginwithGoogle }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <div className={styles.logo}>
        <Image src="/logo.png" width={116} height={22} alt="Logo"></Image>
      </div>
      <div className={styles.parent}>
        <div className={styles.signin_box}>
          <div className={styles.login_container}>
            <h1 style={{ fontSize: "27px", marginBottom: "20px" }}>Log In</h1>
            <div className={styles.google_btn} onClick={onLoginwithGoogle}>
              <FcGoogle size={25} />
              <div className={styles.google_btn_content}>
                Log in with Google
              </div>
            </div>
          </div>

          <div className={styles.or_section}>
            <div className={styles.or_line}></div> or
            <div className={styles.or_line}></div>
          </div>

          <div className={styles.login_container}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CustomInput
                type="email"
                placeholder="Email address"
                register={register}
                hookValue="email"
                errors={errors}
                style={{ marginBottom: "20px" }}
              ></CustomInput>

              <CustomInput
                type="password"
                placeholder="Your Password"
                register={register}
                hookValue="password"
                errors={errors}
              ></CustomInput>

              <Link href="/forgot-password" passHref>
                <a
                  className={styles.forgot_password}
                  style={{ marginTop: "5px" }}
                >
                  Forgot your password?
                </a>
              </Link>

              <CustomButton
                type="submit"
                isSubmitting={isSubmitting}
                label={`Log in`}
                icon={
                  <FiArrowRight
                    size={18}
                    style={{ marginLeft: "5px" }}
                    color="#ffffff"
                  />
                }
                iconPosition="right"
              />
            </form>

            <p className={styles.signin_link} style={{ marginTop: "20px" }}>
              Don&apos;t have a Mattered account?{" "}
              <Link href="/signup">
                <a className={styles.signin_text}>Sign up</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
