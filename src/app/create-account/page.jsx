"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";

const CreateAccountPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  const router = useRouter();

  const validatePassword = (password) => {
    return (
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password) &&
      password.length >= 8
    );
  };

  const validateForm = () => {
    return (
      formData.first_name &&
      formData.last_name &&
      formData.username &&
      formData.email &&
      validatePassword(formData.password) &&
      agreedToTerms
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      toast.success("Form submitted successfully!");
      setFormData({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
      });
      setAgreedToTerms(false);
    } else {
      toast.error("Please fill all fields correctly and agree to terms.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Create Account
        </h2>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="First Name"
            value={formData.first_name}
            onChange={(e) =>
              setFormData({ ...formData, first_name: e.target.value })
            }
            className="w-1/2 p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={(e) =>
              setFormData({ ...formData, last_name: e.target.value })
            }
            className="w-1/2 p-2 border rounded-lg"
          />
        </div>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          className="w-full p-2 border rounded-lg mt-3"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border rounded-lg mt-3"
        />

        {/* Password Input with Toggle */}
        <div className="relative mt-3">
          <input
            type={viewPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full p-2 border rounded-lg pr-10"
          />
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setViewPassword(!viewPassword)}
          >
            {viewPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>

        <p className="text-xs text-orange-500 mt-1">
          Ensure your password has atleast One uppercase,lowercase,special
          character and number
        </p>

        <label className="flex items-center gap-2 text-sm mt-4">
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={() => setAgreedToTerms(!agreedToTerms)}
            className="w-4 h-4"
          />
          I agree to the{" "}
          <span className="text-orange-500 cursor-pointer">
            Terms and Conditions
          </span>
          <p>and</p>
          <span className=" text-orange-500 cursor-pointer">
            privacy policy
          </span>
          .
        </label>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white p-2 rounded-full mt-4 disabled:opacity-50 cursor-pointer"
          disabled={!validateForm()}
        >
          Sign Up
        </button>
      </div>
      <button className="text-sm text-gray-400 text-center mt-7 rounded-full bg-white">
        Already have an account?{" "}
        <span
          className="text-black cursor-pointer"
          onClick={() => router.push("/auth/login")}
        >
          Log in
        </span>
      </button>
    </div>
  );
};

export default CreateAccountPage;
