import { useEffect, useRef } from 'react';
import { entrances } from '../animations/entrances';

// Plays a Web Animations API entrance on the element the returned ref is
// attached to, once on mount. Mirrors useInView's convention: the hook owns the
// ref and hands it back, so a caller just spreads it onto an element and picks
// an animation by name from `entrances`.
export default function useEntranceAnimation(name) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const { keyframes, options } = entrances[name];
    const animation = element.animate(keyframes, options);
    return () => animation.cancel();
  }, [name]);

  return ref;
}
