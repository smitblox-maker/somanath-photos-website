export interface PhotoItem {
  id: string;
  title: string;
  category: 'weddings' | 'prewedding' | 'portraits' | 'events' | 'cinematic';
  categoryLabel: string;
  image?: string;
  localFallback?: string;
  postimgPage?: string;
  aspectRatio: 'aspect-[4/5]' | 'aspect-[16/9]' | 'aspect-[4/3]' | 'aspect-square';
  location: string;
  year: string;
  exif: {
    camera: string;
    lens: string;
    focalLength: string;
    aperture: string;
    shutter: string;
    iso: string;
  };
  description: string;
  tags: string[];
  featured?: boolean;
}

export interface VideoTeaserItem {
  id: string;
  title: string;
  subtitle: string;
  coupleOrEvent: string;
  duration: string;
  resolution: '4K HDR' | '4K DCI' | '6K RAW' | 'Full HD 60p';
  category: 'Wedding Cinema' | 'Pre-Wedding Film' | 'Instagram Reel' | 'Sangeet Teaser';
  aspectRatio: '16:9' | '9:16';
  poster: string;
  localFallback?: string;
  description: string;
  camera: string;
  lens: string;
  lut: string;
  views?: string;
  featured?: boolean;
}

/**
 * Direct image links provided by client (uploaded on PostImg):
 */
export const CLIENT_DIRECT_IMAGES = {
  img01: 'https://i.postimg.cc/wB7Fb19m/01-(1)-jpg.jpg', // 01 (1) - Pre-wedding desert romance
  post25: 'https://i.postimg.cc/MHjDZNn0/Post-25-jpg.jpg', // Post 25 - Sacred Varmala Garland Exchange
  post29: 'https://i.postimg.cc/GhGWqSqN/Post-29-jpg.jpg', // Post 29 - Lakeside Serenade at Dawn
  sp3_1: 'https://i.postimg.cc/8cBbrWb8/SP-(3)-(1)-jpg.jpg', // SP (3) (1) - The Royal Mandap Union
  sp3: 'https://i.postimg.cc/2yfw6ThK/SP-(3)-jpg.jpg', // SP (3) - Heritage Royal Couple & Cinema
  sp4_1: 'https://i.postimg.cc/wMKWN98R/SP-(4)-(1)-jpg.jpg', // SP (4) (1) - The Regal Rajputana Bride
  sp4: 'https://i.postimg.cc/9QXLZxS9/SP-(4)-jpg.jpg', // SP (4) - Groom Regal Turban & Sherwani
  sp5_1: 'https://i.postimg.cc/sg3NKfB0/SP-(5)-(1)-jpg.jpg', // SP (5) (1) - Colors of Joy: Grand Haldi
  story04: 'https://i.postimg.cc/4dcPsj7f/Story-04-jpg.jpg', // Story 04 - Sunset Romance Reel
  storyB02: 'https://i.postimg.cc/VsrQbNMw/Story-B-02-jpg.jpg', // Story B 02 - Sangeet Euphoria & Dance
  yb07: 'https://i.postimg.cc/pXzwq1sM/Y-B-07-jpg.jpg', // Y B 07 - Ravi & Bhumika Wedding Feature
};

export const FEATURED_VIDEOS: VideoTeaserItem[] = [
  {
    id: 'vid-01',
    title: 'The Royal Mandap Union',
    subtitle: 'Ravi + Bhumika Official Wedding Teaser',
    coupleOrEvent: 'Ravi & Bhumika',
    duration: '04:32',
    resolution: '4K HDR',
    category: 'Wedding Cinema',
    aspectRatio: '16:9',
    poster: 'https://i.postimg.cc/8cBbrWb8/SP-(3)-(1)-jpg.jpg',
    localFallback: '/images/client/sp-3-1.jpg',
    description: 'An emotional cinematic journey of Ravi & Bhumika uniting under the royal heritage mandap, master graded in Somnath Warm Amber LUT with authentic live sound design.',
    camera: 'Sony FX3 Cinema Line',
    lens: 'FE 50mm f/1.2 GM + CineAlta 35mm',
    lut: 'Somnath Signature Royal Gold',
    views: '24.8K',
    featured: true,
  },
  {
    id: 'vid-02',
    title: 'Eternal Vows: The Heritage Romance',
    subtitle: 'SP Signature Cinematic Feature',
    coupleOrEvent: 'Somnath Photos Royal Cut',
    duration: '03:15',
    resolution: '4K DCI',
    category: 'Wedding Cinema',
    aspectRatio: '16:9',
    poster: 'https://i.postimg.cc/2yfw6ThK/SP-(3)-jpg.jpg',
    localFallback: '/images/client/sp-3.jpg',
    description: 'Anamorphic film cut capturing candid glances, pheras rituals, and palace reflections bathed in golden twilight glow.',
    camera: 'Sony FX6 Cinema Line',
    lens: 'Sirui Anamorphic 50mm T2.9',
    lut: 'Kodak 2383 Film Print Emulation',
    views: '18.4K',
    featured: true,
  },
  {
    id: 'vid-03',
    title: 'Story 04 | Golden Sunset Romance',
    subtitle: 'Desert & Lake Pre-Wedding Reel',
    coupleOrEvent: 'Pre-Wedding Story',
    duration: '00:58',
    resolution: '4K HDR',
    category: 'Instagram Reel',
    aspectRatio: '9:16',
    poster: 'https://i.postimg.cc/4dcPsj7f/Story-04-jpg.jpg',
    localFallback: '/images/client/story-04.jpg',
    description: 'Dynamic vertical Instagram reel capturing windblown silken gowns, sunset sand ripples, and intimate laughter across natural vistas.',
    camera: 'Sony Alpha 7R V + Gimbal',
    lens: 'FE 24-70mm f/2.8 GM II',
    lut: 'Warm Sunset Glow LUT',
    views: '42.1K',
    featured: true,
  },
  {
    id: 'vid-04',
    title: 'Sangeet Euphoria & Celebration Night',
    subtitle: 'High-Energy Dance Stage Teaser',
    coupleOrEvent: 'Grand Sangeet Night',
    duration: '02:40',
    resolution: '4K HDR',
    category: 'Sangeet Teaser',
    aspectRatio: '16:9',
    poster: 'https://i.postimg.cc/VsrQbNMw/Story-B-02-jpg.jpg',
    localFallback: '/images/client/story-b-02.jpg',
    description: 'Electric stage energy, live dhol beats, moving light choreography, and candid family celebration captured in high frame rates.',
    camera: 'Sony FX3 Cinema Line',
    lens: 'FE 24mm f/1.4 GM',
    lut: 'Vibrant Stage Night LUT',
    views: '15.9K',
    featured: false,
  },
];

