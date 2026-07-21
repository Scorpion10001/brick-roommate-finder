
function authRootPath(path) {
  const nested = /\/(student|landlord)\//.test(window.location.pathname);
  return (nested ? '../' : '') + path;
}

// Authentication Module for BRICK Platform
// Authentication Module for BRICK Platform

// Suppress extension errors
if (typeof window !== 'undefined') {
  window.addEventListener('error', function(e) {
    // Silently ignore wallet extension errors
    if (e.message && e.message.includes('Cannot redefine property')) {
      e.preventDefault();
    }
  }, true);
}
class AuthManager {
  constructor() {
    this.currentUser = this.loadUser();
  }

  // Load current user from localStorage
  loadUser() {
    const user = localStorage.getItem('brickUser');
    return user ? JSON.parse(user) : null;
  }

  // Save user to localStorage
  saveUser(user) {
    localStorage.setItem('brickUser', JSON.stringify(user));
    this.currentUser = user;
  }

  // Check if user is authenticated
  isAuthenticated() {
    return this.currentUser !== null;
  }

  // Get current user
  getCurrentUser() {
    return this.currentUser;
  }

  // Get user type (student or landlord)
  getUserType() {
    return this.currentUser ? this.currentUser.type : null;
  }

  // Student signup
  signupStudent(formData) {
    // Check if email already exists
    const allUsers = [...mockData.users.students, ...mockData.users.landlords];
    if (allUsers.some(u => u.email === formData.email)) {
      return { success: false, error: 'Email already registered' };
    }

    const newStudent = {
      id: 's' + Date.now(),
      name: formData.name,
      email: formData.email,
      type: 'student',
      gender: formData.gender || '',
      budget: parseInt(formData.budget),
      moveInDate: formData.moveInDate,
      location: formData.location,
      cleanliness: parseInt(formData.cleanliness) || 5,
      sleepSchedule: formData.sleepSchedule || 'mixed',
      noise: parseInt(formData.noise) || 5,
      social: parseInt(formData.social) || 5,
      preferences: formData.preferences || [],
      bio: formData.bio || '',
      image: 'https://via.placeholder.com/150?text=' + formData.name.replace(' ', '+')
    };

    // Add to mock data
    mockData.users.students.push(newStudent);

    // Create roommate profile
    const roommateProfile = { ...newStudent, userId: newStudent.id, compatibility: 0 };
    mockData.roommates.push(roommateProfile);

    // Save to localStorage
    this.saveUser(newStudent);

    return { success: true, user: newStudent };
  }



  // Login
  login(email, password) {
    // Simple validation - in real app, would verify password hash
    const allUsers = [...mockData.users.students, ...mockData.users.landlords];
    const user = allUsers.find(u => u.email === email);

    if (!user) {
      return { success: false, error: 'Email not found' };
    }

    this.saveUser(user);
    return { success: true, user };
  }

  // Logout
  logout() {
    localStorage.removeItem('brickUser');
    this.currentUser = null;
  }

  // Get student profile
  getStudentProfile(studentId) {
    return mockData.users.students.find(s => s.id === studentId);
  }



  // Update student profile
  updateStudentProfile(studentId, updates) {
    const student = mockData.users.students.find(s => s.id === studentId);
    if (student) {
      Object.assign(student, updates);
      if (this.currentUser.id === studentId) {
        this.saveUser(student);
      }
      return { success: true, user: student };
    }
    return { success: false, error: 'Student not found' };
  }
}

// Create global instance
window.authManager = new AuthManager();

// Check if user is logged in on page load
window.checkAuth = function() {
  if (!window.authManager.isAuthenticated()) {
    window.location.href = authRootPath('login.html');
  }
};

// Redirect if already logged in
window.redirectIfLoggedIn = function() {
  if (window.authManager.isAuthenticated()) {
    window.location.href = authRootPath('student/dashboard.html');
  }
};
