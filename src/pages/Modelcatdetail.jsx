import { useState, useEffect } from "react";
import { Box, TextField, Button, Radio, FormControlLabel, FormControl, RadioGroup, FormLabel } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom';
import FilterListIcon from "@mui/icons-material/FilterList";
import openai from './../assets/images/icon/openai.svg';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import { Filter, Search, ListFilterPlus } from 'lucide-react';
import Requestpopup from './popup/Requestpopup';

const TabButton = ({ active, label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-md border transition ${active
                ? "bg-maincolor text-white border-maincolor"
                : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200"
                }`}
        >
            <span
                className={`w-3 h-3 rounded-full border ${active ? "bg-white border-white" : "border-gray-400"
                    }`}
            />
            {label}
        </button>
    );
};
const ToggleOption = ({ active, label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-md border transition ${active
                ? "bg-maincolor text-white border-maincolor"
                : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200"
                }`}
        >
            <span
                className={`w-3 h-3 rounded-full border ${active ? "bg-white border-white" : "border-gray-400"
                    }`}
            />
            {label}
        </button>
    );
};

const Modelcatdetail = () => {
    const [activeOption, setActiveOption] = useState("Text");

    const options = ["Text", "Images", "Audio", "Embeddings"];

    const [activeTab, setActiveTab] = useState("Text");

    const tabs = ["Text", "Images", "Audio"];




    const [activeSection, setActiveSection] = useState("overview");

    const sections = [
        { id: "overview", label: "Overview" },
        { id: "configuration", label: "Configuration" },
    ];

    const handleTabClick = (id) => {
        setActiveSection(id);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            let current = "overview"; // default
            sections.forEach((section) => {
                const el = document.getElementById(section.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    const offsetTop = scrollY + rect.top; // element's top relative to document
                    if (scrollY >= offsetTop - 10) {
                        current = section.id;
                    }
                }
            });
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // initialize on load
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (

        <div>
            <div className="mx-auto space-y-6 max-w-7xl">
                <Breadcrumb title="Model Catalog "
                    subtitle="Platform / Model Catalog " />
                <div className="pb-8 ">
                    <div className="flex gap-6 mb-6 border-b border-gray-200">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => handleTabClick(section.id)}
                                className={`pb-2 text-base font-semibold transition ${activeSection === section.id
                                        ? "border-b-2 border-indigo-600 text-indigo-600"
                                        : "border-b-2 border-transparent text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                {section.label}
                            </button>
                        ))}
                    </div>
                    <div className="p-8 mt-6 ">
                        <div className='mb-6' id='overview'>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center justify-center w-12 h-12 text-xl font-bold rounded-lg bg-lightbgcolor">
                                    <img src={openai} alt="img" />
                                </div>
                                <div>
                                    <h2 className="mb-1 text-xl font-semibold text-maincolor">
                                        GPT-4o
                                    </h2>

                                </div>
                            </div>
                            <button className='px-3 py-2 mt-2 border rounded-lg text-maincolor border-maincolor' >
                                Start free trial
                            </button>

                            <p className="text-base text-gray-500 " >
                                The model details below will update automatically based on the
                                Region, Compute, and Version filters you select.
                            </p>
                        </div>
                        <div className="mb-6" >
                            <h3 className="mb-2 text-xl font-bold text-black">
                                Overview
                            </h3>
                            <p className="text-base leading-relaxed text-gray-500 ">
                                GPT-4o is OpenAI's latest model, offering faster, more
                                efficient, and skillful multimodal reasoning for text inputs
                                while maintaining improved accuracy, coherence, and
                                responsiveness.
                            </p>
                        </div>

                        <div className="mb-6" id="configuration">
                            <h3 className="mb-2 text-xl font-bold text-black">
                                Configuration
                            </h3>
                            <p className="text-base leading-relaxed text-gray-500 ">
                                Configure the technical specifications and capabilities of your
                                AI model. These settings determine how the model processes
                                inputs and generates outputs, affecting performance,
                                compatibility, and use case suitability.
                            </p>

                            <div className="mt-6">
                                <h3 className="mb-2 text-xl font-bold text-black">
                                    Input modalities
                                </h3>
                                <div className="flex flex-wrap gap-3 pt-2">
                                    {options.map((option) => (
                                        <ToggleOption
                                            key={option}
                                            label={option}
                                            active={activeOption === option}
                                            onClick={() => setActiveOption(option)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="mt-6">
                                <h3 className="mb-2 text-xl font-bold text-black">
                                    Output modalities
                                </h3>
                                <div className="flex flex-wrap gap-3 pt-2">
                                    {tabs.map((tab) => (
                                        <TabButton
                                            key={tab}
                                            label={tab}
                                            active={activeTab === tab}
                                            onClick={() => setActiveTab(tab)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                <div>
                                    <label className="block mb-2 text-xl font-bold text-black">
                                        Context length
                                    </label>
                                    <TextField
                                        fullWidth
                                        label="Token"
                                        placeholder="e.g. 128,000 token"
                                        variant="outlined"
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                "& fieldset": {
                                                    borderColor: "#D5CBFE",     
                                                },
                                                "&:hover fieldset": {
                                                    borderColor: "#B39DDB",     
                                                },
                                                "&.Mui-focused fieldset": {
                                                    borderColor: "#7E57C2",     
                                                },
                                            },
                                        }}
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-xl font-bold text-black">
                                        Max output tokens
                                    </label>
                                    <TextField
                                        fullWidth
                                        label="Token"
                                        placeholder="e.g. 16,384 token"
                                        variant="outlined"
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                "& fieldset": {
                                                    borderColor: "#D5CBFE",   
                                                },
                                                "&:hover fieldset": {
                                                    borderColor: "#B39DDB",  
                                                },
                                                "&.Mui-focused fieldset": {
                                                    borderColor: "#7E57C2",
                                                },
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modelcatdetail