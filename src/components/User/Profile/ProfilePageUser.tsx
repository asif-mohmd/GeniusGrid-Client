import React from 'react';

interface ProfilePageUserProps {
  name?: string;
  email?: string;
}

const ProfilePageUser: React.FC<ProfilePageUserProps> = ({ name, email }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-sm text-gray-600 mb-1">Name:</p>
          <p className="text-lg font-semibold">{name || 'N/A'}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">Email:</p>
          <p className="text-lg font-semibold">{email || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageUser;
