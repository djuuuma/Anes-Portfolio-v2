import React, { useState } from 'react';
import { Check, Copy, ArrowUpRight, Send, Github, Linkedin, Twitter, Globe, Clock } from 'lucide-react';
import { InquiryFormData, UserProfile } from '../types/portfolio';

interface ContactSectionProps {
  profile: UserProfile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    company: '',
    projectType: 'High-Ticket Agency Project',
    budgetRange: '$15k — $30k',
    timeline: 'Immediate (Within 30 Days)',
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

    // Simulate reliable executive dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#090b10] border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-emerald-400 mb-3">
            INITIATE DIALOGUE
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-white leading-tight">
            Direct Inquiries & Executive Engagements
          </h2>
          <div className="w-12 h-[1px] bg-emerald-500/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Channels & Retainer Availability */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="font-serif-luxury text-2xl font-normal text-white mb-3">
                Selective Engagements
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                We accept a limited number of high-stakes agency client builds and technical software partnerships per quarter to ensure flawless execution and undivided attention.
              </p>
            </div>

            {/* Direct Email Card with 1-click copy */}
            <div className="p-6 rounded-xl bg-[#0f121a] border border-white/[0.08] space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                DIRECT EXECUTIVE INBOX
              </span>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm sm:text-base text-neutral-200 truncate">
                  {profile.contactEmail}
                </span>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 text-xs text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Availability Status */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0f121a] border border-white/[0.08] text-xs text-neutral-300 font-mono">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Current Capacity: 2 Client Engagements Available for Q2/Q3</span>
            </div>

            {/* Social Channels */}
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-400 block mb-4">
                EXTERNAL NETWORKS & REPOSITORIES
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-colors flex items-center justify-between text-xs text-neutral-300 hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-3.5 h-3.5 text-emerald-400" />
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
                    <Github className="w-3.5 h-3.5 text-emerald-400" />
                    <span>GitHub</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>

                <a
                  href={profile.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-colors flex items-center justify-between text-xs text-neutral-300 hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <Twitter className="w-3.5 h-3.5 text-emerald-400" />
                    <span>X / Twitter</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>

                <a
                  href={profile.socials.agencyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-colors flex items-center justify-between text-xs text-neutral-300 hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Agency Site</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-[#0f121a] border border-white/[0.08] rounded-2xl p-8 sm:p-10 shadow-2xl relative">
            {submitted ? (
              <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-white">
                  Inquiry Dispatched
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto font-light leading-relaxed">
                  Thank you, {formData.fullName}. Your brief has been routed to Anes's direct inbox. We review qualified inquiries within 24–48 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      company: '',
                      projectType: 'High-Ticket Agency Project',
                      budgetRange: '$15k — $30k',
                      timeline: 'Immediate (Within 30 Days)',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 bg-white/10 hover:bg-white/15 text-xs text-neutral-200 tracking-wider uppercase rounded transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-white/[0.08] pb-4 mb-6">
                  <h3 className="font-serif-luxury text-xl font-medium text-white mb-1">
                    Project & Collaboration Brief
                  </h3>
                  <p className="text-xs text-neutral-400 font-light">
                    Provide project context, anticipated timeline, and objectives.
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
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Marcus Aurelius"
                      className="w-full px-4 py-2.5 bg-[#090b10] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-neutral-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="marcus@company.com"
                      className="w-full px-4 py-2.5 bg-[#090b10] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-neutral-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">
                      Company / Venture
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Enterprise / Startup Name"
                      className="w-full px-4 py-2.5 bg-[#090b10] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-neutral-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">
                      Engagement Category
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#090b10] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                    >
                      <option value="High-Ticket Agency Project">High-Ticket Agency Project</option>
                      <option value="Software Architecture & Platform Build">Software Architecture & Platform Build</option>
                      <option value="Technical Advisory / Board">Technical Advisory / Board</option>
                      <option value="Keynote Speaking / Media">Keynote Speaking / Media</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">
                      Budget Scope
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#090b10] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                    >
                      <option value="$15k — $30k">$15k — $30k (Foundational)</option>
                      <option value="$30k — $60k">$30k — $60k (Enterprise Tier)</option>
                      <option value="$60k+">$60k+ (Comprehensive Agency Retainer)</option>
                      <option value="Advisory / Equity">Advisory / Equity Agreement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">
                      Target Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#090b10] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                    >
                      <option value="Immediate (Within 30 Days)">Immediate (Within 30 Days)</option>
                      <option value="Next Quarter">Next Quarter</option>
                      <option value="Flexible / Strategic Planning">Flexible / Strategic Planning</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">
                    Project Overview & Objectives *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current bottlenecks, target deliverables, or architectural vision..."
                    className="w-full px-4 py-3 bg-[#090b10] border border-white/10 rounded text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-neutral-600 resize-none font-light"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-xs font-semibold tracking-[0.2em] uppercase rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-950/40 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>DISPATCHING...</span>
                  ) : (
                    <>
                      <span>TRANSMIT EXECUTIVE BRIEF</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
