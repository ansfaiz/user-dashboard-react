import { useState } from 'react';
import './App.css';
import NameButton from './component/NameButton';
import HandleCard from './component/card/HandleCard';
import Navbar from './component/ui/Navbar';
import Footer from './component/ui/Footer';
import useUsers from './hooks/useUser';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);
  const users = useUsers(refreshKey);

  const [selectedIds, setSelectedIds] = useState([]);

  function handleSelect(id) {
    setSelectedIds(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  }

  function handleRefresh() {
    setSelectedIds([]);
    setRefreshKey(prev => prev + 1);
  }


  const selectedUsers = users.filter(user =>
    selectedIds.includes(user.login.uuid)
  );

  if (users.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Fetching Users...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 via-blue-50 to-indigo-100">


      <Navbar onRefresh={handleRefresh} />


      <div className="flex flex-1">

        <div className="w-1/3 bg-white/60 backdrop-blur-xl border-r border-white/40 shadow-lg p-4 overflow-y-auto">
          <h2 className="text-lg font-bold mb-4 text-gray-700 tracking-wide">Users</h2>

          <div className="space-y-2">
            {users.map(user => (
              <NameButton
                key={user.login.uuid}
                id={user.login.uuid}
                name={user.name.first}
                selectedIds={selectedIds}
                onSelect={handleSelect}
              />
            ))}
          </div>
        </div>


        <div className="flex-1 p-6 overflow-y-auto">

          <h2 className="text-2xl font-extrabold mb-6 text-gray-800 tracking-tight">Selected Users</h2>

          {selectedUsers.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 animate-fadeIn">
              {selectedUsers.map(user => (
                <HandleCard key={user.login.uuid} user={user} />
              ))}
            </div>
          ) : (
            <div className="text-gray-400 text-lg flex items-center justify-center h-full">
              <div className="text-center space-y-2">
                <p className="text-2xl">👈</p>
                <p>Select users from the left panel</p>
              </div>
            </div>
          )}

        </div>

      </div>
      <Footer />

    </div>
  );
}

export default App;