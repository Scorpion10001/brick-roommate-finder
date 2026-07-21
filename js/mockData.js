// Mock Data for BRICK Platform

const mockUsers = {
  students: [
    {
      id: 's1',
      name: 'Sarah Johnson',
      email: 'sarah@university.edu',
      type: 'student',
      budget: 800,
      moveInDate: '2024-08-15',
      location: 'Downtown',
      cleanliness: 9,
      sleepSchedule: 'early',
      noise: 6,
      social: 7,
      preferences: ['Quiet', 'Clean', 'Social'],
      bio: 'Engineering student, love studying and going out on weekends',
      image: 'https://via.placeholder.com/150?text=Sarah'
    },
    {
      id: 's2',
      name: 'Alex Chen',
      email: 'alex@university.edu',
      type: 'student',
      budget: 900,
      moveInDate: '2024-08-15',
      location: 'Downtown',
      cleanliness: 7,
      sleepSchedule: 'night',
      noise: 8,
      social: 8,
      preferences: ['Social', 'Music', 'Gaming'],
      bio: 'CS student, night owl, love gaming and hanging with friends',
      image: 'https://via.placeholder.com/150?text=Alex'
    },
    {
      id: 's3',
      name: 'Emma Rodriguez',
      email: 'emma@university.edu',
      type: 'student',
      budget: 750,
      moveInDate: '2024-08-20',
      location: 'Campus Area',
      cleanliness: 10,
      sleepSchedule: 'early',
      noise: 3,
      social: 5,
      preferences: ['Clean', 'Quiet', 'Responsible'],
      bio: 'Biology major, studying hard, need quiet environment',
      image: 'https://via.placeholder.com/150?text=Emma'
    },
    {
      id: 's4',
      name: 'Marcus Williams',
      email: 'marcus@university.edu',
      type: 'student',
      budget: 850,
      moveInDate: '2024-09-01',
      location: 'Downtown',
      cleanliness: 6,
      sleepSchedule: 'mixed',
      noise: 7,
      social: 9,
      preferences: ['Social', 'Sports', 'Food'],
      bio: 'Business student, love sports and cooking, always up for fun',
      image: 'https://via.placeholder.com/150?text=Marcus'
    },
    {
      id: 's5',
      name: 'Lisa Park',
      email: 'lisa@university.edu',
      type: 'student',
      budget: 800,
      moveInDate: '2024-08-15',
      location: 'Downtown',
      cleanliness: 9,
      sleepSchedule: 'early',
      noise: 4,
      social: 6,
      preferences: ['Clean', 'Quiet', 'Artistic'],
      bio: 'Art student, looking for a peaceful space to create',
      image: 'https://via.placeholder.com/150?text=Lisa'
    }
  ],
  landlords: [
    {
      id: 'l1',
      name: 'Property Management Co',
      email: 'landlord1@properties.com',
      type: 'landlord',
      phone: '555-0101',
      companyName: 'Prime Properties',
      bio: 'Experienced property manager with 50+ units'
    },
    {
      id: 'l2',
      name: 'John Smith',
      email: 'john@properties.com',
      type: 'landlord',
      phone: '555-0102',
      companyName: 'Smith Rentals',
      bio: 'Family-owned rental business'
    }
  ]
};

const mockRoommates = [
  {
    id: 'r1',
    userId: 's1',
    name: 'Sarah Johnson',
    budget: 800,
    moveInDate: '2024-08-15',
    location: 'Downtown',
    cleanliness: 9,
    sleepSchedule: 'early',
    noise: 6,
    social: 7,
    preferences: ['Quiet', 'Clean', 'Social'],
    bio: 'Engineering student, love studying and going out on weekends',
    image: 'https://via.placeholder.com/300?text=Sarah+Johnson',
    compatibility: 0
  },
  {
    id: 'r2',
    userId: 's2',
    name: 'Alex Chen',
    budget: 900,
    moveInDate: '2024-08-15',
    location: 'Downtown',
    cleanliness: 7,
    sleepSchedule: 'night',
    noise: 8,
    social: 8,
    preferences: ['Social', 'Music', 'Gaming'],
    bio: 'CS student, night owl, love gaming and hanging with friends',
    image: 'https://via.placeholder.com/300?text=Alex+Chen',
    compatibility: 0
  },
  {
    id: 'r3',
    userId: 's3',
    name: 'Emma Rodriguez',
    budget: 750,
    moveInDate: '2024-08-20',
    location: 'Campus Area',
    cleanliness: 10,
    sleepSchedule: 'early',
    noise: 3,
    social: 5,
    preferences: ['Clean', 'Quiet', 'Responsible'],
    bio: 'Biology major, studying hard, need quiet environment',
    image: 'https://via.placeholder.com/300?text=Emma+Rodriguez',
    compatibility: 0
  },
  {
    id: 'r4',
    userId: 's4',
    name: 'Marcus Williams',
    budget: 850,
    moveInDate: '2024-09-01',
    location: 'Downtown',
    cleanliness: 6,
    sleepSchedule: 'mixed',
    noise: 7,
    social: 9,
    preferences: ['Social', 'Sports', 'Food'],
    bio: 'Business student, love sports and cooking, always up for fun',
    image: 'https://via.placeholder.com/300?text=Marcus+Williams',
    compatibility: 0
  },
  {
    id: 'r5',
    userId: 's5',
    name: 'Lisa Park',
    budget: 800,
    moveInDate: '2024-08-15',
    location: 'Downtown',
    cleanliness: 9,
    sleepSchedule: 'early',
    noise: 4,
    social: 6,
    preferences: ['Clean', 'Quiet', 'Artistic'],
    bio: 'Art student, looking for a peaceful space to create',
    image: 'https://via.placeholder.com/300?text=Lisa+Park',
    compatibility: 0
  }
];

