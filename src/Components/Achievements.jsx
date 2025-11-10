// Achievements component for CTF and Bug Bounty
import React, { memo, useEffect, useRef } from 'react'
import '../style.css'

const achievementsData = [
  // Security Research
  {
    id: 1,
    title: 'Wikimedia Foundation Security Hall of Fame',
    type: 'Security Research',
    description: 'Listed in the Security Hall of Fame for responsible disclosure.',
    platform: 'Wikimedia Foundation',
    date: '2022'
  },
  {
    id: 2,
    title: 'Critical API Vulnerability Discovery',
    type: 'Bug Bounty',
    description: 'Identified critical API vulnerability exposing sensitive data, reported and received bounty.',
    platform: 'Ultrahacks',
    date: '2025'
  },
  {
    id: 3,
    title: 'GraphQL Introspection Exploitation',
    type: 'Security Research',
    description: 'Exploited GraphQL introspection and discovered judge password leakage due to misconfigured endpoints.',
    platform: 'HackQuest',
    date: '2025'
  },
  // CTF Competitions
  {
    id: 4,
    title: 'c0c0n CTF 2025 - 20th Place Internationally',
    type: 'CTF Competition',
    description: 'Ranked 20th internationally in this 24-hour CTF event.',
    platform: 'c0c0n CTF',
    date: '2025'
  },
  {
    id: 5,
    title: 'L3AK CTF 2025 - Top 15% Globally',
    type: 'CTF Competition',
    description: 'Ranked 308th internationally, placing in the top 15% in this intense 48-hour competition.',
    platform: 'L3AK CTF',
    date: '2025'
  },
  {
    id: 6,
    title: 'Kaspersky CTF 2025 - 64th Place (Asia-Oceania)',
    type: 'CTF Competition',
    description: 'Ranked 64th in the Asia and Oceania Region.',
    platform: 'Kaspersky CTF',
    date: '2025'
  },
  {
    id: 7,
    title: 'SEATF NITK 2025 - 17th Place National',
    type: 'CTF Competition',
    description: 'Achieved 17th place in national-level cybersecurity CTF.',
    platform: 'SEATF NITK',
    date: '2025'
  },
  {
    id: 8,
    title: 'Seasides CTF 2025 - 3rd Place',
    type: 'CTF Competition',
    description: 'Secured 3rd place demonstrating advanced web and crypto exploitation skills.',
    platform: 'Seasides CTF',
    date: '2025'
  },
  {
    id: 9,
    title: 'CRAC HIRING CTF 2025 - 17th Place National',
    type: 'CTF Competition',
    description: 'Secured 17th place in national-level CTF.',
    platform: 'CRAC HIRING CTF',
    date: '2025'
  },
  // Hackathons
  {
    id: 10,
    title: 'CIDECODE 2024 OSINT Track - First Runner Up',
    type: 'Hackathon',
    description: 'Earned First Runner Up in national hackathon under OSINT track.',
    platform: 'CIDECODE',
    date: '2024'
  },
  {
    id: 11,
    title: 'Ton Blockchain Hackathon - Top 10 Selection',
    type: 'Hackathon',
    description: 'Selected among the top 10 teams at TonHacker House; presented to international jury at Hilton DoubleTree.',
    platform: 'Agriscrow (Ton Blockchain)',
    date: '2025'
  },
  {
    id: 12,
    title: 'Sceptix Premier Hackathon Agriculture - First Runner Up',
    type: 'Hackathon',
    description: 'Earned First Runner Up in the Agriculture Track.',
    platform: 'Sceptix Premier Hackathon',
    date: '2025'
  }
];

const AchievementCard = memo(({ achievement }) => (
  <div className='achievement fade-item'>
    <div className='achievement-header'>
      <h3 className='achievement-title'>{achievement.title}</h3>
      <span className='achievement-type'>{achievement.type}</span>
    </div>
    <p className='achievement-description'>{achievement.description}</p>
    <div className='achievement-footer'>
      <span className='achievement-platform'>{achievement.platform}</span>
      <span className='achievement-date'>{achievement.date}</span>
    </div>
  </div>
));

const Achievements = () => {
  const achievementsRef = useRef(null);

  useEffect(() => {
    const items = achievementsRef.current
      ? achievementsRef.current.querySelectorAll('.fade-item')
      : [];

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-55px'
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about fade-section" ref={achievementsRef}>
      <h2 className="fade-item">🏆 Achievements</h2>
      <div className='Achievements'>
        {achievementsData.map((achievement) => (
          <AchievementCard 
            key={achievement.id} 
            achievement={achievement}
          />
        ))}
      </div>
    </section>
  );
}

export default memo(Achievements);
