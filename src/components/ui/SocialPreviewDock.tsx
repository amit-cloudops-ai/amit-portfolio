import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './SocialPreviewDock.css';

type ContributionDay = { date: string; count: number; level: number };
type Profile = {
  username: string;
  name: string;
  headline: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  avatarUrl: string;
  email: string;
};

type Props = { profile: Profile };

type LiveGithub = { avatar?: string; total?: number; days?: ContributionDay[] };

function GithubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.29-2.61 5.24-5.1 5.52.4.35.76 1.03.76 2.08v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>;
}

function LinkedinIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.34H4.96V9.02h2.97v9.32ZM6.45 7.75a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm11.89 10.59h-2.96v-4.53c0-1.08-.02-2.47-1.51-2.47-1.52 0-1.75 1.18-1.75 2.39v4.61H9.16V9.02h2.84v1.27h.04c.4-.73 1.36-1.5 2.8-1.5 3 0 3.5 1.97 3.5 4.53v5.02Z"/></svg>;
}

function ContributionGrid({ days, username }: { days: ContributionDay[]; username: string }) {
  return (
    <div className="spd-heatmap" role="img" aria-label={username + ' GitHub contributions over the last year'}>
      {days.map((day, index) => (
        <span
          key={day.date || index}
          className={'spd-day spd-level-' + Math.min(4, Math.max(0, day.level))}
          title={day.date ? day.count + ' contributions on ' + day.date : 'No contribution data'}
        />
      ))}
    </div>
  );
}

function GithubCard({ profile, live }: { profile: Profile; live: LiveGithub }) {
  const days = live.days ?? [];
  return (
    <div className="spd-card spd-github-card">
      <div className="spd-profile-head">
        <img src={live.avatar ?? profile.avatarUrl} alt="" className="spd-avatar" />
        <div className="spd-profile-copy">
          <strong>{profile.name}</strong>
          <span>{live.total === undefined ? 'GitHub activity' : live.total.toLocaleString() + ' contributions in the last year'}</span>
        </div>
        <span className="spd-live-dot" aria-label="Public profile" />
      </div>
      {days.length > 0 ? (
        <ContributionGrid days={days} username={profile.username} />
      ) : (
        <p className="spd-data-note">Contribution activity is temporarily unavailable. Visit the profile to explore the repositories.</p>
      )}
      <a className="spd-card-link" href={profile.githubUrl} target="_blank" rel="noopener noreferrer">Explore GitHub <span aria-hidden="true">↗</span></a>
    </div>
  );
}

function LinkedinCard({ profile, avatar }: { profile: Profile; avatar: string }) {
  return (
    <div className="spd-card spd-linkedin-card">
      <div className="spd-linkedin-banner" aria-hidden="true"><span>AM<span>.</span></span></div>
      <div className="spd-linkedin-body">
        <img src={avatar} alt="" className="spd-avatar spd-linkedin-avatar" />
        <strong>{profile.name}</strong>
        <p>{profile.headline}</p>
        <span className="spd-location">{profile.location}</span>
        <a className="spd-card-link" href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">View LinkedIn profile <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  );
}

export default function SocialPreviewDock({ profile }: Props) {
  const [active, setActive] = React.useState<'github' | 'linkedin' | null>(null);
  const [live, setLive] = React.useState<LiveGithub>({});
  const [copied, setCopied] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const controller = new AbortController();
    const json = async <T,>(url: string): Promise<T> => {
      const response = await fetch(url, { signal: controller.signal });
      if (!response.ok) throw new Error('GitHub profile data unavailable');
      return response.json() as Promise<T>;
    };
    Promise.allSettled([
      json<{ avatar_url?: string }>('https://api.github.com/users/' + encodeURIComponent(profile.username)),
      json<{ total?: { lastYear?: number }; contributions?: ContributionDay[] }>('https://github-contributions-api.jogruber.de/v4/' + encodeURIComponent(profile.username) + '?y=last')
    ]).then(([user, graph]) => {
      if (controller.signal.aborted) return;
      const next: LiveGithub = {};
      if (user.status === 'fulfilled') next.avatar = user.value.avatar_url;
      if (graph.status === 'fulfilled') {
        next.total = graph.value.total?.lastYear;
        next.days = graph.value.contributions;
      }
      setLive(next);
    });
    return () => controller.abort();
  }, [profile.username]);

  React.useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActive(null), 130);
  };

  const open = (item: 'github' | 'linkedin') => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActive(item);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = 'mailto:' + profile.email;
    }
  };

  return (
    <div
      className="social-preview-dock"
      ref={rootRef}
      onMouseLeave={scheduleClose}
      onFocusCapture={() => { if (closeTimer.current) clearTimeout(closeTimer.current); }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) scheduleClose();
      }}
      onKeyDown={(event) => { if (event.key === 'Escape') setActive(null); }}
    >
      <div className="spd-preview-slot" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          {active && (
            <motion.div
              key={active}
              className="spd-preview-panel"
              initial={{ opacity: 0, y: 8, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.99 }}
              transition={{ duration: 0.17, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); }}
            >
              {active === 'github'
                ? <GithubCard profile={profile} live={live} />
                : <LinkedinCard profile={profile} avatar={live.avatar ?? profile.avatarUrl} />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="spd-controls">
        <button className="spd-copy-button" type="button" onClick={copyEmail}>
          <span>{copied ? 'Email copied' : 'Copy email'}</span>
          <span className="spd-copy-icon" aria-hidden="true">{copied ? '✓' : '＋'}</span>
        </button>
        <span className="spd-divider" aria-hidden="true" />
        <button
          type="button"
          className={'spd-icon-button' + (active === 'github' ? ' is-active' : '')}
          aria-label="Preview GitHub profile"
          aria-expanded={active === 'github'}
          onMouseEnter={() => open('github')}
          onFocus={() => open('github')}
          onClick={() => setActive(active === 'github' ? null : 'github')}
        ><GithubIcon /></button>
        <button
          type="button"
          className={'spd-icon-button' + (active === 'linkedin' ? ' is-active' : '')}
          aria-label="Preview LinkedIn profile"
          aria-expanded={active === 'linkedin'}
          onMouseEnter={() => open('linkedin')}
          onFocus={() => open('linkedin')}
          onClick={() => setActive(active === 'linkedin' ? null : 'linkedin')}
        ><LinkedinIcon /></button>
      </div>
    </div>
  );
}
