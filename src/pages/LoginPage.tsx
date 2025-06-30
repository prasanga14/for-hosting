import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card, {
  CardContent,
  CardFooter,
  CardHeader,
} from '../components/ui/Card';
import { EyeIcon, EyeOffIcon, GithubIcon } from 'lucide-react';
import axios from 'axios';
import { BASE_URL } from '../utils/api';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { CheckVerification } from '../utils/CheckVerification';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      // Validate form
      if (!email || !password) {
        setError('Please enter both email and password.');
        return;
      }
      // Clear any previous errors
      setError('');
      // Here you would typically handle the authentication logic
      console.log('Login attempt with:', {
        email,
      });

      const response = await axios.post(`${BASE_URL}/api/user/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success('login successfull');
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('id', response.data.loggedUserId);
        const getLoggedUser = await axios.get(
          `${BASE_URL}/api/user/u/${localStorage.getItem('id')}`
        );
        localStorage.setItem('fullName', getLoggedUser.data.fullName);
        localStorage.setItem('isVerified', getLoggedUser.data.isVerified);
        navigate('/dashboard');
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
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
          Log in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link
            to="/signup"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            create a new account
          </Link>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card>
          <CardContent>
            {error && (
              <div
                className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
                role="alert"
              >
                <p>{error}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                className="w-full"
                label="Email address"
                type="email"
                id="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
              />
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                {/* <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div> */}
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <Button type="submit" variant="primary" fullWidth>
                  Log in
                </Button>
              </div>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="flex justify-center items-center"
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                      <path
                        fill="#4285F4"
                        d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                      />
                      <path
                        fill="#34A853"
                        d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                      />
                      <path
                        fill="#EA4335"
                        d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                      />
                    </g>
                  </svg>
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="flex justify-center items-center"
                >
                  <GithubIcon className="h-5 w-5 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default LoginPage;
