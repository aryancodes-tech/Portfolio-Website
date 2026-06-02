import { Trophy, Medal } from 'lucide-react'

/** Honors and awards entries for the Honors & Awards section. */
export const awardsData = [
  {
    title: 'Hackathon Winner',
    organization: 'Hyperverge, Bengaluru',
    description: (
      <>
        <b className="text-[hsl(var(--ink))]">Secured 1st place</b> among 75+ shortlisted teams in hackathon organized by Hyperverge, Bengaluru.
      </>
    ),
    icon: Trophy,
  },
  {
    title: "NTSE Scholar'19",
    organization: 'NCERT, India',
    description: (
      <>
        Received a monetory scholarship among <b className="text-[hsl(var(--ink))]">India&apos;s top 1000 students</b>, outperforming over 10,00,000 participants in a 2-stage process.
      </>
    ),
    icon: Medal,
  },
]
