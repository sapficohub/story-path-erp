import { motion } from "framer-motion";
import type { ReactNode } from "react";

const Panel = ({ children, bg }: { children: ReactNode; bg?: string }) => (
  <div className={`absolute inset-0 ${bg ?? ""}`}>{children}</div>
);

const Character = ({ mood = "neutral", color = "#1686F5" }: { mood?: "happy" | "neutral" | "sad" | "confident"; color?: string }) => {
  const mouth = {
    happy: "M 35 60 Q 50 75 65 60",
    neutral: "M 35 62 L 65 62",
    sad: "M 35 68 Q 50 55 65 68",
    confident: "M 35 60 Q 50 70 65 60",
  }[mood];
  return (
    <svg viewBox="0 0 100 130" className="w-full h-full">
      {/* body */}
      <rect x="25" y="75" width="50" height="55" rx="10" fill={color} />
      <rect x="25" y="75" width="50" height="8" fill="rgba(0,0,0,0.15)" />
      {/* head */}
      <circle cx="50" cy="45" r="28" fill="#F4C9A0" />
      {/* hair */}
      <path d="M 22 40 Q 30 18 50 18 Q 70 18 78 40 Q 75 28 50 26 Q 25 28 22 40" fill="#1a1a1a" />
      {/* eyes */}
      <circle cx="40" cy="45" r="3" fill="#1a1a1a" />
      <circle cx="60" cy="45" r="3" fill="#1a1a1a" />
      {/* mouth */}
      <path d={mouth} stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
};

const SoftGrid = () => (
  <div className="absolute inset-0 opacity-30" style={{
    backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
    backgroundSize: "30px 30px",
  }} />
);

// ============ FRESHER (Arjun) =============
export const FresherVisuals = {
  graduation: (
    <Panel bg="bg-gradient-to-br from-[#1686F5]/20 to-[#0B1C9C]/40">
      <SoftGrid />
      <div className="absolute inset-0 flex items-end justify-center pb-10 gap-4">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.15 }}
            className="relative"
            style={{ width: 80, height: 130, opacity: i === 1 ? 1 : 0.5 }}
          >
            <Character mood={i === 1 ? "sad" : "happy"} color={i === 1 ? "#1686F5" : "#19C7D8"} />
            {i !== 1 && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-[#09B83E] text-white px-2 py-0.5 rounded">OFFER!</div>
            )}
          </motion.div>
        ))}
      </div>
      <div className="absolute top-6 left-6 text-white/60 text-xs font-semibold tracking-widest uppercase">🎓 Graduation Day</div>
    </Panel>
  ),
  jobSearch: (
    <Panel bg="bg-gradient-to-br from-slate-900 to-[#0B1C9C]/60">
      <SoftGrid />
      <div className="absolute inset-0 p-8 flex flex-col gap-2 justify-center">
        {["LinkedIn", "Naukri", "Indeed", "Monster"].map((s, i) => (
          <motion.div
            key={s}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/10 border border-white/20 rounded-lg p-3 flex justify-between items-center"
          >
            <span className="text-sm font-semibold">{s} Application</span>
            <span className="text-xs text-red-400 font-bold">REJECTED</span>
          </motion.div>
        ))}
      </div>
    </Panel>
  ),
  monthsPassing: (
    <Panel bg="bg-gradient-to-br from-[#071126] to-[#0B1C9C]/30">
      <SoftGrid />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
          <svg width="200" height="200" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="2" />
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i / 12) * Math.PI * 2;
              return <text key={i} x={100 + Math.cos(angle) * 70} y={100 + Math.sin(angle) * 70} fill="white" fillOpacity="0.6" fontSize="12" textAnchor="middle">{["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][i]}</text>;
            })}
          </svg>
        </motion.div>
      </div>
      <div className="absolute bottom-6 left-6 right-6">
        <div className="text-xs uppercase tracking-widest text-white/50 mb-2">Confidence</div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div initial={{ width: "80%" }} whileInView={{ width: "20%" }} transition={{ duration: 1.5 }} className="h-full bg-red-400" />
        </div>
      </div>
    </Panel>
  ),
  discoverSap: (
    <Panel bg="bg-gradient-to-br from-[#1686F5] to-[#0B1C9C]">
      <SoftGrid />
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-[120px] font-display font-black text-white drop-shadow-[0_0_40px_rgba(25,199,216,0.8)]">SAP</div>
      </motion.div>
      <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-2">
        {[["Entry","₹4-8L"],["Senior","₹15-25L"]].map(([l,v])=>(
          <div key={l} className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-3 text-center">
            <div className="text-xs text-white/60">{l}</div>
            <div className="font-display font-bold text-[#19C7D8]">{v}</div>
          </div>
        ))}
      </div>
    </Panel>
  ),
  searchInstitute: (
    <Panel bg="bg-gradient-to-br from-slate-800 to-[#071126]">
      <SoftGrid />
      <div className="absolute inset-0 p-6 flex flex-col gap-3 justify-center">
        {[1,2,3].map(i=>(
          <motion.div key={i} initial={{x:0,opacity:1}} whileInView={{x:300,opacity:0}} transition={{delay:i*0.2}} className="bg-white/5 border border-white/10 rounded p-3 text-white/50 text-sm">Generic Institute {i}</motion.div>
        ))}
        <motion.div initial={{scale:0.9}} whileInView={{scale:1.05}} transition={{delay:0.8,type:"spring"}} className="bg-brand border-2 border-[#19C7D8] rounded-xl p-4 shadow-glow-teal">
          <div className="font-display font-extrabold text-white">Next-Gen ERP Solutions</div>
          <div className="text-xs text-white/80 mt-1">⭐ The right one. ⭐</div>
        </motion.div>
      </div>
    </Panel>
  ),
  joinNextgen: (
    <Panel bg="bg-gradient-to-br from-[#1686F5]/30 to-[#19C7D8]/20">
      <SoftGrid />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-2 p-8 w-full">
          {Array.from({length:9}).map((_,i)=>(
            <motion.div key={i} initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:i*0.05}} className="aspect-square bg-white/10 border border-white/20 rounded p-2">
              <div className="h-1 w-full bg-[#19C7D8] mb-1 rounded"/>
              <div className="h-1 w-2/3 bg-white/40 rounded"/>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-6 left-6 text-white text-sm font-display font-bold">🚪 Welcome aboard</div>
    </Panel>
  ),
  learningJourney: (
    <Panel bg="bg-gradient-to-br from-[#0B1C9C]/40 to-[#19C7D8]/20">
      <SoftGrid />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="space-y-3 w-3/4">
          {["MM Module","SD Module","FICO Module","ABAP","S/4 HANA"].map((m,i)=>(
            <motion.div key={m} initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:i*0.15}} className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-growth flex items-center justify-center text-xs font-bold text-white">✓</div>
              <div className="flex-1 bg-white/10 rounded-full h-3 overflow-hidden">
                <motion.div initial={{width:0}} whileInView={{width:`${85+i*3}%`}} transition={{delay:i*0.15+0.3,duration:0.8}} className="h-full bg-growth" />
              </div>
              <span className="text-xs font-semibold w-20">{m}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Panel>
  ),
  projects: (
    <Panel bg="bg-gradient-to-br from-[#19C7D8]/20 to-[#09B83E]/15">
      <SoftGrid />
      <svg viewBox="0 0 300 400" className="absolute inset-0 w-full h-full p-8">
        {[[60,80],[200,80],[60,200],[200,200],[130,320]].map(([x,y],i)=>(
          <motion.g key={i} initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:i*0.15}}>
            <rect x={x as number - 40} y={y as number - 25} width="80" height="50" rx="8" fill="white" fillOpacity="0.1" stroke="#19C7D8" strokeWidth="2"/>
            <text x={x as number} y={y as number + 4} fill="white" fontSize="11" textAnchor="middle" fontWeight="bold">Project {i+1}</text>
          </motion.g>
        ))}
        {[[60,105,60,175],[200,105,200,175],[100,200,160,200],[100,225,130,295],[200,225,160,295]].map(([x1,y1,x2,y2],i)=>(
          <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#19C7D8" strokeWidth="2" initial={{pathLength:0}} whileInView={{pathLength:1}} transition={{delay:0.8+i*0.1}}/>
        ))}
      </svg>
    </Panel>
  ),
  interview: (
    <Panel bg="bg-gradient-to-br from-[#1686F5]/30 to-[#09B83E]/20">
      <SoftGrid />
      <div className="absolute inset-0 p-8 flex flex-col justify-center gap-4">
        <div className="bg-white/10 rounded-lg p-4 border border-white/20">
          <div className="text-xs text-white/60 mb-2">RESUME</div>
          <div className="space-y-1.5">
            {[80,60,90,70].map((w,i)=>(<motion.div key={i} initial={{width:0}} whileInView={{width:`${w}%`}} transition={{delay:i*0.1}} className="h-2 bg-white/40 rounded"/>))}
          </div>
        </div>
        {["Technical Round","HR Round","Final"].map((r,i)=>(
          <motion.div key={r} initial={{x:-30,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.5+i*0.2}} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
            <div className="h-8 w-8 rounded-full bg-growth flex items-center justify-center text-white font-bold">✓</div>
            <span className="font-semibold">{r}</span>
            <span className="ml-auto text-[#09B83E] font-bold text-xs">PASSED</span>
          </motion.div>
        ))}
      </div>
    </Panel>
  ),
  offerLetter: (
    <Panel bg="bg-gradient-to-br from-[#09B83E]/30 to-[#19C7D8]/20">
      <SoftGrid />
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        whileInView={{ scale: 1, rotate: -2 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="absolute inset-0 flex items-center justify-center p-8"
      >
        <div className="bg-white text-[#071126] rounded-lg p-6 w-full shadow-2xl">
          <div className="text-[10px] font-bold tracking-widest text-[#1686F5] mb-2">OFFER LETTER</div>
          <div className="font-display font-extrabold text-xl mb-1">Congratulations, Arjun!</div>
          <div className="text-xs text-slate-600 mb-3">SAP Consultant · MNC Corp</div>
          <div className="font-display font-black text-3xl text-[#09B83E]">₹6.5 LPA</div>
          <div className="text-[10px] text-slate-500 mt-2">Joining: Immediate</div>
        </div>
      </motion.div>
      {Array.from({length:15}).map((_,i)=>(
        <motion.div key={i} initial={{y:-20,opacity:0}} whileInView={{y:400,opacity:[0,1,0]}} transition={{duration:2,delay:i*0.1,repeat:Infinity}}
          className="absolute w-2 h-2 rounded-sm"
          style={{left:`${(i*37)%100}%`,background:["#1686F5","#19C7D8","#09B83E"][i%3]}}/>
      ))}
    </Panel>
  ),
  firstDay: (
    <Panel bg="bg-gradient-to-br from-[#0B1C9C]/50 to-[#1686F5]/30">
      <SoftGrid />
      <div className="absolute inset-x-0 bottom-0 h-2/3 flex items-end justify-center gap-2 p-6">
        {[120,160,140,180,150].map((h,i)=>(
          <motion.div key={i} initial={{height:0}} whileInView={{height:h}} transition={{delay:i*0.1}} className="w-12 bg-white/10 border border-white/20 rounded-t" style={{height:h}}>
            <div className="grid grid-cols-2 gap-0.5 p-1">
              {Array.from({length:Math.floor(h/15)}).map((_,j)=>(<div key={j} className="aspect-square bg-[#19C7D8]/40 rounded-sm"/>))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-24">
        <Character mood="confident" color="#0B1C9C"/>
      </div>
    </Panel>
  ),
  careerGrowth: (
    <Panel bg="bg-gradient-to-br from-[#1686F5]/20 to-[#09B83E]/30">
      <SoftGrid />
      <svg viewBox="0 0 300 200" className="absolute inset-0 w-full h-full p-8">
        <motion.polyline initial={{pathLength:0}} whileInView={{pathLength:1}} transition={{duration:2}}
          points="20,170 70,140 130,100 200,60 280,20" stroke="url(#grad)" strokeWidth="4" fill="none" strokeLinecap="round"/>
        {[[20,170,"Consultant"],[130,100,"Senior"],[200,60,"Lead"],[280,20,"Manager"]].map(([x,y,l],i)=>(
          <motion.g key={i} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.5+i*0.3}}>
            <circle cx={x as number} cy={y as number} r="6" fill="#09B83E"/>
            <text x={x as number} y={(y as number)-12} fill="white" fontSize="10" textAnchor="middle" fontWeight="bold">{l}</text>
          </motion.g>
        ))}
        <defs><linearGradient id="grad"><stop offset="0%" stopColor="#1686F5"/><stop offset="100%" stopColor="#09B83E"/></linearGradient></defs>
      </svg>
    </Panel>
  ),
  success: (
    <Panel bg="bg-gradient-to-br from-[#09B83E]/30 via-[#19C7D8]/20 to-[#1686F5]/30">
      <SoftGrid />
      <div className="absolute inset-0 grid grid-cols-2 gap-3 p-6 content-center">
        {[["🏠","Dream Home"],["🚗","New Car"],["✈️","Travel"],["👨‍👩‍👧","Family"]].map(([e,l])=>(
          <motion.div key={l} initial={{scale:0,rotate:-10}} whileInView={{scale:1,rotate:0}} transition={{type:"spring"}}
            className="bg-white/10 border border-white/20 backdrop-blur rounded-xl p-4 text-center">
            <div className="text-4xl mb-2">{e}</div>
            <div className="text-xs font-semibold">{l}</div>
          </motion.div>
        ))}
      </div>
    </Panel>
  ),
  friendsJobs: (
    <Panel bg="bg-gradient-to-br from-[#1686F5]/20 to-[#071126]">
      <SoftGrid />
      <div className="absolute inset-0 flex items-end justify-center pb-10 gap-3 px-4">
        {[0,1,2,3].map(i => (
          <motion.div key={i} initial={{y:60,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:i*0.15}}
            className="relative" style={{width:64,height:110,opacity:i===3?0.45:1}}>
            <Character mood={i===3?"sad":"happy"} color={i===3?"#1686F5":["#09B83E","#19C7D8","#1686F5"][i]}/>
            {i!==3 && <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-bold bg-[#09B83E] text-white px-2 py-0.5 rounded whitespace-nowrap">HIRED</div>}
          </motion.div>
        ))}
      </div>
      <div className="absolute top-6 left-6 right-6 flex flex-col gap-1.5">
        {["Amit · TCS","Neha · Infosys","Rohan · Wipro"].map((t,i)=>(
          <motion.div key={t} initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:i*0.2}}
            className="bg-white/10 border border-white/20 rounded px-2 py-1 text-[10px] flex justify-between">
            <span>{t}</span><span className="text-[#09B83E] font-bold">JOINED</span>
          </motion.div>
        ))}
      </div>
    </Panel>
  ),
  sisterSuggest: (
    <Panel bg="bg-gradient-to-br from-[#19C7D8]/20 to-[#1686F5]/20">
      <SoftGrid />
      <div className="absolute inset-0 flex items-center justify-center gap-3 p-6">
        <div className="w-20 h-32"><Character mood="sad" color="#1686F5"/></div>
        <div className="w-20 h-32"><Character mood="happy" color="#E94B8C"/></div>
      </div>
      <motion.div initial={{scale:0,rotate:-5}} whileInView={{scale:1,rotate:-2}} transition={{type:"spring",delay:0.4}}
        className="absolute top-8 right-6 comic-bubble text-xs max-w-[180px]">
        Bhaiya, have you heard about SAP? My friend earns ₹12L doing it!
      </motion.div>
      <div className="absolute bottom-4 left-6 text-[10px] uppercase tracking-widest text-white/50">👫 A sister's advice</div>
    </Panel>
  ),
  researchSearch: (
    <Panel bg="bg-gradient-to-br from-[#0B1C9C]/40 to-[#1686F5]/20">
      <SoftGrid />
      <div className="absolute inset-0 p-6 flex flex-col justify-center">
        <motion.div initial={{opacity:0,y:-10}} whileInView={{opacity:1,y:0}} className="bg-white rounded-full px-4 py-2 flex items-center gap-2 mb-4 shadow-lg">
          <span className="text-[#1686F5] text-sm">🔍</span>
          <span className="text-[#071126] text-sm font-semibold">what is SAP and how to learn it</span>
        </motion.div>
        {["SAP — World's #1 ERP system","SAP Consultant Salary in India","Top SAP Training Institutes","SAP Jobs · 45,000+ openings"].map((t,i)=>(
          <motion.div key={t} initial={{x:-30,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:i*0.15+0.3}}
            className="mb-2 border-l-2 border-[#19C7D8] pl-3">
            <div className="text-[10px] text-[#19C7D8]">www.search.com</div>
            <div className="text-sm font-semibold">{t}</div>
          </motion.div>
        ))}
      </div>
    </Panel>
  ),
  mockInterview: (
    <Panel bg="bg-gradient-to-br from-[#1686F5]/20 to-[#09B83E]/20">
      <SoftGrid />
      <div className="absolute inset-0 p-6 flex items-center justify-center gap-6">
        <div className="w-16 h-24"><Character mood="confident" color="#1686F5"/></div>
        <div className="flex flex-col gap-2 flex-1 max-w-[180px]">
          {["Tell me about SAP MM","Order to Cash flow?","Real project challenge?"].map((q,i)=>(
            <motion.div key={q} initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{delay:i*0.3}}
              className="bg-white/10 border border-white/20 rounded-lg p-2 text-xs">{q}</motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-6 right-6 flex justify-between text-[10px] uppercase tracking-widest">
        <span className="text-white/50">Mock Interview Round 5</span>
        <span className="text-[#09B83E] font-bold">CONFIDENCE 95%</span>
      </div>
    </Panel>
  ),
  applyingAgain: (
    <Panel bg="bg-gradient-to-br from-[#19C7D8]/20 to-[#09B83E]/25">
      <SoftGrid />
      <div className="absolute inset-0 p-6 flex flex-col justify-center gap-2">
        {["Accenture · Applied","Capgemini · Shortlisted","TCS · Interview Scheduled","Infosys · Shortlisted"].map((t,i)=>(
          <motion.div key={t} initial={{x:-30,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:i*0.15}}
            className="bg-white/10 border border-[#19C7D8]/40 rounded-lg p-3 flex items-center justify-between">
            <span className="text-sm font-semibold">{t.split(" · ")[0]}</span>
            <span className="text-[10px] text-[#09B83E] font-bold">{t.split(" · ")[1]}</span>
          </motion.div>
        ))}
      </div>
    </Panel>
  ),
};

// ============ EXPERIENCED (Rahul) =============
export const ExperiencedVisuals = {
  currentJob: (
    <Panel bg="bg-gradient-to-br from-slate-800 to-[#071126]">
      <SoftGrid />
      <div className="absolute inset-0 p-6 flex flex-col justify-center gap-3">
        {["📧 240 unread","📞 12 missed calls","📊 5 reports due","⏰ Working till 11 PM"].map((t,i)=>(
          <motion.div key={t} initial={{x:-30,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:i*0.15}}
            className="bg-white/10 border-l-4 border-red-400 rounded p-3 text-sm">{t}</motion.div>
        ))}
        <div className="mt-3 text-center">
          <div className="text-xs text-white/50 uppercase tracking-widest">Salary</div>
          <div className="font-display font-black text-2xl text-white/70 line-through">₹3.5 LPA</div>
        </div>
      </div>
    </Panel>
  ),
  comparison: (
    <Panel bg="bg-gradient-to-br from-red-900/30 to-[#071126]">
      <SoftGrid />
      <div className="absolute inset-0 p-6 flex flex-col justify-center gap-2">
        {["Amit got promoted to Manager","Priya joined Google · ₹22 LPA","Rohit moved to Singapore"].map((t,i)=>(
          <motion.div key={t} initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:i*0.2}}
            className="bg-white/10 rounded-lg p-3 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#1686F5]"/>
            <div className="text-xs">{t}</div>
            <div className="ml-auto text-[10px] text-white/40">2h</div>
          </motion.div>
        ))}
        <div className="text-center text-xs text-red-300 mt-3 font-semibold">Feeling stuck...</div>
      </div>
    </Panel>
  ),
  familyRec: (
    <Panel bg="bg-gradient-to-br from-[#19C7D8]/20 to-[#1686F5]/20">
      <SoftGrid />
      <div className="absolute inset-0 flex items-center justify-center gap-4 p-6">
        <div className="w-20 h-32"><Character mood="happy" color="#09B83E"/></div>
        <div className="comic-bubble text-sm max-w-[180px]">You should explore SAP. It changed my career!</div>
      </div>
    </Panel>
  ),
  research: (
    <Panel bg="bg-gradient-to-br from-[#0B1C9C]/40 to-[#1686F5]/20">
      <SoftGrid />
      <svg viewBox="0 0 300 200" className="absolute inset-0 w-full h-full p-6">
        <motion.path initial={{pathLength:0}} whileInView={{pathLength:1}} transition={{duration:2}}
          d="M 20 170 Q 100 140 150 100 T 280 20" stroke="#09B83E" strokeWidth="4" fill="none"/>
        <text x="150" y="195" fill="white" fillOpacity="0.6" fontSize="10" textAnchor="middle">SAP Job Demand 2020 → 2026</text>
      </svg>
      <div className="absolute top-6 left-6 right-6 grid grid-cols-3 gap-2">
        {[["+87%","Demand"],["3.2x","Salary"],["#1","Skill"]].map(([v,l])=>(
          <div key={l} className="bg-white/10 rounded p-2 text-center">
            <div className="font-display font-bold text-[#19C7D8] text-lg">{v}</div>
            <div className="text-[10px] text-white/60">{l}</div>
          </div>
        ))}
      </div>
    </Panel>
  ),
  findNextgen: FresherVisuals.searchInstitute,
  training: (
    <Panel bg="bg-gradient-to-br from-[#1686F5]/30 to-[#19C7D8]/20">
      <SoftGrid />
      <div className="absolute inset-0 p-6 flex flex-col justify-center gap-3">
        <div className="bg-white/10 rounded p-3">
          <div className="text-xs text-white/60 mb-1">Saturday & Sunday</div>
          <div className="font-display font-bold">Weekend Classes</div>
        </div>
        {["Assignment 1","Assignment 2","Live Project","Certification"].map((t,i)=>(
          <motion.div key={t} initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:i*0.15}}
            className="flex items-center gap-3 bg-white/5 rounded p-2">
            <div className="h-6 w-6 rounded-full bg-growth flex items-center justify-center text-xs">✓</div>
            <span className="text-sm">{t}</span>
          </motion.div>
        ))}
      </div>
    </Panel>
  ),
  interviewCalls: (
    <Panel bg="bg-gradient-to-br from-[#0B1C9C]/40 to-[#09B83E]/30">
      <SoftGrid />
      <div className="absolute inset-0 p-6 flex flex-col justify-center gap-2">
        {["Accenture · SAP Consultant","TCS · Senior Consultant","Infosys · Lead SAP","Deloitte · Manager"].map((t,i)=>(
          <motion.div key={t} initial={{x:300,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:i*0.2,type:"spring"}}
            className="bg-white/10 border border-[#19C7D8]/40 rounded-lg p-3 flex items-center gap-3">
            <div className="text-xl">📞</div>
            <div className="text-sm font-semibold">{t}</div>
          </motion.div>
        ))}
      </div>
    </Panel>
  ),
  newJob: (
    <Panel bg="bg-gradient-to-br from-[#09B83E]/30 to-[#19C7D8]/20">
      <SoftGrid />
      <div className="absolute inset-0 p-6 flex flex-col justify-center">
        {[["₹3.5L","Before","bg-white/20"],["₹8L","Year 1","bg-[#1686F5]"],["₹12L","Year 2","bg-[#19C7D8]"],["₹18L","Year 3","bg-[#09B83E]"]].map(([v,l,c],i)=>(
          <motion.div key={l} initial={{width:0}} whileInView={{width:`${30+i*20}%`}} transition={{delay:i*0.2,duration:0.8}}
            className={`${c} h-10 rounded-r-full mb-2 flex items-center px-3 text-white font-display font-bold text-sm`}>
            {v} <span className="ml-2 text-[10px] opacity-80">· {l}</span>
          </motion.div>
        ))}
      </div>
    </Panel>
  ),
  success: (
    <Panel bg="bg-gradient-to-br from-[#1686F5]/30 to-[#09B83E]/30">
      <SoftGrid />
      <div className="absolute inset-0 grid grid-cols-2 gap-3 p-6 content-center">
        {[["👔","Leader"],["🌍","Global"],["💼","Team of 12"],["📈","5x growth"]].map(([e,l])=>(
          <motion.div key={l} initial={{scale:0}} whileInView={{scale:1}} transition={{type:"spring"}}
            className="bg-white/10 border border-white/20 rounded-xl p-4 text-center">
            <div className="text-4xl mb-2">{e}</div>
            <div className="text-xs font-semibold">{l}</div>
          </motion.div>
        ))}
      </div>
    </Panel>
  ),
  workingHarder: (
    <Panel bg="bg-gradient-to-br from-red-900/30 to-[#071126]">
      <SoftGrid />
      <div className="absolute inset-0 p-6 flex flex-col justify-center gap-3">
        <div className="text-center text-[10px] uppercase tracking-widest text-white/50">3 Years Later</div>
        {[["₹3.5L","Year 1"],["₹3.7L","Year 2"],["₹3.9L","Year 3"]].map(([v,l],i)=>(
          <motion.div key={l} initial={{x:-30,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:i*0.2}}
            className="bg-white/10 rounded-lg p-3 flex items-center justify-between">
            <span className="text-xs">{l}</span>
            <span className="font-display font-bold text-white/70">{v}</span>
            <span className="text-[10px] text-orange-300">+5%</span>
          </motion.div>
        ))}
        <div className="text-center text-xs text-red-300 mt-1">More hours. Same paycheck.</div>
      </div>
    </Panel>
  ),
  trainingPath: (
    <Panel bg="bg-gradient-to-br from-[#1686F5]/20 to-[#19C7D8]/20">
      <SoftGrid />
      <div className="absolute inset-0 grid grid-cols-2 gap-3 p-6 content-center">
        <motion.div initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1}}
          className="bg-white/5 border border-white/10 rounded-xl p-4 opacity-60">
          <div className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Regular</div>
          <div className="text-2xl mb-2">👥</div>
          <div className="text-xs">Batch of 60</div>
          <div className="text-xs text-white/50">Fixed timing</div>
        </motion.div>
        <motion.div initial={{x:20,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.2}}
          className="bg-brand border-2 border-[#19C7D8] rounded-xl p-4 shadow-glow-teal">
          <div className="text-[10px] uppercase tracking-widest text-[#19C7D8] mb-2">Personal</div>
          <div className="text-2xl mb-2">🎯</div>
          <div className="text-xs font-bold">1-on-1 Mentor</div>
          <div className="text-xs text-white/80">6 AM – 10 PM</div>
        </motion.div>
      </div>
    </Panel>
  ),
  learningAfterWork: (
    <Panel bg="bg-gradient-to-br from-[#0B1C9C]/50 to-[#071126]">
      <SoftGrid />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <motion.div animate={{opacity:[0.4,1,0.4]}} transition={{duration:2,repeat:Infinity}} className="text-5xl mb-3">💻</motion.div>
          <div className="font-display font-bold text-lg">10 PM – 1 AM</div>
          <div className="text-xs text-white/60 mt-1">Live class after office</div>
        </div>
      </div>
      <div className="absolute bottom-6 left-6 right-6 flex justify-between text-[10px]">
        <div className="bg-white/10 rounded px-2 py-1">🕕 6 AM Support</div>
        <div className="bg-white/10 rounded px-2 py-1">🕙 10 PM Support</div>
      </div>
    </Panel>
  ),
  projects: FresherVisuals.projects,
  mockInterview: FresherVisuals.mockInterview,
  placementProgram: (
    <Panel bg="bg-gradient-to-br from-[#09B83E]/30 to-[#1686F5]/20">
      <SoftGrid />
      <div className="absolute inset-0 p-6 flex flex-col justify-center gap-3">
        <div className="text-center">
          <div className="inline-block bg-[#09B83E] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">Placement Guaranteed</div>
        </div>
        {["✓ Dedicated placement cell","✓ 200+ hiring partners","✓ Unlimited interview calls","✓ Until you're placed"].map((t,i)=>(
          <motion.div key={t} initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:i*0.15}}
            className="bg-white/10 rounded p-2 text-xs">{t}</motion.div>
        ))}
      </div>
    </Panel>
  ),
  industryReady: (
    <Panel bg="bg-gradient-to-br from-[#19C7D8]/20 to-[#09B83E]/20">
      <SoftGrid />
      <div className="absolute inset-0 p-6 flex gap-3 items-center">
        <motion.div initial={{x:-30,opacity:0}} whileInView={{x:0,opacity:1}}
          className="flex-1 bg-white/5 border border-white/10 rounded-lg p-3 opacity-50">
          <div className="text-[9px] uppercase text-white/40 mb-2">Before</div>
          {[60,40,70].map((w,i)=>(<div key={i} className="h-1.5 bg-white/30 rounded mb-1.5" style={{width:`${w}%`}}/>))}
        </motion.div>
        <motion.div initial={{x:30,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.3}}
          className="flex-1 bg-white rounded-lg p-3 shadow-2xl">
          <div className="text-[9px] uppercase text-[#1686F5] font-bold mb-2">After · SAP Consultant</div>
          {[90,85,95,80,90].map((w,i)=>(<div key={i} className="h-1.5 bg-[#1686F5] rounded mb-1.5" style={{width:`${w}%`}}/>))}
        </motion.div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 text-center text-[10px] uppercase tracking-widest text-white/60">Resume Transformation</div>
    </Panel>
  ),
  applying: FresherVisuals.applyingAgain,
  breakthrough: (
    <Panel bg="bg-gradient-to-br from-[#09B83E]/40 to-[#19C7D8]/20">
      <SoftGrid />
      <motion.div initial={{scale:0,rotate:-8}} whileInView={{scale:1,rotate:-2}} transition={{type:"spring",stiffness:200}}
        className="absolute inset-0 flex items-center justify-center p-8">
        <div className="bg-white text-[#071126] rounded-lg p-6 w-full shadow-2xl">
          <div className="text-[10px] font-bold tracking-widest text-[#1686F5] mb-2">OFFER LETTER</div>
          <div className="font-display font-extrabold text-xl mb-1">Welcome, Rahul!</div>
          <div className="text-xs text-slate-600 mb-3">Senior SAP Consultant · Global MNC</div>
          <div className="font-display font-black text-3xl text-[#09B83E]">₹14 LPA</div>
          <div className="text-[10px] text-slate-500 mt-2">4x your previous salary</div>
        </div>
      </motion.div>
    </Panel>
  ),
  international: (
    <Panel bg="bg-gradient-to-br from-[#1686F5]/30 to-[#19C7D8]/30">
      <SoftGrid />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div animate={{rotate:360}} transition={{duration:30,repeat:Infinity,ease:"linear"}} className="text-7xl">🌍</motion.div>
      </div>
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="grid grid-cols-3 gap-2">
          {["🇺🇸 USA","🇬🇧 UK","🇩🇪 Germany"].map(t=>(<div key={t} className="bg-white/10 backdrop-blur rounded px-2 py-1 text-[10px] text-center">{t}</div>))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["🇸🇬 SG","🇦🇺 AUS","🇦🇪 UAE"].map(t=>(<div key={t} className="bg-white/10 backdrop-blur rounded px-2 py-1 text-[10px] text-center">{t}</div>))}
        </div>
      </div>
    </Panel>
  ),
};

