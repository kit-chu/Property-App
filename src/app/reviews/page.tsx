"use client";

import { useState } from "react";
import ComponentSidebarMenu from "../components/ComponentSidebarMenu";

const reviewsData = [
  // ✅ เพิ่มรีวิวมากขึ้นเพื่อทดสอบการแบ่งหน้า
  {
    name: "Bessie Cooper",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    date: "3 day ago",
    comment: "Maecenas eu lorem et urna accumsan vestibulum vel vitae magna.",
    rating: 5,
  },
  {
    name: "Annette Black",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    date: "3 day ago",
    comment:
      "Nullam rhoncus dolor arcu, et commodo tellus semper vitae. Aenean finibus tristique lectus.",
    rating: 4,
  },
  {
    name: "Ralph Edwards",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    date: "3 day ago",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra semper convallis.",
    rating: 5,
  },
  {
    name: "Jerome Bell",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    date: "3 day ago",
    comment:
      "Fusce sit amet purus eget quam eleifend hendrerit nec a erat. Sed turpis neque.",
    rating: 4,
  },
  {
    name: "Albert Flores",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    date: "3 day ago",
    comment: "Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum.",
    rating: 5,
  },
  {
    name: "Emma Watson",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    date: "2 day ago",
    comment: "Nice experience working with this agent.",
    rating: 4,
  },
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    date: "1 day ago",
    comment: "Great support and friendly.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    date: "1 day ago",
    comment: "Great support and friendly.",
    rating: 6,
  },
  {
    name: "Michael Johnson",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    date: "1 day ago",
    comment: "Great support and friendly.",
    rating: 7,
  },
  {
    name: "Emily Davis",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    date: "1 day ago",
    comment: "Great support and friendly.",
    rating: 8,
  },
];

export default function ReviewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(reviewsData.length / itemsPerPage);
  const currentReviews = reviewsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderStars = (count: number) =>
    Array(count)
      .fill(0)
      .map((_, i) => <span key={i}>⭐</span>);

  return (
    <div className="flex min-h-screen bg-base-200">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow  hidden xl:block">
        <ComponentSidebarMenu />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="bg-white p-6 rounded-xl shadow h-[90vh] flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Recent Reviews</h2>

          {/* Scrollable Review List */}
          <div className="flex-1 overflow-y-auto pr-2 space-y-6">
            {currentReviews.map((review, index) => (
              <div key={index} className="border-b pb-4">
                <div className="flex items-center gap-4 mb-1">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold">{review.name}</span>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
                <p className="mt-2 text-gray-700">{review.comment}</p>
                <div className="text-yellow-500 mt-1 text-sm">
                  {renderStars(review.rating)}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-4 flex justify-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`btn btn-sm ${
                  currentPage === page ? "btn-primary" : "btn-ghost"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