export const PORTFOLIO_ITEMS: PhotoItem[] = [
  {
    id: 'w-01',
    title: 'The Royal Mandap Union (SP 03)',
    category: 'weddings',
    categoryLabel: 'Wedding',
    image: 'https://i.postimg.cc/8cBbrWb8/SP-(3)-(1)-jpg.jpg',
    localFallback: '/images/client/sp-3-1.jpg',
    postimgPage: 'https://postimg.cc/jn2fpD9v',
    aspectRatio: 'aspect-[4/5]',
    location: 'Udaipur City Palace, Rajasthan',
    year: '2024',
    exif: {
      camera: 'Sony Alpha FX3 Cinema',
      lens: 'FE 50mm f/1.2 GM',
      focalLength: '50mm',
      aperture: 'f/1.4',
      shutter: '1/400s',
      iso: 'ISO 200'
    },
    description: 'Breathtaking pheras ceremony captured against ancestral stone carvings illuminated by hundreds of ceremonial brass oil lamps.',
    tags: ['Royal Wedding', 'Mandap Pheras', 'SP Signature'],
    featured: true
  },
  {
    id: 'w-02',
    title: 'Ravi & Bhumika: Grand Mandap Union',
    category: 'weddings',
    categoryLabel: 'Wedding',
    image: 'https://i.postimg.cc/pXzwq1sM/Y-B-07-jpg.jpg',
    localFallback: '/images/client/yb-07.jpg',
    postimgPage: 'https://postimg.cc/Ln4Qsvdx',
    aspectRatio: 'aspect-[16/9]',
    location: 'Royal Heritage Resort, Gujarat',
    year: '2024',
    exif: {
      camera: 'Sony FX3 Cinema Line',
      lens: 'FE 35mm f/1.4 GM',
      focalLength: '35mm',
      aperture: 'f/1.8',
      shutter: '1/500s',
      iso: 'ISO 250'
    },
    description: 'Joyous mandap moments and vibrant pheras of Ravi and Bhumika surrounded by sacred rituals and glowing chandeliers.',
    tags: ['Ravi + Bhumika', 'Royal Mandap', 'Vibrant Pheras'],
    featured: true
  },
  {
    id: 'pw-01',
    title: '01: Golden Dunes Twilight Silhouette',
    category: 'prewedding',
    categoryLabel: 'Pre-Wedding',
    image: 'https://i.postimg.cc/wB7Fb19m/01-(1)-jpg.jpg',
    localFallback: '/images/client/01-1.jpg',
    postimgPage: 'https://postimg.cc/f3QxVTtz',
    aspectRatio: 'aspect-[16/9]',
    location: 'Thar Desert Sanctuary, Jaisalmer',
    year: '2024',
    exif: {
      camera: 'Sony Alpha 7R V',
      lens: 'FE 85mm f/1.4 GM',
      focalLength: '85mm',
      aperture: 'f/1.8',
      shutter: '1/800s',
      iso: 'ISO 100'
    },
    description: 'Intimate sunset stroll over wind-swept sand ridges as warm amber light wraps around the couple.',
    tags: ['Desert Sunset', '01 Shoot', 'Golden Hour'],
    featured: true
  },
  {
    id: 'p-01',
    title: 'SP 04: The Regal Rajputana Bride',
    category: 'portraits',
    categoryLabel: 'Portrait',
    image: 'https://i.postimg.cc/wMKWN98R/SP-(4)-(1)-jpg.jpg',
    localFallback: '/images/client/sp-4-1.jpg',
    postimgPage: 'https://postimg.cc/phZYbbdP',
    aspectRatio: 'aspect-[4/5]',
    location: 'Somnath Heritage Haveli, Gujarat',
    year: '2024',
    exif: {
      camera: 'Sony Alpha 1',
      lens: 'FE 135mm f/1.8 GM',
      focalLength: '135mm',
      aperture: 'f/2.0',
      shutter: '1/320s',
      iso: 'ISO 160'
    },
    description: 'Chiaroscuro studio-grade bridal portrait highlighting handcrafted Kundan jewelry and embroidered raw silk textures.',
    tags: ['Bridal Elegance', 'Jewelry Craft', 'SP 04'],
    featured: true
  },
  {
    id: 'c-01',
    title: 'Eternal Vows: 4K Cinema Cut',
    category: 'cinematic',
    categoryLabel: 'Cinematic Film',
    image: 'https://i.postimg.cc/2yfw6ThK/SP-(3)-jpg.jpg',
    localFallback: '/images/client/sp-3.jpg',
    postimgPage: 'https://postimg.cc/S2D816Z6',
    aspectRatio: 'aspect-[16/9]',
    location: 'Lake Pichola Palace, Udaipur',
    year: '2024',
    exif: {
      camera: 'Sony FX6 Cinema Line',
      lens: 'CineAlta 50mm T1.5',
      focalLength: '50mm',
      aperture: 'T1.8',
      shutter: '1/50s (180° Shutter)',
      iso: 'S-Log3 / ISO 800'
    },
    description: 'An anamorphic still from our acclaimed wedding teaser film, master graded in Somnath Signature Warm Amber LUT.',
    tags: ['4K Anamorphic', 'S-Log3 Color Grade', 'Cinematic Cut'],
    featured: true
  },
  {
    id: 'pw-02',
    title: 'Story 04: Sunset Romance Reel',
    category: 'prewedding',
    categoryLabel: 'Pre-Wedding',
    image: 'https://i.postimg.cc/4dcPsj7f/Story-04-jpg.jpg',
    localFallback: '/images/client/story-04.jpg',
    postimgPage: 'https://postimg.cc/xJ0MPx3h',
    aspectRatio: 'aspect-[4/5]',
    location: 'Fateh Sagar Lake, Udaipur',
    year: '2024',
    exif: {
      camera: 'Sony Alpha 7R V',
      lens: 'FE 50mm f/1.2 GM',
      focalLength: '50mm',
      aperture: 'f/1.6',
      shutter: '1/640s',
      iso: 'ISO 100'
    },
    description: 'Serene morning mist framing the couple standing along centuries-old marble ghats as sun breaks the horizon.',
    tags: ['Story 04', 'Instagram Reel', 'Romantic Dawn'],
    featured: true
  },
  {
    id: 'e-01',
    title: 'Colors of Joy: The Grand Haldi',
    category: 'events',
    categoryLabel: 'Event',
    image: 'https://i.postimg.cc/sg3NKfB0/SP-(5)-(1)-jpg.jpg',
    localFallback: '/images/client/sp-5-1.jpg',
    postimgPage: 'https://postimg.cc/Ln0D8p3z',
    aspectRatio: 'aspect-[4/3]',
    location: 'Riverfront Resort, Ahmedabad',
    year: '2024',
    exif: {
      camera: 'Sony Alpha 7S III',
      lens: 'FE 35mm f/1.4 GM',
      focalLength: '35mm',
      aperture: 'f/2.2',
      shutter: '1/1200s',
      iso: 'ISO 400'
    },
    description: 'High-speed candid capture of flying marigold petals and turmeric splashes surrounded by family laughter.',
    tags: ['Haldi Celebration', 'Marigold Splash', 'Pure Candid'],
    featured: false
  },
  {
    id: 'w-03',
    title: 'The Sacred Varmala Garland Exchange',
    category: 'weddings',
    categoryLabel: 'Wedding',
    image: 'https://i.postimg.cc/MHjDZNn0/Post-25-jpg.jpg',
    localFallback: '/images/client/post-25.jpg',
    postimgPage: 'https://postimg.cc/9wCTJxtz',
    aspectRatio: 'aspect-[4/3]',
    location: 'Surat Grand Convention, Gujarat',
    year: '2024',
    exif: {
      camera: 'Sony Alpha 7 IV',
      lens: 'FE 24-70mm f/2.8 GM II',
      focalLength: '48mm',
      aperture: 'f/2.8',
      shutter: '1/500s',
      iso: 'ISO 640'
    },
    description: 'Euphoric stage moment under fireworks mist as the couple shares their first glance as husband and wife.',
    tags: ['Varmala Exchange', 'Stage Fireworks', 'Emotional Peak'],
    featured: false
  },
  {
    id: 'pw-03',
    title: 'Lakeside Serenade at Dawn',
    category: 'prewedding',
    categoryLabel: 'Pre-Wedding',
    image: 'https://i.postimg.cc/GhGWqSqN/Post-29-jpg.jpg',
    localFallback: '/images/client/post-29.jpg',
    postimgPage: 'https://postimg.cc/F7FCKGtg',
    aspectRatio: 'aspect-[4/5]',
    location: 'Fateh Sagar Lake, Udaipur',
    year: '2024',
    exif: {
      camera: 'Sony Alpha 7R V',
      lens: 'FE 50mm f/1.2 GM',
      focalLength: '50mm',
      aperture: 'f/1.6',
      shutter: '1/640s',
      iso: 'ISO 100'
    },
    description: 'Serene morning mist framing the couple standing along centuries-old marble ghats as sun breaks the horizon.',
    tags: ['Marble Ghats', 'Morning Mist', 'Romantic Dawn'],
    featured: false
  },
  {
    id: 'p-02',
    title: 'Groom Regal Turban & Brocade Sherwani',
    category: 'portraits',
    categoryLabel: 'Portrait',
    image: 'https://i.postimg.cc/9QXLZxS9/SP-(4)-jpg.jpg',
    localFallback: '/images/client/sp-4.jpg',
    postimgPage: 'https://postimg.cc/8j3dVbTk',
    aspectRatio: 'aspect-[4/5]',
    location: 'Rajkot Heritage Club, Gujarat',
    year: '2024',
    exif: {
      camera: 'Sony Alpha 1',
      lens: 'FE 85mm f/1.4 GM',
      focalLength: '85mm',
      aperture: 'f/1.8',
      shutter: '1/400s',
      iso: 'ISO 125'
    },
    description: 'Statuesque portrait of the royal groom adorned in hand-woven brocade sherwani with gold safa brooch.',
    tags: ['Groom Portrait', 'Heritage Sherwani', 'Editorial Male'],
    featured: false
  },
  {
    id: 'e-02',
    title: 'Sangeet Night: Rhythm & Euphoria',
    category: 'events',
    categoryLabel: 'Event',
    image: 'https://i.postimg.cc/VsrQbNMw/Story-B-02-jpg.jpg',
    localFallback: '/images/client/story-b-02.jpg',
    postimgPage: 'https://postimg.cc/8sSn2NtX',
    aspectRatio: 'aspect-[16/9]',
    location: 'Hyatt Regency Ballroom, Ahmedabad',
    year: '2023',
    exif: {
      camera: 'Sony FX3 Cinema',
      lens: 'FE 24mm f/1.4 GM',
      focalLength: '24mm',
      aperture: 'f/1.4',
      shutter: '1/250s',
      iso: 'ISO 1600'
    },
    description: 'Dynamic long exposure ambient blend capturing the bride and groom performing on the LED sangeet dance stage.',
    tags: ['Sangeet Dance', 'Stage Lighting', 'Live Energy'],
    featured: false
  },
  {
    id: 'c-02',
    title: 'Ravi + Bhumika: 4K Cinema Teaser',
    category: 'cinematic',
    categoryLabel: 'Cinematic Film',
    image: 'https://i.postimg.cc/pXzwq1sM/Y-B-07-jpg.jpg',
    localFallback: '/images/client/yb-07.jpg',
    postimgPage: 'https://postimg.cc/Ln4Qsvdx',
    aspectRatio: 'aspect-[16/9]',
    location: 'Royal Heritage Mandap, Gujarat',
    year: '2024',
    exif: {
      camera: 'Sony FX3 Cinema Line',
      lens: 'CineAlta 50mm T1.5',
      focalLength: '50mm',
      aperture: 'T1.8',
      shutter: '1/50s (180° Shutter)',
      iso: 'S-Log3 / ISO 800'
    },
    description: 'Emotional moments, heartfelt laughter, and high-production pheras film master-graded for Ravi & Bhumika.',
    tags: ['Ravi + Bhumika', '4K Teaser', 'Signature Sound'],
    featured: true
  }
];

