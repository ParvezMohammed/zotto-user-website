import React, { useState } from 'react';

import orders1 from '../../../assets/images/ordes1.png';
import orders2 from '../../../assets/images/orders2.png';
import orders3 from '../../../assets/images/orders3.png';
import rectangle11 from '../../../assets/images/Rectangle11.png';
import rectangle12 from '../../../assets/images/Rectangle12.png';

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('unread');

  // Mock notifications data
  const notifications = [
    {
      id: 1,
      title: "Out for Delivery! Anytime Sanitary Pads ₹256.00",
      image: orders1,
      time: "2 hours ago",
      isRead: false
    },
    {
      id: 2,
      title: "Your order will be reach soon, Fresh n Free Sanitary Pads",
      image: orders2,
      time: "3 hours ago",
      isRead: false
    },
    {
      id: 3,
      title: "New Diwali offers will be coming soon. Stay connected. Update will be send to your registered phone number.",
      image: rectangle11,
      time: "5 hours ago",
      isRead: false
    },
    {
      id: 4,
      title: "New Arrivals ......",
      image: rectangle12,
      time: "6 hours ago",
      isRead: false
    },
    {
      id: 5,
      title: "Out for Delivery! Anytime Sanitary Pads ₹256.00",
      image: orders1,
      time: "1 day ago",
      isRead: true
    },
    {
      id: 6,
      title: "Your previous order has been delivered successfully",
      image: orders3,
      time: "2 days ago",
      isRead: true
    }
  ];

  const unreadNotifications = notifications.filter(n => !n.isRead);
  const readNotifications = notifications.filter(n => n.isRead);

  const handleMarkAllAsRead = () => {
    // In a real app, this would make an API call to mark all as read
    console.log('Marking all as read');
  };

  return (
    <div className="min-h-screen flex flex-col ">
    
      <div className="flex-grow pt-16 bg-gray-50 ">
        <div className="max-w-[80%] mx-auto p-4 sm:p-6 lg:p-8">
          <div className="bg-white rounded-lg shadow w-full ">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b ">
              <h1 className="text-2xl font-semibold text-gray-900">Notifications</h1>
              <button
                onClick={handleMarkAllAsRead}
                className="text-pink-500 hover:text-pink-600 text-sm font-medium"
              >
                Mark all as read
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('unread')}
                className={`flex-1 py-3 text-sm font-medium text-center ${
                  activeTab === 'unread'
                    ? 'text-pink-500 border-b-2 border-pink-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Unread ({unreadNotifications.length})
              </button>
              <button
                onClick={() => setActiveTab('read')}
                className={`flex-1 py-3 text-sm font-medium text-center ${
                  activeTab === 'read'
                    ? 'text-pink-500 border-b-2 border-pink-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Read ({readNotifications.length})
              </button>
            </div>

            {/* Notifications List */}
            <div className="divide-y divide-gray-200">
              {(activeTab === 'unread' ? unreadNotifications : readNotifications).map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-start p-4 hover:bg-gray-50 transition-colors"
                >
                  <img
                    src={notification.image}
                    alt=""
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  <div className="ml-4 flex-1">
                    <p className="text-sm text-gray-900">{notification.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {((activeTab === 'unread' && unreadNotifications.length === 0) ||
              (activeTab === 'read' && readNotifications.length === 0)) && (
              <div className="p-8 text-center text-gray-500">
                No {activeTab} notifications
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications; 