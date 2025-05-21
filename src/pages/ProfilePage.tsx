import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import {
  ArrowLeftIcon,
  UserIcon,
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  GlobeIcon,
  MapPinIcon,
  BriefcaseIcon,
  CalendarIcon,
  CodeIcon,
  VideoIcon,
  EditIcon,
} from 'lucide-react';
const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: 'Ram Thapa',
    email: 'ram@example.com',
    title: 'Senior Software Engineer',
    location: 'San Francisco, CA',
    github: 'ram',
    linkedin: 'ram',
    website: 'ram.portfolio.com',
    bio: 'Passionate about building great software and helping others learn programming.',
  });
  const recentActivity = [
    {
      id: 1,
      type: 'ide',
      name: 'JavaScript Interview Room',
      date: '2023-10-15T14:30:00',
    },
    {
      id: 2,
      type: 'video',
      name: 'Team Weekly Sync',
      date: '2023-10-14T10:00:00',
    },
  ];
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // In a real app, this would save to backend
  };
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link
              to="/dashboard"
              className="flex items-center text-gray-500 hover:text-gray-700"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Dashboard
            </Link>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Your Profile</h1>
            {!isEditing && (
              <Button
                variant="outline"
                onClick={() => setIsEditing(true)}
                className="flex items-center"
              >
                <EditIcon className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profile Info */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Profile Information
                  </h2>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <form onSubmit={handleSave} className="space-y-6">
                      <Input
                        label="Full Name"
                        value={profileData.fullName}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            fullName: e.target.value,
                          })
                        }
                        fullWidth
                      />
                      <Input
                        label="Email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            email: e.target.value,
                          })
                        }
                        fullWidth
                      />
                      <Input
                        label="Title"
                        value={profileData.title}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            title: e.target.value,
                          })
                        }
                        fullWidth
                      />
                      <Input
                        label="Location"
                        value={profileData.location}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            location: e.target.value,
                          })
                        }
                        fullWidth
                      />
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Bio
                        </label>
                        <textarea
                          value={profileData.bio}
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              bio: e.target.value,
                            })
                          }
                          rows={4}
                          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="flex space-x-4">
                        <Button type="submit" variant="primary">
                          Save Changes
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setIsEditing(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                          <UserIcon className="h-10 w-10 text-blue-600" />
                        </div>
                        <div className="ml-6">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {profileData.fullName}
                          </h3>
                          <p className="text-gray-500">{profileData.title}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center text-gray-600">
                          <MailIcon className="h-5 w-5 mr-2" />
                          {profileData.email}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPinIcon className="h-5 w-5 mr-2" />
                          {profileData.location}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <GithubIcon className="h-5 w-5 mr-2" />
                          github.com/{profileData.github}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <LinkedinIcon className="h-5 w-5 mr-2" />
                          linkedin.com/in/{profileData.linkedin}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <GlobeIcon className="h-5 w-5 mr-2" />
                          {profileData.website}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">
                          Bio
                        </h4>
                        <p className="text-gray-600">{profileData.bio}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              {/* Recent Activity */}
              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <h2 className="text-lg font-semibold text-gray-900">
                      Recent Activity
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity) => (
                        <div
                          key={activity.id}
                          className="flex items-start p-4 bg-gray-50 rounded-lg"
                        >
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                            {activity.type === 'ide' ? (
                              <CodeIcon className="h-5 w-5 text-blue-600" />
                            ) : (
                              <VideoIcon className="h-5 w-5 text-blue-600" />
                            )}
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-900">
                              {activity.name}
                            </h3>
                            <div className="flex items-center mt-1">
                              <CalendarIcon className="h-4 w-4 text-gray-400 mr-1" />
                              <span className="text-xs text-gray-500">
                                {formatDate(activity.date)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            {/* Stats & Quick Links */}
            <div>
              <Card>
                <CardHeader>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Statistics
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">IDE Sessions</span>
                      <span className="font-semibold text-gray-900">24</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Video Calls</span>
                      <span className="font-semibold text-gray-900">18</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">GitHub Repos</span>
                      <span className="font-semibold text-gray-900">7</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Collaborators</span>
                      <span className="font-semibold text-gray-900">32</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="mt-6">
                <Card>
                  <CardHeader>
                    <h2 className="text-lg font-semibold text-gray-900">
                      Quick Links
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Link to="/settings">
                        <Button
                          variant="outline"
                          fullWidth
                          className="justify-start"
                        >
                          Account Settings
                        </Button>
                      </Link>
                      <Link to="/create-ide-room">
                        <Button
                          variant="outline"
                          fullWidth
                          className="justify-start"
                        >
                          Create IDE Room
                        </Button>
                      </Link>
                      <Link to="/create-video-conference" target="_blank">
                        <Button
                          variant="outline"
                          fullWidth
                          className="justify-start"
                        >
                          Start Video Call
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default ProfilePage;
