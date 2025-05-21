import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import { ArrowLeftIcon, CodeIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';

const CreateIDERoomPage = () => {
  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  const generateRoomId = (e) => {
    e.preventDefault();
    const id = uuid();
    setRoomId(id);
    toast.success('Room id generated');
  };

  const joinRoom = (e) => {
    e.preventDefault();
    if (!roomId || !username) {
      toast.error('Both the fields are required');
      return;
    }

    navigate(`/editor/${roomId}`, {
      state: { username },
    });
    toast.success('Joined room sucessfully');
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">IDE Room</h1>
          <p className="text-gray-600 mb-8">
            Create a new coding room or join an existing one.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Join Room Section */}
            <div>
              <Card>
                <CardHeader>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Create or Join an Existing Room
                  </h2>
                </CardHeader>
                <CardContent>
                  <form onSubmit={joinRoom}>
                    <Input
                      label="Room ID"
                      type="text"
                      placeholder="Enter room ID"
                      fullWidth
                      required
                      className="w-full"
                      value={roomId}
                      onChange={(e) => setRoomId(e.target.value)}
                    />
                    <Input
                      label="Your Name"
                      type="text"
                      placeholder="Enter your name"
                      fullWidth
                      required
                      className="w-full"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      fullWidth
                      className=" w-1/2 ml-24 m-2 hover:bg-black hover:text-white"
                    >
                      Join Room
                    </Button>
                    <Button
                      onClick={generateRoomId}
                      className=" w-1/2 ml-24 m-2 hover:bg-black hover:text-white"
                      fullWidth
                    >
                      Create Room ID
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="mt-6">
                <Card>
                  <CardContent>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <CodeIcon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Need Help?
                        </h3>
                        <p className="text-sm text-gray-500">
                          Check out our documentation for tips on using the IDE.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" fullWidth>
                        View Documentation
                      </Button>
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
export default CreateIDERoomPage;
