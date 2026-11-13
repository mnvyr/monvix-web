import { CloudUpload, LockKeyhole, RotateCcw } from '@/components/icons'
import { backupHistory } from '@/data/dummy'
import { BottomNav, Card, ScreenTitle, StatusBar } from './parts'

export function BackupScreen() {
  return (
    <div className="flex h-full flex-col">
      <StatusBar />
      <ScreenTitle sub="Cadangan data ke Google Drive">Backup</ScreenTitle>
      <div className="flex flex-1 flex-col gap-2.5 overflow-hidden px-3.5 pb-2">
        <div className="rounded-[20px] bg-brand-gradient p-4 text-white">
          <div className="flex items-center gap-2">
            <CloudUpload className="h-5 w-5" />
            <span className="text-[12px] font-bold">Google Drive</span>
          </div>
          <div className="mt-2 text-[10px] opacity-90">Backup terakhir</div>
          <div className="font-heading text-[15px] font-extrabold">12 Nov 2026 · 08:00</div>
          <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-bold">
            <LockKeyhole className="h-3 w-3" /> Terenkripsi AES-256-GCM
          </div>
        </div>

        <div className="flex gap-2 text-[11px] font-bold">
          <span className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-brand py-2.5 text-white">
            <CloudUpload className="h-3.5 w-3.5" /> Backup Sekarang
          </span>
          <span className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-brand-line bg-white py-2.5 text-brand-deep">
            <RotateCcw className="h-3.5 w-3.5" /> Restore
          </span>
        </div>

        <Card>
          <div className="mb-1 flex items-center justify-between text-[11px]">
            <b>Backup otomatis</b>
            <span className="h-[18px] w-8 rounded-full bg-income p-0.5">
              <i className="block h-3.5 w-3.5 translate-x-3.5 rounded-full bg-white" />
            </span>
          </div>
          <p className="text-[10px] leading-snug text-brand-muted">
            Backup dilindungi password yang kamu tentukan.
          </p>
        </Card>

        <div className="text-[10px] font-bold uppercase tracking-[0.06em] text-brand-muted">Riwayat backup</div>
        <Card className="py-1.5!">
          {backupHistory.map((h) => (
            <div key={h.when} className="flex items-center justify-between py-1.5 text-[11px]">
              <span className="font-semibold">{h.when}</span>
              <span className="rounded-full bg-[#E3ECFF] px-2 py-0.5 text-[9px] font-bold text-brand-deep">{h.type}</span>
            </div>
          ))}
        </Card>
      </div>
      <BottomNav active="Profil" />
    </div>
  )
}
