"use client";

import { motion } from "framer-motion";
import { Bot, CheckCircle2, FileCheck2, ListChecks, ShieldCheck } from "lucide-react";

const docs = [
  { title: "Supplier Questionnaire", meta: "92% complete", top: "9%", left: "7%" },
  { title: "Certificates", meta: "ISO 14001 verified", top: "29%", left: "27%" },
  { title: "Policies", meta: "AI reviewed", top: "48%", left: "13%" },
  { title: "Audit Reports", meta: "2 findings", top: "18%", left: "48%" },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[610px] overflow-hidden rounded-[2rem] border border-slate/10 bg-[linear-gradient(145deg,#ffffff,#f4f8f6)] shadow-soft">
      <div className="premium-grid absolute inset-0 opacity-70" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[360px] w-[440px] -translate-x-1/2 -translate-y-1/2"
        animate={{ rotateY: [0, 4, 0, -4, 0], rotateX: [0, -2, 0, 2, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 440 360">
          <motion.path
            d="M100 85 C170 55 230 110 300 86 S380 112 352 170 C327 222 236 188 205 251 C179 303 102 286 84 226 C68 176 46 111 100 85Z"
            fill="none"
            stroke="#0F766E"
            strokeWidth="1.5"
            strokeDasharray="8 12"
            animate={{ strokeDashoffset: [0, -80] }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M115 210 C185 120 232 170 319 142"
            fill="none"
            stroke="#84CC16"
            strokeWidth="1.5"
            strokeDasharray="4 10"
            animate={{ strokeDashoffset: [0, -70] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </svg>
        {docs.map((doc, index) => (
          <motion.div
            key={doc.title}
            className="absolute w-[210px] rounded-2xl border border-slate/10 bg-white/92 p-4 shadow-[0_18px_55px_rgba(15,23,42,0.12)] backdrop-blur"
            style={{ top: doc.top, left: doc.left, transform: `translateZ(${index * 18}px)` }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-between">
              <FileCheck2 className="h-5 w-5 text-primary" />
              <CheckCircle2 className="h-4 w-4 text-accent" />
            </div>
            <p className="mt-4 text-sm font-semibold text-slate">{doc.title}</p>
            <p className="mt-1 text-xs text-slate/55">{doc.meta}</p>
            <div className="mt-4 h-1.5 rounded-full bg-muted">
              <div className="h-full w-3/4 rounded-full bg-primary/75" />
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="absolute bottom-7 left-7 w-[230px] rounded-2xl border border-slate/10 bg-slate p-4 text-white shadow-soft"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center gap-2 text-xs text-white/60">
          <Bot className="h-4 w-4 text-accent" /> AI evidence analysis
        </div>
        <div className="mt-4 flex items-end justify-between">
          <span className="text-4xl font-semibold tracking-[-0.04em]">84</span>
          <span className="rounded-full bg-accent/15 px-2 py-1 text-xs text-accent">Low risk</span>
        </div>
      </motion.div>
      <motion.div
        className="absolute right-7 top-7 w-[190px] rounded-2xl border border-slate/10 bg-white p-4 shadow-soft"
        initial={{ opacity: 0, x: 18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9 }}
      >
        <div className="flex items-center gap-2 text-xs font-medium text-primary">
          <ListChecks className="h-4 w-4" /> Improvement tasks
        </div>
        <div className="mt-4 grid gap-2 text-xs text-slate/65">
          <span className="rounded-lg bg-muted px-3 py-2">Update emissions policy</span>
          <span className="rounded-lg bg-muted px-3 py-2">Upload waste certificate</span>
        </div>
      </motion.div>
      <div className="absolute right-8 bottom-8 flex items-center gap-2 rounded-full border border-primary/10 bg-white/80 px-3 py-2 text-xs font-medium text-primary backdrop-blur">
        <ShieldCheck className="h-4 w-4" /> Verified chain
      </div>
    </div>
  );
}
