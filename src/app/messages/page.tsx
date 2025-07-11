"use client";

import { useState } from "react";
import ComponentSidebarMenu from "../components/ComponentSidebarMenu";

const contacts = [
  {
    id: 1,
    name: "Vincent Porter",
    status: "I'm going to office.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Sarah Walker",
    status: "Available now",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "John Doe",
    status: "Busy",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const initialMessages = [
  { id: 1, text: "Hello, John!", time: "10:31", sender: "them" },
  {
    id: 2,
    text: "simply dummy text of the printing and typesetting industry",
    time: "10:31",
    sender: "them",
  },
  { id: 3, text: "Let's go!", time: "10:31", sender: "them" },
  { id: 4, text: "Are we meeting today?", time: "10:35", sender: "me" },
  {
    id: 5,
    text: "The project finally complete! Let's go to!",
    time: "10:35",
    sender: "me",
  },
];

export default function MessagesPage() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    setMessages([
      ...messages,
      { id: messages.length + 1, text: newMessage, time: "Now", sender: "me" },
    ]);
    setNewMessage("");
  };

  return (
    <div className="flex min-h-screen bg-base-200">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow p-4 hidden xl:block">
        <ComponentSidebarMenu />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex h-[80vh] bg-white rounded-xl shadow overflow-hidden">
          {/* Contact List */}
          <div className="w-1/3 border-r p-4 space-y-4">
            <h2 className="text-xl font-bold mb-2">Message</h2>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full"
            />
            <div className="mt-4 space-y-4 overflow-y-auto h-[65vh] pr-1">
              {contacts.map((c) => (
                <div
                  key={c.id}
                  className={`flex items-center gap-4 p-2 rounded cursor-pointer hover:bg-base-200 ${
                    selectedContact.id === c.id ? "bg-base-100" : ""
                  }`}
                  onClick={() => setSelectedContact(c)}
                >
                  <img
                    src={c.avatar}
                    alt={c.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">{c.name}</p>
                    <span className="text-sm text-gray-500">{c.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="w-2/3 flex flex-col">
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                      msg.sender === "me"
                        ? "bg-blue-100 text-right"
                        : "bg-base-200 text-left"
                    }`}
                  >
                    <div>{msg.text}</div>
                    <div className="text-xs text-gray-400 mt-1">{msg.time}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input box */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="border-t flex items-center p-3"
            >
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter text here..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                required
              />
              <button className="btn btn-primary ml-2">Send Message</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
