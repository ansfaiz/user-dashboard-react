import { useEffect, useState } from 'react';

export default function useUsers(refreshKey) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then(res => res.json())
      .then(data => setUsers(data.results));
  }, [refreshKey]); 

  return users;
}