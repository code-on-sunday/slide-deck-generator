import { useState, useEffect, useCallback } from 'react';

const SLIDE_W = 1280;
const SLIDE_H = 720;

export function useSlideScale() {
  const getScale = useCallback(() => {
    const sx = window.innerWidth / SLIDE_W;
    const sy = window.innerHeight / SLIDE_H;
    return Math.min(sx, sy);
  }, []);

  const [scale, setScale] = useState(getScale);

  useEffect(() => {
    const onResize = () => setScale(getScale());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [getScale]);

  return { scale, slideW: SLIDE_W, slideH: SLIDE_H };
}
