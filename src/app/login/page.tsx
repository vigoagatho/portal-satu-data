import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 w-full max-w-md px-4">
        {/* Logo */}
        <div className="text-center">
          <p className="text-blue-600 font-bold text-2xl">SIAP-MBG HUB</p>
          <p className="text-gray-400 text-xs tracking-widest">BGN NEW ERIDU</p>
        </div>

        {/* Card */}
        <Card className="w-full shadow-sm border border-gray-100">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-xl font-black text-gray-800">LOGIN OPERATOR</CardTitle>
            <CardDescription className="text-gray-400 text-xs tracking-wide">GUNAKAN AKUN RESMI BGN NEW ERIDU UNTUK MASUK KE DASHBOARD</CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-4 pt-4">
            {/* Email */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-xs font-semibold text-gray-600 tracking-wide">
                EMAIL
              </Label>
              <Input id="email" type="email" placeholder="email" className="rounded-xl border-gray-200 focus:border-blue-400" />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-xs font-semibold text-gray-600 tracking-wide">
                  PASSWORD
                </Label>
                <a href="#" className="text-xs text-blue-500 hover:underline">
                  Lupa password?
                </a>
              </div>
              <Input id="password" type="password" placeholder="password" className="rounded-xl border-gray-200 focus:border-blue-400" />
            </div>

            {/* Submit */}
            <Button className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-widest mt-2">MASUK</Button>
          </CardContent>
        </Card>

        {/* Back to home */}
        <Link href="/" className="text-xs text-gray-400 hover:text-blue-500 transition-colors tracking-wide">
          ← Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
