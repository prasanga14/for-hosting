import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import { ArrowLeftIcon, SearchIcon, GithubIcon, StarIcon, GitForkIcon, EyeIcon, ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon, AlertCircleIcon, LoaderIcon } from 'lucide-react';
interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  language: string;
  updated_at: string;
}
const GithubExplorerPage = () => {
  const [username, setUsername] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const reposPerPage = 3;
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username) return;
    setLoading(true);
    setError('');
    setRepositories([]);
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!response.ok) {
        throw new Error('User not found or API rate limit exceeded');
      }
      const data = await response.json();
      setRepositories(data);
      setCurrentPage(0);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
    } finally {
      setLoading(false);
    }
  };
  const totalPages = Math.ceil(repositories.length / reposPerPage);
  const currentRepos = repositories.slice(currentPage * reposPerPage, (currentPage + 1) * reposPerPage);
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
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
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-8">
            <GithubIcon className="h-8 w-8 text-gray-900 mr-3" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                GitHub Explorer
              </h1>
              <p className="text-gray-600">
                Search and explore GitHub repositories
              </p>
            </div>
          </div>
          <Card>
            <CardHeader>
              <form onSubmit={handleSearch} className="flex gap-4">
                <Input placeholder="Enter GitHub username" value={username} onChange={e => setUsername(e.target.value)} fullWidth required />
                <Button type="submit" disabled={loading}>
                  {loading ? <LoaderIcon className="h-5 w-5 animate-spin" /> : <SearchIcon className="h-5 w-5" />}
                </Button>
              </form>
            </CardHeader>
            <CardContent>
              {error && <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                  <AlertCircleIcon className="h-5 w-5 text-red-600 mt-0.5 mr-3" />
                  <p className="text-red-600">{error}</p>
                </div>}
              {repositories.length > 0 && <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {currentRepos.map(repo => <Card key={repo.id}>
                        <CardContent className="p-6">
                          <div className="flex flex-col h-full">
                            <h3 className="font-medium text-gray-900 mb-2 truncate">
                              {repo.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">
                              {repo.description || 'No description available'}
                            </p>
                            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                              <div className="flex items-center">
                                <StarIcon className="h-4 w-4 mr-1" />
                                <span>{repo.stargazers_count}</span>
                              </div>
                              <div className="flex items-center">
                                <GitForkIcon className="h-4 w-4 mr-1" />
                                <span>{repo.forks_count}</span>
                              </div>
                              <div className="flex items-center">
                                <EyeIcon className="h-4 w-4 mr-1" />
                                <span>{repo.watchers_count}</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-500">
                                Updated {formatDate(repo.updated_at)}
                              </span>
                              {repo.language && <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                  {repo.language}
                                </span>}
                            </div>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                              <ExternalLinkIcon className="h-4 w-4 mr-2" />
                              View Repository
                            </a>
                          </div>
                        </CardContent>
                      </Card>)}
                  </div>
                  {totalPages > 1 && <div className="flex justify-center items-center gap-4">
                      <Button variant="outline" onClick={prevPage} disabled={currentPage === 0}>
                        <ChevronLeftIcon className="h-5 w-5" />
                      </Button>
                      <span className="text-sm text-gray-600">
                        Page {currentPage + 1} of {totalPages}
                      </span>
                      <Button variant="outline" onClick={nextPage} disabled={currentPage === totalPages - 1}>
                        <ChevronRightIcon className="h-5 w-5" />
                      </Button>
                    </div>}
                </div>}
              {!loading && !error && repositories.length === 0 && <div className="text-center py-12">
                  <GithubIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Search for a GitHub User
                  </h3>
                  <p className="text-gray-600">
                    Enter a GitHub username to explore their repositories
                  </p>
                </div>}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>;
};
export default GithubExplorerPage;