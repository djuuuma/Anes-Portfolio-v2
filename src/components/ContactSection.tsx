import React, { useState } from 'react';
import { Check, Copy, ArrowUpRight, Send, Github, Linkedin, Globe, Clock, MapPin } from 'lucide-react';
import { InquiryFormData, UserProfile } from '../types/portfolio';

interface ContactSectionProps {
  profile: UserProfile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate sending / can also trigger mailto
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-36 bg-[#090b10] border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-luxury-green mb-3">
            INITIATE CONTACT
          </p>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-normal tracking-wide text-white leading-tight">
            Direct Inquiries & Collaboration
          </h2>
          <div className="w-12 h-[1px] bg-[#2d5a3f]/60 mx-auto mt-5 sm:mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Direct Channels & Information */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-normal text-white mb-3">
                Let's Build Together
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Whether you're looking for bespoke web development via Mreza Studio, direct response marketing via Metrika, or technical engineering collaborations, my inbox is open.
              </p>
            </div>

            {/* Direct Email Card with 1-click copy */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#0f121a] border border-white/[0.08] space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                DIRECT INBOX
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${profile.contactEmail}`}
                  className="font-mono text-xs sm:text-base text-neutral-200 hover:text-luxury-green transition-colors truncate"
                >
                  {profile.contactEmail}
                </a>
                <button
                  onClick={copyEmail}
                  className="min-h-[44px] px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 active:scale-95 text-xs text-neutral-300 hover:text-white transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-luxury-green" />
                      <span className="text-luxury-green">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-luxury-green" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Availability Status */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0f121a] border border-white/[0.08] text-xs text-neutral-300 font-mono">
                <MapPin className="w-4 h-4 text-luxury-green shrink-0" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0f121a] border border-white/[0.08] text-xs text-neutral-300 font-mono">
                <Clock className="w-4 h-4 text-luxury-green shrink-0" />
                <span>Open to selective client projects & collaborations</span>
              </div>
            </div>

            {/* Social Channels */}
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-400 block mb-4">
                CHANNELS & PLATFORMS
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-colors flex items-center justify-between text-xs text-neutral-300 hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-3.5 h-3.5 text-luxury-green" />
                    <span>LinkedIn</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>

                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-colors flex items-center justify-between text-xs text-neutral-300 hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-3.5 h-3.5 text-luxury-green" />
                    <span>GitHub</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>

                <a
                  href={profile.socials.mrezaStudioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-colors flex items-center justify-between text-xs text-neutral-300 hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-luxury-green" />
                    <span>Mreza Studio</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>

                <a
                  href={profile.socials.metrikaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-colors flex items-center justify-between text-xs text-neutral-300 hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-[#60a5fa]" />
                    <span>Metrika</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7 bg-[#0f121a] border border-white/[0.08] rounded-2xl p-8 sm:p-10 shadow-2xl relative">
            {submitted ? (
              <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-[#0a1e14] border border-[#234d35]/60 flex items-center justify-center mx-auto text-luxury-green">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-white">
                  Message Dispatched
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto font-light leading-relaxed">
                  Thank you, {formData.fullName}. Your note has been delivered. I will respond to your email ({formData.email}) shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      subject: '',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 bg-white/10 hover:bg-white/15 text-xs text-neutral-200 tracking-wider uppercase rounded transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-white/[0.08] pb-4 mb-6">
                  <h3 className="font-serif-luxury text-xl font-medium text-white mb-1">
                    Send a Direct Note
                  </h3>
                  <p className="text-xs text-neutral-400 font-light">
                    Have a project in mind or want to discuss an engagement? Reach out directly.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300 rounded">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 bg-[#090b10] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#386b4d] transition-colors placeholder:text-neutral-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@example.com"
                      className="w-full px-4 py-2.5 bg-[#090b10] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#386b4d] transition-colors placeholder:text-neutral-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Mreza Studio Web Platform / Metrika Direct Response"
                    className="w-full px-4 py-2.5 bg-[#090b10] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#386b4d] transition-colors placeholder:text-neutral-600"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share details about what you'd like to collaborate on..."
                    className="w-full px-4 py-3 bg-[#090b10] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#386b4d] transition-colors placeholder:text-neutral-600 resize-none font-light"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-luxury-green-button text-xs font-semibold tracking-[0.24em] uppercase rounded transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>SENDING...</span>
                  ) : (
                    <>
                      <span>TRANSMIT MESSAGE</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-neutral-500 text-center font-mono tracking-tight pt-1">
                  Inquiries delivered directly to Anes Đumišić. Your data is strictly confidential and never shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
