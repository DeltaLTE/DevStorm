'use client';

import { useState } from 'react';
import styles from '@/app/ui/login.module.css';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'

export default function LoginForm() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Toggle visibility password
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Handle submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    setIsLoading(true);

    let hasError = false;

    // Validasi email
    if (!user.trim()) {
      setEmailError('USERNAME KOSONG');
      hasError = true;
    } else if (user.length < 5) {
      setEmailError('Username minimal 5 karakter');
      hasError = true;
    }

    // Validasi password
    if (!password.trim()) {
      setPasswordError('PASSWORD KOSONG');
      hasError = true;
    } else if (password.length < 4) {
      setPasswordError('Password minimal 4 karakter');
      hasError = true;
    }

    // Jika ada error, stop submit
    if (hasError) {
      setIsLoading(false);
      return;
    }

    // Simulasi proses login
    setTimeout(() => {
      console.log('Login success with:', user, password);
      if (user == 'admin123') {
        location.href = "/dashboard"
      } else {
        location.href = "/home"
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginBox} onSubmit={handleSubmit}>
        <h2 className={styles.loginTitle}>LOGIN</h2>

        {/* USERNAME */}
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="USERNAME"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className={styles.inputField}
          />
          {emailError && <span className={styles.errorTag}>{emailError}</span>}
        </div>

        {/* PASSWORD */}
        <div className={styles.inputWrapper} style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputField}
            style={{ paddingRight: '40px' }}
          />
          <div
            onClick={togglePasswordVisibility}
            style={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              color: '#666',
            }}
          >
            {showPassword ? (
              <EyeSlashIcon className="w-5 h-5" />
            ) : (
              <EyeIcon className="w-5 h-5" />
            )}
          </div>
          {passwordError && <span className={styles.errorTag}>{passwordError}</span>}
        </div>



        {/* BUTTON */}
        <button type="submit" className={styles.buttonLogin} disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'LOGIN'}
        </button>

        {/* LINK REGISTER */}
        <p className={styles.registerLink}>
          DON’T HAVE AN ACCOUNT? <Link href="/login/register">REGISTER</Link>
        </p>
      </form>
    </div>
  );
}