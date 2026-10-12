import React, { useState } from 'react'
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import { Box, TextField, Button, InputAdornment } from "@mui/material";
import {
    Database, MessageSquare, ShieldCheck, Settings, SlidersHorizontal,
    Search, Plus, Play, Trash2, FileText, Info, ChevronDown, Link, Upload,
    Cpu, Settings2, Target, Check, HelpCircle,
} from 'lucide-react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import Modealtrainingacc from './Modealtrainingacc';
const CustomCheckbox = ({ checked, label, subtext, badge }) => (
    <div className="flex items-start justify-between p-3 transition-colors rounded-lg hover:bg-gray-50">
        <div className="flex gap-3">
            <div className={`mt-1 flex h-5 w-5 items-center justify-center rounded border transition-colors ${checked ? 'bg-maincolor border-indigo-600' : 'bg-white border-gray-300'}`}>
                {checked && <Check size={14} className="text-white" strokeWidth={3} />}
            </div>
            <div>
                <p className="text-sm font-bold leading-tight text-gray-900">{label}</p>
                <p className="text-xs text-gray-500">{subtext}</p>
            </div>
        </div>
        <div className="flex items-center gap-2">
            {badge && <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${badge.color}`}>{badge.text}</span>}
            <div className="flex items-center justify-center w-5 h-5 bg-green-100 rounded-full">
                <Check size={12} className="text-green-600" />
            </div>
        </div>
    </div>
);
const Modeltrainingdetails = () => {
    const [activeTab, setActiveTab] = useState('Data Model Setup');
    const [threshold, setThreshold] = useState(50);
    const [testQuery, setTestQuery] = useState('Retrieve policy information');
    const tabs = [
        { name: 'Data Model Setup', icon: <Database size={14} /> },
        { name: 'Intent Registry', icon: <MessageSquare size={14} /> },
        { name: 'Q&A Training', icon: <ShieldCheck size={14} /> },
        { name: 'Rules Setup', icon: <Settings size={14} /> },
        { name: 'Fine Tuning', icon: <SlidersHorizontal size={14} /> },
    ];


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div className="mx-auto space-y-6 max-w-7xl">
                <Breadcrumb title="Model Training"
                    subtitle="Platform / Model Training" />

                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#8161ff] to-[#b3a1ff] p-10 text-white">
                    <div className="absolute left-[-50px] top-[-20px] w-50 h-50 
            bg-gradient-to-b from-[#5234C9] to-[#2828eb] rounded-full blur-3xl"
                    ></div>
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="flex items-center gap-2 mb-4 text-2xl font-bold xl:text-5xl lg:text-4xl">Trained Models
                            <span className='px-3 py-1 text-sm font-normal bg-white rounded-full text-maincolor' >GPT-4o</span> </h2>
                        <div className="flex flex-col items-start gap-2">
                            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', borderRadius: '8px', textTransform: 'none' }}>
                                Try it out
                            </Button>
                            <Button variant="outlined" sx={{ color: 'white', borderColor: '#5234c9', background: '#5234c9', borderRadius: '8px', textTransform: 'none' }}>
                                Save Configuration
                            </Button>
                        </div>
                    </div>
                    <div className="absolute right-[-50px] top-[-20px] w-50 h-50 
            bg-[linear-gradient(180deg,rgba(255,255,255,0.32)_19.72%,rgba(51,0,255,0.064)_100%)] rounded-full"
                    ></div>
                </div>
                <div className='grid grid-cols-3 gap-2 mb-4'>
                    <div className='text-sm'><span className='font-bold text-black'>Use Case :</span>
                        <span className='font-medium text-black opacity-65'>Policy Inquiry & Claims Assistance</span>
                    </div>
                    <div className='text-sm'><span className='font-bold text-black'>Use Case :</span>
                        <span className='font-medium text-black opacity-65'>Insurance</span>
                    </div>
                    <div className='text-sm'><span className='font-bold text-black'>Subdomain :</span>
                        <span className='font-medium text-black opacity-65'>Finance</span>
                    </div>
                </div>
                <div className='mb-2'>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        TabIndicatorProps={{ style: { display: "none" } }} sx={{
                            "& .MuiTabs-flexContainer": {
                                gap: "12px",
                            },
                        }}
                    >
                        {[
                            "Data Model Setup",
                            "Intent Registry",
                            "Q&A Training",
                            "Rules Setup",
                            "Fine Tuning",
                        ].map((label, index) => (
                            <Tab
                                key={index}
                                icon={<FiberManualRecordOutlinedIcon />}
                                iconPosition="start"
                                label={label}
                                sx={{
                                    border: "1px solid",
                                    borderColor: value === index ? "#5234c9" : "#e5e7eb",
                                    borderRadius: "10px",
                                    textTransform: "none",
                                    minHeight: "40px",
                                    fontWeight: 500,
                                    backgroundColor: value === index ? "#ffffff" : "#ffffff",
                                    color: value === index ? "#5234c9 !important" : "#000000",
                                    "&:hover": {
                                        backgroundColor: value === index ? "#fff" : "#fff",
                                        borderColor: value === index ? "#5234c9" : "#5234c9",
                                        color: value === index ? "#5234c9 !important" : "#5234c9",
                                    },
                                }}
                            />
                        ))}
                    </Tabs>
                </div>
                <div className="mt-6">
                    {value === 0 && (
                        <div>
                            <div className="mb-6">
                                <h1 className="mb-2 text-xl font-bold">Data Model Configuration</h1>
                                <p className="max-w-4xl text-sm leading-relaxed text-slate-500">
                                    AI Tools are specialized functions that enable your AI assistant to interact with external systems, retrieve data, perform calculations, and execute business logic. They bridge the gap between AI conversation and actionable business operations.
                                </p>
                            </div>
                            <div className="mb-8">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="font-bold">Data Model Gallery (2)</h2>
                                    <div className="flex gap-3">
                                        <div className="relative">
                                            <Search className="absolute -translate-y-1/2 left-3 top-1/2 text-slate-400" size={16} />
                                            <input
                                                type="text"
                                                placeholder="Search for a model..."
                                                className="w-64 py-2 pl-10 pr-4 text-sm border rounded-md border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                                            />
                                        </div>
                                        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition rounded-md bg-maincolor hover:bg-indigo-700">
                                            Create Data Model
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                                    {[1, 2].map((item) => (
                                        <div key={item} className="relative p-4 bg-white border shadow-sm rounded-xl border-slate-200 group">
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex items-center gap-2 text-sm font-bold text-maincolor">
                                                    {item === 1 ? <Database size={16} /> : <Link size={16} />}
                                                    get_policy_details
                                                </div>
                                                <button className="transition-opacity opacity-0 text-rose-500 group-hover:opacity-100">
                                                    <span className="text-xs font-bold">🗑</span>
                                                </button>
                                            </div>
                                            <p className="mb-4 text-xs text-slate-500">Fetch policy expiry, nominee, amount</p>
                                            <div className="flex gap-2 mb-4">
                                                <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] rounded font-medium">policy</span>
                                                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] rounded font-medium">active</span>
                                                <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] rounded font-medium">sql</span>
                                            </div>
                                            <div className="flex justify-between items-center text-[11px] text-slate-400">
                                                <span>1 parameter(s)</span>
                                                <button className="flex items-center gap-1 font-bold text-emerald-600 hover:underline">
                                                    <Play size={10} fill="currentColor" /> Test
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="p-12 mb-8 text-center bg-white border rounded-xl border-slate-200">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 text-slate-300">
                                        <Play size={32} />
                                    </div>
                                    <h3 className="font-bold text-slate-800">No Data Model Selected</h3>
                                    <p className="text-sm text-slate-400">Select a data model from the gallery to test it</p>
                                </div>
                            </div>

                            <div className="p-6 mb-8 bg-white border rounded-xl border-slate-200">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2 font-bold">
                                        <Link size={18} className="text-emerald-500" />
                                        Testing
                                    </div>
                                    <select className="px-2 py-1 text-xs bg-white border rounded border-slate-200 focus:outline-none">
                                        <option>Insurance</option>
                                    </select>
                                </div>

                                <div className="max-w-lg p-4 border-l-4 border-indigo-500 rounded-r-lg bg-slate-50/50">
                                    <div className="flex items-center gap-2 mb-1 text-sm font-bold">
                                        <Database size={14} className="text-maincolor" />
                                        Policy Lookup
                                    </div>
                                    <p className="mb-4 text-xs text-slate-500">Fetch policy details including expiry, premium, and coverage</p>
                                    <div className="mb-6 space-y-2 text-xs text-slate-600">
                                        <div className="flex items-center gap-2">
                                            <Settings size={14} className="opacity-40" /> Type: <span className="ml-1 font-bold uppercase text-slate-800">SQL</span></div>
                                        <div className="flex items-center gap-2"><SlidersHorizontal size={14} className="opacity-40" /> Parameters: <span className="ml-1 font-bold text-slate-800">1</span></div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="px-4 py-2 text-xs font-bold text-white transition rounded-md bg-maincolor hover:bg-indigo-700">
                                            Use Template
                                        </button>
                                        <button className="p-2 transition border rounded-md text-maincolor border-slate-200 hover:bg-white">
                                            <Info size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 bg-white border rounded-xl border-slate-200">
                                <h4 className="mb-4 font-bold">Using Templates</h4>
                                <ul className="space-y-3">
                                    {[
                                        "Templates provide pre-configured tools for common use cases",
                                        "Customize templates to fit your specific requirements",
                                        "Test template-based tools before making them active",
                                        "Combine multiple templates for complex workflows"
                                    ].map((text, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm text-slate-500">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {value === 1 && (
                        <div className="duration-500 animate-in fade-in">

                            <div className="mb-6">
                                <h1 className="mb-2 text-xl font-bold">Intent Registry Configuration</h1>
                                <p className="max-w-4xl text-sm leading-relaxed text-slate-500">
                                    Intent recognition identifies what a user wants to achieve from their input (questions, commands, statements).
                                    This system maps user phrases to specific capabilities with confidence scoring.
                                </p>
                            </div>


                            <div className="p-6 mb-8 bg-white border border-slate-200 rounded-xl">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h2 className="font-bold">Intent List (2)</h2>
                                        <p className="text-sm text-slate-500">Manage and organize your intents</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="relative">
                                            <Search className="absolute -translate-y-1/2 left-3 top-1/2 text-slate-400" size={16} />
                                            <input
                                                type="text"
                                                placeholder="Search intents..."
                                                className="w-64 py-2 pl-10 pr-4 text-sm border rounded-md border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                                            />
                                        </div>
                                        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition rounded-md bg-maincolor hover:bg-indigo-700">
                                            <Plus size={16} /> Create Intent
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                                    {[1, 2].map((item) => (
                                        <div key={item} className="relative p-4 transition bg-white border shadow-sm rounded-xl border-slate-200 group hover:border-indigo-300">
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex items-center gap-2 text-sm font-bold text-indigo-600">
                                                    {item === 1 ? <Database size={16} /> : <Link size={16} />}
                                                    get_policy_details
                                                </div>
                                                <button className="transition-opacity opacity-0 text-rose-500 group-hover:opacity-100">
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                            <p className="mb-4 text-xs text-slate-500">Fetch policy expiry, nominee, amount</p>
                                            <div className="flex gap-2 mb-4">
                                                <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] rounded font-medium">policy</span>
                                                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] rounded font-medium">active</span>
                                            </div>
                                            <div className="flex justify-between items-center text-[11px] text-slate-400">
                                                <span>1 parameter(s)</span>
                                                <button className="flex items-center gap-1 font-bold text-emerald-600 hover:underline">
                                                    <Play size={10} fill="currentColor" /> Test
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-1">

                                <div className="p-6 bg-white border border-slate-200 rounded-xl">
                                    <h2 className="mb-1 font-bold">User Phrases & Examples</h2>
                                    <p className="mb-4 text-xs text-slate-500">Add phrases that trigger this intent</p>
                                    <div className="flex gap-2 mb-6">
                                        <input
                                            type="text"
                                            placeholder="Type a user phrase..."
                                            className="flex-1 px-4 py-2 text-sm border rounded-lg outline-none border-slate-200 focus:ring-2 focus:ring-indigo-500/20"
                                        />
                                        <button className="flex items-center gap-2 px-6 py-2 text-sm font-bold text-white transition rounded-lg bg-maincolor hover:bg-indigo-700">
                                            <Plus size={16} /> Add
                                        </button>
                                    </div>
                                    <div className="space-y-3">
                                        {["What is my policy number?", "When does my policy expire?"].map((phrase, idx) => (
                                            <div key={idx} className="flex items-center justify-between p-3 border border-indigo-100 rounded-lg bg-indigo-50/30 group">
                                                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                                    <FileText size={16} className="text-indigo-400" /> {phrase}
                                                </div>
                                                <Trash2 size={16} className="transition opacity-0 cursor-pointer text-rose-500 group-hover:opacity-100" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-6 bg-white border border-slate-200 rounded-xl">
                                    <h2 className="mb-1 font-bold">Confidence Settings</h2>
                                    <p className="mb-6 text-xs text-slate-500">Set the minimum match score required</p>
                                    <div className="space-y-8">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-bold text-slate-700">Threshold: {threshold}%</span>
                                        </div>
                                        <div className="relative h-2 rounded-full bg-slate-100">
                                            <input
                                                type="range"
                                                min="0" max="100"
                                                value={threshold}
                                                onChange={(e) => setThreshold(e.target.value)}
                                                className="absolute z-10 w-full h-full opacity-0 cursor-pointer"
                                            />
                                            <div className="absolute h-full transition-all rounded-full bg-maincolor" style={{ width: `${threshold}%` }}></div>
                                            <div
                                                className="absolute top-6 bg-maincolor text-white text-[10px] px-2 py-1 rounded font-bold -translate-x-1/2 shadow-lg transition-all"
                                                style={{ left: `${threshold}%` }}
                                            >
                                                {threshold}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 mb-8 bg-white border border-slate-200 rounded-xl">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="font-bold">Test Intent Recognition</h2>
                                    <div className="px-3 py-1 text-xs border rounded-md border-slate-200 focus:outline-none">
                                        <option>Insurance Industry Template</option>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                    <div>
                                        <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block">Test User Query</label>
                                        <textarea
                                            value={testQuery}
                                            onChange={(e) => setTestQuery(e.target.value)}
                                            className="w-full p-3 text-sm border rounded-lg outline-none resize-none h-28 border-slate-200 focus:ring-2 focus:ring-indigo-500/20"
                                        />
                                        <button className="px-6 py-2 mt-4 text-xs font-bold tracking-wider text-white uppercase transition rounded-lg bg-maincolor hover:bg-indigo-700">
                                            Run Recognition Test
                                        </button>
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block">Match Results</label>
                                        <div className="overflow-hidden border border-indigo-100 rounded-lg bg-slate-50/50">
                                            <div className="p-4 space-y-3 text-xs">
                                                <div className="flex justify-between pb-2 border-b border-indigo-50">
                                                    <span className="text-slate-500">Query Intent:</span>
                                                    <span className="font-bold text-slate-800">Policy Details</span>
                                                </div>
                                                <div className="flex justify-between pb-2 border-b border-indigo-50">
                                                    <span className="text-slate-500">Top Intent:</span>
                                                    <span className="font-bold underline text-emerald-600">get_policy_details (84%)</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-500">Status:</span>
                                                    <span className={`font-bold ${threshold > 84 ? 'text-rose-500' : 'text-emerald-500'}`}>
                                                        {threshold > 84 ? 'Below Threshold ×' : 'Recognized ✓'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border bg-slate-50 border-slate-200 rounded-xl">
                                <h4 className="mb-4 font-bold text-slate-800">All Intent Scores</h4>
                                <div>
                                    <div className="overflow-hidden border border-indigo-100 rounded-lg">
                                        <div className="bg-indigo-50/30 p-4 space-y-2 text-[11px]">
                                            <div className="flex justify-between"><span className="text-xl font-bold text-black">Get Policy Details</span><span className="font-bold">0%</span></div>
                                            <div className="flex justify-between"><span className="text-gray-400">0 phrase(s) matched</span><span className="text-gray-400">Threshold: 14%</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {value === 2 && (
                        <div>
                            <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-xl">
                                <h3 className="mb-2 text-xl font-bold text-gray-900">Upload & Manage Training Q&A Configuration</h3>
                                <p className="mb-8 text-gray-500">Upload training data and create Q&A pairs to improve model performance.</p>

                                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

                                    <div>
                                        <h4 className="mb-6 text-lg font-bold text-gray-800">Add Q&A Pair</h4>
                                        <div className="space-y-6">
                                            <div>
                                                <label className="block mb-2 text-sm font-bold text-gray-700">Question</label>
                                                <textarea
                                                    className="w-full p-3 text-sm border border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
                                                    rows="3"
                                                    placeholder="Retrieve policy information"
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-bold text-gray-700">Answer</label>
                                                <textarea
                                                    className="w-full p-3 text-sm border border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
                                                    rows="6"
                                                    placeholder="We offer a 30-day return policy for all products..."
                                                />
                                            </div>
                                            <div className="flex gap-4">
                                                <button className="flex-1 py-3 text-sm font-bold text-white transition rounded-lg bg-maincolor hover:bg-indigo-700">
                                                    Add Q&A Pair
                                                </button>
                                                <button className="flex-1 py-3 text-sm font-bold text-indigo-600 transition border border-indigo-600 rounded-lg hover:bg-indigo-50">
                                                    Upload Q&A Pair
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="mb-6 text-lg font-bold text-gray-800">Existing Q&A Pairs (2)</h4>
                                        <div className="space-y-4">
                                            {[1, 2].map((item) => (
                                                <div key={item} className="relative p-6 border border-gray-100 rounded-xl bg-gray-50/50">
                                                    <button className="absolute text-red-500 right-4 top-4 hover:text-red-700">
                                                        <Trash2 size={18} />
                                                    </button>
                                                    <p className="mb-2 text-sm font-bold text-gray-900">Q: What is your return policy?</p>
                                                    <p className="text-sm text-gray-600">A: 30-day return policy for all products.</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {value === 3 && (
                        <div>
                            <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-xl">
                                <h3 className="mb-1 text-lg font-bold">Model Behavior Configuration</h3>
                                <p className="pb-4 mb-8 text-sm text-gray-400 ">Configure how the model behaves including guardrails, overthinking restrictions, data access controls, and response formatting.</p>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">

                                    <div>
                                        <h4 className="mb-4 font-bold text-md">Safety Guardrails</h4>
                                        <div className="space-y-1">
                                            <CustomCheckbox checked label="Toxicity Filter" subtext="Block toxic or harmful language" />
                                            <CustomCheckbox label="Fact Verification" subtext="Cross-check factual claims" />
                                            <CustomCheckbox  label="Bias Detection" subtext="Identify and mitigate bias" />
                                            <CustomCheckbox label="Hallucination Control" subtext="Reduce fabricated information" />
                                            <CustomCheckbox  label="PII Protection" subtext="Protect personal information" />
                                            <CustomCheckbox label="Content Safety" subtext="Block unsafe content" />
                                        </div>

                                        <h4 className="mt-10 mb-4 font-bold text-md">Default Responses</h4>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block mb-1 text-xs font-bold">No Access Response</label>
                                                <textarea className="w-full p-3 text-xs border rounded-md border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20" placeholder="I don't have access to that information..." rows="2" />
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-xs font-bold">Unclear Query Response</label>
                                                <textarea className="w-full p-3 text-xs border rounded-md border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20" placeholder="I'm not sure I understand..." rows="2" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block mb-1 text-xs font-bold">Confidence Threshold</label>
                                                    <input type="text" className="w-full p-3 text-xs border rounded-md border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20" placeholder="0.8" />
                                                </div>
                                                <div>
                                                    <label className="block mb-1 text-xs font-bold">Low Confidence Response</label>
                                                    <textarea className="w-full p-3 text-xs border rounded-md border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20" rows="3" placeholder="I'm not confident enough..." />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="mb-4 font-bold text-md">Data Access Controls</h4>
                                        <div className="space-y-1">
                                            <CustomCheckbox label="Internal Knowledge Base" subtext="Access scope: read-only" badge={{ text: 'read-only', color: 'bg-purple-100 text-purple-600' }} />
                                            <CustomCheckbox checked label="Customer Data" subtext="Access scope: none" badge={{ text: 'none', color: 'bg-gray-100 text-gray-500' }} />
                                            <CustomCheckbox label="Sensitive Documents" subtext="Block toxic or harmful language" badge={{ text: 'restrict', color: 'bg-yellow-100 text-yellow-600' }} />
                                            <CustomCheckbox checked label="Public Web Search" subtext="Access scope: restricted" badge={{ text: 'none', color: 'bg-gray-100 text-gray-500' }} />
                                            <CustomCheckbox checked label="API Integrations" subtext="Access scope: full" badge={{ text: 'full', color: 'bg-green-100 text-green-600' }} />
                                            <CustomCheckbox label="Training Data" subtext="Access scope: none" badge={{ text: 'none', color: 'bg-gray-100 text-gray-500' }} />
                                        </div>

                                        <h4 className="mt-10 mb-4 font-bold text-md">Response Configuration</h4>
                                        <div className="grid grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <label className="block mb-1 text-xs font-bold">Response Format</label>
                                                <select className="w-full border rounded-md border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 rounded-lg p-2.5 text-xs bg-white"><option>Natural Language</option></select>
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-xs font-bold">Max Response Length</label>
                                                <input type="text" className="w-full border rounded-md border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 p-2.5 text-xs" placeholder="500" />
                                            </div>
                                        </div>
                                        <div className="mb-8 space-y-3">
                                            <div className="flex items-center gap-2">
                                                <div className="flex items-center justify-center w-4 h-4 rounded bg-maincolor"><Check size={10} className="text-white" /></div>
                                                <span className="text-xs font-bold">Require citations for factual claims</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 border border-gray-300 rounded"></div>
                                                <span className="text-xs font-bold text-gray-500">Allow multimodal responses</span>
                                            </div>
                                        </div>

                                        <h4 className="mb-4 font-bold text-md">Reasoning Controls</h4>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-4 h-4 border border-gray-300 rounded"></div>
                                            <span className="text-xs font-bold text-gray-500">Enable chain-of-thought reasoning</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block mb-1 text-xs font-bold">Max Reasoning Steps</label>
                                                <select className="w-full border rounded-md border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 rounded-lg p-2.5 text-xs bg-white"><option>Natural Language</option></select>
                                            </div>
                                            <div>
                                                <label className="block mb-1 text-xs font-bold">Reasoning Timeout (seconds)</label>
                                                <input type="text" className="w-full border rounded-md border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 rounded-lg p-2.5 text-xs" placeholder="500" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12">
                                    <h4 className="mb-4 font-bold text-md">Custom Behavior Rules (JSON)</h4>
                                    <div className="rounded-xl border-slate-200 border rounded-md border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20  focus:outline-none focus:ring-2 focus:ring-indigo-500/20 rounded-lg bg-white p-4 font-mono text-[11px] text-gray-400 overflow-x-auto whitespace-nowrap">
                                        {`{"behavior_rules": {"max_retries": 3, "fallback_strategy": "safe_mode", "context_window": 8192}}`}
                                    </div>
                                </div>

                                <div className="p-6 mt-8 border border-indigo-100 rounded-xl bg-[#E2DCFB] ">
                                    <h5 className="mb-3 text-sm font-bold text-black">Using Templates</h5>
                                    <ul className="ml-4 space-y-2 text-xs text-black list-disc">
                                        <li>Templates provide pre-configured tools for common use cases</li>
                                        <li>Customize templates to fit your specific requirements</li>
                                        <li>Test template-based tools before making them active</li>
                                        <li>Combine multiple templates for complex workflows</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {value === 4 && (
                        <div>
                            <div className="mt-8">
                                <h2 className="mb-2 text-xl font-semibold">Fine-Tuning Methods Configuration</h2>
                                <p className="mb-6 text-gray-500">
                                    Enable and configure different fine-tuning approaches.
                                </p>

                                <div className="p-6 mb-6 bg-white shadow rounded-xl">
                                    <h3 className="mb-4 text-lg font-semibold">General Settings</h3>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block mb-1 text-sm text-gray-600">
                                                Max Output Tokens
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="2048"
                                                className="w-full border rounded-md border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 rounded-lg p-2.5 text-xs bg-white"
                                            />
                                        </div>

                                        <div>
                                            <label className="block mb-1 text-sm text-gray-600">
                                                Temperature
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="0.7"
                                                className="w-full border rounded-md border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 rounded-lg p-2.5 text-xs bg-white"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center mt-4 space-x-6">
                                        <label className="flex items-center space-x-2">
                                            <input type="checkbox" className="accent-indigo-600" />
                                            <span>Save Checkpoints</span>
                                        </label>

                                        <label className="flex items-center space-x-2">
                                            <input type="checkbox" defaultChecked className="accent-indigo-600" />
                                            <span>Early Stopping</span>
                                        </label>
                                    </div>
                                </div>

                                <Modealtrainingacc/>

                            </div>
                        </div>
                    )}
                </div>



            </div>
        </div>
    )
}

export default Modeltrainingdetails