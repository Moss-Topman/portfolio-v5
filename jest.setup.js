import '@testing-library/jest-dom';

// Suppress Framer Motion and other expected prop warnings
const originalError = console.error;
jest.spyOn(console, 'error').mockImplementation((...args) => {
  if (
    typeof args[0] === 'string' &&
    (args[0].includes('whileHover') ||
      args[0].includes('whileTap') ||
      args[0].includes('animate') ||
      args[0].includes('initial') ||
      args[0].includes('transition') ||
      args[0].includes('does not recognize') ||
      args[0].includes('React does not recognize'))
  ) {
    return;
  }
  originalError(...args);
});

// Mock Next.js components
jest.mock('next/link', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: ({ children, href, ...props }) =>
      React.createElement('a', { href, ...props }, children),
  };
});

jest.mock('next/image', () => {
  const React = require('react');
  const ImageMock = ({ src, alt, ...props }) => {
    // Filter out Next.js specific boolean props that cause React warnings in tests
    const filtered = { ...props };
    delete filtered.priority;
    delete filtered.unoptimized;
    delete filtered.fill;
    // If src is an object (imported), use src.src
    const resolvedSrc = src && typeof src === 'object' ? src.src : src;
    return React.createElement('img', { src: resolvedSrc, alt, ...filtered });
  };
  return {
    __esModule: true,
    default: ImageMock,
  };
});

// Mock framer-motion for unit tests
jest.mock('framer-motion', () => {
  const React = require('react');
  const motion = {
    section: ({ children, ...props }) => React.createElement('section', props, children),
    div: ({ children, ...props }) => React.createElement('div', props, children),
    h1: ({ children, ...props }) => React.createElement('h1', props, children),
    p: ({ children, ...props }) => React.createElement('p', props, children),
    a: ({ children, ...props }) => React.createElement('a', props, children),
    span: ({ children, ...props }) => React.createElement('span', props, children),
    svg: ({ children, ...props }) => React.createElement('svg', props, children),
  };
  return {
    __esModule: true,
    motion,
    useScroll: () => ({ scrollYProgress: { current: 0 } }),
    useTransform: () => 0,
    useSpring: () => 0,
    useMotionValue: () => 0,
    AnimatePresence: ({ children }) => children,
  };
});

// Mock window object for tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});