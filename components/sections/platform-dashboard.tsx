import { AlertTriangle, CheckCircle2, Clock, FileText, Globe2, ListChecks, ShieldCheck, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const scoreData = [
  { name: "A", value: 24, color: "bg-primary" },
  { name: "B", value: 38, color: "bg-accent" },
  { name: "C", value: 21, color: "bg-slate/20" },
  { name: "D", value: 9, color: "bg-slate" },
];

const countryData = [
  { name: "PL", suppliers: 124 },
  { name: "DE", suppliers: 96 },
  { name: "CZ", suppliers: 66 },
  { name: "FR", suppliers: 48 },
  { name: "NL", suppliers: 38 },
];

export function PlatformDashboard() {
  return (
    <Card className="overflow-hidden bg-white p-3 shadow-soft">
      <div className="rounded-[1rem] border border-slate/10 bg-[#f8faf9]">
        <div className="flex items-center justify-between border-b border-slate/10 px-5 py-4">
          <div>
            <p className="text-sm font-semibold text-slate">Supplier ESG Command Center</p>
            <p className="text-xs text-slate/55">Warsaw procurement portfolio · Q3 2026</p>
          </div>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            1,248 suppliers
          </span>
        </div>
        <div className="grid gap-px bg-slate/10 lg:grid-cols-4">
          {[
            ["Completion rate", "87%", CheckCircle2],
            ["Pending questionnaires", "146", Clock],
            ["Evidence checks", "3,482", FileText],
            ["Open actions", "72", ListChecks],
          ].map(([label, value, Icon]) => (
            <div key={label as string} className="bg-white p-5">
              <Icon className="h-5 w-5 text-primary" />
              <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate">{value as string}</p>
              <p className="mt-1 text-xs text-slate/55">{label as string}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-px bg-slate/10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-slate">Supplier scores</p>
              <ShieldCheck className="h-4 w-4 text-primary" />
            </div>
            <div className="flex h-56 items-end gap-4 border-b border-slate/10 px-2 pb-4">
              {countryData.map((item) => (
                <div key={item.name} className="flex flex-1 flex-col items-center gap-3">
                  <div className="flex h-40 w-full items-end rounded-t-xl bg-muted px-2">
                    <div
                      className="w-full rounded-t-lg bg-primary"
                      style={{ height: `${(item.suppliers / 124) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-slate/55">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid bg-white p-5 md:grid-cols-2 lg:grid-cols-1">
            <div>
              <p className="text-sm font-semibold text-slate">Risk categories</p>
              <div className="mt-5">
                <div
                  className="mx-auto h-32 w-32 rounded-full"
                  style={{
                    background:
                      "conic-gradient(#0F766E 0 26%, #84CC16 26% 67%, #CBD5E1 67% 90%, #1E293B 90% 100%)",
                  }}
                >
                  <div className="grid h-full place-items-center rounded-full p-5">
                    <div className="grid h-20 w-20 place-items-center rounded-full bg-white text-center text-sm font-semibold text-slate">
                      92%
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2 text-xs text-slate/55">
                  {scoreData.map((item) => (
                    <span key={item.name} className="flex items-center gap-1">
                      <span className={`h-2 w-2 rounded-full ${item.color}`} /> {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid gap-2 text-sm">
              {[
                ["Upcoming reviews", "28", Globe2],
                ["High-risk suppliers", "17", AlertTriangle],
                ["Corrective actions due", "31", Users],
              ].map(([label, value, Icon]) => (
                <div key={label as string} className="flex items-center justify-between rounded-xl bg-muted px-3 py-3">
                  <span className="flex items-center gap-2 text-slate/64">
                    <Icon className="h-4 w-4 text-primary" /> {label as string}
                  </span>
                  <span className="font-semibold text-slate">{value as string}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
