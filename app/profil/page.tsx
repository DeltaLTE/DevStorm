import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <main className="min-h-screen">
      {/* Profile Header */}
      <div className="bg-orange-500 p-4 relative">
        <Link
          href="/home"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </Link>
        <h1 className="text-white text-center text-2xl font-bold mt-2">PROFILE</h1>

        {/* Profile Avatar */}
        <div className="flex justify-center -mb-12">
          <div className="w-24 h-24 rounded-full bg-green-500 border-4 border-orange-500 overflow-hidden relative">
            <Image
              src="/api/placeholder/100/100"
              alt="Profile Picture"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="bg-yellow-300 p-6 pt-16">
        {/* Username */}
        <h2 className="text-center font-bold text-xl mb-6">PENNY WISE</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Information */}
          <div>
            <h3 className="font-bold mb-2">BASIC INFORMATION</h3>

            <div className="space-y-3">
              <div>
                <p className="text-sm">FULL NAME</p>
                <input
                  type="text"
                  className="w-full p-2 rounded-md bg-white"
                  aria-label="Full name"
                />
              </div>

              <div>
                <p className="text-sm">EMAIL ADDRESS</p>
                <input
                  type="email"
                  className="w-full p-2 rounded-md bg-white"
                  aria-label="Email address"
                />
              </div>

              <div>
                <p className="text-sm">PHONE NUMBER</p>
                <input
                  type="tel"
                  className="w-full p-2 rounded-md bg-white"
                  aria-label="Phone number"
                />
              </div>

              <div>
                <p className="text-sm">PASSWORD</p>
                <input
                  type="password"
                  className="w-full p-2 rounded-md bg-white"
                  aria-label="Password"
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <h3 className="font-bold mb-2">ADDITIONAL INFORMATION</h3>

            <div className="space-y-3">
              <div>
                <p className="text-sm">GENDER</p>
                <input
                  type="text"
                  className="w-full p-2 rounded-md bg-white"
                  aria-label="Career"
                />
              </div>

              <div>
                <p className="text-sm">BIRTHDAY</p>
                <input
                  type="text"
                  className="w-full p-2 rounded-md bg-white"
                  aria-label="Birthday"
                />
              </div>

              <div>
                <p className="text-sm">ADDRESS</p>
                <input
                  type="text"
                  className="w-full p-2 rounded-md bg-white"
                  aria-label="Address"
                />
              </div>
            </div>

            {/* System Settings */}
            <div className="mt-6">
              <h3 className="font-bold mb-2">SYSTEM SETTINGS</h3>

              <div>
                <p className="text-sm">LANGUAGE</p>
                <input
                  type="text"
                  className="w-full p-2 rounded-md bg-white"
                  aria-label="Language"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}