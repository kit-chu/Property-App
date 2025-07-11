"use client";

import ComponentSidebarMenu from "../components/ComponentSidebarMenu";

export default function ProfilePage() {
  return (
    <div className="flex bg-base-200 min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow  hidden xl:block">
        <ComponentSidebarMenu />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Alert */}
        <div className="alert alert-warning shadow-lg">
          <div className="flex justify-between w-full items-center">
            <span>
              บัญชีของคุณเป็นประเภท Agent หากต้องการกลับไปเป็นบัญชีปกติ
              กรุณากดปุ่มด้านล่าง
            </span>
            <button className="btn btn-outline btn-error btn-sm">
              ลบบัญชี Agent
            </button>
          </div>
        </div>

        {/* Avatar & Poster */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Avatar Upload */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Avatar</h3>
            <input
              type="file"
              className="file-input file-input-bordered w-full"
            />
            <p className="text-sm mt-1 text-gray-500">JPG ขนาด 160x160</p>
          </div>

          {/* Poster Upload */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Agent Poster</h3>
            <input
              type="file"
              className="file-input file-input-bordered w-full"
            />
            <p className="text-sm mt-1 text-gray-500">JPG ขนาด 160x100</p>
          </div>
        </div>

        {/* Information */}
        <div className="bg-white p-6 rounded shadow space-y-4">
          <h2 className="text-lg font-bold">ข้อมูลส่วนตัว</h2>

          <input
            type="text"
            placeholder="ชื่อเต็ม"
            className="input input-bordered w-full"
          />

          <textarea
            placeholder="คำอธิบาย"
            className="textarea textarea-bordered w-full"
            rows={3}
          />

          {/* Company & Position */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="บริษัทของคุณ"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="ตำแหน่งของคุณ"
              className="input input-bordered w-full"
            />
          </div>

          {/* Job & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="ตำแหน่งงาน"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="อีเมล"
              className="input input-bordered w-full"
            />
          </div>

          {/* Phone & Office */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="เบอร์โทร"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="ที่อยู่สำนักงาน"
              className="input input-bordered w-full"
            />
          </div>

          {/* Socials */}
          <input
            type="text"
            placeholder="Facebook"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Twitter"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="LinkedIn"
            className="input input-bordered w-full"
          />

          {/* Save Button */}
          <button className="btn btn-primary">บันทึกข้อมูล</button>
        </div>

        {/* Change Password */}
        <div className="bg-white p-6 rounded shadow space-y-4">
          <h2 className="text-lg font-bold">เปลี่ยนรหัสผ่าน</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="password"
              placeholder="รหัสผ่านเดิม"
              className="input input-bordered w-full"
            />
            <input
              type="password"
              placeholder="รหัสผ่านใหม่"
              className="input input-bordered w-full"
            />
            <input
              type="password"
              placeholder="ยืนยันรหัสผ่านใหม่"
              className="input input-bordered w-full"
            />
          </div>
          <button className="btn btn-primary">อัปเดตรหัสผ่าน</button>
        </div>
      </main>
    </div>
  );
}
