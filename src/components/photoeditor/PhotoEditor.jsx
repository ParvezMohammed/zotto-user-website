import React, { useState, useRef } from 'react';

const ProfilePhotoEditor = ({ currentPhoto, onSave, onCancel }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(currentPhoto);
  const [filter, setFilter] = useState('none');
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [dragActive, setDragActive] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const fileInputRef = useRef(null);

  const filters = [
    { name: 'None', value: 'none' },
    { name: 'Grayscale', value: 'grayscale(100%)' },
    { name: 'Sepia', value: 'sepia(100%)' },
    { name: 'Brightness', value: 'brightness(120%)' },
    { name: 'Contrast', value: 'contrast(120%)' },
    { name: 'Blur', value: 'blur(1px)' },
  ];

  const handleFile = (file) => {
    if (file && file.type.startsWith('image/')) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB');
        return;
      }
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
        setFilter('none');
        setZoom(1);
        setRotation(0);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload an image file (JPG, PNG, GIF, etc.)');
    }
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    handleFile(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      handleFile(event.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setDragActive(false);
  };

  const handleSave = async () => {
    if (!selectedFile && !currentPhoto) {
      alert('Please select or upload a photo first');
      return;
    }
    setIsSaving(true);
    try {
      const photoData = {
        file: selectedFile,
        previewUrl: selectedFile ? URL.createObjectURL(selectedFile) : currentPhoto,
        filters: [filter],
        rotation,
        zoom,
      };
      await onSave(photoData);
      setIsSaving(false);
      onCancel();
    } catch (error) {
      console.error('Error saving photo:', error);
      setIsSaving(false);
      alert('Failed to save photo. Please try again.');
    }
  };

  const rotateImage = (direction) => {
    setRotation(prev => direction === 'left' ? prev - 90 : prev + 90);
  };

  const removePhoto = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setFilter('none');
    setZoom(1);
    setRotation(0);
  };

  const hasChanges = () => {
    return selectedFile || filter !== 'none' || zoom !== 1 || rotation !== 0;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>

      <div className="relative bg-white w-full max-w-xl max-h-[90vh] rounded-xl shadow-xl overflow-hidden flex flex-col z-10">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Edit Profile Photo</h2>
          <button onClick={onCancel} className="text-2xl text-gray-500 hover:text-gray-700">&times;</button>
        </div>

        {/* Photo Upload Area */}
        <div
          className={`flex-1 p-5 m-5 rounded-lg border-2 ${dragActive ? 'border-pink-400 bg-pink-50' : 'border-dashed border-gray-300'} flex flex-col items-center justify-center`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          {previewUrl ? (
            <div className="relative w-full max-w-xs aspect-square overflow-hidden rounded-md group">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-full object-contain transition-all duration-300"
                style={{
                  filter: filter !== 'none' ? filter : 'none',
                  transform: `scale(${zoom}) rotate(${rotation}deg)`,
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
                <button onClick={() => fileInputRef.current.click()} className="bg-white text-pink-500 font-semibold px-4 py-2 rounded-md shadow">Change</button>
                <button onClick={removePhoto} className="bg-white text-red-500 font-semibold px-4 py-2 rounded-md shadow">Remove</button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-5xl mb-3">📸</div>
              <p className="text-gray-600">Drag & Drop your photo here</p>
              <p className="text-gray-600">or</p>
              <button onClick={() => fileInputRef.current.click()} className="bg-pink-500 text-white mt-3 px-5 py-2 rounded-md hover:bg-pink-600 transition">Choose from Computer</button>
              <p className="text-xs text-gray-400 mt-2">Supports: JPG, PNG, GIF (Max 5MB)</p>
            </div>
          )}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept="image/*"
            className="hidden"
          />
        </div>

        {/* Controls */}
        {previewUrl && (
          <div className="px-6 pb-6 overflow-y-auto max-h-52">
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-2">Filters</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {filters.map(f => (
                  <button
                    key={f.value}
                    className={`px-3 py-2 text-sm rounded-md border ${filter === f.value ? 'bg-pink-500 text-white border-pink-500' : 'bg-white text-gray-700 border-gray-300'}`}
                    onClick={() => setFilter(f.value)}
                  >
                    {f.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-2">Zoom</label>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={zoom}
                onChange={(e) => setZoom(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-2">Rotation</label>
              <div className="flex gap-3">
                <button onClick={() => rotateImage('left')} className="flex-1 px-4 py-2 border rounded-md hover:bg-gray-100">↺ Rotate Left</button>
                <button onClick={() => rotateImage('right')} className="flex-1 px-4 py-2 border rounded-md hover:bg-gray-100">↻ Rotate Right</button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t bg-gray-50 rounded-b-xl">
          <button onClick={onCancel} className="px-5 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100">Cancel</button>
          <button
            onClick={handleSave}
            disabled={!hasChanges() || isSaving}
            className={`px-5 py-2 rounded-md font-semibold text-white ${!hasChanges() || isSaving ? 'bg-pink-300 cursor-not-allowed' : 'bg-pink-500 hover:bg-pink-600'} transition`}
          >
            {isSaving ? 'Saving...' : 'Save Profile Photo'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhotoEditor;
