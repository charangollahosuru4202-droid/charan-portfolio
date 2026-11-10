import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { insertContactMessage } from '../lib/supabase';
import { ToastNotification } from '../types';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Web Project');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastNotification | null>(null);
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!name.trim()) {
      errors.name = 'Please provide your full name';
    } else if (name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!emailRegex.test(email.trim())) {
      errors.email = 'Please enter a valid email format';
    }

    if (!message.trim()) {
      errors.message = 'Please write your message';
    } else if (message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setToast(null);

    const fullMessage = topic ? `[Topic: ${topic}]\n\n${message}` : message;

    const result = await insertContactMessage({
      name,
      email,
      message: fullMessage,
    });

    setIsSubmitting(false);

    if (result.success) {
      setToast({
        type: 'success',
        message: 'Thank you for reaching out! Charan has received your message.',
      });
      setName('');
      setEmail('');
      setMessage('');
      setValidationErrors({});
    } else {
      setToast({
        type: 'error',
        message: result.error || 'Failed to send message. Please email directly at charangollahosuru4202@gmail.com.',
      });
    }

    setTimeout(() => {
      setToast((prev) => (prev ? null : null));
    }, 7000);
  };

  const topics = ['Web Project', 'AI Prototype', 'Collaboration', 'General Inquiry'];

  return (
    <section id="contact" className="w-full py-16 lg:py-24 border-b border-[#e5e0d8] dark:border-[#2a2b28]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div className="space-y-6">
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#9f3c16] dark:text-[#e06c43] font-semibold block mb-2">
                04 / GET IN TOUCH
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1b1c1a] dark:text-[#f2f0ed] leading-tight">
                Let's build something honest together.
              </h2>
              <p className="text-sm sm:text-base text-[#5f5e5e] dark:text-[#a8a29e] leading-relaxed">
                Whether you want to discuss a project, talk about web development and AI, or just connect, drop a note or reach out through my direct links.
              </p>
            </div>

            {/* Direct Coordinates */}
            <div className="space-y-6 pt-6 border-t border-[#e5e0d8] dark:border-[#2a2b28]">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#5f5e5e] dark:text-[#a8a29e] mb-1">
                  Electronic Mail
                </p>
                <a
                  href="mailto:charangollahosuru4202@gmail.com"
                  className="font-serif text-lg text-[#1b1c1a] dark:text-[#f2f0ed] hover:text-[#9f3c16] dark:hover:text-[#e06c43] transition-colors underline decoration-[#dec0b7] underline-offset-4"
                >
                  charangollahosuru4202@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#5f5e5e] dark:text-[#a8a29e] mb-1">
                  Location &amp; Campus
                </p>
                <p className="text-sm text-[#1b1c1a] dark:text-[#f2f0ed]">
                  Tamil Nadu, India (NIAT / Joy University)
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#5f5e5e] dark:text-[#a8a29e] mb-2">
                  Online Index
                </p>
                <ul className="space-y-2 text-xs">
                  <li>
                    <a
                      href="https://github.com/charangollahosuru4202-droid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5f5e5e] dark:text-[#a8a29e] hover:text-[#9f3c16] dark:hover:text-[#e06c43] transition-colors flex items-center justify-between py-1.5 border-b border-[#e5e0d8] dark:border-[#2a2b28]"
                    >
                      <span className="font-medium text-[#1b1c1a] dark:text-[#f2f0ed]">GitHub</span>
                      <span className="font-mono text-[11px] flex items-center gap-1">
                        github.com/charangollahosuru4202-droid
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/in/golla-hosuru-charan-260622439/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5f5e5e] dark:text-[#a8a29e] hover:text-[#9f3c16] dark:hover:text-[#e06c43] transition-colors flex items-center justify-between py-1.5 border-b border-[#e5e0d8] dark:border-[#2a2b28]"
                    >
                      <span className="font-medium text-[#1b1c1a] dark:text-[#f2f0ed]">LinkedIn</span>
                      <span className="font-mono text-[11px] flex items-center gap-1">
                        linkedin.com/in/golla-hosuru-charan
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column (Form 7 cols) */}
          <div className="lg:col-span-7 bg-[#f5f3f0] dark:bg-[#191a18] border border-[#e5e0d8] dark:border-[#2a2b28] p-8 lg:p-12">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Feedback toast */}
              {toast && (
                <div
                  className={`p-4 border text-xs sm:text-sm flex items-start gap-3 ${
                    toast.type === 'success'
                      ? 'bg-white dark:bg-[#121312] border-[#9f3c16] text-[#9f3c16] dark:text-[#e06c43]'
                      : 'bg-white dark:bg-[#121312] border-red-600 text-red-600'
                  }`}
                  role="alert"
                >
                  {toast.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  )}
                  <p>{toast.message}</p>
                </div>
              )}

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-sans uppercase tracking-wider text-[#1b1c1a] dark:text-[#f2f0ed] block font-semibold" htmlFor="name">
                    Full Name <span className="text-[#9f3c16]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (validationErrors.name) setValidationErrors((prev) => ({ ...prev, name: '' }));
                    }}
                    placeholder="e.g. Maya Iyer"
                    className="w-full px-4 py-3 bg-[#fbf9f6] dark:bg-[#141514] border border-[#e5e0d8] dark:border-[#2a2b28] text-[#1b1c1a] dark:text-[#f2f0ed] text-sm focus:border-[#1b1c1a] dark:focus:border-[#f2f0ed] focus:outline-hidden transition-colors"
                  />
                  {validationErrors.name && (
                    <p className="text-[11px] text-red-600">{validationErrors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-sans uppercase tracking-wider text-[#1b1c1a] dark:text-[#f2f0ed] block font-semibold" htmlFor="email">
                    Email Address <span className="text-[#9f3c16]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (validationErrors.email) setValidationErrors((prev) => ({ ...prev, email: '' }));
                    }}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-[#fbf9f6] dark:bg-[#141514] border border-[#e5e0d8] dark:border-[#2a2b28] text-[#1b1c1a] dark:text-[#f2f0ed] text-sm focus:border-[#1b1c1a] dark:focus:border-[#f2f0ed] focus:outline-hidden transition-colors"
                  />
                  {validationErrors.email && (
                    <p className="text-[11px] text-red-600">{validationErrors.email}</p>
                  )}
                </div>
              </div>

              {/* Topic Selector (matching template's sharp radio cards) */}
              <div className="space-y-2">
                <label className="text-[11px] font-sans uppercase tracking-wider text-[#1b1c1a] dark:text-[#f2f0ed] block font-semibold">
                  Note Subject / Topic
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {topics.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTopic(t)}
                      className={`px-3 py-2.5 text-center text-[11px] uppercase tracking-wide border transition-all cursor-pointer ${
                        topic === t
                          ? 'border-[#1b1c1a] bg-[#1b1c1a] text-[#FAF8F5] dark:border-[#f2f0ed] dark:bg-[#f2f0ed] dark:text-[#121312]'
                          : 'border-[#e5e0d8] dark:border-[#2a2b28] bg-[#fbf9f6] dark:bg-[#141514] text-[#5f5e5e] dark:text-[#a8a29e] hover:border-[#1b1c1a] dark:hover:border-[#f2f0ed]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-[11px] font-sans uppercase tracking-wider text-[#1b1c1a] dark:text-[#f2f0ed] block font-semibold" htmlFor="message">
                  Message <span className="text-[#9f3c16]">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (validationErrors.message) setValidationErrors((prev) => ({ ...prev, message: '' }));
                  }}
                  placeholder="Share a thought, project idea, or say hello..."
                  className="w-full px-4 py-3 bg-[#fbf9f6] dark:bg-[#141514] border border-[#e5e0d8] dark:border-[#2a2b28] text-[#1b1c1a] dark:text-[#f2f0ed] text-sm focus:border-[#1b1c1a] dark:focus:border-[#f2f0ed] focus:outline-hidden transition-colors resize-y"
                />
                {validationErrors.message && (
                  <p className="text-[11px] text-red-600">{validationErrors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-[#1b1c1a] text-[#FAF8F5] hover:bg-[#9f3c16] dark:bg-[#f2f0ed] dark:text-[#121312] dark:hover:bg-[#e06c43] dark:hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-3 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span>→</span>
                    </>
                  )}
                </button>

                <span className="text-[11px] text-[#5f5e5e] dark:text-[#a8a29e]">
                  Saves directly to Supabase messages table.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
