"use client";

import { List, Clock, Heart, Star } from "lucide-react";
import ComponentSidebarMenu from "../components/ComponentSidebarMenu";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-base-200">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow">
        <ComponentSidebarMenu />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
            <div className="bg-base-200 p-3 rounded-full">
              <List className="text-primary w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">ประกาศของคุณ</p>
              <p className="text-xl font-bold text-gray-800">32</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
            <div className="bg-base-200 p-3 rounded-full">
              <Clock className="text-primary w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">รอดำเนินการ</p>
              <p className="text-xl font-bold text-gray-800">02</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
            <div className="bg-base-200 p-3 rounded-full">
              <Heart className="text-primary w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">รายการโปรด</p>
              <p className="text-xl font-bold text-gray-800">06</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
            <div className="bg-base-200 p-3 rounded-full">
              <Star className="text-primary w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">รีวิว</p>
              <p className="text-xl font-bold text-gray-800">1,483</p>
            </div>
          </div>
        </div>

        {/* New Listing Section */}
        <div className="card bg-white shadow p-6">
          <h2 className="text-lg font-bold mb-4">New Listing</h2>

          {/* Search Filters */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
            <input
              type="text"
              placeholder="ค้นหา"
              className="input input-bordered w-full md:w-1/3"
            />
            <input type="date" className="input input-bordered" />
            <input type="date" className="input input-bordered" />
            <select className="select select-bordered">
              <option>ทั้งหมด</option>
              <option>อนุมัติ</option>
              <option>รอดำเนินการ</option>
            </select>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-base-300 text-base-content">
                <tr>
                  <th>ประกาศ</th>
                  <th>สถานะ</th>
                  <th>ราคา</th>
                  <th>การจัดการ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gorgeous Apartment</td>
                  <td>
                    <span className="badge badge-success">Approved</span>
                  </td>
                  <td>$7,500</td>
                  <td>
                    <div className="flex gap-2">
                      <button className="btn btn-xs">Edit</button>
                      <button className="btn btn-xs btn-error">Delete</button>
                    </div>
                  </td>
                </tr>
                {/* เพิ่มรายการอื่น ๆ ได้ */}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-4 space-x-2">
            <button className="btn btn-sm">«</button>
            <button className="btn btn-sm btn-active">1</button>
            <button className="btn btn-sm">2</button>
            <button className="btn btn-sm">»</button>
          </div>
        </div>

        {/* Graph Section Placeholder */}
        <div className="card bg-white shadow mt-6">
          <div className="card-body">
            <h2 className="card-title">Page Inside (กราฟหรือแผนภูมิ)</h2>
            <p>Section นี้คุณสามารถใส่กราฟจาก Chart.js หรืออื่น ๆ ได้ภายหลัง</p>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="hidden xl:block w-80 bg-white shadow p-4">
        <h3 className="font-semibold mb-2">Messages</h3>
        <div className="space-y-2 mb-4">
          <div className="p-2 bg-base-200 rounded">ข้อความที่ 1</div>
          <div className="p-2 bg-base-200 rounded">ข้อความที่ 2</div>
        </div>

        <h3 className="font-semibold mb-2">Recent Reviews</h3>
        <div className="space-y-2">
          <div className="p-2 bg-base-200 rounded">รีวิว ⭐⭐⭐⭐⭐</div>
          <div className="p-2 bg-base-200 rounded">รีวิว ⭐⭐⭐⭐</div>
        </div>
      </aside>
    </div>
  );
}