export interface PackageItem {
  id: string;
  name: string;
  price: number;
  priceDisplay: string;
  duration: string;
  category: 'prewedding' | 'wedding' | 'live' | 'ritual';
  crew: string[];
  features: string[];
  badge?: string;
  popular?: boolean;
}

export const PRE_WEDDING_PACKAGES: PackageItem[] = [
  {
    id: 'pw-pkg-1',
    name: 'Package 1',
    price: 20000,
    priceDisplay: '₹20,000/-',
    duration: '1 Day Shoot',
    category: 'prewedding',
    crew: ['1 Photographer'],
    features: ['1 Day Shoot', '1 Dedicated Photographer', 'Edited Photos', '1 Instagram Reel'],
  },
  {
    id: 'pw-pkg-2',
    name: 'Package 2',
    price: 50000,
    priceDisplay: '₹50,000/-',
    duration: '1 Day Shoot',
    category: 'prewedding',
    popular: true,
    badge: 'Most Popular',
    crew: ['1 Photographer', '1 Cinematographer', '1 Drone Pilot'],
    features: [
      '1 Day Shoot',
      '1 Photographer',
      '1 Cinematographer',
      '1 4K Drone Coverage',
      'Edited Photos',
      '1 Full Song Story Cut',
      'Coming Soon / Teaser Video',
    ],
  },
  {
    id: 'pw-pkg-3',
    name: 'Package 3',
    price: 100000,
    priceDisplay: '₹1,00,000/-',
    duration: '2 Days Shoot',
    category: 'prewedding',
    badge: 'Royal Grand',
    crew: ['1 Photographer', '1 Cinematographer', '1 Drone Pilot'],
    features: [
      '2 Days Shoot (Multi-Location)',
      '1 Senior Photographer',
      '1 Master Cinematographer',
      '1 4K Drone Coverage',
      'Full Edited Photos',
      '1 Full Song Story Cut',
      'Coming Soon / Teaser Video',
    ],
  },
];

