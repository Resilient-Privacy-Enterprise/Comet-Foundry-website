export type ChapterStatus = 'active' | 'incoming';

export type Chapter = {
  num: string;
  slug: string;
  name: string;
  university: string;
  city: string;
  state: string;
  status: ChapterStatus;
  founded: string;
  estYear?: string;
  labStatus?: string;
  sub: string;
  tagline: string;
  vision: string;
};

export const CHAPTERS: Chapter[] = [
  {
    num: '01',
    slug: 'utd',
    name: 'UT Dallas',
    university: 'The University of Texas at Dallas',
    city: 'Richardson',
    state: 'TX',
    status: 'active',
    founded: '2026',
    labStatus: 'LAB OPEN',
    sub: 'Chapter 01. Where Comet Foundry started. Where it proved the model works.',
    tagline: 'Where it all started. Chapter 01 is live and building.',
    vision: 'The founding chapter. The model was proven here — and every chapter that follows carries the standard that was set in Richardson.',
  },
  {
    num: '02',
    slug: 'ut-austin',
    name: 'UT Austin',
    university: 'The University of Texas at Austin',
    city: 'Austin',
    state: 'TX',
    status: 'incoming',
    founded: '2026',
    estYear: '2026',
    sub: 'Chapter 02 is coming to UT Austin. The lab is not open yet. The movement already is.',
    tagline: 'Coming to the Forty Acres. The movement is already here.',
    vision: '40,000 students. Countless ideas dying in group chats. Chapter 02 exists to change that.',
  },
  {
    num: '03',
    slug: 'tamu',
    name: 'Texas A&M',
    university: 'Texas A&M University',
    city: 'College Station',
    state: 'TX',
    status: 'incoming',
    founded: '2026',
    estYear: '2026',
    sub: 'Chapter 03 is coming to Texas A&M. The lab is not open yet. The movement already is.',
    tagline: 'Aggies who build. Coming soon to Aggieland.',
    vision: 'Aggieland produces engineers, scientists, and leaders. Chapter 03 will produce founders.',
  },
  {
    num: '04',
    slug: 'rice',
    name: 'Rice',
    university: 'Rice University',
    city: 'Houston',
    state: 'TX',
    status: 'incoming',
    founded: '2026',
    estYear: '2026',
    sub: 'Chapter 04 is coming to Rice. The lab is not open yet. The movement already is.',
    tagline: 'A foundry for Rice builders. Planting roots in Houston.',
    vision: 'One of the most rigorous universities in the country. Chapter 04 will match that standard — and add a build bench.',
  },
  {
    num: '05',
    slug: 'gatech',
    name: 'Georgia Tech',
    university: 'Georgia Institute of Technology',
    city: 'Atlanta',
    state: 'GA',
    status: 'incoming',
    founded: '2027',
    estYear: '2027',
    sub: 'Chapter 05 is coming to Georgia Tech. The lab is not open yet. The movement already is.',
    tagline: 'Where STEM meets hustle. Coming to ATL.',
    vision: 'Atlanta is one of the fastest growing startup ecosystems in the US. Chapter 05 will be the pipeline from campus to that ecosystem.',
  },
  {
    num: '06',
    slug: 'berkeley',
    name: 'Berkeley',
    university: 'University of California, Berkeley',
    city: 'Berkeley',
    state: 'CA',
    status: 'incoming',
    founded: '2027',
    estYear: '2027',
    sub: 'Chapter 06 is coming to Berkeley. The lab is not open yet. The movement already is.',
    tagline: 'Bay Area builders, this one\'s for you. Coming soon.',
    vision: 'The Bay Area produced the modern technology industry. Chapter 06 will make sure Berkeley students are building the next one.',
  },
  {
    num: '07',
    slug: 'mit',
    name: 'MIT',
    university: 'Massachusetts Institute of Technology',
    city: 'Cambridge',
    state: 'MA',
    status: 'incoming',
    founded: '2027',
    estYear: '2027',
    sub: 'Chapter 07 is coming to MIT. The lab is not open yet. The movement already is.',
    tagline: 'The lab that never sleeps. Coming to Cambridge.',
    vision: 'The most technically capable student body on the planet. Chapter 07 will give them somewhere to build things nobody assigned them.',
  },
];

export function getChapterBySlug(slug: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.slug === slug);
}
