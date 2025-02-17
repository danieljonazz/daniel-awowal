"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";

// Input component with full border
const InputWithFullBoarder = ({
  id,
  type,
  value,
  onChange,
  label,
  labelColor,
  checked,
  required,
  onClick,
  className,
  isRequired,
  maxLength,
  minLength,
  hasSuffix,
  disabled,
  placeholder,
  row = "50",
  icon,
  accept,
  bottomPadding,
  isTextArea = false,
  wrapperClassName,
  ...props
}) => {
  const inputStyleClass =
    "border border-[#D0D5DD] bg-background p-2 rounded-md placeholder:text-[15px] outline-none focus:outline-none";
  return (
    <div
      className={`flex flex-col text-brandBlack ${wrapperClassName} ${
        bottomPadding ?? "mb-4"
      } gap-1`}
    >
      {label && (
        <label
          className={`font-medium text-[15px] flex leading-[125%] ${
            labelColor ?? "text-dark"
          }`}
          htmlFor={id}
        >
          {label}
          {isRequired && <p className="text-red-600 ml-1">*</p>}
        </label>
      )}
      {isTextArea ? (
        <textarea
          id={id}
          className={`${className} ${inputStyleClass}`}
          cols="50"
          rows={row}
          required={required}
          disabled={disabled}
          minLength={minLength}
          maxLength={maxLength}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        ></textarea>
      ) : hasSuffix ? (
        <div
          className={`border border-[#D0D5DD] bg-background p-2 rounded-md placeholder:text-[15px] ${className} outline-none focus:outline-none flex items-center justify-between`}
        >
          <input
            onClick={onClick}
            type={type}
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            id={id}
            accept={accept}
            checked={checked}
            value={value}
            onChange={onChange}
            {...props}
            className={`bg-transparent outline-none focus:outline-none w-full placeholder:text-[15px] mr-4`}
          />
          <div>{icon}</div>
        </div>
      ) : (
        <input
          onClick={onClick}
          type={type}
          id={id}
          accept={accept}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          checked={checked}
          minLength={minLength}
          maxLength={maxLength}
          autoComplete="off"
          value={value}
          onChange={onChange}
          {...props}
          className={`border border-[#D0D5DD] bg-background p-2 rounded-md ${className} placeholder:text-[15px] outline-none focus:outline-none`}
        />
      )}
    </div>
  );
};

// A simple custom button component
const CustomButton = ({ onClick, buttonText, isLoading, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`bg-black hover:bg-black text-white font-medium rounded-md ${className}`}
    >
      {isLoading ? "Loading..." : buttonText}
    </button>
  );
};

// Dummy logo data (replace with your own as needed)
const logo1 = { src: "https://via.placeholder.com/150" };

// AuthShell component that wraps the UI and includes the logo, title, children, and bottom links.
const AuthShell = ({
  children,
  title,
  subtitle1,
  buttonButtonText1,
  buttonButtonLink = "",
  isLoading,
  buttonText,
  onClick,
  bottomButtonText2,
}) => {
  return (
    <div className="w-full min-h-screen py-10 flex flex-col items-center justify-center text-brandBlack">
      <div className="flex flex-col items-center justify-center gap-5 w-full">
        <Link
          href={`/`}
          className="w-full flex max-w-[180px] relative mb-7 mt-auto"
        >
          <img src={logo1.src} alt="Logo" className="object-contain w-full" />
        </Link>
        <div className="max-w-[80%] md:max-w-[465px] w-full mx-auto my-auto flex flex-col shadow-xl items-center justify-center rounded-[20px] bg-whiteColor gap-10 relative p-10">
          <div className="flex flex-col items-center w-full text-center">
            <p className="font-semibold text-[24px]">{title}</p>
            <p className="text-14px text-grey">{subtitle1}</p>
          </div>
          {children}
          <CustomButton
            buttonText={buttonText}
            isLoading={isLoading}
            onClick={onClick}
            className="w-full py-3 h-[50px]"
          />
        </div>
        <div className="rounded-[30px] mt-7 h-[50px] text-center w-full max-w-[233px] flex items-center gap-2 bg-whiteColor text-14px text-grey3">
          <p>{buttonButtonText1}</p>
          <Link
            href={buttonButtonLink}
            className="text-brandBlack font-bold inline"
          >
            {bottomButtonText2}
          </Link>
        </div>
      </div>
    </div>
  );
};

// The login page that uses AuthShell and InputWithFullBoarder
const LoginPage = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const initialData = { id: "", password: "" };
  const [loginDetails, setLoginDetails] = useState(initialData);

  const handleLogin = (e) => {
    e.preventDefault();
    // UI functionality: log the login details to the console
    console.log("Logging in with:", loginDetails);
    // Reset the form
    setLoginDetails(initialData);
  };

  return (
    <AuthShell
      title="Welcome back!"
      subtitle1="Log in to your Avowal."
      buttonText="Login"
      onClick={handleLogin}
      bottomButtonText2="Sign up"
      buttonButtonText1="Don’t have an account?"
      buttonButtonLink="/auth/create-account"
      isLoading={false}
    >
      <div className="w-full">
        <InputWithFullBoarder
          id="email"
          label="Email"
          type="email"
          isRequired={true}
          placeholder="Enter your email"
          value={loginDetails.id}
          onChange={(e) =>
            setLoginDetails({ ...loginDetails, id: e.target.value })
          }
        />
        <InputWithFullBoarder
          id="password"
          hasSuffix={true}
          label="Password"
          isRequired={true}
          placeholder="Enter your password"
          type={viewPassword ? "text" : "password"}
          value={loginDetails.password}
          onChange={(e) =>
            setLoginDetails({ ...loginDetails, password: e.target.value })
          }
          icon={
            viewPassword ? (
              <AiOutlineEyeInvisible onClick={() => setViewPassword(false)} />
            ) : (
              <AiOutlineEye onClick={() => setViewPassword(true)} />
            )
          }
        />
        <div className="w-full flex justify-end">
          <Link
            href="/auth/forgot-password"
            className="text-14px text-right w-full text-redColor"
          >
            Forgot password
          </Link>
        </div>
      </div>
    </AuthShell>
  );
};

export default LoginPage;
