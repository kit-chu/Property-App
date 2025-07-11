"use client";

import { useState } from "react";
import ComponentSidebarMenu from "../components/ComponentSidebarMenu";

const mockProperties = [
  {
    id: 1,
    title: "Gorgeous Apartment Building",
    image: "https://via.placeholder.com/150",
    price: "$7,500",
    date: "March 22, 2024",
    status: "Approved",
  },
  {
    id: 2,
    title: "Mountain Mist Retreat, Aspen",
    image: "https://via.placeholder.com/150",
    price: "$7,500",
    date: "March 22, 2024",
    status: "Approved",
  },
  {
    id: 3,
    title: "Lakeview Haven, Lake Tahoe",
    image: "https://via.placeholder.com/150",
    price: "$7,500",
    date: "March 22, 2024",
    status: "Pending",
  },
  {
    id: 4,
    title: "Coastal Serenity Cottage",
    image: "https://via.placeholder.com/150",
    price: "$7,500",
    date: "March 22, 2024",
    status: "Sold",
  },
  {
    id: 5,
    title: "Sunset Heights Estate",
    image: "https://via.placeholder.com/150",
    price: "$7,500",
    date: "March 22, 2024",
    status: "Pending",
  },
  {
    id: 6,
    title: "Luxury Home in Tokyo",
    image: "https://via.placeholder.com/150",
    price: "$15,000",
    date: "March 22, 2024",
    status: "Approved",
  },
];

export default function MyPropertiesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postStatus, setPostStatus] = useState(""); // ✅ สถานะที่เลือก
  const [search, setSearch] = useState(""); // ✅ คำค้นหา

  const itemsPerPage = 3;

  // ✅ กรองข้อมูลจาก filter
  const filtered = mockProperties.filter((p) => {
    const matchStatus =
      postStatus === "" || postStatus === "All" || p.status === postStatus;
    const matchTitle = p.title.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchTitle;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const currentData = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderStatusBadge = (status: string) => {
    const base = "badge text-white text-xs";
    if (status === "Approved")
      return <span className={`${base} bg-green-500`}>{status}</span>;
    if (status === "Pending")
      return <span className={`${base} bg-red-400`}>{status}</span>;
    if (status === "Sold")
      return <span className={`${base} bg-purple-500`}>{status}</span>;
    return <span className={`${base} bg-gray-400`}>{status}</span>;
  };

  return (
    <div className="flex min-h-screen bg-base-200">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow  hidden xl:block">
        <ComponentSidebarMenu />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-4">
        {/* Filter */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <select
            className="select select-bordered w-full md:w-1/3"
            value={postStatus}
            onChange={(e) => {
              setPostStatus(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">Post Status</option>
            <option>All</option>
            <option>Approved</option>
            <option>Pending</option>
            <option>Sold</option>
          </select>

          <input
            type="text"
            placeholder="Search by title"
            className="input input-bordered w-full md:w-2/3"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* Table Box */}
        <div className="bg-white rounded-xl shadow p-4 h-[70vh] flex flex-col">
          <h2 className="text-lg font-bold mb-4">My Properties</h2>

          {/* Scrollable Table */}
          <div className="overflow-y-auto flex-1">
            <table className="table w-full">
              <thead className="bg-base-300 sticky top-0 z-10">
                <tr>
                  <th>Listing</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((property) => (
                  <tr key={property.id}>
                    <td>
                      <div className="flex items-center gap-4">
                        <img
                          src={property.image}
                          alt={property.title}
                          className="w-20 h-14 rounded object-cover"
                        />
                        <div>
                          <p className="font-medium">{property.title}</p>
                          <p className="text-sm text-gray-500">
                            Posting date: {property.date}
                          </p>
                          <p className="text-primary font-bold">
                            {property.price}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>{renderStatusBadge(property.status)}</td>
                    <td className="space-x-2 text-sm">
                      <button className="btn btn-xs">Edit</button>
                      <button className="btn btn-xs btn-secondary">Sold</button>
                      <button className="btn btn-xs btn-error">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex justify-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`btn btn-sm ${
                  currentPage === i + 1 ? "btn-primary" : "btn-ghost"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
