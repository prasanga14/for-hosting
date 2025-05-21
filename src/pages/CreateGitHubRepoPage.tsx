import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import { ArrowLeftIcon, GitBranchIcon, CheckIcon, LockIcon, UnlockIcon, GithubIcon, ExternalLinkIcon, AlertCircleIcon } from 'lucide-react';
const CreateGitHubRepoPage = () => {
  const [repoName, setRepoName] = useState('');
  const [description, setDescription] = useState('');
  const [isPrivate, setIsPrivate] = useState(true);
  const [readme, setReadme] = useState(true);
  const [gitignore, setGitignore] = useState('');
  const [license, setLicense] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [createdRepo, setCreatedRepo] = useState('');
  const gitignoreTemplates = [{
    value: '',
    label: 'None'
  }, {
    value: 'node',
    label: 'Node'
  }, {
    value: 'python',
    label: 'Python'
  }, {
    value: 'java',
    label: 'Java'
  }, {
    value: 'dotnet',
    label: 'C#/.NET'
  }, {
    value: 'ruby',
    label: 'Ruby'
  }];
  const licenseTemplates = [{
    value: '',
    label: 'None'
  }, {
    value: 'mit',
    label: 'MIT License'
  }, {
    value: 'apache-2.0',
    label: 'Apache License 2.0'
  }, {
    value: 'gpl-3.0',
    label: 'GNU GPL v3'
  }, {
    value: 'bsd-3-clause',
    label: 'BSD 3-Clause'
  }];
  const handleConnectGithub = () => {
    // In a real app, this would trigger OAuth flow with GitHub
    setIsConnected(true);
  };
  const handleCreateRepo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!repoName) return;
    // Simulate repo creation
    setCreatedRepo(`https://github.com/username/${repoName.toLowerCase().replace(/\s+/g, '-')}`);
    console.log('Creating GitHub repo:', {
      name: repoName,
      description,
      private: isPrivate,
      readme,
      gitignore,
      license
    });
  };
  const handleOpenRepo = () => {
    window.open(createdRepo, '_blank');
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
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            GitHub Repository
          </h1>
          <p className="text-gray-600 mb-8">
            Create a new GitHub repository directly from DevConnect.
          </p>
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <GitBranchIcon className="h-5 w-5 text-blue-600 mr-2" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Create Repository
                </h2>
              </div>
            </CardHeader>
            <CardContent>
              {!isConnected ? <div className="text-center py-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GithubIcon className="h-8 w-8 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Connect Your GitHub Account
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    To create repositories, you need to connect your GitHub
                    account to DevConnect.
                  </p>
                  <Button variant="primary" className="flex items-center justify-center mx-auto" onClick={handleConnectGithub}>
                    <GithubIcon className="h-5 w-5 mr-2" />
                    Connect with GitHub
                  </Button>
                </div> : createdRepo ? <div>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckIcon className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Repository Created!
                    </h3>
                    <p className="text-gray-600">
                      Your new GitHub repository is ready.
                    </p>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Repository URL
                    </label>
                    <div className="flex">
                      <input type="text" value={createdRepo} readOnly className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <Button variant="primary" className="flex-1 justify-center" onClick={handleOpenRepo}>
                      <ExternalLinkIcon className="h-4 w-4 mr-1" />
                      Open Repository
                    </Button>
                    <Button variant="outline" className="flex-1 justify-center" onClick={() => setCreatedRepo('')}>
                      Create Another
                    </Button>
                  </div>
                </div> : <form onSubmit={handleCreateRepo}>
                  <Input label="Repository Name" type="text" placeholder="e.g., my-awesome-project" value={repoName} onChange={e => setRepoName(e.target.value)} fullWidth required />
                  <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea id="description" rows={3} placeholder="Optional description for your repository" value={description} onChange={e => setDescription(e.target.value)} className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Repository Visibility
                    </label>
                    <div className="flex space-x-4">
                      <button type="button" onClick={() => setIsPrivate(true)} className={`flex items-center px-4 py-2 rounded-lg border ${isPrivate ? 'bg-blue-50 border-blue-200 text-blue-700' : 'border-gray-200 text-gray-700'}`}>
                        <LockIcon className="h-4 w-4 mr-2" />
                        Private
                      </button>
                      <button type="button" onClick={() => setIsPrivate(false)} className={`flex items-center px-4 py-2 rounded-lg border ${!isPrivate ? 'bg-blue-50 border-blue-200 text-blue-700' : 'border-gray-200 text-gray-700'}`}>
                        <UnlockIcon className="h-4 w-4 mr-2" />
                        Public
                      </button>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      {isPrivate ? 'Private repositories are only visible to you and people you explicitly share with.' : 'Public repositories are visible to anyone on the internet.'}
                    </p>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center">
                      <input id="readme" name="readme" type="checkbox" checked={readme} onChange={() => setReadme(!readme)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="readme" className="ml-2 block text-sm text-gray-700">
                        Initialize this repository with a README
                      </label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="gitignore" className="block text-sm font-medium text-gray-700 mb-1">
                      Add .gitignore
                    </label>
                    <select id="gitignore" value={gitignore} onChange={e => setGitignore(e.target.value)} className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      {gitignoreTemplates.map(template => <option key={template.value} value={template.value}>
                          {template.label}
                        </option>)}
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="license" className="block text-sm font-medium text-gray-700 mb-1">
                      Add a license
                    </label>
                    <select id="license" value={license} onChange={e => setLicense(e.target.value)} className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      {licenseTemplates.map(template => <option key={template.value} value={template.value}>
                          {template.label}
                        </option>)}
                    </select>
                  </div>
                  <Button type="submit" variant="primary" fullWidth>
                    Create Repository
                  </Button>
                </form>}
            </CardContent>
          </Card>
          {isConnected && !createdRepo && <div className="mt-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex">
                <AlertCircleIcon className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-blue-800">
                    Repository Permissions
                  </h4>
                  <p className="text-sm text-blue-700 mt-1">
                    DevConnect will only create repositories on your behalf. We
                    never store your GitHub credentials and you can revoke
                    access at any time.
                  </p>
                </div>
              </div>
            </div>}
        </div>
      </main>
    </div>;
};
export default CreateGitHubRepoPage;