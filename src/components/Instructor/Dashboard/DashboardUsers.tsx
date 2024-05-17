import React, { useEffect, useState } from "react";
import { instructoraxios } from "../../../constraints/axiosInterceptors/instructorAxiosInterceptors";
import instructorEndpoints from "../../../constraints/endpoints/instructorEndpoints";

// Define an interface for the user object
interface User {
    userName: string;
    userEmail: string;
    courseName :string
    coursePrice : string
    courseCategory: string
}

function DashboardUsers() {
    // Annotate the state with the User interface
    const [purchasedUsers, setPurchasedUsers] = useState<User[]>([]);

    useEffect(() => {
        async function fetchPurchasedUsers() {
            try {
                const response = await instructoraxios.get(instructorEndpoints.getPurchasedUsers);
                console.log(response.data);
                // Transform the response data into an array of User objects
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const mappedUsers: User[] = response.data.response.map((orderData: any) => ({
                    userName: orderData.userName,
                    userEmail: orderData.userEmail,
                    courseName : orderData.courseName,
                    courseCategory : orderData.courseCategory,
                    coursePrice : orderData.coursePrice

                }));
                // Update the state with mapped data
                setPurchasedUsers(mappedUsers);
            } catch (error) {
                console.error("Error fetching purchased users:", error);
            }
        }

        fetchPurchasedUsers();
    }, []);

    return (
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
                            <th className="text-left p-3 px-5">Course</th>
                            <th className="text-left p-3 px-5">Category</th>
                            <th className="text-left p-3 px-5">Price</th>

                            <th></th>
                        </tr>
                        {purchasedUsers.map((user, index) => (
                            <tr key={index} className="border-b hover:bg-orange-100 bg-white">
                                <td className="p-3 px-5">{user.userName}</td>
                                <td className="p-3 px-5">{user.userEmail}</td>
                                <td className="p-3 px-5">{user.courseName}</td>
                                <td className="p-3 px-5">{user.courseCategory}</td>

                                <td className="p-3 px-5">{user.coursePrice}</td>


                              
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DashboardUsers;
