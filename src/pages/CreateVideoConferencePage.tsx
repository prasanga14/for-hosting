import React from 'react';
import Video from '../components/Video';

const CreateVideoConferencePage = () => {
  return (
    <div>
      {' '}
      <Video />{' '}
    </div>
  );
};

export default CreateVideoConferencePage;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Button from '../components/ui/Button';
// import Input from '../components/ui/Input';
// import Card, { CardContent, CardHeader } from '../components/ui/Card';
// import { ArrowLeftIcon, VideoIcon, CopyIcon, CheckIcon, UserPlusIcon, CalendarIcon, LockIcon } from 'lucide-react';
// const CreateVideoConferencePage = () => {
//   const [conferenceName, setConferenceName] = useState('');
//   const [isPasswordProtected, setIsPasswordProtected] = useState(false);
//   const [password, setPassword] = useState('');
//   const [generatedLink, setGeneratedLink] = useState('');
//   const [copied, setCopied] = useState(false);
//   const handleCreateConference = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Generate a random meeting link (in a real app, this would come from the backend)
//     const randomId = Math.random().toString(36).substring(2, 10);
//     const link = `https://devconnect.com/meet/${randomId}`;
//     setGeneratedLink(link);
//     console.log('Creating conference:', {
//       conferenceName,
//       isPasswordProtected,
//       password: isPasswordProtected ? password : null,
//       link
//     });
//   };
//   const handleCopyLink = () => {
//     navigator.clipboard.writeText(generatedLink);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };
//   return <div className="min-h-screen bg-gray-50">
//       {/* Header/Navigation */}
//       <header className="bg-white shadow-sm">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center">
//             <Link to="/dashboard" className="flex items-center text-gray-500 hover:text-gray-700">
//               <ArrowLeftIcon className="h-5 w-5 mr-2" />
//               Back to Dashboard
//             </Link>
//           </div>
//         </div>
//       </header>
//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-8">
//         <div className="max-w-2xl mx-auto">
//           <h1 className="text-2xl font-bold text-gray-900 mb-2">
//             Video Conference
//           </h1>
//           <p className="text-gray-600 mb-8">
//             Create a new video conference and invite participants.
//           </p>
//           <Card>
//             <CardHeader>
//               <div className="flex items-center">
//                 <VideoIcon className="h-5 w-5 text-blue-600 mr-2" />
//                 <h2 className="text-lg font-semibold text-gray-900">
//                   Create Conference
//                 </h2>
//               </div>
//             </CardHeader>
//             <CardContent>
//               {generatedLink ? <div>
//                   <div className="text-center mb-6">
//                     <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <CheckIcon className="h-8 w-8 text-green-600" />
//                     </div>
//                     <h3 className="text-lg font-medium text-gray-900 mb-2">
//                       Conference Created!
//                     </h3>
//                     <p className="text-gray-600">
//                       Share this link with others to invite them.
//                     </p>
//                   </div>
//                   <div className="mb-6">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Conference Link
//                     </label>
//                     <div className="flex">
//                       <input type="text" value={generatedLink} readOnly className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
//                       <button onClick={handleCopyLink} className="flex items-center justify-center px-4 py-2 border border-l-0 border-gray-300 bg-gray-50 rounded-r-lg hover:bg-gray-100">
//                         {copied ? <CheckIcon className="h-5 w-5 text-green-600" /> : <CopyIcon className="h-5 w-5 text-gray-500" />}
//                       </button>
//                     </div>
//                   </div>
//                   <div className="mb-6">
//                     <h4 className="font-medium text-gray-900 mb-2">
//                       Invite Participants
//                     </h4>
//                     <div className="flex space-x-2 mb-2">
//                       <Input placeholder="Enter email address" type="email" fullWidth />
//                       <Button variant="outline" className="whitespace-nowrap">
//                         <UserPlusIcon className="h-4 w-4 mr-1" />
//                         Add
//                       </Button>
//                     </div>
//                     <p className="text-xs text-gray-500">
//                       You can invite multiple participants by adding their
//                       emails one by one.
//                     </p>
//                   </div>
//                   <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
//                     <Button variant="primary" className="flex-1 justify-center">
//                       Start Now
//                     </Button>
//                     <Button variant="outline" className="flex-1 justify-center" onClick={() => setGeneratedLink('')}>
//                       Create Another
//                     </Button>
//                   </div>
//                 </div> : <form onSubmit={handleCreateConference}>
//                   <Input label="Conference Name" type="text" placeholder="E.g., Team Weekly Sync" value={conferenceName} onChange={e => setConferenceName(e.target.value)} fullWidth required />
//                   <div className="mb-4">
//                     <div className="flex items-center">
//                       <input id="password-protection" name="password-protection" type="checkbox" checked={isPasswordProtected} onChange={() => setIsPasswordProtected(!isPasswordProtected)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
//                       <label htmlFor="password-protection" className="ml-2 block text-sm text-gray-700">
//                         Password protect this conference
//                       </label>
//                     </div>
//                   </div>
//                   {isPasswordProtected && <div className="mb-6">
//                       <Input label="Conference Password" type="password" placeholder="Enter a password" value={password} onChange={e => setPassword(e.target.value)} fullWidth required />
//                     </div>}
//                   <div className="mb-6">
//                     <div className="flex items-center justify-between mb-2">
//                       <label className="block text-sm font-medium text-gray-700">
//                         Schedule for later
//                       </label>
//                       <span className="text-xs text-gray-500">Optional</span>
//                     </div>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <input type="date" className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
//                       </div>
//                       <div>
//                         <input type="time" className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
//                       </div>
//                     </div>
//                   </div>
//                   <Button type="submit" variant="primary" fullWidth>
//                     Create Conference
//                   </Button>
//                 </form>}
//             </CardContent>
//           </Card>
//           <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
//             <Card>
//               <CardContent className="flex items-center">
//                 <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
//                   <CalendarIcon className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-medium text-gray-900">
//                     Schedule a Meeting
//                   </h3>
//                   <p className="text-sm text-gray-500">
//                     Plan ahead and notify participants.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="flex items-center">
//                 <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
//                   <LockIcon className="h-5 w-5 text-blue-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-medium text-gray-900">
//                     Advanced Security
//                   </h3>
//                   <p className="text-sm text-gray-500">
//                     End-to-end encryption for your calls.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </main>
//     </div>;
// };
// export default CreateVideoConferencePage;
