import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Globe2,
  Menu,
  Minus,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import './styles.css'

type ChainStep = {
  number: string
  title: string
  description: string
  image: string
  imageAlt: string
}

const chainSteps: ChainStep[] = [
  {
    number: '01',
    title: 'Farm',
    description: 'We start with the farmer, the plot and the care behind every bag.',
    image: 'https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Cocoa farm under a canopy of green shade trees',
  },
  {
    number: '02',
    title: 'Society scale',
    description: 'A clear weigh-in, a fair grade and a payment process you can see.',
    image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'A farmer carrying a full harvest basket through a field',
  },
  {
    number: '03',
    title: 'District depot',
    description: 'Bags move reliably from society to depot, ready for the next handoff.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Wide warehouse depot with organized storage racks and a loading operation',
  },
  {
    number: '04',
    title: 'Takeover centre',
    description: 'Grading, moisture testing and documentation keep the chain accountable.',
    image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Close view of quality checking hands and product',
  },
  {
    number: '05',
    title: 'CMC / Port',
    description: 'A traceable handoff that helps Ghanaian cocoa travel with confidence.',
    image: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Cargo containers at a port at golden hour',
  },
]

const faqs = [
  ['When will I be paid?', 'Our promise is simple: payment at the scale, subject to the agreed payment method and verification. Ask your local purchasing clerk for the current process.'],
  ['What price does OCL pay?', 'The producer price is set by COCOBOD and applies across Licensed Buying Companies. We never set or imply a separate market price.'],
  ['Where does OCL buy?', 'We are building coverage across the cocoa-growing regions named on this page. Select your nearest region in the network section or call us.'],
  ['What do I need to register?', 'Your name, phone number, district, society and an estimate of bags per season. We only ask for what helps us serve you.'],
]

