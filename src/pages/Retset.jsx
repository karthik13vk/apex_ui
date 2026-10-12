import React from 'react'

const Retset = () => {
    return (
        <div>
            <main className="flex-1 overflow-y-auto p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">Model Training</h2>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                        Admin
                    </button>
                </div>

                {/* Banner */}
                <div className="bg-gradient-to-r from-purple-600 to-purple-400 text-white p-6 rounded-2xl mb-6">
                    <h1 className="text-3xl font-bold">Model Training</h1>
                    <button className="mt-4 bg-white text-purple-600 px-4 py-2 rounded-lg">
                        Try it out
                    </button>
                </div>

                {/* Info Bar */}
                <div className="bg-white p-4 rounded-xl shadow flex flex-wrap gap-4 items-center mb-6">
                    <Tag label="Finance - Fraud" />
                    <Tag label="General AI" />
                    <Tag label="ACTIVE" green />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mb-6">
                    <ActionBtn label="Edit Model Setup" />
                    <ActionBtn label="View Registry" />
                    <ActionBtn label="Rules Setup" active />
                    <ActionBtn label="Fine Tuning" disabled />
                </div>

                {/* Main Section */}
                <div className="grid grid-cols-4 gap-6">
                    {/* Left Tabs */}
                    <div className="col-span-1 bg-white rounded-xl p-4 shadow">
                        <Tab label="Policy Config" active />
                        <Tab label="Default Replies" />
                        <Tab label="Safety Checks" />
                        <Tab label="Moderation" />
                    </div>

                    {/* Right Content */}
                    <div className="col-span-3 space-y-6">
                        {/* Policy Card */}
                        <div className="bg-white p-6 rounded-xl shadow">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-lg">
                                    Prompt & Safety Policies
                                </h3>
                                <input type="checkbox" className="toggle" defaultChecked />
                            </div>

                            <textarea
                                className="w-full border rounded-lg p-3 text-sm"
                                rows="4"
                                placeholder="Blocked keywords..."
                            />

                            <div className="flex flex-wrap gap-2 mt-3">
                                {["fake claim", "backdate", "damage record"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Reserve Card */}
                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="font-semibold mb-3">
                                Reserve and settlement details
                            </h3>

                            <input
                                className="w-full border rounded-lg p-3 text-sm"
                                placeholder="Add keywords..."
                            />

                            <button className="mt-4 text-purple-600 font-medium">
                                + Add policy
                            </button>
                        </div>

                        {/* Safety Test */}
                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="font-semibold mb-3">
                                Model safety test (policies + guardrails)
                            </h3>

                            <input
                                className="w-full border rounded-lg p-3 mb-3"
                                placeholder="Sample user message"
                            />

                            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                                Run safety test
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Retset
