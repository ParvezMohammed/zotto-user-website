import React, { useState } from 'react';
import ProfilePhotoEditor from '../../../components/photoeditor/PhotoEditor';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPhotoEditor, setShowPhotoEditor] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'John Doe',
    gender: 'male',
    email: 'JohnDoe@email.com',
    mobile: '9876543210',
    address: '123 Main St, NY, USA',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGenderChange = (gender) => {
    setProfile(prev => ({
      ...prev,
      gender
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    saveProfileToBackend(profile);
  };

  const handlePhotoSave = async (photoData) => {
    try {
      if (photoData.file) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const imageUrl = URL.createObjectURL(photoData.file);
        setProfile(prevProfile => ({
          ...prevProfile,
          image: imageUrl
        }));
      } else if (photoData.previewUrl) {
        setProfile(prevProfile => ({
          ...prevProfile,
          image: photoData.previewUrl
        }));
      }

      setShowPhotoEditor(false);

      await saveProfileToBackend({
        ...profile,
        image: photoData.file ? URL.createObjectURL(photoData.file) : photoData.previewUrl
      });
    } catch (error) {
      console.error('Error saving photo:', error);
      alert('Failed to update profile photo. Please try again.');
    }
  };

  const saveProfileToBackend = async (profileData) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Profile saved:', profileData);
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Failed to save profile changes. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center px-4 md:px-[190px] pt-8 mt-16 pb-10 bg-white min-h-screen">
      
      {/* Top Heading and Edit Button */}
      <div className="w-full max-w-[1080px] flex justify-between items-center mb-5">
        <h2 className="text-lg font-medium text-gray-800 m-0">My Profile</h2>
        <button 
          className="text-pink-500 text-sm bg-none border-none cursor-pointer p-0"
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>

      {/* Profile Box */}
      <div className="w-full max-w-[1080px] bg-white border border-gray-200 rounded-md p-8 h-auto">
        
        {/* Image Section */}
        <div className="flex mb-10">
          <div className="relative">
            <img 
              src={profile.image}
              alt="Profile" 
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md transition-all duration-300"
            />
            {isEditing && (
              <button 
                className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 bg-pink-500 text-white border-none rounded-full py-1.5 px-4 text-xs cursor-pointer transition-all duration-300 whitespace-nowrap shadow-md"
                onClick={() => setShowPhotoEditor(true)}
              >
                Change Photo
              </button>
            )}
          </div>
        </div>

        {/* Inputs Section */}
        <div className="space-y-5">
          
          <div>
            <label className="block text-sm text-gray-800 mb-1">Full Name</label>
            {isEditing ? (
              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:border-pink-400"
              />
            ) : (
              <div className="bg-gray-100 p-2 rounded-md text-sm text-gray-800">{profile.fullName}</div>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-800 mb-1">Your Gender</label>
            <div className="flex gap-5 py-2">
              <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-800">
                <div 
                  className={`w-4 h-4 border-2 rounded-full relative cursor-pointer ${profile.gender === 'male' ? 'border-pink-400' : 'border-gray-300'}`}
                  onClick={() => isEditing && handleGenderChange('male')}
                >
                  {profile.gender === 'male' && (
                    <div className="absolute w-2 h-2 bg-pink-400 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  )}
                </div>
                <span>Male</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-800">
                <div 
                  className={`w-4 h-4 border-2 rounded-full relative cursor-pointer ${profile.gender === 'female' ? 'border-pink-400' : 'border-gray-300'}`}
                  onClick={() => isEditing && handleGenderChange('female')}
                >
                  {profile.gender === 'female' && (
                    <div className="absolute w-2 h-2 bg-pink-400 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  )}
                </div>
                <span>Female</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-800 mb-1">Email Address</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:border-pink-400"
              />
            ) : (
              <div className="bg-gray-100 p-2 rounded-md text-sm text-gray-800">{profile.email}</div>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-800 mb-1">Mobile Number</label>
            {isEditing ? (
              <input
                type="text"
                name="mobile"
                value={profile.mobile}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:border-pink-400"
              />
            ) : (
              <div className="bg-gray-100 p-2 rounded-md text-sm text-gray-800">{profile.mobile}</div>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-800 mb-1">Address</label>
            {isEditing ? (
              <textarea
                name="address"
                value={profile.address}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:border-pink-400 min-h-[40px] resize-vertical"
              />
            ) : (
              <div className="bg-gray-100 p-2 rounded-md text-sm text-gray-800 min-h-[40px]">{profile.address}</div>
            )}
          </div>

        </div>

        {showPhotoEditor && (
          <ProfilePhotoEditor
            currentPhoto={profile.image}
            onSave={handlePhotoSave}
            onCancel={() => setShowPhotoEditor(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Profile;
