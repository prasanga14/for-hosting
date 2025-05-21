import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import { ArrowLeftIcon, BellIcon, ShieldIcon, GithubIcon, MonitorIcon, PaletteIcon, SunIcon, MoonIcon, SaveIcon, CheckIcon } from 'lucide-react';
const SettingsPage = () => {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    desktopNotifications: true,
    ideUpdates: true,
    videoCallReminders: true,
    securityAlerts: true
  });
  const [appearance, setAppearance] = useState('system');
  const [saved, setSaved] = useState(false);
  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };
  return <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center text-gray-500 hover:text-gray-700">
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Dashboard
            </Link>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600">
              Manage your account settings and preferences
            </p>
          </div>
          <div className="space-y-8">
            {/* Notification Settings */}
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <BellIcon className="h-5 w-5 text-blue-600 mr-2" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Notification Settings
                  </h2>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        Email Notifications
                      </h3>
                      <p className="text-sm text-gray-500">
                        Receive updates via email
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={notifications.emailNotifications} onChange={e => setNotifications({
                      ...notifications,
                      emailNotifications: e.target.checked
                    })} className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        Desktop Notifications
                      </h3>
                      <p className="text-sm text-gray-500">
                        Show desktop notifications
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={notifications.desktopNotifications} onChange={e => setNotifications({
                      ...notifications,
                      desktopNotifications: e.target.checked
                    })} className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        IDE Updates
                      </h3>
                      <p className="text-sm text-gray-500">
                        Notifications about IDE sessions
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={notifications.ideUpdates} onChange={e => setNotifications({
                      ...notifications,
                      ideUpdates: e.target.checked
                    })} className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Security Settings */}
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <ShieldIcon className="h-5 w-5 text-blue-600 mr-2" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Security Settings
                  </h2>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-4">
                      Two-Factor Authentication
                    </h3>
                    <Button variant="outline">Enable 2FA</Button>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-4">
                      Change Password
                    </h3>
                    <div className="space-y-4">
                      <Input type="password" placeholder="Current Password" fullWidth />
                      <Input type="password" placeholder="New Password" fullWidth />
                      <Input type="password" placeholder="Confirm New Password" fullWidth />
                      <Button variant="primary">Update Password</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Connected Accounts */}
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <GithubIcon className="h-5 w-5 text-blue-600 mr-2" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Connected Accounts
                  </h2>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <GithubIcon className="h-5 w-5 mr-2" />
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          GitHub
                        </h3>
                        <p className="text-sm text-gray-500">
                          Connected as @johndoe
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Disconnect
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Appearance Settings */}
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <PaletteIcon className="h-5 w-5 text-blue-600 mr-2" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Appearance
                  </h2>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <button className={`p-4 rounded-lg border ${appearance === 'light' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`} onClick={() => setAppearance('light')}>
                    <SunIcon className="h-6 w-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">Light</span>
                  </button>
                  <button className={`p-4 rounded-lg border ${appearance === 'dark' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`} onClick={() => setAppearance('dark')}>
                    <MoonIcon className="h-6 w-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">Dark</span>
                  </button>
                  <button className={`p-4 rounded-lg border ${appearance === 'system' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`} onClick={() => setAppearance('system')}>
                    <div className="h-6 w-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">System</span>
                  </button>
                </div>
              </CardContent>
            </Card>
            {/* Save Button */}
            <div className="flex justify-end">
              <Button variant="primary" className="flex items-center" onClick={handleSave}>
                {saved ? <>
                    <CheckIcon className="h-4 w-4 mr-2" />
                    Saved
                  </> : <>
                    <SaveIcon className="h-4 w-4 mr-2" />
                    Save Changes
                  </>}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>;
};
export default SettingsPage;