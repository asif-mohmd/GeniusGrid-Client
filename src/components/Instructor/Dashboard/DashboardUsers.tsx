import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { instructoraxios } from "../../../constraints/axiosInterceptors/instructorAxiosInterceptors";
import instructorEndpoints from "../../../constraints/endpoints/instructorEndpoints";

// Define an interface for the user object
interface User {
    userName: string;
    userEmail: string;
    courseName: string;
    coursePrice: string;
    courseCategory: string;
}

const DashboardUsers: React.FC = () => {
    const [purchasedUsers, setPurchasedUsers] = useState<User[]>([]);
    const [searchText, setSearchText] = useState("");
    const [filteredList, setFilteredList] = useState<User[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const usersPerPage = 8;

    useEffect(() => {
        async function fetchPurchasedUsers() {
            try {
                const response = await instructoraxios.get(instructorEndpoints.getPurchasedUsers);
                console.log(response.data);
                const mappedUsers: User[] = response.data.response.map((orderData: any) => ({
                    userName: orderData.userName,
                    userEmail: orderData.userEmail,
                    courseName: orderData.courseName,
                    courseCategory: orderData.courseCategory,
                    coursePrice: orderData.coursePrice
                }));
                setPurchasedUsers(mappedUsers);
                setFilteredList(mappedUsers); // Initialize filteredList with all users
            } catch (error) {
                console.error("Error fetching purchased users:", error);
            }
        }

        fetchPurchasedUsers();
    }, []);

    const handleSearch = () => {
        const filtered = purchasedUsers.filter((user) =>
            user.userEmail.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredList(filtered);
        setCurrentPage(0); // Reset to the first page after search
    };

    const handleCancelSearch = () => {
        setSearchText("");
        setFilteredList(purchasedUsers); // Reset to the full list
        setCurrentPage(0); // Reset to the first page after cancel
    };

    const handlePageClick = (selectedItem: { selected: number }) => {
        setCurrentPage(selectedItem.selected);
    };

    const displayUsers = filteredList.slice(
        currentPage * usersPerPage,
        (currentPage + 1) * usersPerPage
    );

    return (
        <div className="text-gray-900 bg-slate-50 h-screen w-full ">
            <div className="p-4 flex">
                <h1 className="text-3xl font-semibold">Users</h1>
            </div>
            <div className="search m-2 p-4 flex">
                <input
                    type="text"
                    className="border border-solid border-black rounded-lg w-2/5"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    className="px-3 py-1 bg-gray-500 m-1 rounded-lg text-white"
                    onClick={handleSearch}
                >
                    Search
                </button>
                {searchText && (
                    <button
                        className="px-3 py-0.5 bg-gray-300 m-1 rounded-lg"
                        onClick={handleCancelSearch}
                    >
                        Cancel
                    </button>
                )}
            </div>
            <div className="px-3 py-4 flex justify-center">
                <table className="w-full text-md bg-white shadow-md rounded mb-4">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left p-3 px-5">Name</th>
                            <th className="text-left p-3 px-5">Email</th>
                            <th className="text-left p-3 px-5">Course</th>
                            <th className="text-left p-3 px-5">Category</th>
                            <th className="text-left p-3 px-5">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayUsers.map((user, index) => (
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
            <div className="flex justify-center mt-4">
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={Math.ceil(filteredList.length / usersPerPage)}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination flex justify-center space-x-2"}
                    activeClassName={"bg-blue-600 text-white"}
                    pageClassName={"page-item bg-gray-200 px-3 py-1 rounded cursor-pointer"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item bg-gray-200 px-3 py-1 rounded cursor-pointer"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item bg-gray-200 px-3 py-1 rounded cursor-pointer"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item bg-gray-200 px-3 py-1 rounded cursor-pointer"}
                    breakLinkClassName={"page-link"}
                />
            </div>
        </div>
    );
}

export default DashboardUsers;
