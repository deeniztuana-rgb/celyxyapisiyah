'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Loader2, Upload, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { systemOptions, projectTypes } from '@/data/content';

type Status = 'idle' | 'loading' | 'success' | 'error';

const inputClass =
  'w-full border border-line bg-white px-4 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-text-muted/70 focus:border-ink';
const labelClass = 'mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-text-muted';

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>('idle');
  const [fileName, setFileName] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, file: fileName }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
      form.reset();
      setFileName(null);
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center border border-line bg-white px-8 py-16 text-center"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ink text-white">
          <Check className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
          Talebiniz alındı
        </h3>
        <p className="mt-3 max-w-md text-text-muted">
          Teklif talebiniz başarıyla iletildi. Ekibimiz en kısa sürede sizinle
          iletişime geçecek. İlginiz için teşekkür ederiz.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn-light mt-8"
        >
          Yeni Talep Oluştur
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-line bg-white p-6 md:p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">Ad Soyad *</label>
          <input id="name" name="name" required className={inputClass} placeholder="Adınız ve soyadınız" />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">Telefon *</label>
          <input id="phone" name="phone" type="tel" required className={inputClass} placeholder="05__ ___ __ __" />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">E-posta</label>
          <input id="email" name="email" type="email" className={inputClass} placeholder="ornek@eposta.com" />
        </div>
        <div>
          <label className={labelClass} htmlFor="city">Şehir</label>
          <input id="city" name="city" className={inputClass} placeholder="İl / İlçe" />
        </div>
        <div>
          <label className={labelClass} htmlFor="system">İlgilendiğiniz Sistem</label>
          <select id="system" name="system" defaultValue="" className={cn(inputClass, 'appearance-none')}>
            <option value="" disabled>Seçiniz</option>
            {systemOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="projectType">Proje Tipi</label>
          <select id="projectType" name="projectType" defaultValue="" className={cn(inputClass, 'appearance-none')}>
            <option value="" disabled>Seçiniz</option>
            {projectTypes.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        {!compact && (
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="size">Yaklaşık Ölçü</label>
            <input id="size" name="size" className={inputClass} placeholder="Örn. 4m x 3m veya 12 m²" />
          </div>
        )}
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="message">Mesaj</label>
          <textarea
            id="message"
            name="message"
            rows={compact ? 3 : 4}
            className={cn(inputClass, 'resize-none')}
            placeholder="Projeniz hakkında kısaca bilgi verin..."
          />
        </div>
      </div>

      {/* Dosya yükleme */}
      <div className="mt-5">
        <input
          ref={fileRef}
          type="file"
          accept="image/*,.pdf"
          className="hidden"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
        />
        {fileName ? (
          <div className="flex items-center justify-between border border-line bg-paper px-4 py-3 text-sm">
            <span className="truncate text-ink">{fileName}</span>
            <button
              type="button"
              onClick={() => {
                setFileName(null);
                if (fileRef.current) fileRef.current.value = '';
              }}
              className="ml-3 text-text-muted hover:text-ink"
              aria-label="Dosyayı kaldır"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="flex w-full items-center justify-center gap-2 border border-dashed border-line bg-paper px-4 py-4 text-sm text-text-muted transition-colors hover:border-ink/40 hover:text-ink"
          >
            <Upload className="h-4 w-4" />
            Proje görseli / plan yükle
          </button>
        )}
      </div>

      {/* WhatsApp onayı */}
      <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm text-text-muted">
        <input
          type="checkbox"
          name="whatsapp"
          className="mt-0.5 h-4 w-4 shrink-0 accent-ink"
        />
        WhatsApp üzerinden iletişim kurulmasını istiyorum.
      </label>

      <AnimatePresence>
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 text-sm text-red-600"
          >
            Bir hata oluştu. Lütfen tekrar deneyin veya telefonla ulaşın.
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-dark group mt-6 w-full py-4 text-base"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Gönderiliyor...
          </>
        ) : (
          <>
            Ücretsiz Teklif Al
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs text-text-muted">
        Bilgileriniz yalnızca teklif hazırlığı için kullanılır ve üçüncü kişilerle
        paylaşılmaz.
      </p>
    </form>
  );
}
