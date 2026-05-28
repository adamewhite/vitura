// app/contact/page.tsx
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { Resend } from 'resend';
import { Reveal, RevealGroup, RevealItem } from '../styles/Reveal';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Tell us about your project and timelines.',
};

// --- Server Action ---
async function sendEmail(formData: FormData): Promise<void> {
  'use server';

  const hp = (formData.get('website') || '').toString().trim();
  if (hp) {
    redirect('/contact?status=sent');
  }

  const name = (formData.get('name') || '').toString().trim();
  const email = (formData.get('email') || '').toString().trim();
  const company = (formData.get('company') || '').toString().trim();
  const message = (formData.get('message') || '').toString().trim();

  if (!name || !email || !message) {
    redirect('/contact?status=invalid');
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    redirect('/contact?status=invalid');
  }

  const resend = new Resend(process.env.RESEND_API_KEY!);

  try {
    const { error } = await resend.emails.send({
      from: 'Vitura <hello@vitura.studio>',
      to: [process.env.CONTACT_TO_EMAIL!],
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` (${company})` : ''}`,
      text: `Name: ${name}
Email: ${email}
${company ? `Company: ${company}\n` : ''}

${message}`,
    });

    if (error) {
      console.error('Resend error:', error);
      redirect('/contact?status=error');
    }

    redirect('/contact?status=sent');
  } catch (e) {
    console.error(e);
    redirect('/contact?status=error');
  }
}

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { status?: string };
}) {
  const status = searchParams?.status;

  return (
    <main className='bg-paper text-navy font-primary'>
      {/* Status banners */}
      {status === 'sent' && (
        <div className='border-b border-rule bg-mist'>
          <div className='mx-auto max-w-6xl px-6 md:px-10 py-4 font-secondary text-[11px] uppercase tracking-[0.28em] text-teal'>
            Message sent. We&apos;ll get back to you shortly.
          </div>
        </div>
      )}
      {status === 'error' && (
        <div className='border-b border-rule bg-mist'>
          <div className='mx-auto max-w-6xl px-6 md:px-10 py-4 font-secondary text-[11px] uppercase tracking-[0.28em] text-navy'>
            Could not send email. Please try again.
          </div>
        </div>
      )}
      {status === 'invalid' && (
        <div className='border-b border-rule bg-mist'>
          <div className='mx-auto max-w-6xl px-6 md:px-10 py-4 font-secondary text-[11px] uppercase tracking-[0.28em] text-blue'>
            Please fill name, valid email, and message.
          </div>
        </div>
      )}

      {/* HERO */}
      <section className='border-b border-rule'>
        <div className='mx-auto max-w-6xl px-6 md:px-10 pt-20 md:pt-32 pb-16 md:pb-24'>
          <Reveal variant='up'>
            <div className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue mb-10'>
              Vol. IV — Correspondence
            </div>
          </Reveal>
          <Reveal variant='up' delay={0.1}>
            <h1 className='text-5xl md:text-7xl font-normal leading-[1.02] tracking-tight max-w-5xl'>
              Let&apos;s <em className='text-indigo'>talk</em>.
            </h1>
          </Reveal>
          <Reveal variant='up' delay={0.25}>
            <p className='mt-10 max-w-2xl text-xl md:text-2xl italic leading-relaxed text-blue'>
              Tell us about your team, timelines, and what success looks like.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FORM */}
      <section>
        <div className='mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-32'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            {/* Left column — context */}
            <Reveal variant='left' className='lg:col-span-5'>
              <div className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue mb-6'>
                Send a note
              </div>
              <p className='text-2xl md:text-3xl font-normal leading-snug text-navy'>
                We reply within two working days. For larger engagements, we
                usually start with a thirty-minute call to see if there&apos;s
                a fit.
              </p>

              <div className='mt-12 relative aspect-square border border-rule overflow-hidden max-w-sm'>
                <Image
                  src='/pinkpurpleblue.jpg'
                  alt=''
                  fill
                  sizes='(min-width: 1024px) 30vw, 80vw'
                  className='object-cover'
                />
              </div>

              <div className='mt-12 text-base font-secondary'>
                <div className='text-[11px] uppercase tracking-[0.22em] text-blue'>
                  Inquiries
                </div>
                <div className='mt-2 font-primary'>
                  <EmailObfuscated user='hello' domain='vitura.studio' />
                </div>
              </div>
            </Reveal>

            {/* Right column — form */}
            <RevealGroup
              stagger={0.08}
              delay={0.15}
              className='lg:col-span-7 lg:col-start-7'
            >
              <form action={sendEmail} className='space-y-8'>
                {/* honeypot */}
                <input
                  type='text'
                  name='website'
                  tabIndex={-1}
                  autoComplete='off'
                  className='hidden'
                  aria-hidden='true'
                />

                <RevealItem>
                  <Field name='name' label='Name' required />
                </RevealItem>
                <RevealItem>
                  <Field name='email' label='Email' type='email' required />
                </RevealItem>
                <RevealItem>
                  <Field name='company' label='Company / Organization (optional)' />
                </RevealItem>
                <RevealItem>
                  <div>
                    <label
                      htmlFor='message'
                      className='block font-secondary text-[11px] uppercase tracking-[0.28em] text-blue mb-3'
                    >
                      Tell us about your project
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      required
                      rows={5}
                      placeholder='What are you trying to achieve? Timelines? Constraints?'
                      className='w-full bg-transparent border-b border-rule py-3 outline-none text-base font-primary text-navy placeholder:text-blue/60 placeholder:italic resize-none focus:border-navy transition-colors'
                    />
                  </div>
                </RevealItem>

                <RevealItem>
                  <div className='pt-4 flex flex-wrap items-center justify-between gap-6'>
                    <p className='text-xs font-secondary text-blue max-w-xs'>
                      We&apos;ll only use your info to reply about this
                      inquiry.
                    </p>
                    <button
                      type='submit'
                      className='font-secondary text-[11px] uppercase tracking-[0.28em] px-8 py-4 bg-navy text-paper hover:opacity-90 transition-opacity'
                    >
                      Send message
                    </button>
                  </div>
                </RevealItem>
              </form>
            </RevealGroup>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({
  name,
  label,
  type = 'text',
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className='block font-secondary text-[11px] uppercase tracking-[0.28em] text-blue mb-3'
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className='w-full bg-transparent border-b border-rule py-3 outline-none text-base font-primary text-navy focus:border-navy transition-colors'
      />
    </div>
  );
}

function EmailObfuscated({ user, domain }: { user: string; domain: string }) {
  const at = String.fromCharCode(64);
  const dot = String.fromCharCode(46);
  const address = `${user}${at}${domain}`;
  return (
    <a
      href={`mailto:${address}`}
      className='border-b border-navy hover:text-teal hover:border-teal transition-colors'
      aria-label='email address'
    >
      {user}
      {at}
      {domain.replace(/\./g, dot)}
    </a>
  );
}