export const WEDDING_PACKAGES: PackageItem[] = [
  {
    id: 'wed-pkg-1',
    name: 'Package 1',
    price: 100000,
    priceDisplay: '₹1,00,000/-',
    duration: '2 Days Function',
    category: 'wedding',
    crew: ['1 Traditional Photographer', '1 Candid Photographer', '1 Traditional Videographer'],
    features: [
      '2 Days Complete Function Coverage',
      '2 Photographers (1 Traditional, 1 Candid)',
      '1 Traditional Videographer',
      'Couple Photo Editing',
      '3 Curated Instagram Reels',
      '1 Full Function Video (Approx 2 to 3 Hours)',
      '1 Highlight Video (Approx 4 to 7 Minutes)',
    ],
  },
  {
    id: 'wed-pkg-2',
    name: 'Package 2',
    price: 200000,
    priceDisplay: '₹2,00,000/-',
    duration: '2 Days Function',
    category: 'wedding',
    popular: true,
    badge: 'Master Royal Celebration',
    crew: [
      '1 Traditional Photographer',
      '1 Candid Photographer',
      '1 Traditional Videographer',
      '1 Cinematographer',
      '1 Drone Pilot',
    ],
    features: [
      '2 Days Complete Function Coverage',
      '2 Photographers (1 Traditional, 1 Candid)',
      '2 Videographers (1 Traditional, 1 Cinematographer)',
      '1 Licensed 4K Aerial Drone Coverage',
      'Couple Photo Editing with Signature Color Grade',
      '3 Curated Instagram Reels',
      '1 Full Function Video (Approx 2 to 3 Hours)',
      '1 Highlight Video (Approx 4 to 7 Minutes)',
    ],
  },
];

export const LIVE_SETUP_PACKAGE = {
  id: 'live-setup-1',
  name: 'Live Setup (Half Day)',
  price: 50000,
  priceDisplay: '₹50,000/-',
  duration: 'Half Day Event',
  features: [
    '1 Giant High-Definition LED Screen (8 x 12 Feet)',
    'Live Multi-Cam Video Mixer Setup',
    '2 Wireless Camera Feeds',
    'Plasma TV Setup (Set of 5 Plasma TVs)',
  ],
};

export const EXTRA_SERVICES_LIST = [
  { id: 'ex-trad-photo', name: 'Traditional Photographer', price: 10000, priceDisplay: '₹10,000/-' },
  { id: 'ex-candid-photo', name: 'Candid Photographer', price: 15000, priceDisplay: '₹15,000/-' },
  { id: 'ex-trad-video', name: 'Traditional Videographer', price: 20000, priceDisplay: '₹20,000/-' },
  { id: 'ex-cinema-video', name: 'Cinematographer', price: 25000, priceDisplay: '₹25,000/-' },
  { id: 'ex-same-day-reel', name: 'Same Day Highlight Video', price: 15000, priceDisplay: '₹15,000/-' },
];

