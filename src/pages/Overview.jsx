import React from 'react';
import { Button } from '@mui/material';
import { Cpu, Zap, Settings, Database } from 'lucide-react';
import bgbannerimg from './../assets/images/bg-img 1.png';
import bgcardimg1 from './../assets/images/bg-img-1.png';
import bgcardimg2 from './../assets/images/bg-img-2.png';
import bgcardimg3 from './../assets/images/bg-img-3.png';
import bgcardimg4 from './../assets/images/bg-img-4.png';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';


const Overview = () => {
  return (
    <div className="mx-auto space-y-6 max-w-7xl">
    <Breadcrumb  title="Overview" 
        subtitle="Platform / Providers"/>

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#8161ff] to-[#b3a1ff] p-10 text-white">
        <div className="absolute left-[-50px] top-[-20px] w-50 h-50 
        bg-gradient-to-b from-[#5234C9] to-[#2828eb] rounded-full blur-3xl"
        ></div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="mb-4 text-2xl font-bold xl:text-5xl lg:text-4xl">Start Your AI Journey</h2>
          <p className="mb-6 text-lg text-purple-100">Compass is a cutting-edge AI platform designed to elevate productivity and drive smarter decision-making.</p>
          <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', borderRadius: '8px', textTransform: 'none' }}>
            Start free trial
          </Button>
        </div>
        <div className="absolute right-[-50px] top-[-20px] w-50 h-50 
        bg-[linear-gradient(180deg,rgba(255,255,255,0.32)_19.72%,rgba(51,0,255,0.064)_100%)] rounded-full"
        ></div>
      </div>

      <div className="grid grid-cols-1 gap-6 overflow-hidden bg-white border border-gray-100 shadow-sm lg:grid-cols-2 rounded-3xl">
        <div className="p-10 lg:col-span-1">
          <h2 className="mb-4 text-4xl font-extrabold text-slate-900">GPT-4.5</h2>
          <p className="max-w-md mb-8 text-gray-500">GPT-4.5 offers faster performance making it ideal for well-defined tasks and clear, focused prompts.</p>
          <Button variant="contained" disableElevation sx={{ bgcolor: '#6344d4', borderRadius: '8px' }}>
            Start free trial
          </Button>
        </div>
        <div className="bg-cover bg-center h-full min-h-[200px]" style={{ backgroundImage: `url(${bgbannerimg})` }}>
          {/* <img src={bgbannerimg} alt="img" /> */}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FeatureCard 
          title="Explore AI Capabilities" 
          desc="Connect and integrate external data sources to enable real-time access and retrieval of information.This allows to seamlessly pull and update data from multiple systems, databases, or APIs"
          icon={<Cpu className="text-purple-300" />}
           bgImg={bgcardimg1}
        />
        <FeatureCard 
          title="Seamless Inference" 
          desc="Seamless Inference Efficiently manage batch processing with high-throughput performance, ensuring fast, reliable API execution for every job. Keep your operations running smoothly and your users always connected."
          icon={<Zap className="text-purple-600" />}
            bgImg={bgcardimg2}
        />
        
        <FeatureCard 
          title="Customize with Fine-Tuning" 
          desc="Train models with your data to get more relevant results. Leverage powerful pretrained models as a foundation, then fine-tune them to improve performance for your specific tasks, domains, or workflows."
          icon={<Settings className="text-purple-600" />}
          bgImg={bgcardimg3}
        />
        <FeatureCard 
          title="Explore AI Capabilities" 
          desc="Connect and integrate external data sources to enable real-time access and retrieval of information.This allows to seamlessly pull and update data from multiple systems, databases, or APIs."
          icon={<Database className="text-purple-600" />}
          bgImg={bgcardimg4}
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ title, desc, icon, bgImg  }) => (
  <div className="relative flex flex-col justify-between p-8 overflow-hidden transition-shadow bg-white border border-gray-100 rounded-3xl shadow-main">
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-bold text-maincolor">{title}</h3>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-[80%] min-h-15">{desc}</p>
      <Button variant="outlined" size="small" sx={{ borderRadius: '8px', color: '#6344d4', borderColor: '#e2e8f0' }}>
        Try Playground
      </Button>
    </div>
   <div className="absolute right-0 bottom-0 inset-0 bg-contain bg-no-repeat bg-right h-full min-h-[200px]"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
  </div>
  
);

export default Overview;