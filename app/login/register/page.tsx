'use client';

import { useState } from 'react';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/outline';


export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    user: '',
    phoneNumber: '',
    user2: '', // Field user kedua sesuai desain
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Password dan konfirmasi password tidak cocok!');
      return;
    }
    
    if (formData.user !== formData.user2) {
      alert('user tidak cocok!');
      return;
    }
    
    alert('Registrasi berhasil!');
    location.href='/login'
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/bg-login.png')] bg-no-repeat bg-[length:1100px] bg-center bg-white">
      <form onSubmit={handleSubmit} className="w-[400px] bg-[#E9C77C] rounded-2xl p-6 space-y-4 shadow-lg">
        <h1 className="text-2xl font-bold text-center text-black mb-6">REGISTER</h1>
        
        {/* CREATE NAME */}
        <div>
          <label className="block font-bold mb-1 text-black">CREATE NAME:</label>
          <input
            type="text"
            name="name"
            placeholder="Create Name"
            className="w-full rounded-full px-4 py-2 outline-none placeholder-gray-600"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* user 1 */}
        <div>
          <label className="block font-bold mb-1 text-black">USERNAME:</label>
          <input
            type="user"
            name="user"
            placeholder="Username"
            className="w-full rounded-full px-4 py-2 outline-none placeholder-gray-600"
            value={formData.user}
            onChange={handleChange}
            required
          />
        </div>

        {/* PHONE NUMBER */}
        <div>
          <label className="block font-bold mb-1 text-black">PHONE NUMBER:</label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            className="w-full rounded-full px-4 py-2 outline-none placeholder-gray-600"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* user 2 */}
        <div>
          <label className="block font-bold mb-1 text-black">CONFIRM USERNAME:</label>
          <input
            type="user"
            name="user2"
            placeholder="Username"
            className="w-full rounded-full px-4 py-2 outline-none placeholder-gray-600"
            value={formData.user2}
            onChange={handleChange}
            required
          />
        </div>

        {/* CREATE PASSWORD */}
        <div className="relative">
          <label className="block font-bold mb-1 text-black">CREATE PASSWORD:</label>
          <div className="flex items-center bg-white rounded-full">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Create Password"
              className="w-full px-4 py-2 outline-none bg-transparent rounded-l-full placeholder-gray-600"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="px-3 focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-700" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="relative">
          <label className="block font-bold mb-1 text-black">CONFIRM PASSWORD:</label>
          <div className="flex items-center bg-white rounded-full">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 outline-none bg-transparent rounded-l-full placeholder-gray-600"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="px-3 focus:outline-none"
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
            >
              {showConfirmPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-700" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* CREATE BUTTON */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="bg-[#E9C77C] text-black font-bold px-8 py-2 rounded-xl border border-black shadow-md hover:bg-yellow-300 transition"
          >
            CREATE
          </button>
        </div>
      </form>
    </div>
  );
}