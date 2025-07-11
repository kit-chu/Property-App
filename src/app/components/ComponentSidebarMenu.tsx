"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ComponentSidebarMenu() {
  const pathname = usePathname();

  const menuItems = [
    { label: "แดชบอร์ด", href: "/dashboard" },
    { label: "โปรไฟล์", href: "/profile" },
    { label: "รีวิว", href: "/reviews" },
    { label: "รายการของฉัน", href: "/my-properties" },
    { label: "รายการโปรด", href: "/favorites" },
    { label: "ข้อความ", href: "/messages" },
    { label: "เพิ่มประกาศ", href: "/add-property" },
    { label: "ออกจากระบบ", href: "/logout", danger: true },
  ];

  return (
    <aside className="w-full xl:w-64  p-4">
      <h2 className="text-lg font-bold mb-4 text-gray-800">เมนู</h2>
      <ul className="space-y-1">
        {menuItems.map(({ label, href, danger }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`
                  block px-3 py-2 rounded-md
                  ${
                    isActive
                      ? "bg-gray-100 font-bold text-black"
                      : "text-gray-800 hover:bg-gray-50"
                  }
                  ${danger ? "text-red-500 hover:text-red-600 font-medium" : ""}
                `}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
