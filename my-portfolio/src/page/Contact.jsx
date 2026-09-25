import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import Reveal from '../component/Reveal';
import SpotlightCard from '../component/SpotlightCard';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatusMessage('Message sent successfully! ✅');
          e.target.reset();
        },
        () => {
          setStatusMessage('Failed to send message. Please try again. ❌');
        }
      )
      .finally(() => {
        setIsSending(false);
        setTimeout(() => setStatusMessage(''), 5000);
      });
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] placeholder-[var(--faint)] focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/20 outline-none transition';

  return (
    <section id="contact" className="relative py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-3">Let's connect</p>
          <h2 className="section-label">Get In Touch</h2>
          <p className="mt-4 text-[var(--muted)] max-w-2xl mx-auto text-lg">
            Open to full-time roles and freelance work. Have something in mind? Let's talk.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Info */}
          <Reveal>
            <div className="flex flex-col gap-5 h-full">
              <SpotlightCard className="p-7">
                <h3 className="font-display text-xl font-semibold mb-3">Let's build something great</h3>
                <p className="text-[var(--muted)] leading-relaxed">
                  I'm currently available for full-time Full Stack Developer opportunities.
                  Drop me a message and I'll get back to you soon.
                </p>
              </SpotlightCard>

              <a href="mailto:souravtiwari139@gmail.com" className="block">
                <SpotlightCard className="p-5 flex items-center gap-4">
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-violet-500/15 text-[var(--accent-strong)]">
                    <FiMail size={18} />
                  </span>
                  <div>
                    <p className="text-[var(--faint)] text-xs">Email</p>
                    <p className="text-[var(--text)] font-medium">souravtiwari139@gmail.com</p>
                  </div>
                </SpotlightCard>
              </a>

              <SpotlightCard className="p-5 flex items-center gap-4">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-cyan-500/15 text-[var(--accent-2-strong)]">
                  <FiMapPin size={18} />
                </span>
                <div>
                  <p className="text-[var(--faint)] text-xs">Location</p>
                  <p className="text-[var(--text)] font-medium">Ludhiana, Punjab, India</p>
                </div>
              </SpotlightCard>

              <div className="flex gap-3">
                <a href="https://github.com/sourav030" target="_blank" rel="noopener noreferrer" className="icon-btn flex-1" aria-label="GitHub"><FiGithub size={19} /></a>
                <a href="https://www.linkedin.com/in/sourav-kumar-tiwari-82762426b/" target="_blank" rel="noopener noreferrer" className="icon-btn flex-1" aria-label="LinkedIn"><FiLinkedin size={19} /></a>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100}>
            <SpotlightCard className="p-7 md:p-8">
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div>
                  <label className="block text-sm text-[var(--muted)] mb-2">Your Name</label>
                  <input type="text" name="user_name" required className={inputClass} placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm text-[var(--muted)] mb-2">Your Email</label>
                  <input type="email" name="user_email" required className={inputClass} placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm text-[var(--muted)] mb-2">Message</label>
                  <textarea name="message" required rows="5" className={`${inputClass} resize-none`} placeholder="Tell me about your project..." />
                </div>
                <button type="submit" disabled={isSending} className="btn btn-primary w-full disabled:opacity-60">
                  {isSending ? 'Sending...' : (<>Send Message <FiSend /></>)}
                </button>
                {statusMessage && (
                  <p className="text-center text-sm font-medium text-[var(--text)]">{statusMessage}</p>
                )}
              </form>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
