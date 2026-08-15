'use client';

import { useEffect, useRef, useState } from 'react';

const IDEAS = [
  'Build something.',
  'Find a teammate.',
  'Go to an event.',
  'Start a stupid idea.',
  'Ask someone smarter than you.',
  'Touch grass.',
];

export default function BoredButton() {
  const [show, setShow] = useState(false);
  const [idea, setIdea] = useState(IDEAS[0]);
  const lastIdea = useRef(-1);
  const popupRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Matches script.js: a real document-level listener, so a click ANYWHERE
  // outside the popup/button closes it -- not just clicks inside a wrapper.
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node;
      if (popupRef.current?.contains(target) || target === btnRef.current) return;
      setShow(false);
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  function handleClick() {
    let i = Math.floor(Math.random() * IDEAS.length);
    if (i === lastIdea.current) i = (i + 1) % IDEAS.length;
    lastIdea.current = i;
    setIdea(IDEAS[i]);
    setShow(true);
  }

  return (
    <>
      <button id="bored-btn" ref={btnRef} onClick={handleClick}>I&apos;M BORED →</button>
      <div id="bored-popup" ref={popupRef} className={show ? 'show' : undefined}>
        <div className="result" id="bored-result">{idea}</div>
        <span>tap again for another one</span>
      </div>
    </>
  );
}
