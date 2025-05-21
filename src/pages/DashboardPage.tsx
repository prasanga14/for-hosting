import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import {
  CodeIcon,
  VideoIcon,
  GitBranchIcon,
  UserIcon,
  BellIcon,
  ChevronDownIcon,
  UsersIcon,
  ClockIcon,
} from 'lucide-react';
import { CheckVerification } from '../utils/CheckVerification';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();
  let isVerified = CheckVerification();

  isVerified === 0 ? false : true;

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
  };

  const myRooms = [
    {
      id: 1,
      name: 'JavaScript Interview Room',
      description: 'Technical interview with frontend candidate',
      type: 'ide',
      participants: 2,
      lastActive: '2 hours ago',
      isActive: true,
    },
    {
      id: 2,
      name: 'Team Project Alpha',
      description: 'Weekly sync for Project Alpha development',
      type: 'video',
      participants: 5,
      lastActive: '1 day ago',
      isActive: false,
    },
    {
      id: 3,
      name: 'Code Review Session',
      description: 'PR review for authentication feature',
      type: 'ide',
      participants: 3,
      lastActive: 'Just now',
      isActive: true,
    },
    {
      id: 4,
      name: 'Architecture Planning',
      description: 'System design discussion for new features',
      type: 'video',
      participants: 4,
      lastActive: '3 days ago',
      isActive: false,
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <svg
                  className="h-8 w-8 text-blue-600"
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
                <span className="ml-2 text-xl font-bold text-gray-900">
                  DevConnect
                </span>
              </Link>
              <nav className="hidden md:flex ml-10 space-x-8">
                <Link to="/dashboard" className="text-blue-600 font-medium">
                  Dashboard
                </Link>
                <Link
                  to="/create-ide-room"
                  className="text-gray-500 hover:text-gray-900"
                >
                  IDE Rooms
                </Link>
                <Link
                  to="/create-video-conference"
                  target="_blank"
                  className="text-gray-500 hover:text-gray-900"
                >
                  Video Conferences
                </Link>
                <Link
                  to="/github-explorer"
                  className="text-gray-500 hover:text-gray-900"
                >
                  GitHub Explorer
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <BellIcon className="h-6 w-6" />
              </button>
              <div className="relative">
                <button
                  className="flex items-center space-x-2 focus:outline-none"
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <UserIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="hidden md:block text-sm font-medium text-gray-700">
                    {localStorage.getItem('fullName')}
                  </span>
                  <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                </button>
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 ring-1 ring-black ring-opacity-5">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Your Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </Link>
                    <Link
                      onClick={handleLogout}
                      to="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {localStorage.getItem('fullName')}
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your DevConnect activities.
          </p>
        </div>
        {/* Quick Actions */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/create-ide-room">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="flex items-center p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <CodeIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Create IDE Room
                    </h3>
                    <p className="text-sm text-gray-500">
                      Start a new coding session
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link to="/create-video-conference" target="_blank">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="flex items-center p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <VideoIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Create Video Conference
                    </h3>
                    <p className="text-sm text-gray-500">
                      Start a new video call
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link to="/github-explorer">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="flex items-center p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <GitBranchIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      GitHub Explorer
                    </h3>
                    <p className="text-sm text-gray-500">Browse repositories</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>
        {/* My Rooms */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">My Rooms</h2>
              <Link to="/create-ide-room">
                <Button variant="outline" size="sm">
                  Create New Room
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-gray-200">
              {myRooms.map((room) => (
                <div key={room.id} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            room.isActive ? 'bg-green-100' : 'bg-gray-100'
                          }`}
                        >
                          {room.type === 'ide' ? (
                            <CodeIcon
                              className={`h-5 w-5 ${
                                room.isActive
                                  ? 'text-green-600'
                                  : 'text-gray-600'
                              }`}
                            />
                          ) : (
                            <VideoIcon
                              className={`h-5 w-5 ${
                                room.isActive
                                  ? 'text-green-600'
                                  : 'text-gray-600'
                              }`}
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900">
                          {room.name}
                          {room.isActive && (
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                              Active
                            </span>
                          )}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {room.description}
                        </p>
                        <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <UsersIcon className="h-4 w-4 mr-1" />
                            {room.participants} participants
                          </div>
                          <div className="flex items-center">
                            <ClockIcon className="h-4 w-4 mr-1" />
                            {room.lastActive}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant="primary" size="sm">
                      Enter Room
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};
export default DashboardPage;
