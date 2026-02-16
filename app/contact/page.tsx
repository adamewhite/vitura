// app/contact/page.tsx
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { Resend } from 'resend';
import Image from 'next/image';
import heroImage from '../../public/ed-clark-sotheby-4.jpeg';
import sidebarImage from '../../public/pinkpurpleblue.jpg';

export const metadata: Metadata = {
  title: 'Contact Us',
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
    <main className='font-primary bg-gradient-to-b from-contact-alternative via-contact-alternative to-contact-base'>
      {/* Optional status banners */}
      {status === 'sent' && (
        <div className='bg-green-50 text-green-800 px-6 py-3 border-b border-green-200'>
          Message sent. We&apos;ll get back to you shortly.
        </div>
      )}
      {status === 'error' && (
        <div className='bg-rose-50 text-rose-800 px-6 py-3 border-b border-rose-200'>
          Could not send email. Please try again.
        </div>
      )}
      {status === 'invalid' && (
        <div className='bg-amber-50 text-amber-800 px-6 py-3 border-b border-amber-200'>
          Please fill name, valid email, and message.
        </div>
      )}

      {/* HERO */}
      <section className='relative h-[100dvh] bg-contact-base border-b'>
        {/* BG image */}
        <Image
          src={heroImage}
          alt='Vitura contact background'
          fill
          priority
          sizes='100vw'
          className='object-cover transition-opacity duration-500'
        />

        {/* Legibility overlay */}
        <div className='absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.25)_30%,rgba(0,0,0,0.5))]' />

        {/* If your Header is fixed, keep content clear of it */}
        <div className='pointer-events-none absolute inset-x-0 top-0 h-20 md:h-24' />

        {/* HERO COPY */}
        <div className='relative z-10 h-full'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6'>
            <div className='mx-auto max-w-5xl text-center'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-contact-light-color [text-shadow:_0_1px_2px_rgb(0_0_0_/_30%)] text-balance font-secondary'>
                Contact Us
              </h1>

              <p className='mx-auto mt-6 max-w-3xl text-lg sm:text-2xl text-contact-light-color [text-shadow:_0_1px_6px_rgb(0_0_0_/_45%)] font-primary text-balance'>
                Tell us about your team, timelines, and what success looks like.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==== CONTENT WITH SIDEBAR ==== */}
      <div className='flex flex-col lg:flex-row'>
        {/* Left Sidebar */}
        <aside className='hidden lg:block lg:w-1/4 xl:w-1/5 sticky top-0 h-screen border-r'>
          <div className='relative h-full w-full'>
            <Image
              src={sidebarImage}
              alt='Abstract artwork'
              fill
              className='object-cover'
              sizes='25vw'
            />
          </div>
        </aside>

        {/* Main Content */}
        <div className='flex-1 lg:w-3/4 xl:w-4/5 pb-16 md:pb-24'>
          {/* FORM */}
          <section className='py-16 md:py-20 text-contact-light-color'>
            <div className='mx-auto max-w-3xl px-6 md:px-8 lg:px-20'>
              <div className='bg-contact-base shadow-xl p-8 md:p-12 lg:p-16 text-contact-light-color'>
                <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-primary text-heading-base mb-6'>
                  Get in touch
                </h2>
                <p className='text-lg md:text-xl opacity-80 font-secondary mb-12'>
                  Tell us about your team, timelines, and what success looks like.
                </p>
                <form
                  action={sendEmail}
                  className='grid grid-cols-1 gap-4 md:grid-cols-2'
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
                <label className='block text-lg font-medium text-contact-light-color font-primary'>
                  Name
                </label>
                <input
                  name='name'
                  required
                  className='mt-1 w-full border border-contact-light-color/20 px-4 py-3 text-contact-dark-color bg-contact-alternative placeholder:text-contact-dark-color/50 outline-none focus:ring-2 focus:ring-contact-light-color shadow-sm'
                  placeholder='Your name'
                />
              </div>

              <div className='md:col-span-1'>
                <label className='block text-lg font-medium text-contact-light-color font-primary'>
                  Email
                </label>
                <input
                  name='email'
                  type='email'
                  required
                  className='mt-1 w-full border border-contact-light-color/20 px-4 py-3 text-contact-dark-color bg-contact-alternative placeholder:text-contact-dark-color/50 outline-none focus:ring-2 focus:ring-contact-light-color shadow-sm'
                  placeholder='you@company.com'
                />
              </div>

              <div className='md:col-span-2'>
                <label className='block text-lg font-medium text-contact-light-color font-primary'>
                  Company / Organization (optional)
                </label>
                <input
                  name='company'
                  className='mt-1 w-full border border-contact-light-color/20 px-4 py-3 text-contact-dark-color bg-contact-alternative placeholder:text-contact-dark-color/50 outline-none focus:ring-2 focus:ring-contact-light-color shadow-sm'
                  placeholder='Company name'
                />
              </div>

              <div className='md:col-span-2'>
                <label className='block text-lg font-medium text-contact-light-color font-primary'>
                  About Your Project
                </label>
                <textarea
                  name='message'
                  required
                  rows={6}
                  className='mt-1 w-full border border-contact-light-color/20 px-4 py-3 text-contact-dark-color bg-contact-alternative placeholder:text-contact-dark-color/50 outline-none focus:ring-2 focus:ring-contact-light-color shadow-sm'
                  placeholder='What are you trying to achieve? Timelines? Constraints?'
                />
              </div>

              <div className='md:col-span-2 flex items-center justify-between'>
                <p className='text-xs text-contact-light-color/60 font-secondary'>
                  We&apos;ll only use your info to reply about this inquiry.
                </p>
                <button
                  type='submit'
                  className='rounded-full bg-button-dark-bg text-button-dark-text px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity shadow-md hover:shadow-lg'
                >
                  Send message
                </button>
              </div>
                </form>

                {/* Direct email as backup (obfuscated) */}
                <p className='mt-6 text-sm opacity-70 font-secondary'>
                  Prefer email? Reach us at{' '}
                  <EmailObfuscated
                    user='hello'
                    domain='vitura.studio'
                  />
                  .
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
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
      className='underline underline-offset-4 hover:opacity-80'
      aria-label='email address'
    >
      {user}
      {at}
      {domain.replace(/\./g, dot)}
    </a>
  );
}
