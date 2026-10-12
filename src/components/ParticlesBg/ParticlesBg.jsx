import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useEffect, useRef } from "react";
function ParticlesBg({ className = "" }) {
   const canvasRef = useRef(null);
 
   useEffect(() => {
     const canvas = canvasRef.current;
     const ctx = canvas.getContext("2d");
     let animId;
 
     const resize = () => {
       canvas.width = canvas.offsetWidth;
       canvas.height = canvas.offsetHeight;
     };
     resize();
     window.addEventListener("resize", resize);
 
     // ── Config ────────────────────────────────────────────────────────────────
     const CELL       = 32;       // grid cell px
     const DOT_R      = 2.0;      // dot radius
     const DOT_GAP    = 6;        // px between dots
     const MAX_ACTIVE = 28;       // concurrent animated traces
     const BG_COUNT   = 60;       // static faint background traces
 
     const COLORS = [
       "#aaff00", "#88ee00", "#ccff33",
       "#ffff00", "#44ee00", "#00ffaa",
       "#00ff88", "#66ff33",
     ];
 
     const snap = (v) => Math.round(v / CELL) * CELL;
 
     // ── Build a trace starting from a given edge ──────────────────────────────
     // side: "left" | "right"
     const buildTrace = (side) => {
       const cols = Math.floor(canvas.width  / CELL);
       const rows = Math.floor(canvas.height / CELL);
 
       // Start on the left or right edge at a random row
       const row  = Math.floor(Math.random() * (rows + 1));
       let x = side === "left" ? 0 : cols * CELL;
       let y = snap(row * CELL);
 
       const waypoints = [{ x, y }];
 
       // First segment always goes inward (right if left-side, left if right-side)
       const inwardDir = side === "left" ? 1 : -1;
       const segCount  = 4 + Math.floor(Math.random() * 6); // 4–9 segments
 
       // Alternate: first seg horizontal (inward), then vertical, etc.
       let axis = "h"; // h = horizontal, v = vertical
 
       for (let s = 0; s < segCount; s++) {
         const maxLen = axis === "h"
           ? (4 + Math.floor(Math.random() * 8)) * CELL
           : (2 + Math.floor(Math.random() * 6)) * CELL;
 
         if (axis === "h") {
           // Move inward with some randomness — but bias toward center
           const move = inwardDir * (2 + Math.floor(Math.random() * 6)) * CELL;
           x += move;
         } else {
           // Vertical: random up or down
           const move = (Math.random() < 0.5 ? 1 : -1) * (1 + Math.floor(Math.random() * 5)) * CELL;
           y += move;
         }
 
         // Clamp
         x = Math.max(0, Math.min(cols * CELL, x));
         y = Math.max(0, Math.min(rows * CELL, y));
 
         waypoints.push({ x, y });
         axis = axis === "h" ? "v" : "h";
       }
 
       // Compute segment lengths & total
       let totalLength = 0;
       const segLengths = [];
       for (let i = 1; i < waypoints.length; i++) {
         const l = Math.abs(waypoints[i].x - waypoints[i-1].x)
                 + Math.abs(waypoints[i].y - waypoints[i-1].y);
         segLengths.push(l);
         totalLength += l;
       }
 
       const color = COLORS[Math.floor(Math.random() * COLORS.length)];
 
       return {
         waypoints,
         segLengths,
         totalLength,
         color,
         width: 1.2 + Math.random() * 1.0,
         phase: 0,          // 0=grow, 1=hold, 2=fade
         drawLength: 0,
         growSpeed: 3 + Math.random() * 4,
         holdFrames: 40 + Math.floor(Math.random() * 60),
         holdFrame: 0,
         fadeSpeed: 0.018 + Math.random() * 0.014,
         alpha: 1,
         side,
       };
     };
 
     // ── Position along a trace at distance d ──────────────────────────────────
     const posAt = (trace, d) => {
       let rem = Math.min(d, trace.totalLength);
       for (let i = 0; i < trace.segLengths.length; i++) {
         const sl = trace.segLengths[i];
         if (rem <= sl) {
           const t  = sl === 0 ? 0 : rem / sl;
           const a  = trace.waypoints[i];
           const b  = trace.waypoints[i + 1];
           return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
         }
         rem -= sl;
       }
       return { ...trace.waypoints[trace.waypoints.length - 1] };
     };
 
     // ── Draw a trace up to drawLength with dots ───────────────────────────────
     const drawTrace = (trace, alpha, showHead) => {
       if (trace.drawLength <= 0) return;
       ctx.save();
       ctx.globalAlpha = alpha;
 
       // Collect corner waypoints already passed (for bright nodes)
       let cum = 0;
       const passedCorners = [];
       for (let i = 0; i < trace.segLengths.length; i++) {
         cum += trace.segLengths[i];
         if (cum <= trace.drawLength) {
           passedCorners.push(trace.waypoints[i + 1]);
         } else break;
       }
 
       // Dots along path
       ctx.shadowBlur = 8;
       ctx.shadowColor = trace.color;
       for (let dist = 0; dist <= trace.drawLength; dist += DOT_GAP) {
         const p = posAt(trace, dist);
         // outer glow
         ctx.beginPath();
         ctx.arc(p.x, p.y, DOT_R + 2.5, 0, Math.PI * 2);
         ctx.fillStyle = trace.color + "22";
         ctx.fill();
         // core
         ctx.beginPath();
         ctx.arc(p.x, p.y, DOT_R, 0, Math.PI * 2);
         ctx.fillStyle = trace.color;
         ctx.fill();
       }
 
       // Corner node dots
       ctx.shadowBlur = 14;
       passedCorners.forEach((wp) => {
         ctx.beginPath();
         ctx.arc(wp.x, wp.y, DOT_R * 2.8, 0, Math.PI * 2);
         ctx.fillStyle = trace.color;
         ctx.fill();
       });
 
       // Leading head dot
       if (showHead) {
         const head = posAt(trace, trace.drawLength);
         ctx.shadowBlur = 22;
         ctx.shadowColor = "#ffffff";
         ctx.beginPath();
         ctx.arc(head.x, head.y, DOT_R * 2.4, 0, Math.PI * 2);
         ctx.fillStyle = "#ffffff";
         ctx.fill();
 
         // Small cross/plus at head for circuit-board feel
         ctx.shadowBlur = 10;
         ctx.shadowColor = trace.color;
         ctx.strokeStyle = trace.color;
         ctx.lineWidth = 1.5;
         ctx.beginPath();
         ctx.moveTo(head.x - 5, head.y);
         ctx.lineTo(head.x + 5, head.y);
         ctx.moveTo(head.x, head.y - 5);
         ctx.lineTo(head.x, head.y + 5);
         ctx.stroke();
       }
 
       ctx.restore();
     };
 
     // ── Static faint background traces ───────────────────────────────────────
     let bgTraces = [];
     const buildBgTraces = () => {
       bgTraces = [];
       for (let i = 0; i < BG_COUNT; i++) {
         const t = buildTrace(Math.random() < 0.5 ? "left" : "right");
         t.drawLength = t.totalLength; // fully drawn, always
         bgTraces.push(t);
       }
     };
     buildBgTraces();
 
     const drawBg = () => {
       bgTraces.forEach((trace) => {
         ctx.save();
         ctx.globalAlpha = 0.06 + Math.random() * 0.03;
         ctx.shadowBlur = 3;
         ctx.shadowColor = "#33aa00";
         for (let dist = 0; dist <= trace.totalLength; dist += DOT_GAP) {
           const p = posAt(trace, dist);
           ctx.beginPath();
           ctx.arc(p.x, p.y, DOT_R * 0.8, 0, Math.PI * 2);
           ctx.fillStyle = "#55cc00";
           ctx.fill();
         }
         ctx.restore();
       });
     };
 
     // ── Active animated traces ────────────────────────────────────────────────
     const active = [];
 
     // Stagger initial spawn — don't all start at once
     let spawnDelay = 0;
     const SPAWN_INTERVAL = 4; // frames between spawns
 
     const draw = () => {
       ctx.clearRect(0, 0, canvas.width, canvas.height);
 
       // Background
       ctx.fillStyle = "#030603";
       ctx.fillRect(0, 0, canvas.width, canvas.height);
 
       // Dim static layer
       drawBg();
 
       // Spawn new traces with stagger
       spawnDelay++;
       if (active.length < MAX_ACTIVE && spawnDelay >= SPAWN_INTERVAL) {
         spawnDelay = 0;
         // Alternate spawning from left and right
         const side = active.filter(t => t.side === "left").length
                    <= active.filter(t => t.side === "right").length
                    ? "left" : "right";
         active.push(buildTrace(side));
       }
 
       // Update + draw active
       for (let i = active.length - 1; i >= 0; i--) {
         const t = active[i];
 
         if (t.phase === 0) {
           t.drawLength = Math.min(t.drawLength + t.growSpeed, t.totalLength);
           drawTrace(t, 1, true);
           if (t.drawLength >= t.totalLength) t.phase = 1;
 
         } else if (t.phase === 1) {
           drawTrace(t, 1, false);
           t.holdFrame++;
           if (t.holdFrame >= t.holdFrames) t.phase = 2;
 
         } else {
           t.alpha = Math.max(0, t.alpha - t.fadeSpeed);
           drawTrace(t, t.alpha, false);
           if (t.alpha <= 0) active.splice(i, 1);
         }
       }
 
       animId = requestAnimationFrame(draw);
     };
 
     draw();
 
     return () => {
       cancelAnimationFrame(animId);
       window.removeEventListener("resize", resize);
     };
   }, []);
 
   return (
     <canvas
       ref={canvasRef}
       className={className}
       style={{
         position: "fixed",
         inset: 0,
         width: "100%",
         height: "100%",
         zIndex: 0,
         display: "block",
       }}
     />
   );
 }
 
export default ParticlesBg;
