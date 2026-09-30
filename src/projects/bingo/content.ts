import type { ProjectDefinition } from '@/types/project';

export const bingoProject: ProjectDefinition = {
  slug: 'bingo',
  title: 'Bingo',
  subtitle: 'Bingo event operations',
  category: 'Client project',
  summary:
    'Full-stack development connecting event administration, bingo cards, draw tracking, and printable outputs.',
  technologies: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'Sequelize', 'MySQL'],
  featured: true,
  visual: 'bingo',
  role: 'Full-stack Developer',
};

export const bingoCaseStudy = {
  headline: 'From event setup to the final card check.',
  introduction:
    'A web application that brings bingo preparation and game-day operations into one product: organizing events, managing cards, running rounds, and checking called numbers.',
  contribution:
    'I handled the complete software development across the React interface, backend APIs, database integration, and document workflows. Negotiation with the end client was handled by someone else.',
  capabilities: [
    {
      title: 'Prepare the event',
      copy: 'Manage institutions, bingo events, and rounds with their associated prizes and presentation details.',
    },
    {
      title: 'Manage the cards',
      copy: 'Generate and look up cards, maintain buyer and seller assignments, and import assignment data from spreadsheets.',
    },
    {
      title: 'Follow the round',
      copy: 'Display called numbers and draw history, track card matches, and inspect a card during winner review.',
    },
    {
      title: 'Prepare printable outputs',
      copy: 'Preview cards, export individual or selected cards as PDFs, and export card data to Excel.',
    },
  ],
  implementation: [
    {
      title: 'Frontend & interaction',
      copy: 'React and JavaScript with Redux Toolkit for application state, React Router for navigation, and Bootstrap for the original interface. The game screen connects draw actions with updated round information.',
    },
    {
      title: 'Backend & persistence',
      copy: 'Node.js and Express handle event, card, and round operations. Sequelize and MySQL persist the data used by the administrative interface and game screen.',
    },
    {
      title: 'Spreadsheet & PDF workflows',
      copy: 'SheetJS supports spreadsheet import and export. Browser-side PDF workflows use jsPDF and html2canvas to turn card previews into downloadable documents.',
    },
  ],
  demo: {
    title: 'Inspect a round in progress',
    description:
      'An original portfolio illustration with a fictional card and a fixed call sequence. Advance the sequence, check the card, and reset the round to explore the workflow.',
    note: 'Illustrative demo · Fictional data · Fixed sequence',
    cardLabel: 'Sample card 001',
    columns: ['B', 'I', 'N', 'G', 'O'],
    card: [
      [3, 24, 45, 66, 87],
      [7, 28, 49, 70, 91],
      [11, 32, 53, 74, 95],
      [15, 36, 57, 78, 98],
      [19, 40, 60, 80, 100],
    ],
    calls: [
      3, 24, 45, 66, 87, 7, 28, 49, 70, 91, 11, 32, 53, 74, 95, 15, 36, 57, 78, 98, 19,
      40, 60, 80, 100,
    ],
    initialCallCount: 21,
  },
  publicationNote:
    'This case study describes the implemented product and my contribution. The interactive example is an original portfolio demo; it uses fictional data and does not connect to the client application.',
} as const;
