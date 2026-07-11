import Link from "next/link";
import { LockKeyhole } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SignInPage() {
  return (
    <main className="grid min-h-screen bg-[#f8faf9] lg:grid-cols-[0.95fr_1.05fr]">
      <section className="hidden border-r border-slate/10 bg-slate p-10 text-white lg:flex lg:flex-col lg:justify-between">
        <Logo className="[&_span]:text-white" />
        <div>
          <p className="max-w-xl text-5xl font-semibold tracking-[-0.055em]">
            Your supplier ESG intelligence workspace.
          </p>
          <p className="mt-5 max-w-md text-white/60">
            Secure access for procurement teams, sustainability leaders, and suppliers.
          </p>
        </div>
        <p className="text-sm text-white/40">Esgexa sp. z o.o. · Warsaw, Poland</p>
      </section>
      <section className="flex items-center justify-center p-6">
        <Card className="w-full max-w-md p-6 shadow-soft">
          <div className="lg:hidden">
            <Logo />
          </div>
          <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary lg:mt-0">
            <LockKeyhole className="h-6 w-6" />
          </div>
          <h1 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-slate">Sign in to Esgexa</h1>
          <p className="mt-2 text-sm text-slate/58">Use your company account to continue.</p>
          <form className="mt-8 grid gap-4">
            <label className="grid gap-2 text-sm font-medium text-slate">
              Email
              <input className="h-12 rounded-xl border border-slate/10 px-4 outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/10" placeholder="name@company.com" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate">
              Password
              <input type="password" className="h-12 rounded-xl border border-slate/10 px-4 outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/10" placeholder="••••••••" />
            </label>
            <Button type="button" size="lg">Sign in</Button>
          </form>
          <div className="mt-6 flex items-center justify-between text-sm">
            <Link href="/" className="text-slate/55 hover:text-primary">Back to site</Link>
            <Link href="#" className="font-medium text-primary">Forgot password?</Link>
          </div>
        </Card>
      </section>
    </main>
  );
}
