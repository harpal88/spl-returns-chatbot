import React from 'react';
import Chat from './Chat';
import { useNavigate } from 'react-router-dom';
import { 
  FiMessageSquare, 
  FiPackage, 
  FiHelpCircle, 
  FiLogOut,
  FiTruck,
  FiRefreshCw
} from 'react-icons/fi';

const Dashboard = ({ handleLogout  }) => {
  const navigate = useNavigate();
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  };


  return (
    <div className="h-screen w-screen flex bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Sidebar */}
      <aside className="w-64 bg-white/90 backdrop-blur-sm shadow-sm flex flex-col border-r border-gray-200/50">
        {/* Logo */}
        <div className="p-5 pb-4 flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pink-500 to-indigo-600 flex items-center justify-center">
              <FiTruck className="text-white text-lg" />
              <div className="absolute -right-1 -top-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white flex items-center justify-center">
                <FiRefreshCw className="text-white text-[8px]" />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">SPL Returns</h1>
            <p className="text-xs text-gray-500 mt-1">Automated Returns Portal</p>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 px-3 space-y-1 mt-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-pink-50/80 to-indigo-50/80 text-indigo-700 font-medium border border-gray-200/50 shadow-xs">
            <FiMessageSquare className="text-lg text-indigo-600" />
            <span>Chat Assistant</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100/50 transition-all">
            <FiPackage className="text-lg text-gray-500" />
            <span>My Returns</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100/50 transition-all">
            <FiHelpCircle className="text-lg text-gray-500" />
            <span>FAQs</span>
          </button>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200/50 mt-auto">
          <div className="flex items-center gap-3 mb-4">
            <img 
              src={user.avatar} 
              alt="User" 
              className="w-10 h-10 rounded-full border-2 border-indigo-200/50"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100/50 rounded-xl transition-all border border-gray-200/50 shadow-xs"
          >
            <FiLogOut className="text-gray-500" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden p-5">
        <div className="h-full bg-white/80 backdrop-blur-sm rounded-xl shadow-xs border border-gray-200/50 overflow-hidden">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;