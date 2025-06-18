'use client';

import { useState, useEffect } from 'react';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginForm() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [captchaError, setCaptchaError] = useState('');
  const [loginError, setLoginError] = useState(''); // For server authentication errors
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [captchaCode, setCaptchaCode] = useState('');
  const [userCaptchaInput, setUserCaptchaInput] = useState('');

  // Generate a random 5-character CAPTCHA code
  const generateCaptchaCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  };

  // Initialize CAPTCHA code when component mounts
  useEffect(() => {
    setCaptchaCode(generateCaptchaCode());
  }, []);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Handle CAPTCHA refresh
  const refreshCaptcha = () => {
    setCaptchaCode(generateCaptchaCode());
    setUserCaptchaInput('');
    setCaptchaError('');
  };

  // Handle submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    setCaptchaError('');
    setLoginError('');
    setIsLoading(true);

    let hasError = false;

    // Validate username
    if (!user.trim()) {
      setEmailError('USERNAME KOSONG');
      hasError = true;
    } else if (user.length < 5) {
      setEmailError('Username minimal 5 karakter');
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

    // Validate CAPTCHA
    if (!userCaptchaInput.trim()) {
      setCaptchaError('Please enter the CAPTCHA code');
      hasError = true;
    } else if (userCaptchaInput !== captchaCode) {
      setCaptchaError('CAPTCHA code is incorrect');
      hasError = true;
    }

    // If there are errors, stop submission
    if (hasError) {
      setIsLoading(false);
      return;
    }

    try {
      // Call the login API
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: user,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        console.log('Login success:', data);
        
        // Redirect based on dash boolean
        if (data.user.dash === true) {
          window.location.href = '/dashboard';
        } else {
          window.location.href = '/home';
        }
      } else {
        // Login failed
        setLoginError(data.message || 'Login failed');
        // Refresh CAPTCHA on failed login
        refreshCaptcha();
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('An error occurred during login. Please try again.');
      refreshCaptcha();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Load Google Fonts directly */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
        .font-luckiest-guy {
          font-family: 'Luckiest Guy', cursive;
        }
        .captcha-container {
          position: relative;
          display: inline-block;
          background-color: #f0f0f0;
          padding: 10px;
          border-radius: 8px;
          border: 2px solid #ccc;
          user-select: none;
        }
        .captcha-text {
          font-size: 24px;
          letter-spacing: 5px;
          color: #333;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 1;
        }
        .captcha-noise {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAJElEQVQImWM4ceLEf/78+cv379//4cOH/wMHDvznz5//zZs3FQEw6RLV7vUo2QAAAABJRU5ErkJggg==') repeat;
          opacity: 0.3;
          pointer-events: none;
        }
        .refresh-button {
          margin-left: 10px;
          cursor: pointer;
          color: #007bff;
          font-size: 14px;
        }
        .refresh-button:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="relative min-h-screen flex items-center justify-center font-luckiest-guy">
        {/* Background Image with Smaller Wrapper */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[1000px] h-[1000px] relative">
            <Image
              src="/bg-login.png"
              alt="Login Background"
              fill
              className="z-0 object-contain object-center"
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="relative z-10 flex items-center justify-center w-full">
          <form className="bg-yellow-100 p-6 rounded-3xl shadow-lg w-96" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-center mb-6">LOGIN</h2>

            {/* General Login Error */}
            {loginError && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {loginError}
              </div>
            )}

            {/* USERNAME */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="USERNAME"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="w-full p-2 border rounded bg-yellow-50"
              />
              {emailError && <span className="text-red-500 text-xs ml-2">{emailError}</span>}
            </div>

            {/* PASSWORD */}
            <div className="mb-4 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="PASSWORD"
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
              {passwordError && <span className="text-red-500 text-xs ml-2">{passwordError}</span>}
            </div>

            {/* Custom CAPTCHA */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="captcha-container">
                  <span className="captcha-text">{captchaCode}</span>
                  <div className="captcha-noise"></div>
                </div>
                <span
                  onClick={refreshCaptcha}
                  className="refresh-button"
                >
                  Refresh
                </span>
              </div>
              <input
                type="text"
                placeholder="Enter CAPTCHA code"
                value={userCaptchaInput}
                onChange={(e) => setUserCaptchaInput(e.target.value)}
                className="w-full p-2 border rounded bg-yellow-50"
              />
              {captchaError && <span className="text-red-500 text-xs ml-2">{captchaError}</span>}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded disabled:bg-blue-300"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'LOGIN'}
            </button>

            {/* LINK REGISTER */}
            <p className="text-center mt-4">
              DON'T HAVE AN ACCOUNT?{' '}
              <Link href="/login/register" className="text-blue-500">
                REGISTER
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}