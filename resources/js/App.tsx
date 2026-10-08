import { FormEvent, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, Check, Cpu, Eye, EyeOff, Headphones, LockKeyhole, Mail, MapPin, Monitor, Phone, ShoppingCart, Star, ShieldCheck, UserPlus, LogIn, Wrench, X, Zap } from 'lucide-react';

const services = [
  { icon: Wrench, title: 'Computer troubleshooting', text: 'Diagnose hardware and software problems with clear, dependable repairs.', price: 'From ₱500' },
  { icon: Cpu, title: 'Deep cleaning', text: 'Remove dust and improve airflow so your CPU or GPU runs cooler.', price: 'From ₱800' },
  { icon: ShoppingCart, title: 'Parts shop', text: 'Browse tested, genuine computer parts and everyday accessories.', price: 'Browse parts' },
  { icon: ShieldCheck, title: 'Custom PC builds', text: 'Get a balanced build around your budget, games, and workflow.', price: 'Request a quote' },
];

const products = [
  ['Ryzen 5 5600G', 'AMD · AM4 · 6 cores', '₱6,450', 'CPU', 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=700&q=85'],
  ['Core i5-12400F', 'Intel · LGA1700 · 6 cores', '₱8,990', 'CPU', 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=700&q=85'],
  ['RTX 4060 8GB', 'MSI Ventus · GDDR6', '₱19,990', 'GPU', 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=700&q=85'],
  ['RX 7600 8GB', 'Sapphire · GDDR6 · PCIe 4.0', '₱16,490', 'GPU', 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=700&q=85'],
  ['16GB DDR4 3200', 'Kingston Fury · 2×8GB', '₱2,150', 'Memory', 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=700&q=85'],
  ['32GB DDR5 6000', 'Corsair Vengeance · 2×16GB', '₱5,490', 'Memory', 'https://images.unsplash.com/photo-1531492746076-161ca9b9b6f1?auto=format&fit=crop&w=700&q=85'],
  ['1TB NVMe SSD', 'WD Blue · PCIe Gen 3', '₱3,290', 'Storage', 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=700&q=85'],
  ['2TB SATA HDD', 'Seagate Barracuda · 7200 RPM', '₱3,850', 'Storage', 'https://images.unsplash.com/photo-1601737487795-dab272f52420?auto=format&fit=crop&w=700&q=85'],
  ['B550M WiFi Motherboard', 'AM4 · WiFi 6 · DDR4', '₱6,290', 'Motherboard', 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=85'],
  ['650W 80+ Bronze PSU', 'Cooler Master · Semi-modular', '₱3,990', 'PSU', 'https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=700&q=85'],
  ['240mm ARGB Liquid Cooler', 'DeepCool · AM4 / AM5 / LGA1700', '₱4,750', 'Accessories', 'https://images.unsplash.com/photo-1587202372583-49330a15584d?auto=format&fit=crop&w=700&q=85'],
  ['Mechanical Gaming Keyboard', 'Red switches · RGB backlight', '₱1,690', 'Accessories', 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=85'],
];

const featuredProof = [
  { label: '01 / DEEP CLEANING', title: 'From dusty to ready.', text: 'A full internal clean that brings airflow and cooling back to life.', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85' },
  { label: '02 / TROUBLESHOOTING', title: 'Find the real issue.', text: 'Careful diagnostics and clear answers before any repair begins.', image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=1200&q=85' },
  { label: '03 / CUSTOM BUILD', title: 'Built around you.', text: 'Thoughtful parts matching for gaming, editing, work, and growth.', image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=1200&q=85' },
];

const reviews = [
  { quote: 'They explained the problem in a way I actually understood. My PC was ready the same afternoon.', name: 'Alyssa M.', service: 'Troubleshooting' },
  { quote: 'Built my first gaming PC with TwoTech. Great parts, fair price, and zero pressure to overspend.', name: 'Jolo R.', service: 'Custom PC build' },
  { quote: 'The deep clean made a huge difference. Quiet fans and temperatures dropped right away.', name: 'Kim C.', service: 'Deep cleaning' },
];

type AuthMode = 'login' | 'register' | 'forgot';

function AuthScreen({ mode, onChangeMode, onBack }: { mode: AuthMode; onChangeMode: (mode: AuthMode) => void; onBack: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const content = {
    login: {
      title: 'Welcome Back!',
      description: 'Log in to your account to continue\nand manage your services.',
      action: 'Log In',
    },
    register: {
      title: 'Create Account',
      description: 'Sign up to book services and manage\nyour PC with ease.',
      action: 'Create Account',
    },
    forgot: {
      title: 'Forgot Password?',
      description: 'Enter your email and we’ll send you a\nlink to reset your password.',
      action: 'Send Reset Link',
    },
  }[mode];

  const features = [
    { icon: ShieldCheck, title: 'PC Repair', text: 'Fixing issues,\nrestoring performance' },
    { icon: Cpu, title: 'Maintenance', text: 'Keep your system\nrunning smoothly' },
    { icon: Zap, title: 'Upgrades', text: 'Better speed,\nmore power' },
    { icon: Headphones, title: 'Technical Support', text: 'Quick help,\nwhenever you need it' },
  ];

  return (
    <div className="auth-page min-h-screen px-4 py-8 sm:px-8 lg:px-12">
      <div className="auth-orb auth-orb-top" /><div className="auth-orb auth-orb-bottom" />
      <div className="auth-shell mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-[920px] items-center justify-center">
        <div className="auth-card grid w-full overflow-hidden rounded-[9px] bg-white shadow-[0_18px_55px_rgba(33,67,118,.13)] md:grid-cols-[1.06fr_.94fr]">
          <div className="auth-visual relative hidden min-h-[560px] overflow-hidden text-white md:flex md:flex-col md:justify-between">
            <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1100&q=90" alt="PC technician working at a computer" className="absolute inset-0 h-full w-full object-cover object-center [filter:sepia(.45)_saturate(1.15)_brightness(.82)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,36,31,.86)_0%,rgba(36,36,31,.3)_47%,rgba(36,36,31,.95)_100%)]" />
            <div className="relative z-10 p-10">
              <div className="flex items-center gap-3"><Monitor className="text-[#eab308]" size={38} strokeWidth={2.1} /><div><div className="text-[27px] font-extrabold leading-none tracking-[-.06em]">PC <span className="text-white">Services</span></div><div className="mt-1 text-[10px] tracking-wide text-[#d8d2bd]">Fast. Reliable. Professional.</div></div></div>
              <h2 className="mt-12 text-[37px] font-extrabold leading-[1.03] tracking-[-.055em]">Your PC,<br /><span className="text-[#eab308]">Our Priority</span></h2>
              <p className="mt-4 max-w-[260px] text-[13px] leading-5 text-[#e7e1cf]">We provide expert PC repair, maintenance, and technical support to keep you connected and productive.</p>
            </div>
            <div className="relative z-10 grid grid-cols-4 gap-2 px-8 pb-9 text-center">{features.map(({ icon: Icon, title, text }) => <div key={title}><div className="mx-auto grid size-9 place-items-center rounded-lg border border-white/65 bg-black/35 text-white"><Icon size={19} /></div><strong className="mt-2 block text-[10px] text-white">{title}</strong><span className="mt-1 block whitespace-pre-line text-[8px] leading-3 text-white/75">{text}</span></div>)}</div>
          </div>

          <div className="relative bg-white px-7 py-8 sm:px-12 sm:py-11">
            <button type="button" onClick={onBack} className="absolute right-7 top-6 text-xs font-semibold text-[#77849d] transition hover:text-[#1d2a42]">Back to home</button>
            <div className="flex items-center gap-3 md:hidden"><Monitor className="text-[#c8940d]" size={30} /><strong className="text-2xl tracking-[-.06em] text-ink">PC <span className="text-[#c8940d]">Services</span></strong></div>
            <div className="mt-12 sm:mt-7"><h1 className="text-[25px] font-extrabold tracking-[-.04em] text-ink sm:text-[27px]">{content.title}</h1><p className="mt-2 whitespace-pre-line text-[12px] leading-5 text-[#756f5b]">{content.description}</p></div>

            {submitted ? <div className="mt-8 rounded-lg border border-[#b8dbca] bg-[#effaf3] p-5 text-sm leading-6 text-[#39714e]"><strong className="block text-[#183c2a]">{mode === 'forgot' ? 'Check your inbox.' : 'Thanks for signing up.'}</strong>{mode === 'forgot' ? 'If an account exists for that email, you will receive a reset link shortly.' : 'Your account form was submitted successfully. We’ll be ready when you are.'}<button type="button" onClick={onBack} className="mt-4 block font-bold underline">Return to home</button></div> : <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
              {mode === 'register' && <label className="auth-field-label">Full Name<div className="auth-input-wrap"><UserPlus size={17} /><input required name="name" placeholder="Enter your full name" /></div></label>}
              {mode === 'register' && <label className="auth-field-label">Contact Number<div className="auth-input-wrap"><Phone size={17} /><input required type="tel" name="contact" placeholder="Enter your contact number" /></div></label>}
              <label className="auth-field-label">Email Address<div className="auth-input-wrap"><Mail size={17} /><input required type="email" name="email" placeholder="Enter your email address" /></div></label>
              {mode !== 'forgot' && <label className="auth-field-label">Password<div className="auth-input-wrap"><LockKeyhole size={17} /><input required minLength={8} type={showPassword ? 'text' : 'password'} name="password" placeholder="Enter your password" /><button type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}</button></div></label>}
              {mode === 'register' && <label className="auth-field-label">Confirm Password<div className="auth-input-wrap"><LockKeyhole size={17} /><input required minLength={8} type="password" name="password_confirmation" placeholder="Confirm your password" /></div></label>}
              {mode === 'login' && <div className="flex items-center justify-between text-[10px] text-[#53617a]"><label className="flex items-center gap-2"><input type="checkbox" className="auth-checkbox" /> Remember me</label><button type="button" onClick={() => onChangeMode('forgot')} className="font-semibold text-[#2388f4] hover:underline">Forgot password?</button></div>}
              <button type="submit" className="auth-submit w-full">{content.action}<ArrowRight size={16} /></button>
            </form>}

            {!submitted && <div className="mt-6 text-center text-[10px] text-[#8a96aa]">{mode === 'login' && <>Don't have an account? <button type="button" onClick={() => onChangeMode('register')} className="font-semibold text-[#2388f4] hover:underline">Create an account</button></>}{mode === 'register' && <>Already have an account? <button type="button" onClick={() => onChangeMode('login')} className="font-semibold text-[#2388f4] hover:underline">Log in</button></>}{mode === 'forgot' && <>Remembered your password? <button type="button" onClick={() => onChangeMode('login')} className="font-semibold text-[#2388f4] hover:underline">Log in</button></>}</div>}
            {mode === 'login' && <div className="mt-5 flex items-center justify-center gap-1 text-[9px] text-[#94a0b1]"><Check size={12} className="text-[#2388f4]" /> Secure and reliable service</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All parts');
  const [reviewIndex, setReviewIndex] = useState(0);
  const [accountPromptOpen, setAccountPromptOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode | null>(null);
  const featured = featuredProof[featuredIndex];
  const visibleProducts = selectedCategory === 'All parts'
    ? products
    : products.filter(([, , , category]) => category === selectedCategory);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFeaturedIndex((current) => (current + 1) % featuredProof.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setReviewIndex((current) => (current + 1) % reviews.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  if (authMode) {
    return <AuthScreen mode={authMode} onChangeMode={setAuthMode} onBack={() => setAuthMode(null)} />;
  }

  return (
    <>
      <header className="border-b border-[#ded8c8] bg-[#f8f5ec]/95">
        <nav className="container-page flex h-[82px] items-center justify-between gap-8">
          <a className="group flex shrink-0 items-center gap-3" href="#">
            <img src="/images/two-tech-logo.jpg" alt="TwoTech Computer Engineers Repair Services" className="size-12 rounded-full border-2 border-[#eab308] object-cover shadow-[3px_3px_0_#24241f] transition group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-[1px_1px_0_#24241f]" />
            <span className="leading-none"><strong className="block text-[22px] font-extrabold tracking-[-.07em]">TWOTECH</strong><small className="mt-1 block text-[7px] font-bold tracking-[.16em] text-[#b08412]">COMPUTER SERVICE & PARTS</small></span>
          </a>
          <div className="hidden items-center gap-1 rounded-full border border-[#ded8c8] bg-white/60 p-1 text-[11px] font-bold text-[#514c3e] lg:flex">
            <a className="rounded-full bg-ink px-4 py-2 text-white shadow-sm" href="#">Home</a>
            <a className="rounded-full px-4 py-2 transition hover:bg-[#fde68a]" href="#services">Services</a>
            <a className="rounded-full px-4 py-2 transition hover:bg-[#fde68a]" href="#parts">Parts Shop</a>
            <a className="rounded-full px-4 py-2 transition hover:bg-[#fde68a]" href="#build">Custom Build</a>
            <a className="rounded-full px-4 py-2 transition hover:bg-[#fde68a]" href="#reviews">Reviews</a>
            <a className="rounded-full px-4 py-2 transition hover:bg-[#fde68a]" href="#contact">About</a>
          </div>
          <div className="flex shrink-0 items-center gap-3 text-xs font-bold">
            <span className="hidden border-r border-[#ded8c8] pr-3 text-right leading-4 text-[#756f5b] xl:block"><b className="block text-[10px] text-ink">OPEN TODAY</b>09:00 — 18:00</span>
            <button type="button" className="btn-primary rounded-xl px-4 py-3" onClick={() => setAccountPromptOpen(true)}><CalendarDays size={14} /> <span className="hidden sm:inline">Book a Service</span><ArrowUpRight size={14} /></button>
          </div>
        </nav>
      </header>

      <main>
        <div className="overflow-hidden border-b border-[#ded8c8]">
        <section className="grid w-full min-h-[520px] overflow-hidden border-y border-[#ded8c8] lg:grid-cols-[43%_57%]">
          <div className="relative z-10 flex flex-col justify-center bg-[#f8f5ec] py-9 pl-6 pr-8 lg:pl-[max(1.5rem,calc((100vw-1230px)/2+1.5rem))]"><div className="mono-label mb-3 text-[#b08412]">Fast &nbsp;/&nbsp; Reliable &nbsp;/&nbsp; Professional</div><h1 className="max-w-xl text-[39px] font-extrabold leading-[.96] tracking-[-.07em] md:text-[50px]">Your Computer<br /><span className="text-[.88em] text-[#eab308]">Deserves the Best</span></h1><p className="mt-4 max-w-md text-[11px] leading-5 text-[#756f5b]">We provide expert computer repair, cleaning, and custom PC builds with high-quality parts and trusted service. Keep your setup running at its best!</p><div className="mt-5 flex gap-3"><button type="button" className="btn-primary px-4 py-2.5" onClick={() => setAccountPromptOpen(true)}><CalendarDays size={13} /> Book an Appointment <ArrowUpRight size={13} /></button><a className="btn-secondary px-4 py-2.5" href="#parts"><ShoppingCart size={13} /> Browse Parts</a></div><div className="mt-5 flex gap-5 border-t border-[#ded8c8] pt-3"><div><strong className="block text-sm">☆ &nbsp;4.9/5</strong><small className="text-[9px] text-[#817966]">Customer Rating</small></div><div><strong className="block text-sm">♧ &nbsp;2,400+</strong><small className="text-[9px] text-[#817966]">Devices Serviced</small></div><div><strong className="block text-sm">◷ &nbsp;Same Day</strong><small className="text-[9px] text-[#817966]">Quick Diagnostics</small></div></div><div className="mt-5 flex items-center justify-between rounded-lg bg-ink px-3 py-2 text-[10px] text-[#f8f5ec]"><span><b className="text-[#f4d34d]">Free diagnosis</b> on approved repairs</span><button type="button" className="font-mono uppercase tracking-[.08em] text-[#f4d34d]" onClick={() => setAccountPromptOpen(true)}>Claim slot →</button></div></div>
          <div className="relative min-h-[520px] overflow-hidden"><img src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1600&q=90" alt="Technician repairing a desktop computer" className="absolute inset-0 h-full w-full object-cover object-center [filter:sepia(.62)_saturate(1.22)_hue-rotate(345deg)_brightness(1.04)]" /><div className="absolute inset-0 bg-gradient-to-r from-[#f8f5ec] via-[#f8f5ec28] to-[#eab30818]" /><div className="absolute bottom-4 right-5 rounded-lg bg-[#24241fd9] px-3 py-2 text-white"><div className="font-mono text-[8px] tracking-[.1em] text-[#eab308]">TECHNICIAN AT WORK</div><div className="mt-1 text-xs font-extrabold">Better performance.<br />Longer lifespan.</div></div><div className="absolute bottom-3 right-3 flex gap-1"><span className="h-1.5 w-5 rounded-full bg-[#eab308]" /><span className="size-1.5 rounded-full bg-white/80" /><span className="size-1.5 rounded-full bg-white/80" /></div></div>
        </section>

        <section id="services" className="bg-white py-12"><div className="container-page"><div className="mb-7 flex items-end gap-8"><div><div className="mono-label text-[#b08412]">Our services</div><h2 className="mt-2 text-4xl font-extrabold tracking-[-.06em]">What We <span className="text-[#eab308]">Offer</span></h2></div><p className="max-w-xs border-l border-[#ded8c8] pl-5 text-[11px] leading-5 text-[#756f5b]">From quick fixes to full system builds, we've got you covered. Choose a service and let us handle the rest.</p></div><div className="grid grid-cols-1 gap-4 md:grid-cols-4">{services.map(({ icon: Icon, title, text, price }) => <article className="group relative rounded-xl border border-[#ded8c8] bg-[#fdfbf5] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#eab308] hover:shadow-lg hover:shadow-[#24241f12]" key={title}><div className="mb-5 grid size-11 place-items-center rounded-full bg-[#fde68a] text-[#24241f] transition group-hover:bg-[#eab308]"><Icon size={21} /></div><h3 className="max-w-[150px] text-[13px] font-extrabold leading-4">{title}</h3><p className="mt-2 min-h-10 text-[10px] leading-4 text-[#756f5b]">{text}</p><strong className="mt-4 block text-[10px] font-bold text-[#b08412]">{price}</strong><span className="absolute bottom-4 right-4 grid size-7 place-items-center rounded-full bg-[#eab308] text-[13px] transition group-hover:scale-110">→</span></article>)}</div></div></section>

        <section className="bg-[#24241f] py-9 text-white"><div className="container-page grid gap-6 md:grid-cols-[1.25fr_repeat(3,1fr)] md:items-center"><div><div className="mono-label text-[#eab308]">Why choose us</div><h3 className="mt-1 text-xl font-extrabold">Trusted by Gamers,<br />Creators and <span className="text-[#eab308]">Professionals</span></h3></div><div className="border-l border-white/15 pl-4 text-[10px]"><b className="block text-[#eab308]">✦ Skilled Technicians</b><span className="text-[#c9c0a5]">Experienced and certified experts</span></div><div className="border-l border-white/15 pl-4 text-[10px]"><b className="block text-[#eab308]">◆ Quality Parts</b><span className="text-[#c9c0a5]">Only genuine components</span></div><div className="border-l border-white/15 pl-4 text-[10px]"><b className="block text-[#eab308]">♢ Honest Service</b><span className="text-[#c9c0a5]">Transparent service and support</span></div></div></section>
        </div>

        <section id="parts" className="py-24"><div className="container-page"><div className="mb-9 flex items-end justify-between"><div><div className="mono-label text-[#b08412]">The parts shop</div><h2 className="mt-2 text-4xl font-extrabold tracking-[-.06em]">Build it better.</h2></div><p className="max-w-xs text-[13px] leading-6 text-[#756f5b]">Quality components from brands we trust, checked and ready for your next upgrade.</p></div><div className="grid gap-7 lg:grid-cols-[180px_1fr]"><div className="flex gap-2 overflow-auto lg:flex-col">{['All parts', 'CPU', 'GPU', 'Memory', 'Storage', 'Motherboard', 'PSU', 'Accessories'].map((category) => <button type="button" onClick={() => setSelectedCategory(category)} className={`whitespace-nowrap rounded-lg px-3 py-3 text-left text-xs font-bold transition ${selectedCategory === category ? 'bg-ink text-[#fffbea]' : 'text-[#756f5b] hover:bg-[#fde68a]'}`} key={category}>{category}</button>)}</div><div className="grid min-h-[390px] grid-cols-2 content-start gap-4 md:grid-cols-4">{visibleProducts.map(([name, detail, price, category, image], index) => <article className="group overflow-hidden rounded-xl border border-[#e5dcc0] bg-gradient-to-br from-[#fffef9] to-[#f8f2df] shadow-[0_10px_25px_#9d854018]" key={name}><div className="relative h-36 overflow-hidden bg-[#fff3b5]"><img src={image} alt={name} className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-[#eab3081c]" /></div><div className="p-4"><h3 className="text-[13px] font-bold">{name}</h3><p className="my-2 text-[11px] text-[#756f5b]">{detail}</p><div className="flex justify-between"><strong className="text-sm text-[#ad7b05]">{price}</strong><span className="font-mono text-[10px] text-[#458648]">IN STOCK</span></div></div></article>)}</div></div></div></section>

        <section className="bg-[#f1ead3] py-20"><div className="container-page grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><div className="mono-label text-[#b08412]">Proof of service</div><h2 className="mt-2 text-4xl font-extrabold leading-none tracking-[-.06em]">Real work.<br />Visible results.</h2><p className="mt-5 max-w-sm text-[13px] leading-6 text-[#756f5b]">Meet the people behind every clean, repair, and custom build. These featured technician photos are hardcoded for now.</p><div className="mt-6 flex items-center gap-3 text-xs font-bold text-[#a27608]"><span className="size-2 rounded-full bg-[#d2a51a] shadow-[0_0_10px_#d2a51a]" /> Our technicians at work</div></div><div className="relative min-h-[310px] overflow-hidden rounded-2xl bg-cover bg-center p-7 shadow-[0_18px_40px_#6d5b1f2b] transition-all duration-500" style={{ backgroundImage: `linear-gradient(90deg, rgba(34, 30, 20, .8), rgba(34, 30, 20, .18)), url("${featured.image}")` }} key={featuredIndex}><div className="relative z-10 flex h-full flex-col justify-between"><span className="font-mono text-[10px] tracking-[.1em] text-[#fff2a0]">{featured.label}</span><div><h3 className="text-2xl font-extrabold tracking-[-.04em] text-white">{featured.title}</h3><p className="mt-2 max-w-xs text-xs leading-5 text-[#fff5c5]">{featured.text}</p></div></div><div className="absolute bottom-6 right-6 z-20 flex items-center gap-2"><button type="button" aria-label="Previous featured picture" onClick={() => setFeaturedIndex((featuredIndex - 1 + featuredProof.length) % featuredProof.length)} className="grid size-8 place-items-center rounded-full bg-[#fffdf2] text-[#29281f] transition hover:bg-[#f2d44d]"><ArrowLeft size={14} /></button><div className="flex gap-1.5">{featuredProof.map((item, index) => <button type="button" aria-label={`Show featured picture ${index + 1}`} key={item.label} onClick={() => setFeaturedIndex(index)} className={`size-2 rounded-full transition ${index === featuredIndex ? 'scale-125 bg-white' : 'bg-white/50'}`} />)}</div><button type="button" aria-label="Next featured picture" onClick={() => setFeaturedIndex((featuredIndex + 1) % featuredProof.length)} className="grid size-8 place-items-center rounded-full bg-[#fffdf2] text-[#29281f] transition hover:bg-[#f2d44d]"><ArrowRight size={14} /></button></div></div></div></section>

        <section id="build" className="bg-gradient-to-br from-[#f5d957] via-[#d0a41a] to-[#9a7010] py-24"><div className="container-page grid items-center gap-12 lg:grid-cols-2"><div><div className="mono-label text-[#fff8d4]">Your build, your way</div><h2 className="mt-3 text-5xl font-extrabold leading-none tracking-[-.06em] text-white">Make room for what matters.</h2><p className="mt-5 max-w-sm text-sm leading-7 text-[#fff8d4]">Tell us how you work and play. We’ll put together a practical, upgrade-ready build that fits your budget.</p></div><div className="rounded-xl border border-[#ede2bf] bg-[#fffdf7ee] p-7 shadow-2xl"><h3 className="text-lg font-bold">Start a custom build</h3><div className="mt-5 grid gap-3 sm:grid-cols-2"><input className="rounded-md border border-[#ded5b9] bg-[#fffdf7] p-3 text-xs" placeholder="Your name" /><input className="rounded-md border border-[#ded5b9] bg-[#fffdf7] p-3 text-xs" placeholder="Email / phone" /><select className="rounded-md border border-[#ded5b9] bg-[#fffdf7] p-3 text-xs"><option>Gaming</option><option>Office & study</option><option>Editing</option></select><select className="rounded-md border border-[#ded5b9] bg-[#fffdf7] p-3 text-xs"><option>₱30,000 – ₱50,000</option><option>₱50,000+</option></select><textarea className="min-h-20 rounded-md border border-[#ded5b9] bg-[#fffdf7] p-3 text-xs sm:col-span-2" placeholder="Preferred components and requirements..." /></div><button className="btn-primary mt-4 w-full justify-center">Request my quotation <ArrowUpRight size={14} /></button></div></div></section>

        <section id="reviews" className="bg-[#fffdf7] py-24"><div className="container-page"><div className="mb-9 flex items-end justify-between"><div><div className="mono-label text-[#b08412]">From the community</div><h2 className="mt-2 text-4xl font-extrabold tracking-[-.06em]">People say it best.</h2></div><div className="flex gap-2"><button type="button" aria-label="Previous review" onClick={() => setReviewIndex((reviewIndex - 1 + reviews.length) % reviews.length)} className="grid size-9 place-items-center rounded-full border border-[#ded8c8] transition hover:bg-[#fde68a]"><ArrowLeft size={15} /></button><button type="button" aria-label="Next review" onClick={() => setReviewIndex((reviewIndex + 1) % reviews.length)} className="grid size-9 place-items-center rounded-full bg-ink text-white transition hover:bg-[#eab308] hover:text-ink"><ArrowRight size={15} /></button></div></div><div className="grid gap-4 md:grid-cols-3">{reviews.map((review, index) => <article className={`rounded-xl border border-[#e5dcc0] bg-gradient-to-br from-[#fffef9] to-[#f8f2df] p-6 transition duration-500 ${index === reviewIndex ? 'md:-translate-y-1 md:border-[#eab308] md:shadow-lg' : 'opacity-75'}`} key={review.quote}><div className="flex gap-1 text-[#c8940d]">{Array.from({ length: 5 }).map((_, star) => <Star size={13} fill="currentColor" key={star} />)}</div><blockquote className="my-5 min-h-12 text-sm leading-6 text-[#756f5b]">“{review.quote}”</blockquote><strong className="block text-xs">{review.name}</strong><span className="mt-1 block font-mono text-[9px] uppercase tracking-[.1em] text-[#b08412]">{review.service}</span></article>)}</div><div className="mt-6 flex justify-center gap-2">{reviews.map((review, index) => <button type="button" aria-label={`Show review from ${review.name}`} onClick={() => setReviewIndex(index)} className={`h-2 rounded-full transition-all ${index === reviewIndex ? 'w-6 bg-[#eab308]' : 'w-2 bg-[#ded8c8]'}`} key={review.name} />)}</div></div></section>
        <section id="contact" className="bg-[#f1ead3] py-20"><div className="container-page grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-stretch"><div><div className="mono-label text-[#b08412]">Find our shop</div><h2 className="mt-2 text-4xl font-extrabold leading-none tracking-[-.06em]">Let’s keep your<br /><span className="text-[#d39c08]">setup running.</span></h2><p className="mt-5 max-w-sm text-[13px] leading-6 text-[#756f5b]">Visit TwoTech for computer repair, parts, deep cleaning, and custom builds.</p><div className="mt-7 space-y-4 text-xs text-[#514c3e]"><a className="flex items-start gap-3 transition hover:text-[#b08412]" href="https://maps.app.goo.gl/KLWRCZbpFzx4qBjE8" target="_blank" rel="noreferrer"><MapPin className="mt-0.5 shrink-0 text-[#b08412]" size={17} /><span><strong className="block text-ink">Purok 4, Brgy. Sta. Maria</strong>Filinvest Rd, Santo Tomas, Philippines</span></a><a className="flex items-center gap-3 transition hover:text-[#b08412]" href="tel:09633102486"><Phone className="text-[#b08412]" size={16} />0963 310 2486</a><a className="flex items-center gap-3 transition hover:text-[#b08412]" href="mailto:twotech0128@gmail.com"><Mail className="text-[#b08412]" size={16} />twotech0128@gmail.com</a></div><div className="mt-7 border-t border-[#d8cda9] pt-4 text-xs text-[#756f5b]"><strong className="block text-ink">Business hours</strong>Monday–Saturday · 9:00 AM–6:00 PM</div></div><div className="min-h-[320px] overflow-hidden rounded-2xl border border-[#d8cda9] bg-white shadow-[0_18px_40px_#6d5b1f1c]"><iframe title="TwoTech shop location map" src="https://www.google.com/maps?q=Purok%204%2C%20Brgy.%20Sta.%20Maria%2C%20Filinvest%20Rd%2C%20Santo%20Tomas%2C%20Philippines&output=embed" className="h-full min-h-[320px] w-full border-0" loading="lazy" allowFullScreen /></div></div></section>
      </main>
      {accountPromptOpen && <div className="fixed inset-0 z-50 grid place-items-center bg-[#24241fcc] p-4" role="dialog" aria-modal="true" aria-labelledby="booking-account-title"><div className="relative w-full max-w-lg rounded-2xl bg-[#fffdf7] p-6 shadow-2xl md:p-8"><button type="button" aria-label="Close booking options" className="absolute right-4 top-4 grid size-8 place-items-center rounded-full text-[#756f5b] transition hover:bg-[#fde68a] hover:text-ink" onClick={() => setAccountPromptOpen(false)}><X size={17} /></button><div className="mono-label text-[#b08412]">Book your service</div><h2 id="booking-account-title" className="mt-2 max-w-sm text-3xl font-extrabold leading-tight tracking-[-.05em]">How would you like to continue?</h2><p className="mt-3 max-w-md text-xs leading-5 text-[#756f5b]">Create an account to track appointments and receive updates, or log in if you already have a TwoTech account.</p><div className="mt-6 grid gap-3 sm:grid-cols-2"><button type="button" className="group rounded-xl border border-[#ded8c8] bg-[#fdfbf5] p-4 text-left transition hover:-translate-y-0.5 hover:border-[#eab308] hover:shadow-lg" onClick={() => { setAccountPromptOpen(false); setAuthMode('register'); }}><span className="grid size-10 place-items-center rounded-full bg-[#fde68a] text-ink transition group-hover:bg-[#eab308]"><UserPlus size={18} /></span><strong className="mt-3 block text-sm">Create an account</strong><span className="mt-1 block text-[11px] leading-4 text-[#756f5b]">Save your details and manage bookings easily.</span></button><button type="button" className="group rounded-xl border border-[#ded8c8] bg-[#fdfbf5] p-4 text-left transition hover:-translate-y-0.5 hover:border-[#eab308] hover:shadow-lg" onClick={() => { setAccountPromptOpen(false); setAuthMode('login'); }}><span className="grid size-10 place-items-center rounded-full bg-ink text-white transition group-hover:bg-[#eab308] group-hover:text-ink"><LogIn size={18} /></span><strong className="mt-3 block text-sm">Log in</strong><span className="mt-1 block text-[11px] leading-4 text-[#756f5b]">Continue with your existing TwoTech account.</span></button></div></div></div>}
      <footer className="bg-ink py-10 text-[#f5eedb]"><div className="container-page flex flex-col justify-between gap-8 md:flex-row"><div><div className="flex items-center gap-3 text-xl font-extrabold"><img src="/images/two-tech-logo.jpg" alt="TwoTech logo" className="size-10 rounded-full border border-[#e4bd2b] object-cover" /> <span>twotech</span></div><p className="mt-4 max-w-xs text-xs leading-6 text-[#c9c0a5]">Computer service, parts, and builds for people who want their tech to work better.</p></div><div><div className="mono-label text-[#c9b978]">Visit us</div><p className="mt-3 text-xs leading-6">Purok 4, Brgy. Sta. Maria<br />0963 310 2486<br />twotech0128@gmail.com</p></div></div></footer>
    </>
  );
}
