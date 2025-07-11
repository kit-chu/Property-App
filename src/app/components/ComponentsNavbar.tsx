"use client";
import React, { useState } from "react";
import Link from "next/link";

export function ComponentsNavbar() {
  const [activeItem, setActiveItem] = useState("Item 1");

  const textLabel = {
    "Item 1": "หน้าแรก",
    Parent: "ค้นหา",
    "Submenu 1": "แผนที่",
    "Submenu 2": "รายการ",
    "Item 3": "เกี่ยวกับเรา",
  };

  return (
    <div className="navbar bg-primary text-neutral-content shadow-lg">
      {/* ซ้าย */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-neutral-content"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* เมนูมือถือ */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow text-base font-semibold"
          >
            <li>
              <Link
                href="/"
                className="hover:bg-primary-content text-neutral-content text-lg font-semibold tracking-wide"
              >
                {textLabel["Item 1"]}
              </Link>
            </li>

            <li>
              <details>
                <summary className="text-neutral-content">
                  {textLabel["Parent"]}
                </summary>
                <ul className="p-2">
                  <li>
                    <Link
                      href="/map"
                      className="text-neutral-content hover:bg-primary-content"
                    >
                      {textLabel["Submenu 1"]}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/list"
                      className="hover:bg-primary-content text-neutral-content"
                    >
                      {textLabel["Submenu 2"]}
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:bg-primary-content text-neutral-content"
              >
                {textLabel["Item 3"]}
              </Link>
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="btn btn-ghost text-2xl font-bold tracking-wide"
        >
          TerraWises
        </Link>
      </div>

      {/* กลาง */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-x-4">
          <li>
            <a className="hover:bg-primary-content text-neutral-content text-lg font-semibold tracking-wide">
              {textLabel["Item 1"]}
            </a>
          </li>
          <li>
            <details>
              <summary className="hover:bg-primary-content text-neutral-content text-lg font-semibold tracking-wide">
                {textLabel["Parent"]}
              </summary>
              <ul className="p-2 bg-primary rounded-t-none z-10 w-52 shadow-2xl">
                <li>
                  <Link
                    href="/map"
                    className="hover:bg-primary-content text-neutral-content text-base font-medium"
                    onClick={() => {
                      setActiveItem("Submenu 1");
                      // ปิด dropdown ด้วยการหาทาง DOM แล้วลบ attribute `open`
                      const openDropdown =
                        document.querySelector("details[open]");
                      if (openDropdown) {
                        openDropdown.removeAttribute("open");
                      }
                    }}
                  >
                    {textLabel["Submenu 1"]}
                  </Link>
                </li>
                <li>
                  <a
                    href="/list"
                    onClick={() => setActiveItem("Submenu 2")}
                    className="hover:bg-primary-content text-neutral-content text-base font-medium"
                  >
                    {textLabel["Submenu 2"]}
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a className="hover:bg-primary-content text-neutral-content text-lg font-semibold tracking-wide">
              {textLabel["Item 3"]}
            </a>
          </li>
        </ul>
      </div>

      {/* ขวา */}
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-primary rounded-box z-10 mt-3 w-52 p-2 shadow text-neutral-content"
          >
            <li>
              <a
                href="/dashboard"
                className="justify-between hover:bg-primary-content font-semibold"
              >
                โปรไฟล์
                <span className="badge rounded-2xl h-4 text-xs">ใหม่</span>
              </a>
            </li>

            <li>
              <a className="justify-between hover:bg-primary-content font-semibold">
                การตั้งค่า
              </a>
            </li>
            <li>
              <a className="justify-between hover:bg-primary-content font-semibold">
                ออกจากระบบ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
