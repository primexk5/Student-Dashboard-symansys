import {PieChart, Pie, Cell, Tooltip, ResponsiveContainer} from "recharts";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Legend} from "recharts";
const earningsData = [
  { month: "Jan", income: 600000, expense: 400000 },
  { month: "Feb", income: 850000, expense: 500000 },
  { month: "Mar", income: 670000, expense: 430000 },
  { month: "Apr", income: 700000, expense: 450000 },
  { month: "May", income: 750000, expense: 490000 },
  { month: "Jun", income: 730000, expense: 470000 },
  { month: "Jul", income: 800000, expense: 510000 },
  { month: "Aug", income: 620000, expense: 460000 },
  { month: "Sep", income: 837000, expense: 500000 },
  { month: "Oct", income: 920000, expense: 520000 },
  { month: "Nov", income: 880000, expense: 490000 },
  { month: "Dec", income: 940000, expense: 530000 },
];

const studentData = [
  { name: "Boys", value: 3178 },
  { name: "Girls", value: 2731 },
];

const COLORS = ["#8E99F3", "#F8D66D"];

const ManagementDashboard = () => {
  return (
    <div className='flex flex-col bg-[#f5f4f9] p-6 gap-6'>
      <div className='flex flex-col xl:flex-row gap-4'>
        <div className='flex flex-col flex-1 gap-6'>
          <div className='bg-white p-6 rounded-2xl shadow flex flex-col xl:flex-row items-start justify-between'>
            <div className='flex flex-col max-w-xl gap-2'>
              <h2 className='text-2xl font-semibold text-[#001515]'>
                Welcome, Laurel Higher Secondary School Team!
              </h2>
              <p className='text-gray-600'>
                Manage your school operations with ease. Stay updated on academics, attendance, finances, and more—all in one place. Let’s keep shaping a brighter future together!
              </p>
            </div>
            <div>
              <img src="src/assets/9f0f9458e4389b5249f2d696c77aab11d2e70871.png" alt="mng-img" className='w-52 h-auto object-contain' />
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-4'>
            {/* Students Pie Chart */}
            <div className='bg-white rounded-2xl shadow p-4 flex-1'>
              <div className='flex justify-between items-center mb-4'>
                <p className='font-semibold text-lg'>Students</p>
                <span className='text-2xl'>...</span>
              </div>
              <div className="flex flex-col md:flex-row justify-around items-center gap-6 mt-4">
                <div className="flex flex-col items-center">
                  <ResponsiveContainer width={150} height={150}>
                    <PieChart>
                      <Pie
                        data={[{ name: "Boys", value: 3178 }]}
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={50}
                        fill="#8E99F3"
                        dataKey="value"
                        label
                      >
                        <Cell key="Boys" fill="#8E99F3" />
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <p className="text-sm mt-2 text-gray-600">
                    Boys: <span className="font-semibold">3,178</span>
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <ResponsiveContainer width={150} height={150}>
                    <PieChart>
                      <Pie
                        data={[{ name: "Girls", value: 2731 }]}
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={50}
                        fill="#F8D66D"
                        dataKey="value"
                        label
                      >
                        <Cell key="Girls" fill="#F8D66D" />
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <p className="text-sm mt-2 text-gray-600">
                    Girls: <span className="font-semibold">2,731</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white p-4 rounded-2xl w-full lg:w-1/2 shadow">
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">Notice Board</p>
                <span className="text-blue-600 cursor-pointer underline">view all</span>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex gap-4 items-start bg-yellow-100 rounded-lg p-3">
                  <img src="src/assets/images/Vector.png" alt="" className="w-6 h-6 mt-1" />
                  <div>
                    <h2 className="font-semibold text-base">Sports Day Announcement</h2>
                    <p className="text-sm text-gray-600">
                      The school's Annual Sports Day will be held on May 12, 2024. Mark your calendars!
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-purple-100 rounded-lg p-3">
                  <img src="src/assets/images/Vector.png" alt="" className="w-6 h-6 mt-1" />
                  <div>
                    <h2 className="font-semibold text-base">Summer Break Start Date</h2>
                    <p className="text-sm text-gray-600">
                      Summer break begins on May 25, 2024. Have a wonderful holiday!
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 mt-2">
                  <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                    Add New
                  </button>
                  <button className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-4 py-1 rounded-full text-sm">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className='flex flex-col gap-4 w-[300px]'>
          <div className='space-y-3'>
            <div className='bg-yellow-200 p-4 rounded-xl shadow'>
              <div className='flex justify-between'><p>Students</p><span>...</span></div>
              <h2 className='text-2xl font-bold'>5,909</h2>
            </div>
            <div className='bg-purple-200 p-4 rounded-xl shadow'>
              <div className='flex justify-between'><p>Teachers</p><span>...</span></div>
              <h2 className='text-2xl font-bold'>60</h2>
            </div>
            <div className='bg-yellow-200 p-4 rounded-xl shadow'>
              <div className='flex justify-between'><p>Employees</p><span>...</span></div>
              <h2 className='text-2xl font-bold'>100</h2>
            </div>
          </div>

          <div className='relative p-4 bg-white rounded-xl shadow text-center'>
            <p className='text-gray-600 text-sm mb-2'>Calendar</p>
            <div className="text-xs text-gray-700">
              <div className="grid grid-cols-7 gap-1 font-medium mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="text-center text-gray-500">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                <div></div>
                {[...Array(30)].map((_, i) => {
                  const day = i + 1;
                  const isToday = day === new Date().getDate() && new Date().getMonth() === 8;
                  return (
                    <div
                      key={day}
                      className={`text-center py-1 rounded-full ${
                        isToday ? "bg-blue-500 text-white font-bold" : "hover:bg-gray-200"
                      }`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>
            <button className='mt-3 text-sm px-4 py-2 bg-gray-800 text-white rounded-full absolute left-1/2 -translate-x-1/2 bottom-4'>Manage Calendar</button>
          </div>
          <div className='bg-white rounded-xl shadow p-4 space-y-2'>
            <div className='flex justify-between items-center'>
              <h2 className='text-sm font-medium'>Financial Overview</h2>
              <div className='flex gap-1 text-xs'>
                <button className='px-2 py-1 bg-gray-200 rounded-full'>2023-2024</button>
                <button className='px-2 py-1 bg-gray-200 rounded-full'>Annual</button>
              </div>
            </div>
            <div className='bg-blue-100 p-3 rounded-lg'>
              <h2 className='text-xl font-bold'>₹29,545,000</h2>
              <p className='text-xs text-gray-600'>Total Income</p>
            </div>
            <div className='bg-blue-100 p-3 rounded-lg'>
              <h2 className='text-xl font-bold'>₹19,291,266</h2>
              <p className='text-xs text-gray-600'>Total Expenses</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow col-span-1 xl:col-span-2 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Earnings</h3>
            <div className="flex gap-2 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
                Income
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-purple-300 rounded-full"></span>
                Expense
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="income"
                stroke="#8ED0F3"
                strokeWidth={3}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="expense"
                stroke="#BCA3F1"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-2xl shadow space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">Fee Status</p>
              <span className="text-xl">...</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <h3 className="text-xl font-bold">1,335</h3>
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">Paid</span>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <h3 className="text-xl font-bold">4,366</h3>
                <span className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Pending</span>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <h3 className="text-xl font-bold">208</h3>
                <span className="text-sm bg-red-100 text-red-800 px-3 py-1 rounded-full">Overdue</span>
              </div>
            </div>
            <button className="text-sm px-3 py-1 bg-gray-200 rounded-full mt-2 w-fit">Annual</button>
          </div>
          {/* Messages */}
          <div className="bg-white p-4 rounded-2xl shadow space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">Messages</p>
              <span className="text-xl">...</span>
            </div>

            {/* Message list */}
            {[
              { name: "Jane Cooper", message: "Don’t forget the lab rep...", time: "12:34pm", img: "https://i.pravatar.cc/30?img=1" },
              { name: "Kristin Watson", message: "Do we have maths test", time: "12:34pm", img: "https://i.pravatar.cc/30?img=2" },
              { name: "Jenny Wilson", message: "Wud?", time: "12:34pm", img: "https://i.pravatar.cc/30?img=3" },
              { name: "Brooklyn Sim", message: "Did Sachin gave any ki...", time: "12:34pm", img: "https://i.pravatar.cc/30?img=4" },
              { name: "Darrell Steward", message: "Can we go for a movie...", time: "12:34pm", img: "https://i.pravatar.cc/30?img=5" },
            ].map((msg, i) => (
              <div key={i} className="flex items-center justify-between p-2 border border-gray-100 rounded-lg">
                <div className="flex items-center gap-3">
                  <img src={msg.img} alt={msg.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <h3 className="font-medium text-sm">{msg.name}</h3>
                    <p className="text-xs text-gray-500">{msg.message}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{msg.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementDashboard;
