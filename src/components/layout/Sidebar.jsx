import React, { useState } from "react";
import { ChevronDown, Rocket, LayoutDashboard, DotIcon,
   Circle, Box, BriefcaseBusiness, FileSearchCorner, Waypoints } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isExpanded }) => {
  const [openMenu, setOpenMenu] = useState("platform");
  const [openSubMenu, setOpenSubMenu] = useState(null);
  

  const [activeSection, setActiveSection] = useState("platform");
  const [activeItem, setActiveItem] = useState("Overview");

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  // Menu Item Component
  const MenuItem = ({ children, section, to }) => {
    const navigate = useNavigate();
    const isActive = activeItem === children;
    const handleClick = () => {
      setActiveItem(children);
      setActiveSection(section);

      if (to) {
        navigate(to);
      }
    };
    return (
      <div
        onClick={handleClick}
        className={`relative flex items-center px-3 py-2 rounded-lg cursor-pointer text-sm transition-all duration-200
      ${isActive
            ? "bg-transparent text-[#5234C9] font-semibold"
            : "text-gray-700 hover:bg-[#F5F3FF] hover:text-[#5B3FD3]"
          }`}
      >
        {isActive && (
          <span className="absolute left-0 top-0 h-full w-1 bg-[#5B3FD3] rounded-r-md" />
        )}

        <span className="flex items-center justify-center ml-2">
          <span className="flex justify-center w-5">
            <Circle size={8} />
          </span>
          {children}
        </span>
      </div>
    );
  };

  const sectionButtonStyle = (sectionName) =>
    `flex items-center w-full px-3 py-2 rounded-lg transition-all ${isExpanded ? "justify-between" : "justify-center"
    } ${activeSection === sectionName
      ? "bg-[#5234C9] text-[#fff] font-semibold"
      : "hover:bg-gray-100 text-gray-800"
    }`;

  return (
<aside
  className={`
    fixed top-[64px] lg:top-0 left-0 h-screen
    bg-[#f3f4f9] border-r border-gray-200
    flex flex-col
    transition-all duration-300 z-50

    ${isExpanded
      ? "w-[260px] lg:w-72 translate-x-0"
      : "w-[260px] lg:w-20 -translate-x-full lg:translate-x-0"
    }
  `}
>
      <div className="flex items-center p-6 mb-2">
        <span
          className={`font-bold text-2xl ${!isExpanded && "hidden"
            }`}
        >
          APEX
        </span>
        {!isExpanded && <span className="text-xl font-bold">A</span>}
      </div>

      <nav className="flex-1 px-2 space-y-2 overflow-y-auto">

      <div>
  <button
    onClick={() => {
      toggleMenu("platform");
      setActiveSection("platform");
    }}
    className={sectionButtonStyle("platform")}
  >
    <div className="flex items-center gap-2">
      <Box size={20} />
      {isExpanded && <span>Platform</span>}
    </div>

    {isExpanded && (
      <ChevronDown
        size={16}
        className={`transition-transform ${
          openMenu === "platform" ? "rotate-180" : ""
        }`}
      />
    )}
  </button>

  {isExpanded && openMenu === "platform" && (
    <div className="mt-2 ml-6 space-y-1">
      <MenuItem section="platform" to="/">
        Overview
      </MenuItem>

      <MenuItem section="platform" to="/providers">
        Providers
      </MenuItem>

      <MenuItem section="platform" to="/modelcatalog">
        Model Catalog
      </MenuItem>

      <MenuItem section="platform" to="/datasources">
        Data Sources
      </MenuItem>

      <MenuItem section="platform" to="/modeltraining">
        Model Training
      </MenuItem>

      <div>
<div
  onClick={() => {
    toggleSubMenu("playground");
    setActiveItem("Playground");
    setActiveSection("platform");
  }}
  className={`relative flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-sm transition-all
    ${
      activeItem === "Playground"
        ? "text-[#5234C9] font-semibold"
        : "text-gray-700 hover:bg-[#F5F3FF] hover:text-[#5B3FD3]"
    }`}
>
  {activeItem === "Playground" && (
    <span className="absolute left-0 top-0 h-full w-1 bg-[#5B3FD3] rounded-r-md" />
  )}

  <span className="flex items-center gap-2 ml-2">
    <span className="flex justify-center w-5">
      <Circle size={8} />
    </span>
    Playground
  </span>

  <ChevronDown
    size={14}
    className={`transition-transform ${
      openSubMenu === "playground" ? "rotate-180" : ""
    }`}
  />
</div>

        {openSubMenu === "playground" && (
          <div className="mt-2 ml-6 space-y-1">
           <MenuItem section="playground" 
          //  to="/playground/standard"
           >
  Standard
</MenuItem>

<MenuItem section="playground" 
// to="/playground/pretrained"
>
  Pre-Trained
</MenuItem>

<MenuItem section="playground"
//  to="/playground/api"
 >
  API
</MenuItem>
          </div>
        )}
      </div>
    </div>
  )}
</div>

      <div>
        <button
          onClick={() => {
            toggleMenu("subscription");
            setActiveSection("subscription");
          }}
          className={sectionButtonStyle("subscription")}
        >
          <div className="flex items-center gap-2">
            <FileSearchCorner size={20} />
            {isExpanded && <span>Subscription</span>}
          </div>

          {isExpanded && (
            <ChevronDown
              size={16}
              className={`transition-transform ${openMenu === "subscription"
                ? "rotate-180"
                : ""
                }`}
            />
          )}
        </button>

        {isExpanded && openMenu === "subscription" && (
          <div className="mt-2 ml-6 space-y-1">
            <MenuItem section="subscription">
              Client Management
            </MenuItem>
            <MenuItem section="subscription">
              License Management
            </MenuItem>
            <MenuItem section="subscription">
              Usage Report
            </MenuItem>
            <MenuItem section="subscription">
              Billing Summary
            </MenuItem>
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => {
            toggleMenu("Business-application");
            setActiveSection("Business-application");
          }}
          className={sectionButtonStyle("Business-application")}
        >
          <div className="flex items-center gap-2">
            <BriefcaseBusiness size={20} />
            {isExpanded && <span>Business Application</span>}
          </div>

          {isExpanded && (
            <ChevronDown
              size={16}
              className={`transition-transform ${openMenu === "Business-application"
                ? "rotate-180"
                : ""
                }`}
            />
          )}
        </button>

        {isExpanded && openMenu === "Business-application" && (
          <div className="mt-2 ml-6 space-y-1">
            <MenuItem section="Business-application">
              AI Voice Bot
            </MenuItem>
            <MenuItem section="Business-application">
              Intelligent Document
            </MenuItem>
            <MenuItem section="Business-application">
              AI Motor Claims Automation
            </MenuItem>
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => {
            toggleMenu("accelerators");
            setActiveSection("accelerators");
          }}
          className={sectionButtonStyle("accelerators")}
        >
          <div className="flex items-center gap-2">
            <Waypoints size={20} />
            {isExpanded && <span>Accelerators</span>}
          </div>

          {isExpanded && (
            <ChevronDown
              size={16}
              className={`transition-transform ${openMenu === "accelerators"
                ? "rotate-180"
                : ""
                }`}
            />
          )}
        </button>

        {isExpanded && openMenu === "accelerators" && (
          <div className="mt-2 ml-6 space-y-1">
            <MenuItem section="accelerators">
              Predefined Workflow
            </MenuItem>
            <MenuItem section="accelerators">
              Workflow Builder
            </MenuItem>
          </div>
        )}
      </div>

    </nav>
    </aside>
  );
};

export default Sidebar;
