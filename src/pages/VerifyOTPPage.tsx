import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card, { CardContent } from '../components/ui/Card';
import axios from 'axios';
import { BASE_URL } from '../utils/api';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import SpinnerLoader from '../components/SpinnerLoader';

const VerifyOTPPage = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      console.log('Verifying OTP:', code);

      const response = await axios.post(
        `${BASE_URL}/api/user/otp-verification`,
        { code }
      );
      console.log(response.data);

      setIsDataLoading(true);
      if (response.status) {
        localStorage.setItem('isVerified', 'true');
        navigate('/dashboard');
      }
    } catch (error) {
      toast.error(error.message);
      // toast.error(error);
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link to="/" className="flex justify-center">
            <svg
              className="h-12 w-12 text-blue-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
              <line x1="12" y1="22" x2="12" y2="15.5"></line>
              <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
            </svg>
          </Link>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Verify your email
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We've sent a 6-digit code to your email address
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <Card>
            <CardContent>
              {error && (
                <div
                  className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
                  role="alert"
                >
                  <p>{error}</p>
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="otp"
                    className="block text-sm font-medium text-gray-700 mb-3"
                  >
                    Enter verification code
                  </label>
                  <div className="flex space-x-2 sm:space-x-4 justify-between">
                    <input
                      type="text"
                      className="p-2 m-4 border-2 w-full"
                      name="code"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>
                </div>
                {/* <div className="mb-6 text-center">
                <p className="text-sm text-gray-600">
                Didn't receive a code?{' '}
                <button type="button" onClick={handleResendOTP} disabled={!canResend} className={`font-medium ${canResend ? 'text-blue-600 hover:text-blue-500' : 'text-gray-400'}`}>
                {canResend ? 'Resend code' : `Resend code in ${timer}s`}
                </button>
                </p>
                </div> */}

                <Button type="submit" variant="primary" fullWidth>
                  Verify
                </Button>
              </form>
              <div className="mt-6 text-center">
                <Link
                  to="/login"
                  onClick={clearLocalStorage}
                  className="font-medium text-blue-600 hover:text-blue-500 text-sm"
                >
                  Back to login
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
export default VerifyOTPPage;