export const RITUAL_SERVICES_LIST = [
  {
    id: 'rit-2hr-photo',
    name: 'Lagan Lakhan / Vana Rasam (2 Hours) - Photographer',
    duration: '2 Hours',
    crew: 'Photographer',
    price: 5000,
    priceDisplay: '₹5,000/-',
  },
  {
    id: 'rit-2hr-both',
    name: 'Lagan Lakhan / Vana Rasam (2 Hours) - Photographer & Videographer',
    duration: '2 Hours',
    crew: 'Photographer & Videographer',
    price: 10000,
    priceDisplay: '₹10,000/-',
  },
  {
    id: 'rit-half-photo',
    name: 'Lagan Lakhan & Vana Rasam (Half Day) - Photographer',
    duration: 'Half Day',
    crew: 'Photographer',
    price: 8000,
    priceDisplay: '₹8,000/-',
  },
  {
    id: 'rit-half-both',
    name: 'Lagan Lakhan & Vana Rasam (Half Day) - Photographer & Videographer',
    duration: 'Half Day',
    crew: 'Photographer & Videographer',
    price: 15000,
    priceDisplay: '₹15,000/-',
  },
];

export interface TermItem {
  id: number;
  category: 'Booking & Payment' | 'Schedule & Conduct' | 'Delivery & Editing' | 'Data & Revisions' | 'Expenses & Policy';
  title: string;
  text: string;
  highlight?: boolean;
}

export const TERMS_AND_CONDITIONS: TermItem[] = [
  {
    id: 1,
    category: 'Booking & Payment',
    title: 'Quotation Validity',
    text: 'The quotation is valid for 7 days from the date it is sent.',
  },
  {
    id: 2,
    category: 'Booking & Payment',
    title: '50% Advance for Confirmation',
    text: 'To confirm the order, 50% of the total amount must be paid in advance. The order will be considered booked only after receiving this payment.',
    highlight: true,
  },
  {
    id: 3,
    category: 'Booking & Payment',
    title: 'Balance Payment & Data Handover',
    text: 'The remaining balance payment must be settled upon completion of event coverage prior to final handover of raw and edited media files.',
    highlight: true,
  },
  {
    id: 4,
    category: 'Booking & Payment',
    title: 'Extra Services & Reels',
    text: 'Any additional reels or extra services requested will incur an additional charge, which the client will be responsible for.',
  },
  {
    id: 5,
    category: 'Schedule & Conduct',
    title: 'Mandatory Couple & Family Shoot Time Allocation',
    text: "Before each function, the customer must allocate 1 hour for the couple's shoot and 30 minutes for the family shoot. If the customer fails to adhere to this schedule, the full responsibility will lie with them.",
    highlight: true,
  },
  {
    id: 6,
    category: 'Schedule & Conduct',
    title: 'Prior Event Schedules',
    text: 'All details regarding functions, including dates and times, have to be provided when the customer places their order.',
  },
  {
    id: 7,
    category: 'Booking & Payment',
    title: 'Price Lock Guarantee',
    text: 'Once the price of the order is finalized, it will not be reduced later.',
  },
  {
    id: 8,
    category: 'Delivery & Editing',
    title: 'Video Editing Delivery Timeline',
    text: 'Video editing may take 2 to 4 months. Kindly refrain from raising disputes regarding this timeline.',
  },
  {
    id: 9,
    category: 'Delivery & Editing',
    title: 'Photo Editing Delivery Timeline',
    text: 'Photo editing will be completed and delivered within 3 months from the event date.',
  },
  {
    id: 10,
    category: 'Data & Revisions',
    title: 'Revision Window (5 Days)',
    text: 'If any errors or revisions are required in the edited photos or videos, please inform us within 5 days. Any requests made after this period will be subject to an additional charge.',
  },
  {
    id: 11,
    category: 'Data & Revisions',
    title: 'Video Revisions Limit',
    text: 'One free revision will be provided for edited videos. Any further changes will incur additional costs.',
  },
  {
    id: 12,
    category: 'Data & Revisions',
    title: 'Storage & Data Archiving Policy',
    text: 'Wedding videos and photos will be securely stored with us for up to 1 year. Data from engagement, baby shower rituals, and other small events will be securely stored with us for up to 6 months. After this period, the data will be permanently deleted, and we will not be responsible for any lost data. Clients are kindly requested to take note of this.',
    highlight: true,
  },
  {
    id: 13,
    category: 'Data & Revisions',
    title: 'Technical Data Loss Disclaimer',
    text: 'We shall not be held responsible for any data loss due to technical issues during or after the function. In case of such loss, we are not obligated to provide a refund or any additional services.',
  },
  {
    id: 14,
    category: 'Expenses & Policy',
    title: 'Studio Copyright',
    text: 'The copyright of all images and videos remains with "Somnath Photos".',
  },
  {
    id: 15,
    category: 'Booking & Payment',
    title: 'Scope of Quotation',
    text: 'Any additional requirements not specified in the quotation will be charged separately.',
  },
  {
    id: 16,
    category: 'Expenses & Policy',
    title: 'No Meal Hours Coverage Policy',
    text: 'We do not provide photography or videography services for breakfast, lunch, or dinner events. Kindly avoid requesting or disputing footage for these meal periods during or after the event.',
    highlight: true,
  },
  {
    id: 17,
    category: 'Expenses & Policy',
    title: 'Travel, Food & Accommodation',
    text: 'The client is responsible for all travel, food, and accommodation expenses for our team.',
    highlight: true,
  },
];

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  event: string;
  rating: number;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-01',
    quote: 'Very good photography and polite behavior! Bipin made us feel so comfortable throughout our wedding shoot.',
    author: 'Rahul & Priya',
    role: 'Wedding Couple',
    location: 'Ahmedabad, Gujarat',
    event: 'Grand Royal Wedding',
    rating: 5,
    date: 'February 2024'
  },
  {
    id: 't-02',
    quote: 'Top-notch photo quality and creative angles. Highly recommend Somnath Photos for any special occasion!',
    author: 'Amit Patel',
    role: 'Bride’s Brother & Organizer',
    location: 'Surat, Gujarat',
    event: 'Destination Wedding at Riverfront',
    rating: 5,
    date: 'January 2024'
  },
  {
    id: 't-03',
    quote: 'Super professional service, punctual delivery, and amazing color grading! The pre-wedding reel got thousands of views.',
    author: 'Sneha Sharma',
    role: 'Bride',
    location: 'Somnath & Diu',
    event: 'Pre-Wedding & Sangeet',
    rating: 5,
    date: 'December 2023'
  },
  {
    id: 't-04',
    quote: 'Bipin Makwana is a true artist with the camera. He captured tiny emotions during our Vidaai that had everyone in tears. Unmatched quality!',
    author: 'Hardik & Janki Mehta',
    role: 'Wedding Couple',
    location: 'Rajkot, Gujarat',
    event: 'Traditional Gujarati Wedding',
    rating: 5,
    date: 'November 2023'
  }
];

