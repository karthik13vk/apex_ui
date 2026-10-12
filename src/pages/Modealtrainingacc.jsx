import { Check } from "lucide-react";
import React, { useState } from "react";

const AccordionItem = ({ title, status, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="mb-4 bg-white border border-gray-200 shadow rounded-xl">

           <div
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between p-4 transition cursor-pointer hover:bg-gray-50"
            >
                <div className="flex items-center gap-3">
                  
<span className="flex items-center justify-center w-6 h-6 text-2xl rounded-lg bg-lightbgcolor">
    <Check/>
</span>
                    <h3 className="font-semibold">{title}</h3>
                      <span
                        className={`text-sm px-3 py-1 rounded-full ${
                            open
                                ? "bg-green-100 text-green-600"
                                : "bg-red-100 text-red-600"
                        }`}
                    >
                        {open ? "Enabled" : "Disabled"}
                    </span>
                </div>

                {/* Plus / Minus */}
                <span className="text-xl font-bold transition">
                    {open ? "−" : "+"}
                </span>
            </div>

            {/* Content */}
            {open && (
                <div className="p-6 border-t border-gray-200">
                    {children}
                </div>
            )}
        </div>
    );
};

export default function Modealtrainingacc() {
    return (
        <div className="mt-6">

            <AccordionItem title="Supervised Fine-Tuning" status="Enabled">
                <div className="p-6 mb-6 bg-white border-2 border-indigo-500 shadow rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                    
                        <h3 className="text-lg font-semibold">Supervised Fine-Tuning</h3>
                        <span className="px-3 py-1 text-sm text-green-600 bg-green-100 rounded-full">
                            Enabled
                        </span>
                    </div>

                    <p className="mb-6 text-gray-500">
                        Train using labeled examples (input → desired output)
                    </p>

                    <div className="grid grid-cols-4 gap-4 mb-6 text-center">
                        <div>
                            <p className="text-sm text-gray-500">Min Samples</p>
                            <p className="text-xl font-bold">100</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Max Samples</p>
                            <p className="text-xl font-bold">10000</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Data Type</p>
                            <p className="font-medium text-md">Labeled pairs</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Compute Level</p>
                            <p className="font-medium text-md">Medium-High</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        <div>
                            <label className="block mb-1 text-sm text-gray-600">
                                Epochs
                            </label>
                            <input
                                type="range"
                                className="w-full accent-indigo-600"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm text-gray-600">
                                Batch Size
                            </label>
                            <input
                                type="number"
                                defaultValue="4"
                                className="w-full border rounded-md border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 rounded-lg p-2.5 text-xs bg-white"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm text-gray-600">
                                Learning Rate
                            </label>
                            <input
                                type="text"
                                defaultValue="1e-5"
                                className="w-full border rounded-md border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 rounded-lg p-2.5 text-xs bg-white"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm text-gray-600">
                                Validation Split
                            </label>
                            <input
                                type="range"
                                className="w-full accent-indigo-600"
                            />
                        </div>
                    </div>
                </div>
            </AccordionItem>

            <AccordionItem title="Parameter-Efficient Fine-Tuning" status="Disabled">
                <div className="p-6 mb-6 bg-white border-2 border-indigo-500 shadow rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Parameter-Efficient Fine-Tuning</h3>
                        <span className="px-3 py-1 text-sm text-green-600 bg-green-100 rounded-full">
                            Enabled
                        </span>
                    </div>

                    <p className="mb-6 text-gray-500">
                        Train using labeled examples (input → desired output)
                    </p>

                    <div className="grid grid-cols-4 gap-4 mb-6 text-center">
                        <div>
                            <p className="text-sm text-gray-500">Min Samples</p>
                            <p className="text-xl font-bold">100</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Max Samples</p>
                            <p className="text-xl font-bold">10000</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Data Type</p>
                            <p className="font-medium text-md">Labeled pairs</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Compute Level</p>
                            <p className="font-medium text-md">Medium-High</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        <div>
                            <label className="block mb-1 text-sm text-gray-600">
                                Epochs
                            </label>
                         <input
                                type="range"
                                className="w-full accent-indigo-600"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm text-gray-600">
                                Batch Size
                            </label>
                            <input
                                type="number"
                                defaultValue="4"
                                className="w-full border rounded-md border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 rounded-lg p-2.5 text-xs bg-white"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm text-gray-600">
                                Learning Rate
                            </label>
                            <input
                                type="text"
                                defaultValue="1e-5"
                                className="w-full border rounded-md border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 rounded-lg p-2.5 text-xs bg-white"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm text-gray-600">
                                Validation Split
                            </label>
                            <input
                                type="range"
                                className="w-full accent-indigo-600"
                            />
                        </div>
                    </div>
                </div>
            </AccordionItem>

            <AccordionItem title="Reinforcement Fine-Tuning" status="Disabled">
                <div className="p-6 mb-6 bg-white border-2 border-indigo-500 shadow rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Reinforcement Fine-Tuning</h3>
                        <span className="px-3 py-1 text-sm text-green-600 bg-green-100 rounded-full">
                            Enabled
                        </span>
                    </div>

                    <p className="mb-6 text-gray-500">
                        Train using labeled examples (input → desired output)
                    </p>

                    <div className="grid grid-cols-4 gap-4 mb-6 text-center">
                        <div>
                            <p className="text-sm text-gray-500">Min Samples</p>
                            <p className="text-xl font-bold">100</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Max Samples</p>
                            <p className="text-xl font-bold">10000</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Data Type</p>
                            <p className="font-medium text-md">Labeled pairs</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Compute Level</p>
                            <p className="font-medium text-md">Medium-High</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        <div>
                            <label className="block mb-1 text-sm text-gray-600">
                                Epochs
                            </label>
                          <input
                                type="range"
                                className="w-full accent-indigo-600"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm text-gray-600">
                                Batch Size
                            </label>
                            <input
                                type="number"
                                defaultValue="4"
                                className="w-full border rounded-md border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 rounded-lg p-2.5 text-xs bg-white"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm text-gray-600">
                                Learning Rate
                            </label>
                            <input
                                type="text"
                                defaultValue="1e-5"
                                className="w-full border rounded-md border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 rounded-lg p-2.5 text-xs bg-white"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm text-gray-600">
                                Validation Split
                            </label>
                            <input
                                type="range"
                                className="w-full accent-indigo-600"
                            />
                        </div>
                    </div>
                </div>
            </AccordionItem>

            <AccordionItem title="In-Context Learning" status="Disabled">
                <div className="p-6 mb-6 bg-white border-2 border-indigo-500 shadow rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">In-Context Learning</h3>
                        <span className="px-3 py-1 text-sm text-green-600 bg-green-100 rounded-full">
                            Enabled
                        </span>
                    </div>

                    <p className="mb-6 text-gray-500">
                        Train using labeled examples (input → desired output)
                    </p>

                    <div className="grid grid-cols-4 gap-4 mb-6 text-center">
                        <div>
                            <p className="text-sm text-gray-500">Min Samples</p>
                            <p className="text-xl font-bold">100</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Max Samples</p>
                            <p className="text-xl font-bold">10000</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Data Type</p>
                            <p className="font-medium text-md">Labeled pairs</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Compute Level</p>
                            <p className="font-medium text-md">Medium-High</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        <div>
                            <label className="block mb-1 text-sm text-gray-600">
                                Epochs
                            </label>
                          <input
                                type="range"
                                className="w-full accent-indigo-600"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm text-gray-600">
                                Batch Size
                            </label>
                            <input
                                type="number"
                                defaultValue="4"
                                className="w-full border rounded-md border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 rounded-lg p-2.5 text-xs bg-white"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm text-gray-600">
                                Learning Rate
                            </label>
                            <input
                                type="text"
                                defaultValue="1e-5"
                                className="w-full border rounded-md border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 rounded-lg p-2.5 text-xs bg-white"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm text-gray-600">
                                Validation Split
                            </label>
                            <input
                                type="range"
                                className="w-full accent-indigo-600"
                            />
                        </div>
                    </div>
                </div>
            </AccordionItem>
        </div>
    );
}