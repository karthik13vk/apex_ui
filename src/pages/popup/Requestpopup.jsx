import React, { useState } from 'react'
import { X } from "lucide-react";
import {
    Box,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Button,
    Typography,
} from "@mui/material";
const Requestpopup = ({ isOpen, onClose }) => {
    const [provider, setProvider] = useState("");
    const [modelType, setModelType] = useState("");
    if (!isOpen) return null;
    return (
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
                        Request Model
                    </h2>
                    <p className='mb-6 text-sm leading-relaxed text-gray-500 '>Can't see the right model in the catalog? Request it here! Just give us a name and describe how you'd like to use it.
                        We'll take it from there and keep you updated.</p>
                    <div className="h-56 pl-1 pr-1 overflow-y-scroll">
                        <div className="space-y-5">
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 3,
                                    width: "100%",
                                    padding: "15px 0"
                                }}  >
                                <TextField
                                    fullWidth
                                    label="Model Name"
                                    size="small"
                                    placeholder="Provider Name e.g., New AI Company"
                                    variant="outlined" />

                                <TextField
                                    fullWidth
                                    type="number"
                                    size="small"
                                    label="Enter Model Reference Code"
                                    placeholder="Enter reference code"
                                    variant="outlined" />
                                <TextField
                                    select
                                    fullWidth
                                    size="small"
                                    label="Select Model Provider"
                                    value={provider}
                                    onChange={(e) => setProvider(e.target.value)}>
                                    <MenuItem value="">Select Providers</MenuItem>
                                    <MenuItem value="OpenAI">OpenAI</MenuItem>
                                    <MenuItem value="Meta">Meta</MenuItem>
                                    <MenuItem value="MBZUAI">MBZUAI</MenuItem>
                                    <MenuItem value="Inception">Inception</MenuItem>
                                    <MenuItem value="Mistral AI">Mistral AI</MenuItem>
                                    <MenuItem value="Stability AI">Stability AI</MenuItem>
                                    <MenuItem value="Anthropic">Anthropic</MenuItem>
                                    <MenuItem value="DeepSeek">DeepSeek</MenuItem>
                                    <MenuItem value="Qwen">Qwen</MenuItem>
                                    <MenuItem value="Cohere">Cohere</MenuItem>
                                    <MenuItem value="xAI">xAI</MenuItem>
                                </TextField>

                                <TextField
                                    fullWidth
                                    type="number"
                                    size="small"
                                    label="Max Tokens (Eg: 32781)"
                                    placeholder="Enter max tokens"
                                />
                                <TextField
                                    select
                                    fullWidth
                                    size="small"
                                    label="Select Model Type"
                                    value={modelType}
                                    onChange={(e) => setModelType(e.target.value)}
                                >
                                    <MenuItem value="">Select Model Type</MenuItem>
                                    <MenuItem value="API-Hosted">API-Hosted</MenuItem>
                                    <MenuItem value="Self-Hosted">Self-Hosted</MenuItem>
                                </TextField>

                                <Button variant="outlined" component="label">
                                    Upload Provider Logo
                                    <input type="file" hidden />
                                </Button>
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

                        <button className="px-6 py-2 text-white transition rounded-lg bg-maincolor hover:bg-purple-700">
                            Add Provider
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Requestpopup