import { useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ArrowDownRight, ArrowRight, ChevronRight, Menu, X } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

type Phase = {
  name: string;
  label: string;
  title: string;
  copy: string;
  progress: string;
  cards: [string, string];
  session: string;
};

const phases: Phase[] = [
  {
    name: 'Orient',
    label: '01 / start with the why',
    title: 'Name the direction you want to move in.',
    copy: 'Start with context, not content. Set a clear ambition and map the capabilities that will make it possible.',
    progress: '28%',
    cards: ['Signal scan', 'Direction map'],
    session: 'Illustrative · 12 min',
  },
  {
    name: 'Learn',
    label: '02 / build the mental model',
    title: 'Learn from people who use the work.',
    copy: 'Practitioner-led sessions turn current thinking into a working mental model you can carry into the room.',
    progress: '54%',
    cards: ['Live session', 'Field notes'],
    session: 'Illustrative · 28 min',
  },
  {
    name: 'Apply',
    label: '03 / make it real',
    title: 'Put the idea under pressure.',
    copy: 'Work through the kind of briefs, decisions, and trade-offs that make capability stick beyond the classroom.',
    progress: '76%',
    cards: ['Practice brief', 'Peer review'],
    session: 'Illustrative · 45 min',
  },
  {
    name: 'Grow',
    label: '04 / keep moving',
    title: 'Turn progress into a practice.',
    copy: 'Review, refine, and return with better questions. Continuous growth is the advantage that compounds.',
    progress: '92%',
    cards: ['Reflection', 'Next move'],
    session: 'Illustrative · 8 min',
  },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePhase, setActivePhase] = useState(1);
  const [brandClicks, setBrandClicks] = useState(0);
  const [easterEggFound, setEasterEggFound] = useState(false);

  const phase = phases[activePhase];
  const handleAnchor = () => setMenuOpen(false);
  const handleBrandClick = () => {
    const nextClicks = brandClicks + 1;
    setBrandClicks(nextClicks);
    if (nextClicks >= 4) setEasterEggFound(true);
  };
  const selectPhase = (index: number) => {
    setActivePhase(index);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#top" onClick={handleBrandClick} data-testid="link-brand">
            <img className="brand-logo" src="/acdyon-logo.webp" alt="AcdyOn logo" />
            <span className="brand-name">acdyon</span>
            {easterEggFound && <span className="egg-note">signal received</span>}
          </a>
          <button className="nav-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen((open) => !open)} data-testid="button-mobile-menu">
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            <a className="nav-link" href="#why-acdyon" onClick={handleAnchor} data-testid="link-why-acdyon">Why Acdyon</a>
            <a className="nav-link" href="#experience" onClick={handleAnchor} data-testid="link-experience">The experience</a>
            <a className="nav-link" href="#capabilities" onClick={handleAnchor} data-testid="link-capabilities">Capabilities</a>
            <a className="nav-link nav-link-emphasis" href="#start" onClick={handleAnchor} data-testid="link-start-learning">Start here <ArrowRight size={14} /></a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Outcome-driven learning for forward motion</span>
              <h1 className="display">Turn the next thing you need to know into something you can <span className="accent">do.</span></h1>
              <p className="hero-lead">AcdyOn helps ambitious learners build practical AI and technology skills through real projects, practitioner guidance, and a clear path from learning to doing.</p>
              <div className="hero-actions">
                <a className="button-primary" href="#experience" data-testid="button-primary-start">Explore programs <ArrowRight size={16} /></a>
                <a className="text-link" href="#experience" data-testid="link-see-approach">See how the journey works <ArrowDownRight size={15} /></a>
              </div>
              <div className="hero-note"><span className="hero-note-dot" /> For learners building practical capability in an accelerating world.</div>
            </div>

            <div className="hero-product" aria-label="Illustrative preview of an Acdyon learning journey">
              <div className="product-orbit product-orbit-one" />
              <div className="product-orbit product-orbit-two" />
              <div className="journey-card">
                <div className="card-top"><span>acdyon / journey 01</span><span className="live-pill">In practice</span></div>
                <div className="card-body">
                  <div className="card-kicker">Illustrative product preview</div>
                  <div className="card-title">Learn with context. Leave with capability.</div>
                  <div className="card-route"><span className="route-line" /><span><b>Orient</b><small>Find the signal</small></span><span><b>Apply</b><small>Work the problem</small></span><span><b>Grow</b><small>Carry it forward</small></span></div>
                </div>
                <div className="card-bottom"><small>Built around a question you actually need to answer.</small><a className="card-arrow" href="#experience" aria-label="Explore the learning journey" data-testid="link-card-experience"><ArrowDownRight size={17} /></a></div>
              </div>
            </div>
          </div>
        </section>

        <div className="signal-bar" aria-hidden="true">
          <div className="signal-track"><span>Practitioner-led</span><span>Real-world expertise</span><span>Strategic thinking</span><span>Continuous growth</span><span>Practitioner-led</span><span>Real-world expertise</span></div>
        </div>

        <section className="story section" id="why-acdyon">
          <div className="container story-grid">
            <div><span className="eyebrow">Why Acdyon</span><h2 className="display">The world changed. <em>Keep changing with it.</em></h2></div>
            <div>
              <p className="story-copy">The most valuable careers are not built by collecting information. They are built by <strong>developing the judgment to know what matters</strong> — then the capability to do something with it.</p>
              <div className="story-list">
                <div className="story-item"><b>01 / Relevance</b><p>Learn from real-world expertise, not an abstract version of the work.</p></div>
                <div className="story-item"><b>02 / Practice</b><p>Build practical capability through meaningful application and reflection.</p></div>
                <div className="story-item"><b>03 / Perspective</b><p>Strengthen strategic thinking for decisions that do not come with a template.</p></div>
                <div className="story-item"><b>04 / Momentum</b><p>Make continuous growth a way of working, not a destination.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="experience section" id="experience">
          <div className="container">
            <div className="section-heading">
              <div><span className="eyebrow">The experience</span><h2 className="display">A product surface for moving from <span className="serif">curious</span> to capable.</h2></div>
              <p>Explore a working preview. Choose a phase, open the brief, and see how insight becomes a next action.</p>
            </div>
            <div className="experience-layout">
              <div className="phase-list" role="tablist" aria-label="Learning journey phases">
                {phases.map((item, index) => (
                  <button className={`phase-button ${activePhase === index ? 'active' : ''}`} type="button" role="tab" aria-selected={activePhase === index} onClick={() => selectPhase(index)} key={item.name} data-testid={`button-phase-${item.name.toLowerCase()}`}>
                    <span className="phase-number">0{index + 1}</span><span className="phase-name">{item.name}</span><ChevronRight size={14} />
                  </button>
                ))}
              </div>
              <div className="experience-window" role="tabpanel">
                <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span className="window-address">concept workspace / your-journey</span><span className="window-status">illustrative</span></div>
                <div className="window-content">
                  <aside className="window-sidebar">
                    <div className="window-logo">acd<span>y</span>on</div>
                    <div className="window-menu-item selected">Your journey</div>
                    <div className="window-menu-item">Explore thinking</div>
                    <div className="window-menu-item">Practice room</div>
                    <div className="window-menu-item">Reflection log</div>
                  </aside>
                  <div className="window-main" key={phase.name}>
                    <div className="window-heading"><span className="eyebrow">{phase.label}</span><span className="window-phase">Phase 0{activePhase + 1} / 04</span></div>
                    <h3 className="display" data-testid="text-active-phase-title">{phase.title}</h3>
                    <p className="window-desc" data-testid="text-product-panel-copy">{phase.copy}</p>
                    <div className="mentor-row"><span className="mentor-avatar">AM</span><span><b>Working with a practitioner</b><br /><span className="mentor-label">Learn in the room where it happens.</span></span></div>
                    <div className="window-progress"><div className="progress-label"><span>Journey progress</span><span>{phase.progress}</span></div><div className="progress-track"><div className="progress-fill" style={{ width: phase.progress }} /></div></div>
                    <div className="window-cards">
                      {phase.cards.map((card, index) => <div className="mini-card" key={card}><span>{index === 0 ? 'Next up' : 'In your kit'}</span><b>{card}</b>{index === 0 && <small>{phase.session}</small>}</div>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="capability section" id="capabilities">
          <div className="container capability-grid">
            <div><span className="eyebrow">What compounds</span><h2 className="display">Not more to know. <span className="serif">More to do.</span></h2><p className="capability-intro">AcdyOn is designed around the capabilities that help people navigate complexity with confidence.</p></div>
            <div className="capability-list">
              <div className="capability-row"><b>01</b><div><h3>Practical capability</h3><p>Translate ideas into decisions, artifacts, and better work.</p></div><ChevronRight size={16} /></div>
              <div className="capability-row"><b>02</b><div><h3>Strategic thinking</h3><p>See the systems around a problem and choose where to act.</p></div><ChevronRight size={16} /></div>
              <div className="capability-row"><b>03</b><div><h3>AI and technology fluency</h3><p>Build an adaptable point of view for a world shaped by AI and technology.</p></div><ChevronRight size={16} /></div>
              <div className="capability-row"><b>04</b><div><h3>Continuous growth</h3><p>Keep learning in motion as your context, craft, and ambition evolve.</p></div><ChevronRight size={16} /></div>
            </div>
          </div>
        </section>

        <section className="manifesto">
          <div className="container manifesto-grid">
            <div><span className="eyebrow">A point of view</span><h2 className="display">Your edge is a <span className="serif">practice.</span></h2></div>
            <div className="manifesto-copy"><p>Technology will keep moving. AcdyOn helps you turn that movement into practical capability, better decisions, and work you can show.</p><a className="text-link manifesto-link" href="#experience" data-testid="link-find-next-move">Explore the journey <ArrowRight size={15} /></a></div>
          </div>
        </section>

        <section className="contact" id="start">
          <div className="container contact-grid">
            <div><span className="eyebrow">Start here</span><h2 className="display">Bring a better question. <em>Leave with a next move.</em></h2></div>
            <div className="contact-cta"><p>This candidate concept shows how AcdyOn could connect practical AI and technology learning to a clear, human learning path.</p><a className="button-primary" href="#experience" data-testid="button-final-explore">Explore programs <ArrowRight size={16} /></a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <a className="brand footer-brand" href="#top" onClick={handleBrandClick} data-testid="link-footer-brand"><img className="brand-logo" src="/acdyon-logo.webp" alt="AcdyOn logo" /><span className="brand-name">acdyon</span></a>
            <div className="footer-meta"><span>Learning for forward motion.<br />Built for the world ahead.</span><div className="footer-links"><a className="footer-link" href="#why-acdyon" data-testid="link-footer-why">Why Acdyon</a><a className="footer-link" href="#experience" data-testid="link-footer-experience">Experience</a><a className="footer-link" href="#start" data-testid="link-footer-contact">Contact</a></div></div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Acdyon Technologies</span><span>Candidate homepage concept · Practitioner-led. Future-ready. Always in motion.</span></div>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;