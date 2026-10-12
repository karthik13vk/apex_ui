import React, { useState } from 'react'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from "@mui/icons-material/Search";
import { Delete, MoreVertical, Plus, RefreshCcw, Trash } from 'lucide-react';
import Datasourcepopup from './popup/Datasourcepopup';
import { Button, MenuItem, TextField } from '@mui/material';

const sources = [
  {
    name: "Customer Database",
    type: "DATABASE",
    status: "connected",
  },
  {
    name: "Product API",
    type: "API",
    status: "connected",
  },
  {
    name: "CRM Webhook",
    type: "WEBHOOK",
    status: "disconnected",
  },
];
const StatusBadge = ({ status }) => {
  return (
    <span
      className={`px-3 py-1 text-xs rounded-full font-medium capitalize
        ${status === "connected"
          ? "bg-green-100 text-green-600"
          : "bg-red-100 text-red-600"
        }`}
    >
      {status}
    </span>
  );
};

const SourceCard = ({ source }) => {
  return (
    <div className="p-4 bg-white border rounded-lg shadow-sm border-cardborder">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-gray-800">{source.name}</h3>
          <p className="mt-1 text-xs text-gray-400">{source.type}</p>
        </div>
        <StatusBadge status={source.status} />
      </div>

      <p className="mt-4 text-xs text-gray-400">
        postgresql://user:pass@localhost:5432/customers
      </p>

      <div className='flex items-center justify-between'>

        <p className="mt-2 text-xs text-gray-400">
          Last synced: 5 minutes ago
        </p>

        <div className="flex gap-2 mt-4">
          <button className="flex items-center gap-1 px-3 py-1 text-xs border rounded-md border-maincolor text-maincolor hover:bg-maincolor hover:text-white">
            Test <RefreshCcw size={12} />
          </button>

          <button className="px-2 py-1 border rounded-md border-maincolor text-maincolor hover:bg-maincolor hover:text-white">
            <DeleteIcon size={14} />
          </button>
        </div>
      </div>

    </div>
  );
};

const Datasources = () => {
  const [open, setOpen] = useState(false);
  const [errorHandling, setErrorHandling] = useState("");
  return (
    <div>
      <div className="mx-auto space-y-6 max-w-7xl">
        <Breadcrumb title="Data Sources"
          subtitle="Platform / Data Sources" />
        <div className='mb-2'>
          <h2 className="text-2xl font-semibold text-gray-800">
            Data Sources Configuration

          </h2>
          <p className='text-base text-gray-500'>Connect external data sources for real-time access and processing.

          </p>
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2'>
          <div className="col-span-1 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-gray-800">
                Connected Sources (3)
              </h2>

              <Button variant="outlined"
                onClick={() => setOpen(true)} sx={{ color: '#5234c9', borderColor: '#5234c9', borderRadius: '8px', textTransform: 'none' }}>
                <Plus size={14} />   Add Source
              </Button>
            </div>

            {sources.map((source, index) => (
              <SourceCard key={index} source={source} />
            ))}
          </div>

          <div className="col-span-1 p-6 bg-white border rounded-lg shadow-sm border-cardborder">
            <h2 className="mb-6 text-lg font-semibold text-gray-800">
              Data Sync Configuration
            </h2>

            <div className="mb-6">
              <h3 className="mb-4 font-medium text-gray-700">
                Data Retention
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  {/* <label className="block mb-1 text-xs text-gray-400">
                    Keep data for
                  </label> */}

                  <TextField
                    select
                    fullWidth
                    size="small"
                    label="Keep data for"
                    defaultValue=""
                    value={errorHandling}
                    onChange={(e) => setErrorHandling(e.target.value)}>
                    <MenuItem value="">Select Days</MenuItem>
                    <MenuItem value="30days">30 days</MenuItem>
                    <MenuItem value="60days">60 days</MenuItem>
                    <MenuItem value="90days">90 days</MenuItem>
                  </TextField>
                </div>

                <div>
                  {/* <label className="block mb-1 text-xs text-gray-400">
                    Archive after
                  </label> */}
                  <TextField
                    select
                    fullWidth
                    size="small"
                    label="Archive after"
                    defaultValue=""
                    value={errorHandling}
                    onChange={(e) => setErrorHandling(e.target.value)}>
                    <MenuItem value="">Select Days</MenuItem>
                    <MenuItem value="7days">7 days</MenuItem>
                    <MenuItem value="14days">14 days</MenuItem>
                    <MenuItem value="30days">30 days</MenuItem>
                  </TextField>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-4 font-medium text-gray-700">
                Input modalities
              </h3>

              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 accent-indigo-600"
                  />
                  <span className="text-sm font-medium ">
                    Read access
                  </span>
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 accent-indigo-600" />
                  <span className="text-sm">Write access</span>
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 accent-indigo-600" />
                  <span className="text-sm">Cache responses</span>
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 accent-indigo-600" />
                  <span className="text-sm">Encrypt stored data</span>
                </label>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-gray-700">
                Error Handling
              </h3>


              <TextField
                select
                fullWidth
                size="small"
                label="Error Handling"
                value={errorHandling}
                onChange={(e) => setErrorHandling(e.target.value)}
              >
                <MenuItem value="">Select option</MenuItem>
                <MenuItem value="token">e.g. 128,000 tokens</MenuItem>
                <MenuItem value="retryautomatically">Retry Automatically</MenuItem>
                <MenuItem value="ignoreerrors">Ignore Errors</MenuItem>
              </TextField>
            </div>
          </div>
        </div>
      </div>
      <Datasourcepopup
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}

export default Datasources