// Navigation and Utility Module for BRICK Platform


function rootPage(path) {
  const nested = /\/(student|landlord)\//.test(window.location.pathname);
  return (nested ? '../' : '') + path;
}

// Initialize page
function initPage() {
  setupNavigation();
  setupLogout();
  updateNavigation();
}

// Setup navigation bar
function setupNavigation() {
  const navbar = document.querySelector('nav');
  if (!navbar) return;

  const user = window.authManager.getCurrentUser();
  const navContent = document.querySelector('.nav-content');
  
  if (navContent) {
    if (user) {
      navContent.innerHTML = `
        <div class="navbar-user">
          <span class="user-name">${user.name}</span>
          <span class="user-type badge">${user.type.charAt(0).toUpperCase() + user.type.slice(1)}</span>
          <button class="btn-logout" onclick="logoutUser()">Logout</button>
        </div>
      `;
    } else {
      navContent.innerHTML = `
        <div class="navbar-links">
          <a href="${rootPage('login.html')}" class="btn btn-outline">Login</a>
          <a href="${rootPage('signup-choice.html')}" class="btn btn-primary">Sign Up</a>
        </div>
      `;
    }
  }
}

// Setup logout functionality
function setupLogout() {
  window.logoutUser = function() {
    if (confirm('Are you sure you want to logout?')) {
      window.authManager.logout();
      window.location.href = rootPage('index.html');
    }
  };
}

// Update navigation based on user type
function updateNavigation() {
  const user = window.authManager.getCurrentUser();
  const sidebar = document.querySelector('.sidebar');
  
  if (!sidebar || !user) return;

  const navItems = sidebar.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (window.location.pathname.includes(href)) {
      item.classList.add('active');
    }
  });
}

// Toggle sidebar on mobile
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.classList.toggle('active');
  }
}

// Close sidebar when item is clicked
document.addEventListener('click', function(e) {
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.querySelector('.sidebar-toggle');
  
  if (sidebar && !sidebar.contains(e.target) && (toggleBtn && !toggleBtn.contains(e.target))) {
    sidebar.classList.remove('active');
  }
});

// Show/hide forms
function showForm(formId) {
  const forms = document.querySelectorAll('.form-container');
  forms.forEach(form => {
    form.classList.remove('active');
  });
  
  const targetForm = document.getElementById(formId);
  if (targetForm) {
    targetForm.classList.add('active');
  }
}

// Form validation
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('error');
      isValid = false;
    } else {
      input.classList.remove('error');
    }
  });

  return isValid;
}

// Show success message
function showSuccess(message) {
  const alert = document.createElement('div');
  alert.className = 'alert alert-success';
  alert.textContent = message;
  
  const container = document.querySelector('main') || document.body;
  container.insertBefore(alert, container.firstChild);

  setTimeout(() => {
    alert.remove();
  }, 3000);
}

// Show error message
function showError(message) {
  const alert = document.createElement('div');
  alert.className = 'alert alert-error';
  alert.textContent = message;
  
  const container = document.querySelector('main') || document.body;
  container.insertBefore(alert, container.firstChild);

  setTimeout(() => {
    alert.remove();
  }, 3000);
}

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN'
  }).format(amount);
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Get compatibility score color
function getCompatibilityColor(score) {
  if (score >= 80) return '#27ae60'; // green
  if (score >= 60) return '#f39c12'; // orange
  return '#e74c3c'; // red
}

// Calculate compatibility between two students
function calculateCompatibility(student1, student2) {
  const weights = {
    budget: 0.25,
    sleepSchedule: 0.20,
    cleanliness: 0.20,
    noise: 0.15,
    social: 0.20
  };

  let score = 0;

  // Budget compatibility (within 10% is ideal)
  const budgetDiff = Math.abs(student1.budget - student2.budget);
  const budgetPercent = (budgetDiff / Math.max(student1.budget, student2.budget)) * 100;
  score += (100 - Math.min(budgetPercent, 50)) * (weights.budget / 100);

  // Sleep schedule compatibility
  const sleepCompatibility = student1.sleepSchedule === student2.sleepSchedule ? 100 : 60;
  score += sleepCompatibility * (weights.sleepSchedule / 100);

  // Cleanliness compatibility
  const cleanDiff = Math.abs(student1.cleanliness - student2.cleanliness);
  score += (100 - cleanDiff * 5) * (weights.cleanliness / 100);

  // Noise level compatibility
  const noiseDiff = Math.abs(student1.noise - student2.noise);
  score += (100 - noiseDiff * 5) * (weights.noise / 100);

  // Social compatibility
  const socialDiff = Math.abs(student1.social - student2.social);
  score += (100 - socialDiff * 5) * (weights.social / 100);

  return Math.round(score);
}

// Get compatible roommates for student
function getCompatibleRoommates(studentId) {
  const currentStudent = mockData.users.students.find(s => s.id === studentId);
  if (!currentStudent) return [];

  const potentialRoommates = mockData.users.students.filter(s => s.id !== studentId);
  
  return potentialRoommates.map(roommate => ({
    ...roommate,
    compatibility: calculateCompatibility(currentStudent, roommate)
  })).sort((a, b) => b.compatibility - a.compatibility);
}

// Modal functions
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.classList.add('modal-open');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
  }
  document.body.classList.remove('modal-open');
}

// Close modal on outside click
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal')) {
    e.target.classList.remove('active');
    document.body.classList.remove('modal-open');
  }
});


function rootPage(path) {
  const nested = /\/(student|landlord)\//.test(window.location.pathname);
  return (nested ? '../' : '') + path;
}

// Initialize page on load
document.addEventListener('DOMContentLoaded', initPage);