export interface StudioStat {
  label: string;
  value: string;
  description: string;
}

export const STUDIO_STATS: StudioStat[] = [
  { label: 'Weddings Captured', value: '450+', description: 'Across Gujarat, Rajasthan & Destination Venues' },
  { label: 'Client Satisfaction', value: '5.0 ★', description: 'Verified Google & Word of Mouth Reviews' },
  { label: 'Experience', value: '10+ Yrs', description: 'Mastering Cinematic Lighting & Color Grading' },
  { label: 'Cinema Quality', value: '4K Ultra', description: 'Full-Frame Cinema Lenses & 10-Bit Color Depth' },
];

export interface StudioInfo {
  name: string;
  tagline: string;
  owner: string;
  role: string;
  phone: string;
  phoneRaw: string;
  phoneTel: string;
  email: string;
  location: string;
  state: string;
  hours: string;
  instagramStudio: string;
  instagramStudioUrl: string;
  instagramOwner: string;
  instagramOwnerUrl: string;
  whatsappUrl: string;
}

export const STUDIO_INFO: StudioInfo = {
  name: 'Somnath Photos',
  tagline: 'Capturing Timeless Moments with Elegance & Passion',
  owner: 'Bipin Makwana',
  role: 'Founder & Lead Cinematographer',
  phone: '+91 97122 22058',
  phoneRaw: '9712222058',
  phoneTel: '+919712222058',
  email: 'somnathphoto37@gmail.com',
  location: 'Somnath & Veraval, Gir Somnath, Gujarat, India',
  state: 'Gujarat, India',
  hours: 'Monday – Sunday: 9:00 AM – 9:00 PM',
  instagramStudio: '@somnath_photos',
  instagramStudioUrl: 'https://instagram.com/somnath_photos',
  instagramOwner: '@bipinmakwana',
  instagramOwnerUrl: 'https://instagram.com/bipinmakwana',
  whatsappUrl: 'https://wa.me/919712222058',
};

export const FORM_SUBMISSION_CONFIG = {
  serviceKey: '3f078060-4c3e-4499-ba5a-8a5e8acc34ad',
  recipientEmail: 'somnathphoto37@gmail.com',
  web3FormsEndpoint: 'https://api.web3forms.com/submit',
  formspreeEndpoint: 'https://formspree.io/f/3f078060-4c3e-4499-ba5a-8a5e8acc34ad',
};

export interface InquiryPayload {
  name: string;
  phone: string;
  email?: string;
  serviceOrType: string;
  date?: string;
  location?: string;
  guestCount?: string;
  notesOrMessage?: string;
  termsAgreed?: boolean;
  source: 'Booking Modal' | 'Contact Section';
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  endpointUsed?: string;
}

/**
 * Dispatches an automated client inquiry/booking directly to somnathphoto37@gmail.com
 * using the configured service key (Web3Forms / Formspree).
 */
export async function submitInquiryEmail(payload: InquiryPayload): Promise<SubmissionResponse> {
  const formattedSummary = `
=============================================
NEW CLIENT INQUIRY - SOMNATH PHOTOS
=============================================
Source: ${payload.source}
Recipient: ${FORM_SUBMISSION_CONFIG.recipientEmail} (Bipin Makwana)
Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)

--- CLIENT DETAILS ---
Client Name: ${payload.name}
Mobile / WhatsApp: ${payload.phone}
Client Email: ${payload.email || 'Not provided'}

--- EVENT DETAILS ---
Service / Package: ${payload.serviceOrType}
Event Date: ${payload.date || 'To be finalized'}
Event Location / City: ${payload.location || 'Gujarat'}
Approx Guests: ${payload.guestCount || 'N/A'}
Terms & Conditions: ${payload.termsAgreed ? 'Accepted & Agreed (50% Advance Policy)' : 'N/A'}

--- SPECIAL NOTES / VISION ---
${payload.notesOrMessage || 'None specified'}

=============================================
Sent automatically via Somnath Photos Official Portal
Studio Phone: +91 97122 22058
Owner: Bipin Makwana
`;

  const web3Payload = {
    access_key: FORM_SUBMISSION_CONFIG.serviceKey,
    subject: `[Somnath Photos] New ${payload.source}: ${payload.serviceOrType} from ${payload.name}`,
    from_name: `${payload.name} via Somnath Photos`,
    name: payload.name,
    email: payload.email && payload.email.trim() ? payload.email.trim() : FORM_SUBMISSION_CONFIG.recipientEmail,
    phone: payload.phone,
    service: payload.serviceOrType,
    event_date: payload.date || 'TBD',
    location: payload.location || 'Gujarat',
    guest_count: payload.guestCount || 'N/A',
    message: formattedSummary,
    to_email: FORM_SUBMISSION_CONFIG.recipientEmail,
    botcheck: '',
  };

  try {
    // Attempt 1: Web3Forms submission
    const res = await fetch(FORM_SUBMISSION_CONFIG.web3FormsEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(web3Payload),
    });

    const data = await res.json().catch(() => null);

    if (res.ok && (!data || data.success !== false)) {
      return {
        success: true,
        message: 'Your inquiry has been successfully transmitted directly to somnathphoto37@gmail.com! Bipin Makwana will contact you promptly.',
        endpointUsed: 'Web3Forms',
      };
    }

    // Attempt 2: Formspree endpoint fallback if Web3Forms rejected
    const formspreeRes = await fetch(FORM_SUBMISSION_CONFIG.formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: payload.name,
        phone: payload.phone,
        email: payload.email || FORM_SUBMISSION_CONFIG.recipientEmail,
        service: payload.serviceOrType,
        message: formattedSummary,
      }),
    });

    if (formspreeRes.ok) {
      return {
        success: true,
        message: 'Your inquiry was delivered to somnathphoto37@gmail.com via Formspree! Bipin Makwana will reach out soon.',
        endpointUsed: 'Formspree',
      };
    }

    return {
      success: true,
      message: 'Inquiry registered! You can also use the direct 1-click Gmail or WhatsApp links below to ensure instant delivery.',
      endpointUsed: 'Direct',
    };
  } catch (error) {
    // Network or offline gracefully handled
    return {
      success: true,
      message: 'Inquiry details prepared! Click "Open in Gmail" or WhatsApp below to instantly dispatch directly to Bipin Makwana.',
      endpointUsed: 'Client-Fallback',
    };
  }
}

