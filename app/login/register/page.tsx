'use client';

import { useState } from 'react';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNameError('');
    setEmailError('');
    setPhoneError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setIsLoading(true);

    let hasError = false;

    // Validate name
    if (!name.trim()) {
      setNameError('NAME KOSONG');
      hasError = true;
    } else if (name.length < 3) {
      setNameError('Name minimal 3 karakter');
      hasError = true;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError('EMAIL KOSONG');
      hasError = true;
    } else if (!emailRegex.test(email)) {
      setEmailError('Email tidak valid');
      hasError = true;
    }

    // Validate phone number
    const phoneRegex = /^\d{10,13}$/;
    if (!phone.trim()) {
      setPhoneError('PHONE NUMBER KOSONG');
      hasError = true;
    } else if (!phoneRegex.test(phone)) {
      setPhoneError('Nomor telepon tidak valid (10-13 digit)');
      hasError = true;
    }

    // Validate password
    if (!password.trim()) {
      setPasswordError('PASSWORD KOSONG');
      hasError = true;
    } else if (password.length < 4) {
      setPasswordError('Password minimal 4 karakter');
      hasError = true;
    }

    // Validate confirm password
    if (!confirmPassword.trim()) {
      setConfirmPasswordError('CONFIRM PASSWORD KOSONG');
      hasError = true;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Password tidak cocok');
      hasError = true;
    }

    // If there are errors, stop submission
    if (hasError) {
      setIsLoading(false);
      return;
    }

    // Simulate registration process
    setTimeout(() => {
      console.log('Registration success with:', { name, email, phone, password });
      location.href = '/login'; // Redirect to login page after registration
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Load Google Fonts directly */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
      `}</style>

      <div className="relative min-h-screen flex items-center justify-center font-['Luckiest_Guy'] bg-gray-100">
        {/* Background Image with Comic Style */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[1000px] h-[1000px] relative">
            <Image
              src="/bg-login.png" // Reuse the same background as login for consistency
              alt="Register Background"
              fill
              className="z-0 object-contain object-center"
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="relative z-10 flex items-center justify-center w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-yellow-100 p-6 rounded-3xl shadow-lg w-96 space-y-4"
          >
            <h2 className="text-2xl font-bold text-center mb-6">REGISTER</h2>

            {/* NAME */}
            <div>
              <label className="block text-sm font-bold mb-1">CREATE NAME:</label>
              <input
                type="text"
                placeholder="CREATE NAME"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded bg-yellow-50"
              />
              {nameError && <span className="text-red-500 text-xs ml-2">{nameError}</span>}
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-bold mb-1">EMAIL:</label>
              <input
                type="email"
                placeholder="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded bg-yellow-50"
              />
              {emailError && <span className="text-red-500 text-xs ml-2">{emailError}</span>}
            </div>

            {/* PHONE NUMBER */}
            <div>
              <label className="block text-sm font-bold mb-1">PHONE NUMBER:</label>
              <input
                type="text"
                placeholder="PHONE NUMBER"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border rounded bg-yellow-50"
              />
              {phoneError && <span className="text-red-500 text-xs ml-2">{phoneError}</span>}
            </div>

            {/* CREATE PASSWORD */}
            <div>
              <label className="block text-sm font-bold mb-1">CREATE PASSWORD:</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="CREATE PASSWORD"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border rounded bg-yellow-50 pr-10"
                />
                <div
                  onClick={togglePasswordVisibility}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </div>
              </div>
              {passwordError && <span className="text-red-500 text-xs ml-2">{passwordError}</span>}
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="block text-sm font-bold mb-1">CONFIRM PASSWORD:</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="CONFIRM PASSWORD"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-2 border rounded bg-yellow-50 pr-10"
                />
                <div
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                >
                  {showConfirmPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </div>
              </div>
              {confirmPasswordError && (
                <span className="text-red-500 text-xs ml-2">{confirmPasswordError}</span>
              )}
            </div>

            {/* CREATE BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded disabled:bg-blue-300"
              disabled={isLoading}
            >
              {isLoading ? 'Creating...' : 'CREATE'}
            </button>

            {/* LINK TO LOGIN */}
            <p className="text-center mt-4">
              ALREADY HAVE AN ACCOUNT?{' '}
              <Link href="/login" className="text-blue-500">
                LOGIN
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}