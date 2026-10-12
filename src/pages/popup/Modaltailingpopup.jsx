import React, { useState } from 'react'
import { X } from "lucide-react";
import { Tabs, Tab } from "@mui/material";
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
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


const Modaltailingpopup = ({ isOpen, onClose }) => {
    const nextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };
    const [step, setStep] = useState(1);


   
    const [provider, setProvider] = useState("");
    if (!isOpen) return null;
    return (
        <div>
            <div className="fixed inset-0 z-[999] flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm "
                    onClick={onClose}
                ></div>

                <div className="relative w-[750px] bg-white rounded-2xl shadow-xl p-8 z-[9999]">
                    <button
                        onClick={onClose}
                        className="absolute p-2 transition border rounded-md top-6 right-6 border-maincolor text-maincolor hover:bg-purple-50"
                    >
                        <X size={18} />
                    </button>
                    <h2 className="mb-6 text-2xl font-semibold ">
                        Configure setup for model training
                    </h2>
                    <div className="flex gap-3 mb-6">

                        <button
                            onClick={() => setStep(1)}
                            className={`px-6 py-2 border rounded-lg transition ${step === 1
                                ? "bg-maincolor text-white border-maincolor"
                                : "bg-white text-black border-inputbg2"
                                }`}
                        >
                            <FiberManualRecordOutlinedIcon className="mr-2" />
                            Use Case Info
                        </button>

                        <button
                            onClick={() => setStep(2)}
                            className={`px-6 py-2 border rounded-lg transition ${step === 2
                                ? "bg-maincolor text-white border-maincolor"
                                : "bg-white text-black border-inputbg2"
                                }`}
                        >
                            <FiberManualRecordOutlinedIcon className="mr-2" />
                            Model Selection
                        </button>

                        <button
                            onClick={() => setStep(3)}
                            className={`px-6 py-2 border rounded-lg transition ${step === 3
                                ? "bg-maincolor text-white border-maincolor"
                                : "bg-white text-black border-inputbg2"
                                }`}
                        >
                            <FiberManualRecordOutlinedIcon className="mr-2" />
                            Preview
                        </button>

                    </div>
                  
                    <p>Step {step} of 3</p>
                    <div className="h-56 pl-1 pr-1 overflow-y-scroll">
                        {step === 1 && (
                            <div className="space-y-5 Use-Case" >
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
                                        label="Use Case"
                                        size="small"
                                        placeholder="Enter Use Case"
                                        variant="outlined" />
                                    <TextField
                                        select
                                        fullWidth
                                        size="small"
                                        label="Use Case Category"
                                        value={provider}
                                        onChange={(e) => setProvider(e.target.value)}>
                                        <MenuItem value="">Select Use Case Category</MenuItem>
                                        <MenuItem value="Customer-Support">Customer Support</MenuItem>
                                        <MenuItem value="Claims-Processing">Claims Processing</MenuItem>
                                        <MenuItem value="Fraud-Detection">Fraud Detection</MenuItem>
                                        <MenuItem value="Stock-Analysis">Stock Analysis</MenuItem>
                                        <MenuItem value="Report-Generation">Report Generation</MenuItem>
                                        <MenuItem value="Document-Processing">Document Processing</MenuItem>
                                        <MenuItem value="HR-Assistance">HR Assistance</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </TextField>

                                    <TextField
                                        fullWidth
                                        size="small"
                                        label="Description"
                                        placeholder="Enter Description"
                                    />
                                    <Button variant="outlined" component="label">
                                        Upload Provider Logo
                                        <input type="file" hidden />
                                    </Button>
                                </Box>
                            </div>
                        )}
                        {step === 2 && (
                            <div className="space-y-5 Model-Selection">
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
                                        label="Sub domain"
                                        size="small"
                                        placeholder="Enter domain"
                                        variant="outlined" />


                                    <TextField
                                        select
                                        fullWidth
                                        size="small"
                                        label="Sector"
                                        value={provider}
                                        onChange={(e) => setProvider(e.target.value)}>
                                        <MenuItem value="">Select Industry</MenuItem>
                                        <MenuItem value="Customer-Support">Customer Support</MenuItem>
                                        <MenuItem value="Claims-Processing">Claims Processing</MenuItem>
                                        <MenuItem value="Fraud-Detection">Fraud Detection</MenuItem>
                                        <MenuItem value="Stock-Analysis">Stock Analysis</MenuItem>
                                        <MenuItem value="Report-Generation">Report Generation</MenuItem>
                                        <MenuItem value="Document-Processing">Document Processing</MenuItem>
                                        <MenuItem value="HR-Assistance">HR Assistance</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </TextField>

                                    <TextField
                                        select
                                        fullWidth
                                        size="small"
                                        label="Model Preference"
                                        value={provider}
                                        onChange={(e) => setProvider(e.target.value)}>
                                        <MenuItem value=""> Enter Model Preference</MenuItem>
                                        <MenuItem value="Customer-Support">Customer Support</MenuItem>
                                        <MenuItem value="Claims-Processing">Claims Processing</MenuItem>
                                        <MenuItem value="Fraud-Detection">Fraud Detection</MenuItem>
                                        <MenuItem value="Stock-Analysis">Stock Analysis</MenuItem>
                                        <MenuItem value="Report-Generation">Report Generation</MenuItem>
                                        <MenuItem value="Document-Processing">Document Processing</MenuItem>
                                        <MenuItem value="HR-Assistance">HR Assistance</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </TextField>

                                </Box>
                            </div>
                        )}
                        {step === 3 && (
                            <div className="space-y-5 Configuration" >
                                <h6 className='text-lg font-semibold text-black'>Configuration Summary</h6>
                                <table className='w-full'>
                                    <tr>
                                        <td><p className='text-sm text-paratextlight'>Use Case:

                                        </p>
                                        </td>
                                        <td><p className='text-sm font-bold text-black'>Use Case

                                        </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><p className='text-sm text-paratextlight'>Use Case Category:</p>
                                        </td>
                                        <td>
                                            <p className='text-sm font-bold text-black'>Use Case</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><p className='text-sm text-paratextlight'>Sector:</p>
                                        </td>
                                        <td>
                                            <p className='text-sm font-bold text-black'>Use Case</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><p className='text-sm text-paratextlight'>Sub Domain:</p>
                                        </td>
                                        <td>
                                            <p className='text-sm font-bold text-black'>Use Case</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><p className='text-sm text-paratextlight'>Model Preference:</p>
                                        </td>
                                        <td>
                                            <p className='text-sm font-bold text-black'>Icon</p>
                                        </td>
                                    </tr>
                                </table>

                            </div>
                        )}
                    </div>

                    <div className="flex justify-end gap-4 mt-8">
                        <button
                            onClick={onClose}
                            className="px-5 py-2 transition border rounded-lg border-maincolor text-maincolor hover:bg-purple-50"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={prevStep}
                            disabled={step === 1}
                            className={`px-5 py-2 border rounded-lg transition ${step === 1
                                    ? "opacity-50 cursor-not-allowed"
                                    : "border-maincolor text-maincolor hover:bg-purple-50"
                                }`}
                        >
                            Back
                        </button>

                        <button
                            className="px-6 py-2 text-white rounded-lg bg-maincolor hover:bg-purple-700"
                            onClick={() => {
                                if (step === 3) {
                                    onClose();
                                    setStep(1);
                                } else {
                                    nextStep();
                                }
                            }}
                        >
                            {step === 3 ? "Submit" : "Next"}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modaltailingpopup