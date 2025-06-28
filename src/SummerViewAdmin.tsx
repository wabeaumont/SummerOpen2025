import React, { useState } from 'react';
import { BarChart3, Users, Settings, FileText, Bell, Search, Menu, Home, TrendingUp, Calendar, Mail, User, LogOut, Shield, AlertTriangle, CheckCircle, XCircle, Eye, Lock, Target, BookOpen, Activity } from 'lucide-react';

const SummerViewAdmin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setActiveTab('dashboard');
  };

  if (!isLoggedIn) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        
        <div className="relative w-full max-w-md z-10">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="px-8 py-12">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SummerView
                </h1>
                <p className="text-gray-600 mt-2 font-medium">Security Admin Dashboard</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 bg-white/70 backdrop-blur-sm outline-none"
                      placeholder="Enter your username"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 bg-white/70 backdrop-blur-sm outline-none"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Enter any credentials to access the dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'security', label: 'Security Posture', icon: Shield },
    { id: 'vulnerabilities', label: 'Vulnerabilities', icon: AlertTriangle },
    { id: 'phishing', label: 'Phishing Campaigns', icon: Target },
    { id: 'training', label: 'Security Training', icon: BookOpen },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'incidents', label: 'Incidents', icon: Activity },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const securityStats = [
    { title: 'Security Score', value: '78/100', change: '+5 pts', positive: true, icon: Shield },
    { title: 'Active Vulnerabilities', value: '23', change: '-8 today', positive: true, icon: AlertTriangle },
    { title: 'Phishing Success Rate', value: '12%', change: '-3%', positive: true, icon: Target },
    { title: 'Training Completion', value: '84%', change: '+12%', positive: true, icon: BookOpen },
  ];

  const recentIncidents = [
    { id: 1, type: 'Phishing Attempt', user: 'john.doe@company.com', status: 'Resolved', severity: 'Medium', time: '2 hours ago' },
    { id: 2, type: 'Weak Password', user: 'sarah.smith@company.com', status: 'Training Assigned', severity: 'Low', time: '4 hours ago' },
    { id: 3, type: 'Suspicious Login', user: 'mike.johnson@company.com', status: 'Investigating', severity: 'High', time: '6 hours ago' },
    { id: 4, type: 'Failed MFA', user: 'lisa.wilson@company.com', status: 'Resolved', severity: 'Medium', time: '1 day ago' },
  ];

  const vulnerabilities = [
    { id: 1, title: 'Outdated Browser Versions', affected: 45, severity: 'Medium', patch: 'Available' },
    { id: 2, title: 'Weak Password Policy Violations', affected: 23, severity: 'High', patch: 'Training Required' },
    { id: 3, title: 'Unpatched OS Updates', affected: 12, severity: 'Critical', patch: 'Immediate' },
    { id: 4, title: 'Unsecured Email Attachments', affected: 8, severity: 'Medium', patch: 'Policy Update' },
  ];

  const trainingModules = [
    { id: 1, title: 'Password Security Fundamentals', completion: 92, enrolled: 156 },
    { id: 2, title: 'Phishing Recognition & Response', completion: 78, enrolled: 203 },
    { id: 3, title: 'Social Engineering Awareness', completion: 65, enrolled: 134 },
    { id: 4, title: 'Data Protection & Privacy', completion: 88, enrolled: 187 },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Security Overview</h2>
        <div className="flex items-center">
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-xl font-semibold flex items-center text-sm">
            <CheckCircle className="w-4 h-4 mr-2" />
            System Secure
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
        {securityStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-3 lg:mb-4">
              <div className={`p-2 lg:p-3 rounded-xl ${stat.positive ? 'bg-green-100' : 'bg-red-100'}`}>
                <stat.icon className={`w-5 h-5 lg:w-6 lg:h-6 ${stat.positive ? 'text-green-600' : 'text-red-600'}`} />
              </div>
              <span className={`text-xs lg:text-sm font-semibold px-2 py-1 rounded-lg ${stat.positive ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1 lg:mb-2">{stat.value}</h3>
            <p className="text-gray-600 font-medium text-sm lg:text-base">{stat.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="p-4 lg:p-6 border-b border-gray-100">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 flex items-center">
              <Activity className="w-5 h-5 mr-2 text-blue-600" />
              Recent Security Incidents
            </h3>
          </div>
          <div className="p-4 lg:p-6 space-y-3 lg:space-y-4">
            {recentIncidents.map((incident) => (
              <div key={incident.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 lg:p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors gap-3 sm:gap-0">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 lg:space-x-3 mb-2 sm:mb-1">
                    <span className={`px-2 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${
                      incident.severity === 'High' ? 'bg-red-100 text-red-700' :
                      incident.severity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {incident.severity}
                    </span>
                    <span className="font-semibold text-gray-900 text-sm lg:text-base truncate">{incident.type}</span>
                  </div>
                  <p className="text-xs lg:text-sm text-gray-600 truncate">{incident.user}</p>
                  <p className="text-xs text-gray-500">{incident.time}</p>
                </div>
                <span className={`px-3 py-1 rounded-lg text-xs lg:text-sm font-semibold whitespace-nowrap self-start sm:self-center ${
                  incident.status === 'Resolved' ? 'bg-green-100 text-green-700' :
                  incident.status === 'Training Assigned' ? 'bg-blue-100 text-blue-700' :
                  'bg-orange-100 text-orange-700'
                }`}>
                  {incident.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="p-4 lg:p-6 border-b border-gray-100">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
              Critical Vulnerabilities
            </h3>
          </div>
          <div className="p-4 lg:p-6 space-y-3 lg:space-y-4">
            {vulnerabilities.map((vuln) => (
              <div key={vuln.id} className="p-3 lg:p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2 sm:gap-0">
                  <h4 className="font-semibold text-gray-900 text-sm lg:text-base">{vuln.title}</h4>
                  <span className={`px-2 py-1 rounded-lg text-xs font-semibold whitespace-nowrap self-start sm:self-center ${
                    vuln.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                    vuln.severity === 'High' ? 'bg-orange-100 text-orange-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {vuln.severity}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs lg:text-sm text-gray-600 gap-1 sm:gap-0">
                  <span>{vuln.affected} users affected</span>
                  <span className="font-semibold text-blue-600">{vuln.patch}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderTraining = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Security Training</h2>
        <button className="bg-blue-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-sm lg:text-base">
          Create New Module
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
        {trainingModules.map((module) => (
          <div key={module.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 lg:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 pr-2">{module.title}</h3>
              <BookOpen className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600 flex-shrink-0" />
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                  <span>Completion Rate</span>
                  <span>{module.completion}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${module.completion}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>{module.enrolled} enrolled</span>
                <span>{Math.floor(module.enrolled * module.completion / 100)} completed</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 lg:p-6">
        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-6">Training Effectiveness</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-2">87%</div>
            <div className="text-gray-600 text-sm lg:text-base">Phishing Recognition Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">92%</div>
            <div className="text-gray-600 text-sm lg:text-base">Password Policy Compliance</div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-purple-600 mb-2">76%</div>
            <div className="text-gray-600 text-sm lg:text-base">Incident Reporting Rate</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'training':
        return renderTraining();
      case 'security':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Security Posture</h2>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 text-center">
              <Shield className="w-12 h-12 lg:w-16 lg:h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">Overall Security Score: 78/100</h3>
              <p className="text-gray-600 text-sm lg:text-base">Your organization's security posture is good but needs improvement in password policies and patch management.</p>
            </div>
          </div>
        );
      case 'vulnerabilities':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Vulnerability Management</h2>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 lg:p-6">
              <div className="space-y-4">
                {vulnerabilities.map((vuln) => (
                  <div key={vuln.id} className="p-3 lg:p-4 rounded-xl border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">{vuln.title}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                      <span className="text-gray-600 text-sm lg:text-base">{vuln.affected} users affected</span>
                      <span className={`px-3 py-1 rounded-lg text-xs lg:text-sm font-semibold self-start sm:self-center ${
                        vuln.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                        vuln.severity === 'High' ? 'bg-orange-100 text-orange-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {vuln.severity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'phishing':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Phishing Campaigns</h2>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 text-center">
              <Target className="w-12 h-12 lg:w-16 lg:h-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">Latest Campaign Results</h3>
              <p className="text-gray-600 text-sm lg:text-base">12% of users clicked on the simulated phishing email. Training has been automatically assigned.</p>
            </div>
          </div>
        );
      case 'users':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">User Management</h2>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 text-center">
              <Users className="w-12 h-12 lg:w-16 lg:h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">User Activity Overview</h3>
              <p className="text-gray-600 text-sm lg:text-base">Monitor user access patterns, permissions, and security compliance across the organization.</p>
            </div>
          </div>
        );
      case 'incidents':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Security Incidents</h2>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 lg:p-6">
              <div className="space-y-4">
                {recentIncidents.map((incident) => (
                  <div key={incident.id} className="p-3 lg:p-4 rounded-xl bg-gray-50">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-1">
                          <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                            incident.severity === 'High' ? 'bg-red-100 text-red-700' :
                            incident.severity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {incident.severity}
                          </span>
                          <span className="font-semibold text-gray-900 text-sm lg:text-base">{incident.type}</span>
                        </div>
                        <p className="text-xs lg:text-sm text-gray-600">{incident.user}</p>
                        <p className="text-xs text-gray-500">{incident.time}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-lg text-xs lg:text-sm font-semibold self-start sm:self-center ${
                        incident.status === 'Resolved' ? 'bg-green-100 text-green-700' :
                        incident.status === 'Training Assigned' ? 'bg-blue-100 text-blue-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {incident.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Settings</h2>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 text-center">
              <Settings className="w-12 h-12 lg:w-16 lg:h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">System Configuration</h3>
              <p className="text-gray-600 text-sm lg:text-base">Configure security policies, notification settings, and system preferences.</p>
            </div>
          </div>
        );
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-56 lg:w-64 bg-white shadow-xl border-r border-gray-200 flex flex-col relative">
          <div className="p-4 lg:p-6 border-b border-gray-200 flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Shield className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg lg:text-xl font-bold text-gray-900">SummerView</h1>
                <p className="text-xs lg:text-sm text-gray-600">Security Admin</p>
              </div>
            </div>
          </div>

          <nav className="p-3 lg:p-4 space-y-1 lg:space-y-2 flex-1 overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-2 lg:space-x-3 px-3 lg:px-4 py-2 lg:py-3 rounded-xl text-left transition-all duration-200 text-sm lg:text-base ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                <span className="font-medium truncate">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="p-3 lg:p-4 border-t border-gray-200 flex-shrink-0">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-2 lg:space-x-3 px-3 lg:px-4 py-2 lg:py-3 rounded-xl text-gray-700 hover:bg-red-50 hover:text-red-700 transition-all duration-200 text-sm lg:text-base"
            >
              <LogOut className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="font-medium">Sign Out</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-4 lg:p-6 xl:p-8 h-full">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerViewAdmin;
