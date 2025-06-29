import React, { useState } from 'react';
import { Users, Settings, Home, LogOut, Shield, AlertTriangle, CheckCircle, Target, BookOpen, Activity, Lock, Key } from 'lucide-react';

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
                <h1 className="text-3xl font-bold text-gray-700 bg-clip-text">
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
    { id: 'passwords', label: 'Password Analysis', icon: Lock },
    { id: 'phishing', label: 'Phishing Campaigns', icon: Target },
    { id: 'training', label: 'Security Training', icon: BookOpen },
    { id: 'incidents', label: 'Incidents', icon: Activity },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const securityStats = [
    { title: 'Security Score', value: '78/100', change: '+5 pts', positive: true, icon: Shield },
    { title: 'Active Vulnerabilities', value: '23', change: '-8 today', positive: true, icon: AlertTriangle },
    { title: 'Phishing Success Rate', value: '12%', change: '-3%', positive: true, icon: Target },
    { title: 'Training Completion', value: '84%', change: '+12%', positive: true, icon: BookOpen },
  ];

  const policyCompliance = [
    { policy: 'Password Policy', compliance: 92, status: 'Good', trend: '+3%' },
    { policy: 'MFA Enforcement', compliance: 88, status: 'Good', trend: '+7%' },
    { policy: 'Access Control', compliance: 76, status: 'Needs Attention', trend: '-2%' },
    { policy: 'Data Encryption', compliance: 95, status: 'Excellent', trend: '+1%' },
    { policy: 'Incident Response', compliance: 83, status: 'Good', trend: '+5%' },
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

  const compromisedCredentials = [
    { id: 1, email: 'john.doe@company.com', source: 'LinkedIn Breach 2021', status: 'Password Reset', severity: 'High' },
    { id: 2, email: 'sarah.smith@company.com', source: 'Adobe Breach 2019', status: 'Monitoring', severity: 'Medium' },
    { id: 3, email: 'mike.johnson@company.com', source: 'Facebook Breach 2021', status: 'Password Reset', severity: 'High' },
    { id: 4, email: 'emma.davis@company.com', source: 'Twitter Breach 2022', status: 'Training Assigned', severity: 'Medium' },
  ];

  const passwordStats = [
    { title: 'Weak Passwords', value: '23', change: '-8 today', positive: true, icon: Lock },
    { title: 'Password Age > 90 Days', value: '156', change: '+12', positive: false, icon: Key },
    { title: 'Reused Passwords', value: '34', change: '-5', positive: true, icon: AlertTriangle },
    { title: 'MFA Enabled', value: '88%', change: '+7%', positive: true, icon: Shield },
  ];

  const passwordStrengthData = [
    { strength: 'Very Strong', count: 187, percentage: 62 },
    { strength: 'Strong', count: 89, percentage: 29 },
    { strength: 'Medium', count: 18, percentage: 6 },
    { strength: 'Weak', count: 9, percentage: 3 },
  ];

  const phishingCampaigns = [
    { 
      id: 1, 
      name: 'Q1 2024 Baseline Test', 
      sent: 500, 
      clicked: 60, 
      reported: 180, 
      clickRate: 12, 
      reportRate: 36,
      status: 'Completed',
      date: '2024-03-15'
    },
    { 
      id: 2, 
      name: 'Holiday Scam Simulation', 
      sent: 480, 
      clicked: 38, 
      reported: 220, 
      clickRate: 8, 
      reportRate: 46,
      status: 'Completed',
      date: '2024-02-28'
    },
    { 
      id: 3, 
      name: 'Tax Season Phishing', 
      sent: 450, 
      clicked: 45, 
      reported: 195, 
      clickRate: 10, 
      reportRate: 43,
      status: 'Completed',
      date: '2024-02-01'
    },
  ];

  const phishingTrends = [
    { metric: 'Click Rate Improvement', value: '-4%', trend: 'Decreasing', positive: true },
    { metric: 'Reporting Rate', value: '+14%', trend: 'Increasing', positive: true },
    { metric: 'Avg. Time to Report', value: '3.2 min', trend: 'Decreasing', positive: true },
    { metric: 'Repeat Clickers', value: '18 users', trend: 'Decreasing', positive: true },
  ];

  const securityPostureMetrics = [
    { category: 'Password Security', score: 68, impact: -12, issues: ['23 weak passwords', '156 passwords > 90 days', '34 reused passwords'] },
    { category: 'Patch Management', score: 72, impact: -10, issues: ['12 critical OS updates', '45 browser updates pending', '8 security patches overdue'] },
    { category: 'Access Control', score: 85, impact: -5, issues: ['5 users with excessive privileges', '12 inactive accounts', '3 shared accounts'] },
    { category: 'Network Security', score: 92, impact: -2, issues: ['2 open ports', '1 misconfigured firewall rule'] },
    { category: 'Data Protection', score: 89, impact: -3, issues: ['8 unencrypted files', '4 data retention violations'] },
    { category: 'Incident Response', score: 81, impact: -7, issues: ['3 unresolved medium incidents', '1 overdue security review'] },
  ];

  const phishingUserResults = [
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john.doe@company.com', 
      campaign: 'Q1 2024 Baseline Test',
      result: 'Failed', 
      action: 'Clicked Link', 
      timeToClick: '2.3 min',
      trainingAssigned: 'Phishing Recognition & Response',
      trainingStatus: 'Completed',
      completionDate: '2024-03-20'
    },
    { 
      id: 2, 
      name: 'Sarah Smith', 
      email: 'sarah.smith@company.com', 
      campaign: 'Q1 2024 Baseline Test',
      result: 'Passed', 
      action: 'Reported as Phishing', 
      timeToReport: '1.8 min',
      trainingAssigned: null,
      trainingStatus: null,
      completionDate: null
    },
    { 
      id: 3, 
      name: 'Mike Johnson', 
      email: 'mike.johnson@company.com', 
      campaign: 'Holiday Scam Simulation',
      result: 'Failed', 
      action: 'Entered Credentials', 
      timeToClick: '0.8 min',
      trainingAssigned: 'Advanced Security Awareness',
      trainingStatus: 'In Progress',
      completionDate: null
    },
    { 
      id: 4, 
      name: 'Lisa Wilson', 
      email: 'lisa.wilson@company.com', 
      campaign: 'Holiday Scam Simulation',
      result: 'Passed', 
      action: 'Reported as Phishing', 
      timeToReport: '2.1 min',
      trainingAssigned: null,
      trainingStatus: null,
      completionDate: null
    },
    { 
      id: 5, 
      name: 'David Brown', 
      email: 'david.brown@company.com', 
      campaign: 'Tax Season Phishing',
      result: 'Failed', 
      action: 'Downloaded Attachment', 
      timeToClick: '1.5 min',
      trainingAssigned: 'Email Security Best Practices',
      trainingStatus: 'Not Started',
      completionDate: null
    },
    { 
      id: 6, 
      name: 'Emma Davis', 
      email: 'emma.davis@company.com', 
      campaign: 'Tax Season Phishing',
      result: 'Passed', 
      action: 'Ignored Email', 
      timeToClick: null,
      trainingAssigned: null,
      trainingStatus: null,
      completionDate: null
    },
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

      {/* Policy Compliance Section */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
        <div className="p-4 lg:p-6 border-b border-gray-100">
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-blue-600" />
            Policy Compliance Monitoring
          </h3>
        </div>
        <div className="p-4 lg:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {policyCompliance.map((policy, index) => (
              <div key={index} className="p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900 text-sm">{policy.policy}</h4>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-lg ${
                    policy.compliance >= 90 ? 'bg-green-100 text-green-700' :
                    policy.compliance >= 80 ? 'bg-blue-100 text-blue-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {policy.status}
                  </span>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                    <span>{policy.compliance}%</span>
                    <span className="text-green-600">{policy.trend}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-red-500 h-2 rounded-full"
                      style={{ width: `${policy.compliance}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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

  const renderPasswordAnalysis = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Password Strength Analysis</h2>
        <button className="bg-blue-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-sm lg:text-base">
          Force Password Reset
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
        {passwordStats.map((stat, index) => (
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
              <Lock className="w-5 h-5 mr-2 text-blue-600" />
              Password Strength Distribution
            </h3>
          </div>
          <div className="p-4 lg:p-6 space-y-4">
            {passwordStrengthData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${
                    item.strength === 'Very Strong' ? 'bg-green-500' :
                    item.strength === 'Strong' ? 'bg-blue-500' :
                    item.strength === 'Medium' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}></div>
                  <span className="font-medium text-gray-900">{item.strength}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">{item.count} users</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        item.strength === 'Very Strong' ? 'bg-green-500' :
                        item.strength === 'Strong' ? 'bg-blue-500' :
                        item.strength === 'Medium' ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-700 w-8">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="p-4 lg:p-6 border-b border-gray-100">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 flex items-center">
              <Key className="w-5 h-5 mr-2 text-red-600" />
              Password Policy Violations
            </h3>
          </div>
          <div className="p-4 lg:p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                <h4 className="font-semibold text-red-900 mb-2">Critical Issues</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-red-700">Password &lt; 8 chars</span>
                    <span className="font-semibold text-red-900">12 users</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-700">No special characters</span>
                    <span className="font-semibold text-red-900">18 users</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-700">Dictionary words</span>
                    <span className="font-semibold text-red-900">9 users</span>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-yellow-50 border border-yellow-200">
                <h4 className="font-semibold text-yellow-900 mb-2">Warning Issues</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-yellow-700">Age &gt; 90 days</span>
                    <span className="font-semibold text-yellow-900">156 users</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-yellow-700">Repeated patterns</span>
                    <span className="font-semibold text-yellow-900">23 users</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-yellow-700">Common substitutions</span>
                    <span className="font-semibold text-yellow-900">34 users</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPhishing = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Phishing Campaigns</h2>
        <button className="bg-blue-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-sm lg:text-base">
          Launch New Campaign
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
        {phishingTrends.map((trend, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-3 lg:mb-4">
              <div className={`p-2 lg:p-3 rounded-xl ${trend.positive ? 'bg-green-100' : 'bg-red-100'}`}>
                <Target className={`w-5 h-5 lg:w-6 lg:h-6 ${trend.positive ? 'text-green-600' : 'text-red-600'}`} />
              </div>
              <span className={`text-xs lg:text-sm font-semibold px-2 py-1 rounded-lg ${trend.positive ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                {trend.trend}
              </span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1 lg:mb-2">{trend.value}</h3>
            <p className="text-gray-600 font-medium text-sm lg:text-base">{trend.metric}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
        <div className="p-4 lg:p-6 border-b border-gray-100">
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 flex items-center">
            <Target className="w-5 h-5 mr-2 text-blue-600" />
            Campaign History & Results
          </h3>
        </div>
        <div className="p-4 lg:p-6 space-y-4">
          {phishingCampaigns.map((campaign) => (
            <div key={campaign.id} className="p-4 lg:p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">{campaign.name}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>Sent: {campaign.sent}</span>
                    <span>Date: {campaign.date}</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg font-semibold">
                      {campaign.status}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{campaign.clickRate}%</div>
                    <div className="text-xs text-gray-600">Click Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{campaign.reportRate}%</div>
                    <div className="text-xs text-gray-600">Report Rate</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Clicked</span>
                    <span className="font-semibold text-red-600">{campaign.clicked} users</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-red-500 h-2 rounded-full"
                      style={{ width: `${campaign.clickRate}%` }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Reported</span>
                    <span className="font-semibold text-green-600">{campaign.reported} users</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${campaign.reportRate}%` }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Ignored</span>
                    <span className="font-semibold text-gray-600">{campaign.sent - campaign.clicked - campaign.reported} users</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gray-500 h-2 rounded-full"
                      style={{ width: `${((campaign.sent - campaign.clicked - campaign.reported) / campaign.sent * 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 text-center">
        <Target className="w-12 h-12 lg:w-16 lg:h-16 text-blue-600 mx-auto mb-4" />
        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">Overall Campaign Effectiveness</h3>
        <p className="text-gray-600 text-sm lg:text-base mb-4">
          Your organization shows <strong>34% improvement</strong> in phishing awareness over the last quarter.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">42%</div>
            <div className="text-gray-600 text-sm lg:text-base">Average Report Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-2">2.1 min</div>
            <div className="text-gray-600 text-sm lg:text-base">Avg. Time to Report</div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-purple-600 mb-2">18</div>
            <div className="text-gray-600 text-sm lg:text-base">Repeat Offenders</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
        <div className="p-4 lg:p-6 border-b border-gray-100">
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 flex items-center">
            <Users className="w-5 h-5 mr-2 text-blue-600" />
            Individual User Results
          </h3>
        </div>
        <div className="p-4 lg:p-6">
          <div className="space-y-4">
            {phishingUserResults.map((user) => (
              <div key={user.id} className="p-4 lg:p-5 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                        user.result === 'Passed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {user.result}
                      </span>
                      <span className="font-semibold text-gray-900">{user.name}</span>
                      <span className="text-gray-600 text-sm">({user.email})</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-gray-600">Campaign: </span>
                        <span className="font-medium text-gray-900">{user.campaign}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Action: </span>
                        <span className="font-medium text-gray-900">{user.action}</span>
                      </div>
                      {user.timeToClick && (
                        <div>
                          <span className="text-gray-600">Time to Click: </span>
                          <span className="font-medium text-red-600">{user.timeToClick}</span>
                        </div>
                      )}
                      {user.timeToReport && (
                        <div>
                          <span className="text-gray-600">Time to Report: </span>
                          <span className="font-medium text-green-600">{user.timeToReport}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {user.trainingAssigned && (
                    <div className="lg:w-80 p-3 rounded-lg bg-gray-50 border border-gray-200">
                      <h5 className="font-semibold text-gray-900 text-sm mb-2">Assigned Training</h5>
                      <div className="space-y-2 text-sm">
                        <div className="font-medium text-gray-800">{user.trainingAssigned}</div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Status:</span>
                          <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                            user.trainingStatus === 'Completed' ? 'bg-green-100 text-green-700' :
                            user.trainingStatus === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {user.trainingStatus}
                          </span>
                        </div>
                        {user.completionDate && (
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Completed:</span>
                            <span className="text-gray-900 font-medium">{user.completionDate}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
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
                    className="bg-red-500 h-2 rounded-full"
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
      case 'passwords':
        return renderPasswordAnalysis();
      case 'phishing':
        return renderPhishing();
      case 'training':
        return renderTraining();
      case 'security':
        return (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Security Posture</h2>
              <div className="flex items-center">
                <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-xl font-semibold flex items-center text-sm">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Score: 78/100
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8">
              <div className="text-center mb-8">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${78 * 3.14159} ${(100 - 78) * 3.14159}`}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">78</div>
                      <div className="text-sm text-gray-600">Score</div>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">Overall Security Score</h3>
                <p className="text-gray-600 text-sm lg:text-base">Your organization's security posture needs improvement in password policies and patch management.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {securityPostureMetrics.map((metric, index) => (
                  <div key={index} className="p-4 lg:p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-gray-900 text-lg">{metric.category}</h4>
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-semibold px-2 py-1 rounded-lg ${
                          metric.score >= 90 ? 'bg-green-100 text-green-700' :
                          metric.score >= 80 ? 'bg-blue-100 text-blue-700' :
                          metric.score >= 70 ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {metric.score}/100
                        </span>
                        <span className="text-sm font-semibold text-red-600">
                          {metric.impact} pts
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full transition-all duration-300 ${
                            metric.score >= 90 ? 'bg-green-500' :
                            metric.score >= 80 ? 'bg-blue-500' :
                            metric.score >= 70 ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`}
                          style={{ width: `${metric.score}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-semibold text-gray-700 text-sm">Key Issues:</h5>
                      {metric.issues.map((issue, issueIndex) => (
                        <div key={issueIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></div>
                          <span>{issue}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 lg:p-6 bg-blue-50 rounded-xl border border-blue-200">
                <h4 className="font-bold text-blue-900 text-lg mb-3">Recommended Actions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-blue-800">Enforce stronger password policies</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-blue-800">Schedule critical security patches</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-blue-800">Review user access privileges</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-blue-800">Implement MFA for all users</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-blue-800">Update incident response procedures</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-blue-800">Encrypt sensitive data repositories</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'vulnerabilities':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Vulnerability Management</h2>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="p-4 lg:p-6 border-b border-gray-100">
                <h3 className="text-lg lg:text-xl font-bold text-gray-900">System Vulnerabilities</h3>
              </div>
              <div className="p-4 lg:p-6 space-y-4">
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

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="p-4 lg:p-6 border-b border-gray-100">
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                  Compromised Credential Detection
                </h3>
              </div>
              <div className="p-4 lg:p-6 space-y-4">
                {compromisedCredentials.map((cred) => (
                  <div key={cred.id} className="p-3 lg:p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                            cred.severity === 'High' ? 'bg-red-100 text-red-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {cred.severity}
                          </span>
                          <span className="font-semibold text-gray-900 text-sm lg:text-base">{cred.email}</span>
                        </div>
                        <p className="text-xs lg:text-sm text-gray-600">Found in: {cred.source}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-lg text-xs lg:text-sm font-semibold whitespace-nowrap ${
                        cred.status === 'Password Reset' ? 'bg-green-100 text-green-700' :
                        cred.status === 'Training Assigned' ? 'bg-blue-100 text-blue-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {cred.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
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
            <div className="flex items-center space-x-2 lg:space-x-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="leading-tight">
                <h1 className="text-sm lg:text-base font-bold text-gray-900 whitespace-nowrap">SummerView</h1>
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
