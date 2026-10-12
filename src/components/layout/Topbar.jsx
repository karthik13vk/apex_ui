import { IconButton, Avatar, Menu, MenuItem, Box } from "@mui/material";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
import { useState } from "react";
import FolderIcon from "@mui/icons-material/Folder";
import AppsIcon from "@mui/icons-material/Apps";

export default function Topbar({ isExpanded, toggleSidebar }) {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <Box sx={{
        height: 64,
        bgcolor: "background.paper",
        borderBottom: "1px solid #E5E7EB",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 3,
        position: "sticky",
        top: 0,
        zIndex: 99,
      }}
    >
      <button
        onClick={toggleSidebar}
        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        {isExpanded ? <ChevronFirst size={20} /> : <ChevronLast size={20} />}
      </button>

      <div className="flex items-center gap-2">
        <IconButton color="inherit"><FolderIcon /></IconButton>
        <IconButton color="inherit"><AppsIcon /></IconButton>
       <IconButton
         onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        sx={{ p: 0 }}
      >
        <div className="flex items-center gap-2">
          <Avatar sx={{ bgcolor: "#6C63FF", width: 32, height: 32 }}>
            U
          </Avatar>
          <span className="text-sm font-medium">User</span>
        </div>
      </IconButton>
        {isUserMenuOpen && (
        <div className="absolute right-0 z-50 w-48 py-2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg top-12">
          <button className="w-full px-4 py-2 text-sm text-left transition-colors hover:bg-gray-100">
            Profile
          </button>

          <button className="w-full px-4 py-2 text-sm text-left transition-colors hover:bg-gray-100">
            Settings
          </button>

          <hr className="my-2 border-gray-200" />

          <button className="w-full px-4 py-2 text-sm text-left text-red-500 transition-colors hover:bg-gray-100">
            Logout
          </button>
        </div>
      )}
      </div>
    </Box>
  );
}