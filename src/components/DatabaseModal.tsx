import { useState } from 'react';
import { X, Copy, Check, Database, AlertCircle, CheckCircle2 } from 'lucide-react';
import { isSupabaseConfigured, SUPABASE_SQL_SETUP } from '../lib/supabase';

interface DatabaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DatabaseModal({ isOpen, onClose }: DatabaseModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SUPABASE_SQL_SETUP);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
    >
      <div className="relative w-full max-w-2xl bg-[#fbf9f6] dark:bg-[#151614] border border-[#e5e0d8] dark:border-[#2a2b28] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#e5e0d8] dark:border-[#2a2b28] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 border border-[#e5e0d8] dark:border-[#2a2b28] bg-white dark:bg-[#1c1d1a] text-[#9f3c16] dark:text-[#e06c43]">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <h3 id="modal-title" className="font-serif text-lg text-[#1b1c1a] dark:text-[#f2f0ed]">
                Supabase Schema Setup
              </h3>
              <p className="text-xs text-[#57423b] dark:text-[#a8a29e]">
                Tables: <code className="font-mono">projects</code>, <code className="font-mono">skills</code>, <code className="font-mono">messages</code>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-[#5f5e5e] hover:text-[#1b1c1a] dark:hover:text-[#f2f0ed] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
          {/* Connection Status */}
          <div
            className={`p-3.5 border flex items-center gap-3 ${
              isSupabaseConfigured
                ? 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                : 'bg-amber-50/70 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200'
            }`}
          >
            {isSupabaseConfigured ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
            )}
            <div className="text-xs">
              {isSupabaseConfigured ? (
                <span>
                  <strong>Connected to Supabase.</strong> Queries for projects, skills, and messages are live.
                </span>
              ) : (
                <span>
                  <strong>Configuration note:</strong> Add <code className="font-mono font-semibold">VITE_SUPABASE_URL</code> and{' '}
                  <code className="font-mono font-semibold">VITE_SUPABASE_ANON_KEY</code> to connect live data.
                </span>
              )}
            </div>
          </div>

          <p className="text-[#57423b] dark:text-[#a8a29e] leading-relaxed">
            Copy and paste this schema directly into your{' '}
            <a
              href="https://supabase.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9f3c16] dark:text-[#e06c43] underline font-medium"
            >
              Supabase SQL Editor
            </a>{' '}
            to establish the database tables and enable anonymous read/write policies:
          </p>

          {/* SQL Block */}
          <div className="relative border border-[#e5e0d8] dark:border-[#2a2b28] bg-[#121312] text-[#f2f0ed] font-mono text-[11px] leading-relaxed">
            <div className="flex items-center justify-between px-4 py-2 bg-[#1b1c1a] border-b border-[#2a2b28]">
              <span className="text-[#a8a29e]">schema.sql</span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-sans font-semibold uppercase tracking-wider text-white bg-[#9f3c16] hover:bg-[#bf542c] transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy SQL</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 overflow-x-auto max-h-56">
              <code>{SUPABASE_SQL_SETUP}</code>
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#f5f3f0] dark:bg-[#1b1c1a] border-t border-[#e5e0d8] dark:border-[#2a2b28] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1b1c1a] dark:text-[#f2f0ed] hover:bg-[#e5e0d8] dark:hover:bg-[#2a2b28] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
