import { useAnimationFrame, useMotionValue, useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const NAME = 'Amit Madakatti · ';
const REPEAT = 5;

export default function NameTicker() {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useTransform(scrollY, (latest) => latest);
  const velocity = useTransform(scrollVelocity, (latest) => latest);
  const speed = useTransform(velocity, [-1400, 0, 1400], [0.72, -0.055, -0.72]);

  useAnimationFrame((_, delta) => {
    const track = trackRef.current;
    if (!track) return;
    const groupWidth = track.scrollWidth / 2;
    if (!groupWidth) return;
    const next = x.get() + speed.get() * delta;
    x.set(next <= -groupWidth ? next + groupWidth : next >= 0 ? next - groupWidth : next);
  });

  const words = Array.from({ length: REPEAT }, (_, i) => <span className="ticker-word" key={i}>{NAME}</span>);

  return (
    <>
      <div className="ticker ticker-dark" aria-hidden="true">
        <motion.div ref={trackRef} className="ticker-track" style={{ x }}>
          {words}{words}
        </motion.div>
      </div>
      <div className="ticker ticker-light" aria-hidden="true">
        <motion.div className="ticker-track" style={{ x }}>
          {words}{words}
        </motion.div>
      </div>
    </>
  );
}
