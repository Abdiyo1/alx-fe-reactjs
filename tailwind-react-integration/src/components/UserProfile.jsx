function UserProfile() {
    return (
      <div className="bg-gray-100    my-20 rounded-lg shadow-lg sm:max-w-xs md:max-w-sm sm:p-4 md:p-8">
        <img className="rounded-full  sm:w-24 h-24 md:w-36 h-36 " src="https://th.bing.com/th/id/OIP.8cwjJRW8Rxvk8JwuidaHMgHaJQ?w=156&h=195&c=7&r=0&o=5&pid=1.7" alt="User" />
        <h1 className="text-blue-800 my-4 sm:text-lg md:text-xl">John Doe</h1>
        <p className="text-gray-600 sm:text-sm md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;