'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

const CAL_EVENTS = [{ date: '2026-09-01', title: 'Foundry Kickoff Night', href: '/events/kickoff-night' }];

const DOW = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function pad2(n: number) {
  return String(n).padStart(2, '0');
}

export default function EventsCalendar() {
  const today = useMemo(() => new Date(), []);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const firstOfMonth = new Date(viewYear, viewMonth, 1);
  const startDow = firstOfMonth.getDay();
  const gridStart = new Date(viewYear, viewMonth, 1 - startDow);
  const monthLabel = firstOfMonth.toLocaleString('en-US', { month: 'long', year: 'numeric' });

  const cells = Array.from({ length: 42 }, (_, i) => {
    const cellDate = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + i);
    const iso = `${cellDate.getFullYear()}-${pad2(cellDate.getMonth() + 1)}-${pad2(cellDate.getDate())}`;
    return {
      date: cellDate,
      iso,
      muted: cellDate.getMonth() !== viewMonth,
      isToday: cellDate.toDateString() === today.toDateString(),
      events: CAL_EVENTS.filter((e) => e.date === iso),
    };
  });

  function goToday() {
    setViewYear(today.getFullYear());
    setViewMonth(today.getMonth());
  }
  function goPrev() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  }
  function goNext() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  }

  const outlookHref =
    'https://outlook.office.com/calendar/0/deeplink/compose?' +
    new URLSearchParams({
      subject: 'Foundry Kickoff Night',
      startdt: '2026-09-01T19:00:00',
      enddt: '2026-09-01T21:00:00',
      location: 'UT Dallas — Lab 01',
      body: 'First open house of the semester. Tour the space, pitch a half-formed idea, find someone to build it with.',
    }).toString();

  function downloadIcs() {
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Comet Foundry//Events//EN',
      'BEGIN:VEVENT',
      'UID:kickoff-night-2026@cometfoundry.org',
      'DTSTART:20260901T190000',
      'DTEND:20260901T210000',
      'SUMMARY:Foundry Kickoff Night',
      'LOCATION:UT Dallas — Lab 01',
      "DESCRIPTION:First open house of the semester. Tour the space\\, pitch a half-formed idea\\, find someone to build it with.",
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'foundry-kickoff-night.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <div className="cal-card">
        <div className="cal-toolbar">
          <button className="cal-btn" onClick={goToday}>Today</button>
          <div className="cal-nav">
            <button className="cal-arrow" aria-label="Previous month" onClick={goPrev}>←</button>
            <button className="cal-arrow" aria-label="Next month" onClick={goNext}>→</button>
          </div>
          <span className="cal-month-label">{monthLabel}</span>
          <span className="cal-view">Month</span>
        </div>
        <div className="cal-grid">
          {DOW.map((d) => (
            <div className="cal-dow" key={d}>{d}</div>
          ))}
          {cells.map((cell) => (
            <div className={`cal-cell${cell.muted ? ' muted' : ''}${cell.isToday ? ' today' : ''}`} key={cell.iso + cell.date.getTime()}>
              <span className="date-num">{cell.date.getDate()}</span>
              {cell.events.map((e) => (
                <Link key={e.title} className="cal-pill" href={e.href}>{e.title}</Link>
              ))}
            </div>
          ))}
        </div>
        <div className="cal-footer">
          <div className="who">
            <b>info@cometfoundry.com</b>
            <div className="tz">Events shown in time zone: (GMT-05:00) Central Time — Chicago</div>
            <a className="outlook-link" href={outlookHref} target="_blank" rel="noopener noreferrer">Add to Outlook Calendar →</a>
          </div>
          <div className="cal-provider"><span className="sq"><span></span><span></span><span></span><span></span></span> Microsoft Outlook</div>
        </div>
      </div>

      <div className="cal-cta-wrap">
        <button className="cal-cta" onClick={downloadIcs}>ADD IT TO YOUR CALENDAR &lt;3</button>
        <div className="cal-cta-note">Downloads Kickoff Night as a .ics — works with Outlook, Google, and Apple Calendar.</div>
      </div>
    </>
  );
}
