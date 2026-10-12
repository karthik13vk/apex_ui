import React, { useState } from 'react'
import { X } from "lucide-react";
import {
    Box,
    TextField,
    MenuItem,
    Button
} from "@mui/material";
const Datasourcepopup = ({ isOpen, onClose }) => {
    const [provider, setProvider] = useState("");
    const [modelType, setModelType] = useState("");
    if (!isOpen) return null;
    return (
        <div>
            <div>
                <div className="fixed inset-0 z-[999] flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm "
                        onClick={onClose}
                    ></div>

                    <div className="relative w-[750px] bg-white rounded-2xl shadow-xl p-8 z-[9999] ">
                        <button
                            onClick={onClose}
                            className="absolute p-2 transition border rounded-md top-6 right-6 border-maincolor text-maincolor hover:bg-purple-50"
                        >
                            <X size={18} />
                        </button>

                        <h2 className="mb-6 text-2xl font-semibold ">
                            Add New Data Source
                        </h2>
                        <p className='mb-6 text-sm leading-relaxed text-gray-500 '>
                            Add a new data source by providing connection details such as provider, type, endpoint, and access credentials
                        </p>
                        <div className="h-56 pl-1 pr-1 overflow-y-scroll">
                            <div className="space-y-5">
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 3,
                                        width: "100%",
                                        py: 2,
                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        size="small"
                                        type="url"
                                        label="Connection URL"
                                        variant="outlined"
                                    />

                                    <TextField
                                        select
                                        fullWidth
                                        size="small"
                                        label="Source Type"
                                        value={provider || ""}
                                        onChange={(e) => setProvider(e.target.value)}
                                    >
                                        <MenuItem value="">Select source type</MenuItem>
                                        <MenuItem value="Database">Database</MenuItem>
                                        <MenuItem value="API">API</MenuItem>
                                        <MenuItem value="Webhook">Webhook</MenuItem>
                                    </TextField>

                                    <TextField
                                        fullWidth
                                        size="small"
                                        type="number"
                                        label="Max Tokens (e.g. 32768)"
                                    />

                                    <TextField
                                        select
                                        fullWidth
                                        size="small"
                                        label="Authentication"
                                        value={modelType || ""}
                                        onChange={(e) => setModelType(e.target.value)}
                                    >
                                        <MenuItem value="">Select authentication</MenuItem>
                                        <MenuItem value="No-Authentication">No Authentication</MenuItem>
                                        <MenuItem value="JWT-Token">JWT Token</MenuItem>
                                        <MenuItem value="API-Key">API Key</MenuItem>
                                    </TextField>
                                </Box>
                            </div>
                        </div>
                        <div className="flex justify-end gap-4 mt-8">
                            <button
                                onClick={onClose}
                                className="px-5 py-2 transition border rounded-lg border-maincolor text-maincolor hover:bg-purple-50"
                            >
                                Cancel
                            </button>
                            <button

                                className="px-5 py-2 transition border rounded-lg border-maincolor text-maincolor hover:bg-purple-50"
                            >
                                Test Connection
                            </button>

                            <button className="px-6 py-2 text-white transition rounded-lg bg-maincolor hover:bg-purple-700">
                                Add Provider
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Datasourcepopup