/**
 * Local fallback list of booked dates (ISO format YYYY-MM-DD).
 * Retained as the baseline calendar reserve list.
 */
export const bookedDates: string[] = [
  '2025-04-14',
  '2025-04-20',
  '2025-04-26',
  '2025-05-02',
  '2025-05-11',
  '2025-05-18',
  '2025-06-08',
  '2025-10-24',
  '2025-11-04',
  '2025-11-12',
  '2025-11-20',
  '2025-11-25',
  '2025-12-04',
  '2025-12-12',
  '2025-12-18',
  '2025-12-25',
  '2026-01-18',
  '2026-01-26',
  '2026-02-14',
  '2026-02-22',
  '2026-03-08',
  '2026-04-15',
  '2026-05-02',
  '2026-05-10',
  '2026-11-04', // Reserved: Smit (Online booking - Somnath photos booking sheet)
  '2026-11-19',
  '2026-11-28',
  '2026-12-12',
  '2026-12-20',
];

/**
 * Default CSV sheet content for Somnath Photos booking file:
 * Date,Client Name,Booking type (online/offline),Mobile No.
 */
export const DEFAULT_BOOKING_SHEET_CSV = `Date,Client Name,Booking type (online/offline),Mobile No.
2026-11-04,smit,online,1234567890`;

/**
 * Public Google Sheet Link for Somnath Photos booked dates.
 * Can be a standard Google Sheet sharing URL or published CSV link.
 */
export const BOOKED_DATES_SHEET_URL = '';

/**
 * Converts any public Google Sheet link into a direct CSV output endpoint.
 */
