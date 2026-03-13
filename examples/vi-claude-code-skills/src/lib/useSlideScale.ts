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
    const handleResize = () => setScale(getScale());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getScale]);

  return { scale, slideWidth: SLIDE_WIDTH, slideHeight: SLIDE_HEIGHT };
}
