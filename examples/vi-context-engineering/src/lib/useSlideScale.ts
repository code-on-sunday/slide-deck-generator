import { useState, useEffect, useCallback } from 'react';

const SLIDE_WIDTH = 1280;
const SLIDE_HEIGHT = 720;

export function useSlideScale() {
  const getScale = useCallback(() => {
    const scaleX = window.innerWidth / SLIDE_WIDTH;
    const scaleY = window.innerHeight / SLIDE_HEIGHT;
    return Math.min(scaleX, scaleY);
  }, []);

  const [scale, setScale] = useState(getScale);

  useEffect(() => {
    const onResize = () => setScale(getScale());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [getScale]);

  return { scale, width: SLIDE_WIDTH, height: SLIDE_HEIGHT };
}
