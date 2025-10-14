// app/contact/page.tsx
import { Metadata } from 'next';
import { revalidatePath } from 'next/cache';

export const metadata: Metadata = {
  title: 'Contact | Vitura',
  description: 'Tell us about your project and timelines.',
};

type ActionState = { ok: boolean; message: string };

async function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export default function ContactPage() {
  // --- Server Action (runs on server) ---
  async function sendEmail(formData: FormData): Promise<ActionState> {
    'use server';
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const company = (formData.get('company') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();
    const hp = (formData.get('website') || '').toString().trim(); // honeypot
    // lightweight rate limiting: 500–900ms delay to slow bots
    await wait(600 + Math.floor(Math.random() * 400));

    if (hp) return { ok: true, message: 'Thanks! (filtered)' }; // bot filled hidden field

    if (!name || !email || !message) {
      return { ok: false, message: 'Please fill name, email, and message.' };
    }
    // ultra-simple email check
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return { ok: false, message: 'Please enter a valid email.' };
    }

    try {
      // Send via Resend
      const apiKey = process.env.RESEND_API_KEY!;
      const to = process.env.CONTACT_TO_EMAIL!;
      if (!apiKey || !to) {
        console.error('Missing RESEND_API_KEY or CONTACT_TO_EMAIL');
        return { ok: false, message: 'Email temporarily unavailable.' };
      }

      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: `Vitura Contact <no-reply@vitura.studio>`,
          to: [to],
          reply_to: email,
          subject: `New inquiry from ${name} ${company ? `(${company})` : ''}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            company ? `Company: ${company}` : '',
            '',
            `Message:`,
            message,
          ].join('\n'),
        }),
        // prevent Next from caching this
        cache: 'no-store',
      });

      if (!res.ok) {
        const t = await res.text();
        console.error('Resend error:', t);
        return {
          ok: false,
          message: 'Could not send email. Please try again.',
        };
      }

      // Optional: revalidate a path or store to DB here
      revalidatePath('/contact');
      return {
        ok: true,
        message: 'Message sent. We’ll get back to you shortly.',
      };
    } catch (e) {
      console.error(e);
      return { ok: false, message: 'Something went wrong. Please try again.' };
    }
  }

  return (
    <main className='bg-white text-neutral-900'>
      {/* HERO */}
      <section className='border-b bg-neutral-50'>
        <div className='mx-auto max-w-7xl px-6 py-16 md:py-24'>
          <div className='mx-auto max-w-3xl text-center'>
            <h1 className='text-3xl font-extrabold tracking-tight sm:text-5xl'>
              Contact
            </h1>
            <p className='mt-4 text-neutral-600'>
              Tell us about your team, timelines, and what success looks like.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className='py-16 md:py-20'>
        <div className='mx-auto max-w-3xl px-6'>
          <form
            action={sendEmail}
            className='grid grid-cols-1 gap-4 md:grid-cols-2 rounded-2xl border bg-white p-6 shadow-sm'
          >
            {/* honeypot (hidden) */}
            <input
              type='text'
              name='website'
              tabIndex={-1}
              autoComplete='off'
              className='hidden'
              aria-hidden='true'
            />
            <div className='md:col-span-1'>
              <label className='block text-sm font-medium'>Name</label>
              <input
                name='name'
                required
                className='mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-900'
                placeholder='Your name'
              />
            </div>
            <div className='md:col-span-1'>
              <label className='block text-sm font-medium'>Email</label>
              <input
                name='email'
                type='email'
                required
                className='mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-900'
                placeholder='you@company.com'
              />
            </div>
            <div className='md:col-span-2'>
              <label className='block text-sm font-medium'>
                Company / Org (optional)
              </label>
              <input
                name='company'
                className='mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-900'
                placeholder='Company name'
              />
            </div>
            <div className='md:col-span-2'>
              <label className='block text-sm font-medium'>Project brief</label>
              <textarea
                name='message'
                required
                rows={6}
                className='mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-900'
                placeholder='What are you trying to achieve? Timelines? Constraints?'
              />
            </div>
            <div className='md:col-span-2 flex items-center justify-between'>
              <p className='text-xs text-neutral-500'>
                We’ll only use your info to reply about this inquiry.
              </p>
              <button
                type='submit'
                className='rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800'
              >
                Send message
              </button>
            </div>
          </form>

          {/* Direct email as backup (obfuscated) */}
          <p className='mt-4 text-sm text-neutral-600'>
            Prefer email? Reach us at{' '}
            <EmailObfuscated
              user='hello'
              domain='vitura.studio'
            />
            .
          </p>
        </div>
      </section>
    </main>
  );
}

/** Obfuscate email in HTML to deter basic scrapers */
function EmailObfuscated({ user, domain }: { user: string; domain: string }) {
  const at = String.fromCharCode(64);
  const dot = String.fromCharCode(46);
  const address = `${user}${at}${domain}`;
  return (
    <a
      href={`mailto:${address}`}
      className='underline underline-offset-4'
      aria-label='email address'
    >
      {user}
      {at}
      {domain.replace(/\./g, dot)}
    </a>
  );
}
