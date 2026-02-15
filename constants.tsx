
import { PortfolioItem, Service, Skill } from './types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Promotional
  {
    id: 'p1',
    type: 'video',
    category: 'Promotional',
    title: 'Brand Growth Promo',
    description: 'High-impact promotional content designed for conversion and brand awareness.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    link: 'https://drive.google.com/file/d/10DaQcdi1suqYdAxviOigsCmEzZpsqxpf/view?usp=drive_link',
    client: 'Xcel-Media Group',
    challenge: 'The client needed a high-energy trailer to launch their new service within 48 hours.',
    solution: 'We implemented a fast-paced rhythm-based edit with custom sound design to drive engagement.',
    results: '+200% Increase in landing page conversions.'
  },
  {
    id: 'p2',
    type: 'video',
    category: 'Promotional',
    title: 'Agency Service Showcase',
    description: 'A dynamic highlight reel of premium post-production services.',
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
    link: 'https://drive.google.com/file/d/1YNPxmeQRaWEZLrrWNbSqaE6_wJkY0A_h/view?usp=sharing',
    client: 'EditXcel Internal',
    challenge: 'Demonstrating complex editing techniques in under 60 seconds.',
    solution: 'Used split-screen comparisons and motion tracking to highlight technical precision.',
    results: 'Primary lead magnet for Q4 2024.'
  },
  // Faceless Moto
  {
    id: 'm1',
    type: 'video',
    category: 'Faceless (Moto)',
    title: 'Moto Legends Story',
    description: 'Deep dive into motorcycle history with high-retention automation editing.',
    thumbnail: 'https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=800',
    link: 'https://drive.google.com/file/d/1GIqvkMhM_yib5QV2SStr8_tHps4Kjh_G/view?usp=sharing',
    client: 'MotoAuto Channel',
    challenge: 'Transforming static archive footage into a compelling 10-minute narrative.',
    solution: 'Dynamic pans, overlays, and a deep-bass voiceover EQ for authoritative tone.',
    results: '1.2M Views within first 30 days.'
  },
  {
    id: 'm2',
    type: 'video',
    category: 'Faceless (Moto)',
    title: 'Superbike Evolution',
    description: 'Fast-paced documentary style edit focusing on engineering and speed.',
    thumbnail: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=800',
    link: 'https://drive.google.com/file/d/1CAbBv4ClVP_peDT1nXj38_ILME39-qhV/view?usp=sharing',
    client: 'GearHeads TV',
    challenge: 'High drop-off rates at the 2-minute mark in previous edits.',
    solution: 'Strategic "pattern interrupts" every 45 seconds to reset viewer attention.',
    results: 'Average view duration increased from 32% to 64%.'
  },
  {
    id: 'm3',
    type: 'video',
    category: 'Faceless (Moto)',
    title: 'Biker Lifestyle Explainer',
    description: 'Engaging faceless content optimized for YouTube search and suggestions.',
    thumbnail: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800',
    link: 'https://drive.google.com/file/d/19-ELB2BnyfuLmgtgd20MS0ABgsPhqAvY/view?usp=drive_link',
    client: 'CycleSphere',
    challenge: 'Building a community feel without an on-camera personality.',
    solution: 'Heavy focus on community-submitted clips and UGC-style editing.',
    results: '5,000 New subscribers gained from a single video.'
  },
  {
    id: 'm4',
    type: 'video',
    category: 'Faceless (Moto)',
    title: 'Extreme Racing Review',
    description: 'Polished commentary-driven video with advanced sound design.',
    thumbnail: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800',
    link: 'https://drive.google.com/file/d/1PG0K_RdLa-4Xt3hi_aeIJ5kuveguti4o/view?usp=sharing',
    client: 'SpeedLimitless',
    challenge: 'Low quality audio recordings from live race tracks.',
    solution: 'Advanced AI noise reduction and Foley sound replacement for engines.',
    results: 'Crystal clear commentary over roaring superbike engines.'
  },
  {
    id: 'm5',
    type: 'video',
    category: 'Faceless (Moto)',
    title: 'Custom Build Journey',
    description: 'Transformative storytelling focusing on the art of motorcycle building.',
    thumbnail: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80&w=800',
    link: 'https://drive.google.com/file/d/1cwJ1E1wTdduJ84pU7Ua2w42cqL7OaOEu/view?usp=drive_link',
    client: 'GarageFlow',
    challenge: 'Over 20 hours of raw workshop footage to condense into 8 minutes.',
    solution: 'Time-lapse montages and "ASMR" shop sounds to create a relaxing flow.',
    results: 'Highly shareable Facebook and YouTube content.'
  },
  // Car Niche
  {
    id: 'c1',
    type: 'video',
    category: 'Car Niche',
    title: 'Elite Supercar Cinematic',
    description: 'Sleek, high-production value car cinematography and color grading.',
    thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    link: 'https://drive.google.com/file/d/1Jie9qBPnhIa5sZLY7z3NMusrwZQCi5HD/view?usp=drive_link',
    client: 'LuxuryWheels Hub',
    challenge: 'Flat, uninspiring log footage from a rainy shoot day.',
    solution: 'Custom LUT creation and digital sky replacement to create a "Neon Night" vibe.',
    results: 'Featured on several major automotive blogs.'
  },
  {
    id: 'c2',
    type: 'video',
    category: 'Car Niche',
    title: 'The Future of EV',
    description: 'Clean, modern editing for high-tech automotive content.',
    thumbnail: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
    link: 'https://drive.google.com/file/d/1VDdeGkfxl2jUnwu6rjVmntBAPOSPu_GX/view?usp=drive_link',
    client: 'VoltAutomotive',
    challenge: 'Explaining complex battery tech without boring the audience.',
    solution: 'Integrated motion graphics and 3D callouts to visualize tech specs.',
    results: 'Client reported 85% positive feedback on educational clarity.'
  },
  // Cashcow Docs
  {
    id: 'd1',
    type: 'video',
    category: 'Cashcow Docs',
    title: 'Global Economy Insight',
    description: 'Premium documentary style with data visualizations and expert pacing.',
    thumbnail: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800',
    link: 'https://drive.google.com/file/d/1vijLnPowvz5UCN3v4ztilpheWcX8EZc_/view?usp=drive_link',
    client: 'The Wealth Report',
    challenge: 'Niche topic needing to reach a broad audience.',
    solution: 'Click-worthy hook and "Wall Street" style visual aesthetics.',
    results: 'CPM increased by 40% due to high-value viewer demographic.'
  },
  {
    id: 'd2',
    type: 'video',
    category: 'Cashcow Docs',
    title: 'The Industrial Revolution',
    description: 'Historical storytelling optimized for high CPM YouTube channels.',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    link: 'https://drive.google.com/file/d/1-zWtg1nadHHBrogH-A9vrqJb_qCJardF/view?usp=drive_link',
    client: 'HistoryVault',
    challenge: 'Minimal available video footage of the era.',
    solution: 'Heavy use of parallax (Ken Burns effect) on high-res historical paintings.',
    results: 'Organic reach surpassed 500k in 2 weeks.'
  },
  {
    id: 'd3',
    type: 'video',
    category: 'Cashcow Docs',
    title: 'AI & The Future',
    description: 'Cutting-edge documentary focusing on emerging tech and society.',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    link: 'https://drive.google.com/file/d/1ByFxltgKLkMQjzzliaoyuOMarcaJybCK/view?usp=drive_link',
    client: 'FutureFocus',
    challenge: 'Video becoming outdated quickly due to rapid AI shifts.',
    solution: 'Modular editing style that allows for easy updates of specific segments.',
    results: 'Long-term evergreen performance.'
  },
  {
    id: 'd4',
    type: 'video',
    category: 'Cashcow Docs',
    title: 'Mystery of the Deep',
    description: 'Atmospheric and suspenseful editing for exploration-themed content.',
    thumbnail: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800',
    link: 'https://drive.google.com/file/d/1h7o3KTeXv__bB25s73bZb34TZusn0Zsi/view?usp=drive_link',
    client: 'DeepDive Docs',
    challenge: 'Maintaining suspense throughout a 15-minute runtime.',
    solution: 'Orchestral tension-building score and low-key color palette.',
    results: 'Won "Editor\'s Choice" on a major curation platform.'
  },
  {
    id: 'd5',
    type: 'video',
    category: 'Cashcow Docs',
    title: 'Success Blueprint',
    description: 'Case study style video designed for high engagement and watch time.',
    thumbnail: 'https://images.unsplash.com/photo-1454165833767-027ffea7027d?auto=format&fit=crop&q=80&w=800',
    link: 'https://drive.google.com/file/d/1OhMpVQxgFin9T8HTBirRja8AW-5FdtUT/view?usp=drive_link',
    client: 'MindsetMastery',
    challenge: 'Generic "self-help" content needed a premium edge.',
    solution: 'Crisp typography and minimalist vector animations to elevate brand value.',
    results: 'Channel growth rate increased by 25% post-rebrand.'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Niche Automation',
    description: 'Complete post-production systems for faceless channels in high-CPM niches.',
    icon: 'fa-robot'
  },
  {
    title: 'Retention Engineering',
    description: 'Data-driven editing techniques to maximize watch time and viral potential.',
    icon: 'fa-chart-line'
  },
  {
    title: 'Cinematic Storytelling',
    description: 'Advanced color grading and pacing for brand-focused documentary content.',
    icon: 'fa-film'
  },
  {
    title: 'Strategic Consulting',
    description: 'We help agencies and creators optimize their entire content pipeline.',
    icon: 'fa-lightbulb'
  }
];

export const SKILLS: Skill[] = [
  { name: 'YouTube Algorithm Strategy', level: 98 },
  { name: 'Adobe Premiere & After Effects', level: 95 },
  { name: 'High-Speed Color Grading', level: 92 },
  { name: 'Retention-Based Scripting', level: 90 }
];