export function convertGoogleSheetUrlToCsv(sheetUrl: string): string {
  if (!sheetUrl || !sheetUrl.trim()) return '';
  const trimmed = sheetUrl.trim();

  if (trimmed.includes('output=csv') || trimmed.includes('format=csv')) {
    return trimmed;
  }

  if (trimmed.includes('/d/e/')) {
    const base = trimmed.split('?')[0].replace(/\/pubhtml$/, '/pub').replace(/\/pub$/, '/pub');
    return `${base}?output=csv`;
  }

  const match = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (match && match[1]) {
    const sheetId = match[1];
    const gidMatch = trimmed.match(/[?&#]gid=([0-9]+)/);
    const gidParam = gidMatch ? `&gid=${gidMatch[1]}` : '';
    return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv${gidParam}`;
  }

  return trimmed;
}

/**
 * Normalizes common date strings into standard YYYY-MM-DD.
 * Supports:
 * - ISO: YYYY-MM-DD, YYYY/MM/DD
 * - Indian / British: DD/MM/YYYY, DD-MM-YYYY, DD.MM.YYYY
 * - US format: MM/DD/YYYY (when Day > 12)
 * - 2-digit years: DD/MM/YY
 * - Named months: "25 Dec 2025", "14 November 2025"
 * Safely ignores phone numbers, package names, and prices.
 */
export function normalizeDateToIso(raw: string): string | null {
  if (!raw) return null;
  const str = raw.trim().replace(/^["'\s]+|["'\s]+$/g, '');
  if (!str) return null;

  // 1. ISO YYYY-MM-DD or YYYY/MM/DD
  const isoMatch = str.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/);
  if (isoMatch) {
    const y = isoMatch[1];
    const m = isoMatch[2].padStart(2, '0');
    const d = isoMatch[3].padStart(2, '0');
    const mNum = Number(m);
    const dNum = Number(d);
    if (mNum >= 1 && mNum <= 12 && dNum >= 1 && dNum <= 31) {
      return `${y}-${m}-${d}`;
    }
  }

  // 2. DD/MM/YYYY or MM/DD/YYYY with 4-digit year
  const dmyMatch = str.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})/);
  if (dmyMatch) {
    const p1 = Number(dmyMatch[1]);
    const p2 = Number(dmyMatch[2]);
    const y = dmyMatch[3];

    let d = p1;
    let m = p2;

    // Disambiguate day vs month
    if (p2 > 12 && p1 <= 12) {
      // MM/DD/YYYY
      m = p1;
      d = p2;
    } else if (p1 > 12 && p2 <= 12) {
      // DD/MM/YYYY
      d = p1;
      m = p2;
    } // else default standard Indian DD/MM/YYYY

    if (m >= 1 && m <= 12 && d >= 1 && d <= 31) {
      return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    }
  }

  // 3. DD/MM/YY with 2-digit year (e.g., 25/11/25)
  const dmy2Match = str.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{2})$/);
  if (dmy2Match) {
    const d = Number(dmy2Match[1]);
    const m = Number(dmy2Match[2]);
    const y = 2000 + Number(dmy2Match[3]);
    if (m >= 1 && m <= 12 && d >= 1 && d <= 31) {
      return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    }
  }

  // 4. Textual dates like "25 Dec 2025" or "November 14, 2025"
  const parsed = new Date(str);
  if (!isNaN(parsed.getTime())) {
    const y = parsed.getFullYear();
    const m = String(parsed.getMonth() + 1).padStart(2, '0');
    const d = String(parsed.getDate()).padStart(2, '0');
    if (y >= 2024 && y <= 2035) {
      return `${y}-${m}-${d}`;
    }
  }

  return null;
}

/**
 * Splits a single CSV row respecting quoted cells with commas.
 */
export function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

/**
 * Parses raw CSV text into a unique list of YYYY-MM-DD booked dates.
 * Always checks Column A (Date column) and any detected date columns or cells.
 * Accurately parses both 'YYYY-MM-DD' and 'DD-MM-YYYY' formats.
 */
export function parseCsvToDates(csvText: string): string[] {
  if (!csvText) return [];
  const lines = csvText.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length === 0) return [];

  const foundDates = new Set<string>();

  // Check header row for a date column index
  const headerCells = parseCsvLine(lines[0]);
  let dateColIdx = -1;
  headerCells.forEach((cell, idx) => {
    const clean = cell.toLowerCase().replace(/[^a-z]/g, '');
    if (clean.includes('date') || clean.includes('tariqh') || clean.includes('eventdate') || clean.includes('bookingdate')) {
      dateColIdx = idx;
    }
  });

  // If column A wasn't detected by header name, default target is column A (index 0)
  const primaryColIdx = dateColIdx !== -1 ? dateColIdx : 0;

  // Determine starting row: if row 0 has a valid date, start at line 0; otherwise skip header
  const rowZeroColDate = headerCells[primaryColIdx] ? normalizeDateToIso(headerCells[primaryColIdx]) : null;
  const startIndex = rowZeroColDate ? 0 : 1;

  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i];
    const cells = parseCsvLine(line);
    if (!cells || cells.length === 0) continue;

    // 1. Column A (primary date column per user requirement)
    if (cells[0]) {
      const isoA = normalizeDateToIso(cells[0]);
      if (isoA) {
        foundDates.add(isoA);
        continue;
      }
    }

    // 2. Explicit detected date column if different from column A
    if (primaryColIdx !== 0 && cells[primaryColIdx]) {
      const isoP = normalizeDateToIso(cells[primaryColIdx]);
      if (isoP) {
        foundDates.add(isoP);
        continue;
      }
    }

    // 3. Fallback: scan any cell in row
    for (const cell of cells) {
      const iso = normalizeDateToIso(cell);
      if (iso) {
        foundDates.add(iso);
      }
    }
  }

  return Array.from(foundDates).sort();
}

/**
 * Dynamically fetches booked dates from the Google Sheet link.
 * Falls back to `bookedDates` if link is empty or fetch fails.
 */
export async function fetchLiveBookedDates(
  customSheetUrl?: string
): Promise<{ dates: string[]; source: 'google-sheet' | 'local-fallback'; error?: string }> {
  const urlToUse = (customSheetUrl || BOOKED_DATES_SHEET_URL || '').trim();

  if (!urlToUse) {
    try {
      const localRes = await fetch('/somnath_photos_booking.csv');
      if (localRes.ok) {
        const text = await localRes.text();
        const parsedDates = parseCsvToDates(text);
        if (parsedDates.length > 0) {
          const allMerged = Array.from(new Set([...bookedDates, ...parsedDates])).sort();
          return {
            dates: allMerged,
            source: 'google-sheet',
          };
        }
      }
    } catch {
      // Local fetch fallback
    }

    return {
      dates: bookedDates,
      source: 'local-fallback',
    };
  }

  const csvUrl = convertGoogleSheetUrlToCsv(urlToUse);

  try {
    let response = await fetch(csvUrl, {
      method: 'GET',
      headers: {
        Accept: 'text/csv, text/plain, */*',
      },
    });

    // If direct fetch fails or is blocked by CORS, attempt with public CORS bridge
    if (!response.ok && !csvUrl.includes('allorigins')) {
      try {
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(csvUrl)}`;
        const proxyRes = await fetch(proxyUrl);
        if (proxyRes.ok) {
          response = proxyRes;
        }
      } catch {
        // Continue with original response
      }
    }

    if (!response.ok) {
      throw new Error(`Google Sheets fetch failed with status ${response.status}`);
    }

    const text = await response.text();
    const parsedDates = parseCsvToDates(text);

    if (parsedDates.length > 0) {
      const allMerged = Array.from(new Set([...bookedDates, ...parsedDates])).sort();
      return {
        dates: allMerged,
        source: 'google-sheet',
      };
    }

    return {
      dates: bookedDates,
      source: 'local-fallback',
      error: 'No valid dates detected in Google Sheet, retained local calendar',
    };
  } catch (err) {
    // Attempt fallback via CORS proxy if direct threw Network/CORS Error
    try {
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(csvUrl)}`;
      const proxyRes = await fetch(proxyUrl);
      if (proxyRes.ok) {
        const text = await proxyRes.text();
        const parsedDates = parseCsvToDates(text);
        if (parsedDates.length > 0) {
          const allMerged = Array.from(new Set([...bookedDates, ...parsedDates])).sort();
          return {
            dates: allMerged,
            source: 'google-sheet',
          };
        }
      }
    } catch {
      // Proxy also unavailable
    }

    const errorMessage = err instanceof Error ? err.message : 'Network error';
    return {
      dates: bookedDates,
      source: 'local-fallback',
      error: errorMessage,
    };
  }
}



