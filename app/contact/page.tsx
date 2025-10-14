// app/contact/page.tsx
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { Resend } from 'resend';

export const metadata: Metadata = {
  title: 'Contact | Vitura',
  description: 'Tell us about your project and timelines.',
};

// --- Server Action (must return void | Promise<void>) ---
async function sendEmail(formData: FormData): Promise<void> {
  'use server';

  // honeypot
  const hp = (formData.get('website') || '').toString().trim();
  if (hp) {
    redirect('/contact?status=sent'); // silently accept bots
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
      // If your domain isn't verified in Resend yet, temporarily use: "Vitura <onboarding@resend.dev>"
      from: 'Vitura <hello@vitura.studio>',
      to: [process.env.CONTACT_TO_EMAIL!],
      reply_to: email,
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
    <main className='bg-white text-neutral-900'>
      {/* Optional status banners */}
      {status === 'sent' && (
        <div className='bg-green-50 text-green-800 px-6 py-3'>
          Message sent. We’ll get back to you shortly.
        </div>
      )}
      {status === 'error' && (
        <div className='bg-rose-50 text-rose-800 px-6 py-3'>
          Could not send email. Please try again.
        </div>
      )}
      {status === 'invalid' && (
        <div className='bg-amber-50 text-amber-800 px-6 py-3'>
          Please fill name, valid email, and message.
        </div>
      )}

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