const regions = [
  { name: 'Western North', detail: 'Sefwi Wiawso · Bibiani · Akontombra', intensity: 'high' },
  { name: 'Western', detail: 'Tarkwa · Wassa Amenfi · Aowin', intensity: 'high' },
  { name: 'Ashanti', detail: 'Atwima · Bekwai · Juaben', intensity: 'medium' },
  { name: 'Ahafo', detail: 'Goaso · Kenyasi · Duayaw Nkwanta', intensity: 'medium' },
  { name: 'Bono & Bono East', detail: 'Sunyani · Berekum · Techiman', intensity: 'low' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [language, setLanguage] = useState<'EN' | 'TWI'>('EN')
  const [activeStep, setActiveStep] = useState(1)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [formSent, setFormSent] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const active = chainSteps[activeStep - 1]

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <header className={`site-nav ${isScrolled ? 'is-scrolled' : ''}`}>
        <button className="brand-lockup" onClick={() => scrollTo('top')} aria-label="OCL home">
          <img src="/ocl-logo.png" alt="Okatakyie Commodities Ltd" />
          <span>OCL</span>
        </button>
        <nav className={`desktop-nav ${menuOpen ? 'mobile-open' : ''}`}>
          <button onClick={() => scrollTo('farmers')}>For farmers</button>
          <button onClick={() => scrollTo('operations')}>What we do</button>
          <button onClick={() => scrollTo('traceability')}>Traceability</button>
          <button onClick={() => scrollTo('network')}>Network</button>
          <button onClick={() => scrollTo('about')}>About</button>
        </nav>
        <div className="nav-actions">
          <button className="lang-switch" onClick={() => setLanguage(language === 'EN' ? 'TWI' : 'EN')} aria-label="Switch language">
            <Globe2 size={16} /> {language}
          </button>
          <button className="nav-phone" onClick={() => (window.location.href = 'tel:+233000000000')}>
            <Phone size={16} /> <span>Call OCL</span>
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-image" />
          <div className="hero-grid" />
          <div className="hero-content page-width">
            <div className="eyebrow light"><span className="eyebrow-dot" /> Ghanaian cocoa, built on trust</div>
            <h1>We buy your cocoa<br /><em>when it’s ready.</em></h1>
            <p className="hero-support">A clear weigh-in. A fair process. Payment at the scale.</p>
            <div className="hero-actions">
              <button className="button button-light" onClick={() => scrollTo('farmers')}>Find your nearest clerk <ArrowUpRight size={17} /></button>
              <button className="text-link light-link" onClick={() => scrollTo('contact')}>Talk to us <ChevronRight size={16} /></button>
            </div>
          </div>
          <div className="hero-foot page-width">
            <span>Licensed buying company · Ghana</span>
            <span className="scroll-mark"><span /> Scroll to explore</span>
          </div>
        </section>

        <section className="proof-strip page-width">
          <div className="proof-intro"><span>Our promise</span><strong>Proof at every handoff.</strong></div>
          <div className="proof-stat"><strong>6</strong><span>regions in our network</span></div>
          <div className="proof-stat"><strong>24h</strong><span>payment turnaround target</span></div>
          <div className="proof-stat"><strong>100%</strong><span>plot-level traceability direction</span></div>
        </section>

        <section className="intro-section page-width" id="about">
          <div className="section-kicker">Okatakyie Commodities Ltd</div>
          <div className="intro-layout">
            <h2>The company behind a more dependable cocoa season.</h2>
            <div className="intro-copy">
              <p>OCL is a Ghanaian Licensed Buying Company built around the moments that matter most to farmers: an honest scale, the right sacks, reliable evacuation and a payment process you can understand.</p>
              <button className="text-link green-link" onClick={() => scrollTo('operations')}>See how we work <ChevronRight size={16} /></button>
            </div>
          </div>
        </section>

        <section className="chain-section" id="operations">
          <div className="page-width chain-header">
            <div>
              <div className="section-kicker">From plot to port</div>
              <h2>A chain you can<br /><span>follow.</span></h2>
            </div>
            <p>Every bag has a story. We make the handoffs visible, from the society scale to the takeover centre.</p>
          </div>
          <div className="chain-layout page-width">
            <div className="chain-steps" role="tablist" aria-label="Our cocoa chain">
              {chainSteps.map((step, index) => (
                <button key={step.number} className={`chain-step ${activeStep === index + 1 ? 'active' : ''}`} onClick={() => setActiveStep(index + 1)} role="tab" aria-selected={activeStep === index + 1}>
                  <span className="step-number">{step.number}</span>
                  <span className="step-name">{step.title}</span>
                  {activeStep === index + 1 ? <Minus size={16} /> : <ChevronRight size={16} />}
                </button>
              ))}
            </div>
            <div className="chain-feature">
              <div className="chain-photo" style={{ backgroundImage: `url(${active.image})` }} role="img" aria-label={active.imageAlt} />
              <div className="chain-caption"><span>{active.number} / 05</span><p>{active.description}</p></div>
            </div>
          </div>
        </section>

        <section className="price-section page-width" id="farmers">
          <div className="price-heading"><div className="section-kicker">Today’s producer price</div><h2>Clear numbers.<br />No surprises.</h2></div>
          <div className="price-card">
            <div className="price-card-top"><span>Light crop 2026</span><span>Announced 18 June 2026</span></div>
            <div className="price-primary"><strong>GH¢ 2,587.00</strong><span>per 64kg bag</span></div>
            <div className="price-details"><div><strong>GH¢ 1,241.76</strong><span>per 30kg load</span></div><div><strong>GH¢ 41,392.00</strong><span>per tonne · 16 bags</span></div></div>
            <div className="price-note"><ShieldCheck size={17} /><span>Producer price set by COCOBOD. The same price applies at every Licensed Buying Company.</span></div>
          </div>
        </section>

        <section className="services-section">
          <div className="page-width">
            <div className="section-kicker">What farmers can count on</div>
            <div className="services-heading"><h2>Trust is built<br />in the details.</h2><p>Good buying is more than a transaction. It is showing up, having what you need and making the next step clear.</p></div>
            <div className="service-grid">
              <article className="service-item"><div className="service-number">01</div><div className="service-image image-inputs" /><h3>Inputs & pruning</h3><p>Practical support that helps your farm stay productive through the season.</p></article>
              <article className="service-item"><div className="service-number">02</div><div className="service-image image-payment" /><h3>Payment at the scale</h3><p>Know what happens next, whether you choose cheque or mobile money.</p></article>
              <article className="service-item"><div className="service-number">03</div><img className="service-image image-community" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85" alt="Community members standing together" /><h3>Community programmes</h3><p>Working with the people and places that make each cocoa district thrive.</p></article>
            </div>
          </div>
        </section>

        <section className="trace-section" id="traceability">
          <div className="trace-visual" />
          <div className="trace-copy page-width">
            <div className="section-kicker light">Traceability & EUDR readiness</div>
            <h2>From the plot<br />to the port,<br /><em>with proof.</em></h2>
            <p>We are aligning first-mile records with GCTS and the Deforestation Risk Assessment Module — with a clear direction toward plot-level GPS and Due Diligence Statements.</p>
            <div className="trace-meta"><div><strong>31 Dec 2020</strong><span>deforestation cut-off</span></div><div><strong>30 Dec 2026</strong><span>EUDR large & medium operator date</span></div></div>
            <button className="button button-light" onClick={() => scrollTo('contact')}>Request capability statement <ArrowUpRight size={17} /></button>
          </div>
        </section>

        <section className="network-section page-width" id="network">
          <div className="network-heading"><div><div className="section-kicker">Our network</div><h2>Closer to the<br /><span>farmer.</span></h2></div><p>We are building a dependable society and depot network across Ghana’s cocoa-growing regions. Find the place nearest to you.</p></div>
          <div className="network-layout">
            <div className="ghana-map" aria-label="Stylised map of Ghana showing OCL regions"><div className="map-outline" /><span className="map-pin pin-1" /><span className="map-pin pin-2" /><span className="map-pin pin-3" /><span className="map-pin pin-4" /><span className="map-label">Ghana</span></div>
            <div className="region-list">{regions.map((region) => <button className="region-row" key={region.name} onClick={() => scrollTo('contact')}><span className={`region-index ${region.intensity}`} /><span><strong>{region.name}</strong><small>{region.detail}</small></span><ArrowUpRight size={17} /></button>)}<button className="text-link green-link network-link" onClick={() => scrollTo('contact')}>Ask about your district <ChevronRight size={16} /></button></div>
          </div>
        </section>

        <section className="farmer-section page-width">
          <div className="farmer-panel"><div className="farmer-copy"><div className="section-kicker light">For farmers</div><h2>Ready to sell<br /><em>when you are?</em></h2><p>Register your interest in under a minute. We will connect you with the nearest OCL purchasing clerk.</p><button className="button button-light" onClick={() => scrollTo('contact')}>Register as a farmer <ArrowUpRight size={17} /></button></div><div className="farmer-side"><div className="farmer-side-stat"><span>01</span><p>Tell us your district and society.</p></div><div className="farmer-side-stat"><span>02</span><p>Meet your local purchasing clerk.</p></div><div className="farmer-side-stat"><span>03</span><p>Bring your beans. We handle the rest.</p></div></div></div>
        </section>

        <section className="faq-section page-width">
          <div><div className="section-kicker">Common questions</div><h2>Good questions<br />deserve clear answers.</h2></div>
          <div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span>{openFaq === index ? <Minus size={17} /> : <ChevronDown size={17} />}</button><div className="faq-answer"><p>{answer}</p></div></div>)}</div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-width contact-layout"><div className="contact-copy"><div className="section-kicker">Start a conversation</div><h2>Let’s make the<br /><em>next handoff</em><br />clear.</h2><p>For farmer registration, purchasing clerk applications, off-taker enquiries or partnership conversations.</p><div className="contact-details"><a href="tel:+233000000000"><Phone size={17} /> +233 (0) 00 000 0000</a><a href="mailto:hello@okatakyiecommodities.com"><ArrowUpRight size={17} /> hello@okatakyiecommodities.com</a></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setFormSent(true) }}>{formSent ? <div className="form-success"><div className="success-mark"><Sparkles size={22} /></div><h3>We’ve got it.</h3><p>Thanks for reaching out. An OCL team member will get back to you shortly.</p><button type="button" className="text-link green-link" onClick={() => setFormSent(false)}>Send another message <ChevronRight size={16} /></button></div> : <><div className="form-field"><label htmlFor="name">Your name</label><input id="name" required placeholder="e.g. Ama Mensah" /></div><div className="form-row"><div className="form-field"><label htmlFor="phone">Phone number</label><input id="phone" required inputMode="tel" placeholder="+233" /></div><div className="form-field"><label htmlFor="reason">I’m reaching out about</label><select id="reason" defaultValue="farmer"><option value="farmer">Farmer registration</option><option value="clerk">Becoming a purchasing clerk</option><option value="buyer">Off-taker / buyer enquiry</option><option value="partner">Partnership</option></select></div></div><div className="form-field"><label htmlFor="message">A little more detail</label><textarea id="message" rows={4} placeholder="Tell us how we can help..." /></div><label className="checkbox-field"><input type="checkbox" required /> <span>I agree that OCL may use my details to respond to this enquiry.</span></label><button className="button button-green" type="submit">Send enquiry <ArrowUpRight size={17} /></button></>}</form></div>
        </section>
      </main>

      <footer className="site-footer"><div className="page-width footer-top"><div className="footer-brand"><img src="/ocl-logo.png" alt="OCL" /><p>A Ghanaian cocoa buying company built on trust, speed and traceability.</p></div><div className="footer-links"><div><span>Explore</span><button onClick={() => scrollTo('farmers')}>For farmers</button><button onClick={() => scrollTo('operations')}>What we do</button><button onClick={() => scrollTo('traceability')}>Traceability</button></div><div><span>Company</span><button onClick={() => scrollTo('network')}>Network</button><button onClick={() => scrollTo('about')}>About OCL</button><button onClick={() => scrollTo('contact')}>Contact</button></div><div><span>Connect</span><a href="tel:+233000000000">Call OCL</a><a href="mailto:hello@okatakyiecommodities.com">Email us</a><button onClick={() => scrollTo('contact')}>Careers</button></div></div></div><div className="page-width footer-bottom"><span>© 2026 Okatakyie Commodities Ltd</span><span>Built for the people behind the beans.</span><span>Privacy · Terms</span></div></footer>
      <div className="mobile-action-bar"><button onClick={() => (window.location.href = 'tel:+233000000000')}><Phone size={17} /> Call OCL</button><button onClick={() => scrollTo('contact')}>Register as a farmer <ArrowUpRight size={17} /></button></div>
    </div>
  )
}

export default App

createRoot(document.getElementById('root')!).render(<App />)
