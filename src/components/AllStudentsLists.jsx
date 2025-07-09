import { FiSearch, FiTrash2 } from "react-icons/fi";
import { RiApps2Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { FaRegPenToSquare } from "react-icons/fa6";
import { HiAdjustmentsVertical } from "react-icons/hi2";

const ManagementDashboard = () => {
  const students = new Array(14).fill({
    name: "Sophia Wilson",
    rollNum: "522bbc909",
    class: "12 - A",
    accomType: "Hosteller",
    transport: "No",
    location: "Singanallur",
    contact: "82486 69086",
    rank: "001",
    points: "28890",
    avatar:
      "https://www.shutterstock.com/image-vector/black-woman-smiling-portrait-vector-600nw-2281497689.jpg",
  });
  return (
    <div className="px-4 min-h-screen font-sans py-2">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold py-1">Students</h1>
        <span className="text-lg flex items-center font-bold">
          Add New
          <span className="rounded-md p-2 bg-white ml-3">
            <FaPlus size={15} />
          </span>
        </span>
      </div>
      <div className="bg-white shadow-sm rounded-xl p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">
            All Students List
          </h2>
          <div className="flex gap-2 items-center">
            <span className="border p-2 rounded-md">
              <HiAdjustmentsVertical size={20} />
            </span>
            <div className="relative">
              <FiSearch className="absolute top-2.5 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search by Name or roll."
                className="pl-10 pr-3 py-2 border rounded-md text-sm border-gray-300 focus:outline-none"
              />
            </div>
            <select className="text-sm border border-gray-300 rounded-md px-3 py-2">
              <option>All Classes</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border rounded text-gray-500">
            <thead className="bg-[#F0F2F7] text-gray-600">
              <tr>
                <th className="px-3 py-2">No</th>
                <th className="px-3 py-2">Students</th>
                <th className="px-3 py-2">Roll num</th>
                <th className="px-3 py-2">Class</th>
                <th className="px-3 py-2">Accom_Type</th>
                <th className="px-3 py-2">Transport</th>
                <th className="px-3 py-2">Location</th>
                <th className="px-3 py-2">Contact</th>
                <th className="px-3 py-2">Rank</th>
                <th className="px-3 py-2">Points</th>
                <th className="px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {students.map((student, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-3 py-2 text-center">01</td>
                  <td className="px-3 py-2 flex items-center gap-2">
                    <img
                      src={student.avatar}
                      alt="avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    {student.name}
                  </td>
                  <td className="px-3 py-2">{student.rollNum}</td>
                  <td className="px-3 py-2">{student.class}</td>
                  <td className="px-3 py-2">{student.accomType}</td>
                  <td className="px-3 py-2">{student.transport}</td>
                  <td className="px-3 py-2">{student.location}</td>
                  <td className="px-3 py-2">{student.contact}</td>
                  <td className="px-3 py-2">{student.rank}</td>
                  <td className="px-3 py-2">{student.points}</td>
                  <td className="px-3 py-2 flex items-center gap-2 text-gray-500">
                    <FaRegPenToSquare className="cursor-pointer hover:text-blue-500" />
                    <FiTrash2 className="cursor-pointer hover:text-red-500" />
                    <RiApps2Line className="cursor-pointer hover:green-red-500" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between text-xs text-gray-500 mt-4">
          <button className="border px-3 py-1 rounded-md">Previous</button>
          <span>Page 01 of 12</span>
          <button className="border px-3 py-1 rounded-md">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ManagementDashboard;
