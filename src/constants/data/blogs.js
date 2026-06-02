/**
 * Blog content model for the portfolio website.
 *
 * - A **series** represents a global topic (e.g. Docker) that contains multiple posts.
 * - A **standalone** post is a single article with no series navigation.
 */

/**
 * @typedef {'series' | 'standalone'} BlogEntryType
 */

/**
 * @typedef {object} BlogPost
 * @property {string} slug URL-safe post slug (unique within its parent entry).
 * @property {string} title Visible post title.
 * @property {string} description Short summary used in list views.
 * @property {string} dateISO ISO-8601 date string (e.g. "2026-06-02").
 * @property {readonly string[]} tags Content tags.
 * @property {readonly { heading: string, paragraphs: readonly string[] }[]} sections Sectioned content.
 */

/**
 * @typedef {object} BlogSeries
 * @property {'series'} type
 * @property {string} slug URL-safe series/topic slug (unique across all entries).
 * @property {string} title Visible topic title.
 * @property {string} description Topic summary.
 * @property {readonly string[]} tags Topic tags.
 * @property {readonly BlogPost[]} posts Series posts (must be length > 1).
 */

/**
 * @typedef {object} BlogStandalone
 * @property {'standalone'} type
 * @property {string} slug URL-safe slug for the standalone post (unique across all entries).
 * @property {BlogPost} post Single post payload.
 */

/**
 * Union of supported blog entry shapes.
 * @typedef {BlogSeries | BlogStandalone} BlogEntry
 */

/**
 * Dummy blog entries for initial UI + routing.
 * @type {readonly BlogEntry[]}
 */
export const BLOG_ENTRIES = [
  {
    type: 'series',
    slug: 'docker',
    title: 'Docker',
    description:
      'A practical, backend-engineer friendly series on using Docker for real services (not just Hello World).',
    tags: ['docker', 'containers', 'devops'],
    posts: [
      {
        slug: 'getting-started',
        title: 'Docker: Getting started (the mental model)',
        description:
          'Images vs containers, layers, and the 3 commands you’ll actually use daily.',
        dateISO: '2026-06-02',
        tags: ['docker', 'basics'],
        sections: [
          {
            heading: 'What you should visualize',
            paragraphs: [
              'An image is an immutable filesystem snapshot + metadata. A container is a running instance with a thin writable layer on top.',
              'Most confusion disappears once you separate build-time (Dockerfile) from runtime (docker run / compose).',
            ],
          },
          {
            heading: 'The daily workflow',
            paragraphs: [
              'Build: docker build -t myapp:dev .',
              'Run: docker run --rm -p 8080:8080 myapp:dev',
              'Debug: docker logs / docker exec -it',
            ],
          },
        ],
      },
      {
        slug: 'compose-for-backends',
        title: 'Docker Compose for backend stacks',
        description:
          'Spin up Postgres + Redis + your API locally with sane defaults and deterministic networking.',
        dateISO: '2026-06-03',
        tags: ['docker', 'compose', 'postgres', 'redis'],
        sections: [
          {
            heading: 'Why Compose matters',
            paragraphs: [
              'Your local setup should match production topology: separate services, explicit ports, and repeatable volumes.',
              'Compose gives you “one command” boot for multi-service workflows.',
            ],
          },
          {
            heading: 'A minimal stack',
            paragraphs: [
              'Use healthchecks and depends_on with conditions to avoid flaky boot order.',
              'Keep env vars explicit and commit safe defaults (no secrets).',
            ],
          },
        ],
      },
    ],
  },
  {
    type: 'standalone',
    slug: 'engineering-notes',
    post: {
      slug: 'engineering-notes',
      title: 'Engineering notes: what I optimize for',
      description:
        'A short memo on building reliable systems: correctness, observability, and sustainable speed.',
      dateISO: '2026-06-01',
      tags: ['engineering', 'career', 'systems'],
      sections: [
        {
          heading: 'Correctness over cleverness',
          paragraphs: [
            'When in doubt, make the invariant explicit and test it. If a system is hard to reason about, it will fail in production.',
          ],
        },
        {
          heading: 'Observability is a feature',
          paragraphs: [
            'I like systems where the “why” is discoverable: structured logs, high-signal metrics, and traces that survive refactors.',
          ],
        },
        {
          heading: 'Sustainable speed',
          paragraphs: [
            'Fast teams ship small, reversible changes. The compounding effect beats heroic crunch cycles every time.',
          ],
        },
      ],
    },
  },
]

