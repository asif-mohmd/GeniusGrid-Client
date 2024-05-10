import React, { useEffect, useState } from "react";
import { adminAxios } from "../../../constraints/axiosInterceptors/adminAxiosInterceptors";
import adminEndpoints from "../../../constraints/endpoints/adminEndpoints";

interface User {
  id: string;
  name: string;
  email: string;
  isVerified: boolean;
}

const DashboardUsers: React.FC = () => {
  const [usersList, setUsersList] = useState<User[]>([]);

  useEffect(() => {
    console.log("Fetching all users from admin");
    async function fetchUsers() {
      try {
        const response = await adminAxios.get<{ users: User[] }>(adminEndpoints.getAllUsers);
        setUsersList(response.data.users); // Adjusted to set usersList directly from response data
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
  
    fetchUsers();
  }, []); // Removed usersList from dependencies array to prevent infinite loop
  
  const handleBlockUnblock = async (id: string, isVerified: boolean) => {
    try {
      const userBlockUnblock = {
        id: id,
        isVerified: isVerified
      };
      console.log(userBlockUnblock, "--------------");
  
      // Make the PATCH request with the id and isVerified
      const response = await adminAxios.post(adminEndpoints.userBlockUnblock, userBlockUnblock);
      console.log(response, "response block");
  
      // Fetch updated user list after successful block/unblock
      const updatedResponse = await adminAxios.get<{ users: User[] }>(adminEndpoints.getAllUsers);
      setUsersList(updatedResponse.data.users); // Update usersList with the updated data
  
    } catch (error) {
      console.error("Error blocking/unblocking user:", error);
    }
  };
  

  return (
    <>
      <div className="text-gray-900 bg-slate-50 h-screen w-full">
        <div className="p-4 flex">
          <h1 className="text-3xl">Users</h1>
        </div>
        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Name</th>
                <th className="text-left p-3 px-5">Email</th>
                <th className="text-left p-3 px-5">Actions</th>
              </tr>
              {usersList.map((user) => (
                <tr key={user.id} className="border-b hover:bg-orange-100 bg-white">
                  <td className="p-3 px-5">
                    <input type="text" value={user.name} className="bg-transparent" readOnly />
                  </td>
                  <td className="p-3 px-5">
                    <input type="text" value={user.email} className="bg-transparent" readOnly />
                  </td>
                  <td className="p-3 px-5 flex justify-end">
                    {user.isVerified ? (
                      <button
                        type="button"
                        onClick={() => handleBlockUnblock(user.id, false)}
                        className="mr-3 text-sm bg-red-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Block
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleBlockUnblock(user.id, true)}
                        className="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Unblock
                      </button>
                    )}
                    {/* <button
                      type="button"
                      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Delete
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashboardUsers;
