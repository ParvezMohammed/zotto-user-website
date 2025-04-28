import React, { useState } from 'react';

const initialNotifications = {
  unread: [
    {
      id: 1,
      icon: './images/delivery-icon.png',
      message: 'Out for Delivery! Anytime Sanitary Pads ₹256.00',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      icon: './images/delivery-status.png',
      message: 'Your order will be reach soon, Fresh n Free Sanitary Pads',
      timestamp: '3 hours ago'
    },
    {
      id: 3,
      icon: './images/offer-icon.png',
      message: 'New Diwali offers will be coming soon. Stay connected. Update will be send to your registered phone number.',
      timestamp: '5 hours ago'
    },
    {
      id: 4,
      icon: './images/new-arrival.png',
      message: 'New Arrivals ......',
      timestamp: '6 hours ago'
    },
    {
      id: 5,
      icon: './images/delivery-icon.png',
      message: 'Out for Delivery! Anytime Sanitary Pads ₹256.00',
      timestamp: '8 hours ago'
    }
  ],
  read: [
    {
      id: 6,
      icon: './images/delivered-icon.png',
      message: 'Your order has been delivered successfully!',
      timestamp: '2 days ago'
    },
    {
      id: 7,
      icon: './images/offer-icon.png',
      message: 'Special discount on your favorite products!',
      timestamp: '3 days ago'
    }
  ]
};

const Notifications = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('unread');
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (notificationId) => {
    setNotifications(prevNotifications => {
      const notification = prevNotifications.unread.find(n => n.id === notificationId);
      if (!notification) return prevNotifications;

      return {
        unread: prevNotifications.unread.filter(n => n.id !== notificationId),
        read: [...prevNotifications.read, notification]
      };
    });
  };

  const markAllAsRead = () => {
    setNotifications(prevNotifications => ({
      unread: [],
      read: [...prevNotifications.read, ...prevNotifications.unread]
    }));
  };

  return (
    <div className="fixed top-16 right-4 w-full max-w-sm bg-white rounded-lg shadow-lg z-50 overflow-hidden md:max-w-md">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
        {notifications.unread.length > 0 && (
          <button
            className="text-pink-500 text-sm hover:underline"
            onClick={markAllAsRead}
          >
            Mark all as read
          </button>
        )}
        <button className="text-xl text-gray-500 hover:text-gray-700" onClick={onClose}>
          &times;
        </button>
      </div>
      
      <div className="flex border-b border-gray-200">
        <button
          className={`flex-1 py-2 text-sm text-center ${activeTab === 'unread' ? 'text-pink-500 border-b-2 border-pink-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('unread')}
        >
          Unread {notifications.unread.length > 0 && `(${notifications.unread.length})`}
        </button>
        <button
          className={`flex-1 py-2 text-sm text-center ${activeTab === 'read' ? 'text-pink-500 border-b-2 border-pink-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('read')}
        >
          Read {notifications.read.length > 0 && `(${notifications.read.length})`}
        </button>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {notifications[activeTab].map((notification) => (
          <div
            key={notification.id}
            className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
            onClick={() => activeTab === 'unread' && markAsRead(notification.id)}
          >
            <img src={notification.icon} alt="" className="w-10 h-10 mr-4 object-contain" />
            <div className="flex-1">
              <p className="text-sm text-gray-800">{notification.message}</p>
              <span className="text-xs text-gray-500">{notification.timestamp}</span>
            </div>
          </div>
        ))}
        {notifications[activeTab].length === 0 && (
          <div className="text-center py-4 text-gray-500">
            <p>No {activeTab} notifications</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
