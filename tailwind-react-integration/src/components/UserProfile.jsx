function UserProfile() {
    return (
      <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg)">
        <img className="rounded-full w-36 h-36 mx-auto" src="https://th.bing.com/th/id/OIP.8cwjJRW8Rxvk8JwuidaHMgHaJQ?w=156&h=195&c=7&r=0&o=5&pid=1.7" alt="User" />
        <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
        <p className="text-gray-600 text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;