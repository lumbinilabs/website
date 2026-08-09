import './App.css'

const services = [
  { number: '01', title: 'Websites that convert', text: 'Fast, polished websites built to turn attention into calls, bookings, and paying customers.', tag: 'Design · Development' },
  { number: '02', title: 'Smart business systems', text: 'Booking flows, client portals, dashboards, and automations that give your team time back.', tag: 'Automation · Operations' },
  { number: '03', title: 'AI that does useful work', text: 'Practical AI assistants that answer questions, qualify leads, and support your customers around the clock.', tag: 'AI · Customer experience' },
]

const steps = [
  ['Discover', 'We learn how your business works, where it gets stuck, and what growth looks like.'],
  ['Design', 'We shape the right solution and make every interaction clear, useful, and unmistakably yours.'],
  ['Build', 'We create, test, and refine the experience with speed, quality, and no unnecessary complexity.'],
  ['Grow', 'We stay close after launch—improving, maintaining, and helping the system earn its keep.'],
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function App() {
  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Lumbini Labs home">
          <span className="brand-mark">L</span>
          <span>Lumbini Labs</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#origin">Our name</a>
        </nav>
        <a className="nav-cta" href="mailto:hello@lumbinilabs.com">Start a project <Arrow /></a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="eyebrow"><span /> Technology that moves business forward</div>
          <h1>We build the tools behind <em>your next chapter.</em></h1>
          <div className="hero-bottom">
            <p>Lumbini Labs designs websites, software, and AI-powered systems that help ambitious businesses run better and grow faster.</p>
            <a className="primary-button" href="mailto:hello@lumbinilabs.com?subject=Let%27s%20build%20something">Let’s build something <Arrow /></a>
          </div>
          <div className="signal-card" aria-hidden="true">
            <div className="signal-top"><span>IDEA</span><i /><span>IMPACT</span></div>
            <div className="signal-visual">
              <span className="orb orb-one" /><span className="orb orb-two" /><span className="orb orb-three" />
              <div className="signal-line" />
              <div className="signal-label">Built for momentum</div>
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="section-intro">
            <div className="kicker">What we do</div>
            <h2>Not just a website.<br />A better way to do business.</h2>
            <p>We connect strategy, design, and technology to solve the problems that slow growing businesses down.</p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div><h3>{service.title}</h3><p>{service.text}</p></div>
                <span className="service-tag">{service.tag}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="statement" id="about">
          <p>Technology should make your business feel <em>lighter,</em> not more complicated.</p>
          <span>That’s our standard.</span>
        </section>

        <section className="origin section" id="origin">
          <div className="origin-art" aria-hidden="true">
            <div className="garden-rings">
              <span className="garden-ring ring-outer" />
              <span className="garden-ring ring-inner" />
              <span className="garden-center" />
              <span className="garden-path path-horizontal" />
              <span className="garden-path path-vertical" />
            </div>
            <div className="origin-coordinates">27.4844° N<br />83.2760° E</div>
          </div>
          <div className="origin-copy">
            <div className="kicker">Why Lumbini</div>
            <h2>Meaningful things<br />begin with purpose.</h2>
            <p>Our name is inspired by Lumbini, Nepal—a place known across the world for peace, reflection, and beginnings. It reminds us to approach technology with clarity: thoughtful in design, calm in execution, and built to create lasting value.</p>
            <div className="origin-values">
              <span>Origin</span><i />
              <span>Clarity</span><i />
              <span>Impact</span>
            </div>
          </div>
        </section>

        <section className="process section" id="process">
          <div className="process-heading">
            <div className="kicker">How we work</div>
            <h2>Clear from first call<br />to launch day.</h2>
          </div>
          <div className="steps">
            {steps.map(([title, text], index) => (
              <article className="step" key={title}>
                <span>0{index + 1}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="closing">
          <div className="closing-copy">
            <div className="kicker light">Have an idea?</div>
            <h2>Let’s turn it into<br /><em>something real.</em></h2>
          </div>
          <a className="circle-link" href="mailto:hello@lumbinilabs.com?subject=Project%20inquiry" aria-label="Start a conversation">
            <span>Start a<br />conversation</span><Arrow />
          </a>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">L</span><span>Lumbini Labs</span></a>
        <p>Inspired by Lumbini. Built for everywhere.</p>
        <div className="footer-links"><a href="mailto:hello@lumbinilabs.com">hello@lumbinilabs.com</a><span>© {new Date().getFullYear()}</span></div>
      </footer>
    </div>
  )
}

export default App