// ============ CAREER GAP (Priya) =============
export const CareerGapVisuals = {
  afterBreak: (
    <Panel bg="bg-gradient-to-br from-slate-700/30 to-[#071126]">
      <SoftGrid />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div initial={{rotateY:0}} whileInView={{rotateY:360}} transition={{duration:3}} className="grid grid-cols-3 gap-1">
          {Array.from({length:9}).map((_,i)=>(
            <div key={i} className="w-12 h-16 bg-white/5 border border-white/10 rounded p-1">
              <div className="text-[8px] text-white/40 text-center">{2018+i}</div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-6 left-6 right-6 text-center">
        <div className="text-xs uppercase tracking-widest text-white/50 mb-2">Confidence</div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div initial={{width:"70%"}} whileInView={{width:"15%"}} transition={{duration:2}} className="h-full bg-orange-400"/>
        </div>
      </div>
    </Panel>
  ),
  searchSkills: FresherVisuals.jobSearch,
  discover: FresherVisuals.discoverSap,
  findNextgen: (
    <Panel bg="bg-gradient-to-br from-[#19C7D8]/20 to-[#1686F5]/20">
      <SoftGrid />
      <div className="absolute inset-0 flex items-center justify-center gap-3 p-6">
        <div className="w-20 h-32"><Character mood="happy" color="#1686F5"/></div>
        <div className="comic-bubble text-sm max-w-[180px]">We'll build your roadmap together.</div>
      </div>
      <div className="absolute bottom-6 left-6 right-6 bg-white/10 rounded-lg p-3 text-xs">
        <div className="font-display font-bold mb-1">Career Roadmap</div>
        <div className="flex gap-2">
          {["Learn","Practice","Place"].map(s=>(<div key={s} className="flex-1 h-1.5 bg-growth rounded-full"/>))}
        </div>
      </div>
    </Panel>
  ),
  learning: FresherVisuals.learningJourney,
  prep: FresherVisuals.interview,
  firstJob: (
    <Panel bg="bg-gradient-to-br from-[#09B83E]/30 to-[#19C7D8]/20">
      <SoftGrid />
      <motion.div initial={{scale:0,rotate:-5}} whileInView={{scale:1,rotate:-2}} transition={{type:"spring"}}
        className="absolute inset-0 flex items-center justify-center p-8">
        <div className="bg-white text-[#071126] rounded-lg p-6 w-full shadow-2xl">
          <div className="text-[10px] font-bold tracking-widest text-[#1686F5] mb-2">WELCOME BACK</div>
          <div className="font-display font-extrabold text-xl mb-1">Congratulations, Priya!</div>
          <div className="text-xs text-slate-600 mb-3">SAP Functional · Leading MNC</div>
          <div className="font-display font-black text-3xl text-[#09B83E]">A New Beginning</div>
        </div>
      </motion.div>
    </Panel>
  ),
  newBeginning: (
    <Panel bg="bg-gradient-to-br from-[#1686F5]/20 to-[#0B1C9C]/30">
      <SoftGrid />
      <div className="absolute inset-x-0 bottom-0 h-2/3 flex items-end justify-center p-6">
        <div className="w-20 h-32"><Character mood="confident" color="#0B1C9C"/></div>
      </div>
      <div className="absolute top-6 left-6 right-6 text-center text-white/70 text-xs font-display font-semibold tracking-widest uppercase">Confident · Professional · Ready</div>
    </Panel>
  ),
  success: (
    <Panel bg="bg-gradient-to-br from-[#19C7D8]/20 to-[#09B83E]/30">
      <SoftGrid />
      <div className="absolute inset-0 grid grid-cols-2 gap-3 p-6 content-center">
        {[["💪","Independent"],["📈","Growing"],["👨‍👩‍👧","Happy Family"],["⭐","Respected"]].map(([e,l])=>(
          <motion.div key={l} initial={{scale:0}} whileInView={{scale:1}} transition={{type:"spring"}}
            className="bg-white/10 border border-white/20 rounded-xl p-4 text-center">
            <div className="text-4xl mb-2">{e}</div>
            <div className="text-xs font-semibold">{l}</div>
          </motion.div>
        ))}
      </div>
    </Panel>
  ),
  marriage: (
    <Panel bg="bg-gradient-to-br from-[#E94B8C]/25 to-[#1686F5]/25">
      <SoftGrid />
      <div className="absolute inset-0 flex items-end justify-center pb-12 gap-2">
        <div className="w-20 h-32"><Character mood="happy" color="#1686F5"/></div>
        <div className="w-20 h-32"><Character mood="happy" color="#E94B8C"/></div>
      </div>
      <motion.div animate={{y:[0,-10,0]}} transition={{duration:2,repeat:Infinity}}
        className="absolute top-8 left-1/2 -translate-x-1/2 text-4xl">💍</motion.div>
      <div className="absolute top-6 left-6 text-[10px] uppercase tracking-widest text-white/60">A New Chapter</div>
    </Panel>
  ),
  motherhood: (
    <Panel bg="bg-gradient-to-br from-[#19C7D8]/20 to-[#E94B8C]/20">
      <SoftGrid />
      <div className="absolute inset-0 flex items-end justify-center pb-12 gap-2">
        <div className="w-20 h-32"><Character mood="happy" color="#E94B8C"/></div>
        <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{type:"spring",delay:0.3}} className="w-12 h-20"><Character mood="happy" color="#19C7D8"/></motion.div>
      </div>
      <div className="absolute top-6 left-6 right-6 grid grid-cols-3 gap-2">
        {["🍼 Care","🏠 Home","👶 Love"].map(t=>(<div key={t} className="bg-white/10 rounded px-2 py-1 text-[10px] text-center">{t}</div>))}
      </div>
    </Panel>
  ),
  selfDoubt: (
    <Panel bg="bg-gradient-to-br from-slate-700/40 to-[#071126]">
      <SoftGrid />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-36"><Character mood="sad" color="#E94B8C"/></div>
      </div>
      {["Am I too late?","Can I still learn?","Will anyone hire me?"].map((q,i)=>(
        <motion.div key={q} initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{delay:i*0.4}}
          className="absolute comic-bubble text-xs"
          style={{top:`${15+i*25}%`,left:i%2?"60%":"8%",maxWidth:140}}>{q}</motion.div>
      ))}
    </Panel>
  ),
  decideRestart: (
    <Panel bg="bg-gradient-to-br from-[#1686F5]/30 to-[#09B83E]/20">
      <SoftGrid />
      <motion.div initial={{scale:0,rotate:-20}} whileInView={{scale:1,rotate:0}} transition={{type:"spring"}}
        className="absolute inset-0 flex items-center justify-center">
        <div className="text-7xl">💪</div>
      </motion.div>
      <div className="absolute bottom-8 left-6 right-6 text-center">
        <div className="comic-bubble inline-block text-sm">I'm restarting. For me. For my family.</div>
      </div>
    </Panel>
  ),
  learningFamily: (
    <Panel bg="bg-gradient-to-br from-[#0B1C9C]/40 to-[#19C7D8]/20">
      <SoftGrid />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <motion.div animate={{opacity:[0.5,1,0.5]}} transition={{duration:2,repeat:Infinity}} className="text-5xl mb-2">🌙</motion.div>
          <div className="font-display font-bold">10 PM – 1 AM</div>
          <div className="text-xs text-white/60">After children sleep</div>
        </div>
      </div>
      <div className="absolute top-6 left-6 right-6 space-y-1.5">
        {["MM Module · ✓","FICO Basics · ✓","S/4 HANA · in progress"].map((t,i)=>(
          <motion.div key={t} initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:i*0.2}}
            className="bg-white/10 rounded px-2 py-1 text-[10px]">{t}</motion.div>
        ))}
      </div>
    </Panel>
  ),
  projects: FresherVisuals.projects,
  mockPlace: (
    <Panel bg="bg-gradient-to-br from-[#19C7D8]/20 to-[#09B83E]/25">
      <SoftGrid />
      <div className="absolute inset-0 p-6 flex flex-col justify-center gap-2">
        <div className="text-center text-[10px] uppercase tracking-widest text-[#09B83E] font-bold mb-2">Placement Program</div>
        {["Mock Interview 1 · ✓","Mock Interview 2 · ✓","Resume Polished · ✓","Profile Shortlisted · ✓"].map((t,i)=>(
          <motion.div key={t} initial={{x:-30,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:i*0.15}}
            className="bg-white/10 rounded p-2 text-xs">{t}</motion.div>
        ))}
      </div>
    </Panel>
  ),
  applyAgain: FresherVisuals.applyingAgain,
  balancing: (
    <Panel bg="bg-gradient-to-br from-[#1686F5]/25 to-[#E94B8C]/25">
      <SoftGrid />
      <div className="absolute inset-0 grid grid-cols-2 gap-3 p-6 content-center">
        {[["💼","Career"],["👨‍👩‍👧","Family"],["📈","Growth"],["❤️","Balance"]].map(([e,l])=>(
          <motion.div key={l} initial={{scale:0,rotate:-10}} whileInView={{scale:1,rotate:0}} transition={{type:"spring"}}
            className="bg-white/10 border border-white/20 rounded-xl p-4 text-center">
            <div className="text-3xl mb-1">{e}</div>
            <div className="text-[10px] font-semibold">{l}</div>
          </motion.div>
        ))}
      </div>
    </Panel>
  ),
};
