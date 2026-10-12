import React from "react";
import { X } from "lucide-react"; 

const AddProviderModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm "
                onClick={onClose}
            ></div>

            <div className="relative w-[750px] bg-white rounded-2xl shadow-xl p-8 z-[9999] ">
                <button
                    onClick={onClose}
                    className="absolute transition border rounded-md top-6 right-6 p-2  border-maincolor text-maincolor hover:bg-purple-50"
                >
                    <X size={18} />
                </button>

                <h2 className="mb-6 text-2xl font-semibold ">
                    Add New Provider
                </h2>
                <div className="h-56 pr-1 overflow-y-scroll">
                    <div className="space-y-5">
                        <div>
                            <label className="block mb-2 text-sm font-medium">
                                Provider Name e.g., New AI Company
                            </label>
                            <input
                                type="text"
                                placeholder="Provider Name e.g., New AI Company"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium">
                                Number of available models
                            </label>
                            <input
                                type="number"
                                placeholder="Number of available models"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium">
                                Enter provider description
                            </label>
                            <textarea
                                placeholder="Enter provider description"
                                rows="3"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            ></textarea>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium">
                                Upload Provider Logo
                            </label>
                            <input
                                type="file"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                            />
                        </div>
                    </div>
  </div>
                    <div className="flex justify-end gap-4 mt-8">
                        <button
                            onClick={onClose}
                            className="px-5 py-2 transition border rounded-lg border-maincolor text-maincolor hover:bg-purple-50"
                        >
                            Cancel
                        </button>

                        <button className="px-6 py-2 text-white transition rounded-lg bg-maincolor hover:bg-purple-700">
                            Add Provider
                        </button>
                    </div>
              
            </div>
        </div>
    );
};

export default AddProviderModal;