const mockApartments = [
  {
    id: 'apt1',
    landlordId: 'l1',
    name: '2BR Downtown Loft',
    address: '123 Main St, Downtown',
    price: 1600,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ['WiFi', 'Parking', 'Gym', 'Laundry'],
    description: 'Modern loft in downtown area with excellent transportation',
    image: 'https://via.placeholder.com/400x250?text=Downtown+Loft',
    available: true
  },
  {
    id: 'apt2',
    landlordId: 'l1',
    name: '2BR Campus Heights',
    address: '456 College Ave, Campus Area',
    price: 1400,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ['WiFi', 'Study Room', 'Laundry'],
    description: 'Close to campus, perfect for students',
    image: 'https://via.placeholder.com/400x250?text=Campus+Heights',
    available: true
  },
  {
    id: 'apt3',
    landlordId: 'l1',
    name: '2BR Riverside',
    address: '789 River Rd, Riverside',
    price: 1500,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['WiFi', 'Parking', 'River View', 'Balcony'],
    description: 'Beautiful riverside location with views',
    image: 'https://via.placeholder.com/400x250?text=Riverside',
    available: true
  },
  {
    id: 'apt4',
    landlordId: 'l2',
    name: '2BR Midtown Modern',
    address: '321 Mid St, Midtown',
    price: 1550,
    bedrooms: 2,
    bathrooms: 1.5,
    amenities: ['WiFi', 'Gym', 'Rooftop', 'AC'],
    description: 'Modern amenities in trendy midtown location',
    image: 'https://via.placeholder.com/400x250?text=Midtown+Modern',
    available: true
  },
  {
    id: 'apt5',
    landlordId: 'l2',
    name: '2BR Sunset Plaza',
    address: '654 Sunset Blvd, West Side',
    price: 1450,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ['WiFi', 'Parking', 'Pool', 'Garden'],
    description: 'Peaceful west side location with pool access',
    image: 'https://via.placeholder.com/400x250?text=Sunset+Plaza',
    available: true
  }
];

const mockSavingsPlans = [
  {
    id: 'plan1',
    roommateIds: ['s1', 's2'],
    monthlyAmount: 1600,
    splitAmount: 800,
    startDate: '2024-08-15',
    rentDueDate: 15,
    totalSaved: 2400,
    months: ['August', 'September', 'October'],
    payments: [
      { month: 'August', paid: true, amount: 800, date: '2024-08-10' },
      { month: 'September', paid: true, amount: 800, date: '2024-09-10' },
      { month: 'October', paid: false, amount: 800, date: null }
    ]
  }
];

const mockInquiries = [
  {
    id: 'inq1',
    apartmentId: 'apt1',
    studentId: 's1',
    studentName: 'Sarah Johnson',
    roommateId: 's2',
    roommateName: 'Alex Chen',
    status: 'pending',
    date: '2024-07-10',
    message: 'Interested in viewing the apartment'
  },
  {
    id: 'inq2',
    apartmentId: 'apt2',
    studentId: 's3',
    studentName: 'Emma Rodriguez',
    roommateId: 's5',
    roommateName: 'Lisa Park',
    status: 'accepted',
    date: '2024-07-08',
    message: 'Great location for studying!'
  },
  {
    id: 'inq3',
    apartmentId: 'apt3',
    studentId: 's4',
    studentName: 'Marcus Williams',
    roommateId: null,
    roommateName: 'Looking for roommate',
    status: 'pending',
    date: '2024-07-12',
    message: 'Interested in this apartment'
  }
];

// Export mock data
window.mockData = {
  users: mockUsers,
  roommates: mockRoommates,
  apartments: mockApartments,
  savingsPlans: mockSavingsPlans,
  inquiries: mockInquiries
};
