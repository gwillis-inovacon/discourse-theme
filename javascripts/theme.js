// YoDev Community Theme JavaScript

import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "yodev-community-theme",
  
  initialize() {
    withPluginApi("0.8.31", api => {
      // Theme initialization
      console.log('YoDev Community Theme loaded');
      
      // Add theme classes to body
      document.body.classList.add('yodev-theme');
      
      // Apply theme settings
      if (settings.hide_topic_footer_controls) {
        document.body.classList.add("hide-topic-footer-controls");
      }
      
      if (settings.enable_full_width_layout) {
        document.body.classList.add("full-width-layout");
      }
      
      // Set custom accent color
      if (settings.primary_accent_color) {
        document.documentElement.style.setProperty('--yodev-accent', settings.primary_accent_color);
      }
      
      // Add custom logo text
      if (settings.custom_logo_text) {
        addCustomLogoText();
      }
      
      // Initialize dark mode toggle if enabled
      if (settings.enable_dark_mode_toggle) {
        initDarkModeToggle();
      }
      
      // Initialize voting system if enabled
      if (settings.enable_reddit_style_voting) {
        initVotingSystem();
      }
      
      // Add community stats if enabled
      if (settings.show_community_stats) {
        addCommunityStats();
      }
    });
  }
};

// Add custom logo text
function addCustomLogoText() {
  const logoContainer = document.querySelector('.title');
  if (logoContainer && !logoContainer.querySelector('.custom-logo-text')) {
    const logoText = document.createElement('span');
    logoText.className = 'custom-logo-text';
    logoText.textContent = settings.custom_logo_text;
    logoContainer.appendChild(logoText);
  }
}

// Dark mode toggle
function initDarkModeToggle() {
  const headerButtons = document.querySelector('.header-buttons');
  if (headerButtons && !headerButtons.querySelector('.dark-mode-toggle')) {
    const toggleButton = document.createElement('button');
    toggleButton.className = 'btn btn-icon no-text dark-mode-toggle';
    toggleButton.title = 'Toggle dark mode';
    toggleButton.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
      </svg>
    `;
    
    headerButtons.appendChild(toggleButton);
    
    toggleButton.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('yodev-dark-mode', document.body.classList.contains('dark-mode'));
    });
    
    // Load saved preference
    if (localStorage.getItem('yodev-dark-mode') === 'true') {
      document.body.classList.add('dark-mode');
    }
  }
}

// Add community stats
function addCommunityStats() {
  const sidebar = document.querySelector('.sidebar-wrapper') || document.querySelector('#main-outlet');
  if (sidebar && !sidebar.querySelector('.community-stats')) {
    const statsDiv = document.createElement('div');
    statsDiv.className = 'sidebar-section community-stats';
    statsDiv.innerHTML = `
      <div class="sidebar-section-header">Community Stats</div>
      <div class="sidebar-section-content">
        <div class="stat-item">
          <span class="stat-label">Active Developers</span>
          <span class="stat-value">10,247</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Posts Today</span>
          <span class="stat-value">156</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Communities</span>
          <span class="stat-value">47</span>
        </div>
      </div>
    `;
    
    if (sidebar.classList.contains('sidebar-wrapper')) {
      sidebar.appendChild(statsDiv);
    } else {
      sidebar.insertBefore(statsDiv, sidebar.firstChild);
    }
  }
}

// Reddit-style voting system
function initVotingSystem() {
  document.querySelectorAll('.topic-list-item').forEach(item => {
    if (!item.querySelector('.topic-votes')) {
      const votesDiv = document.createElement('div');
      votesDiv.className = 'topic-votes';
      votesDiv.innerHTML = `
        <button class="vote-button upvote" data-vote="up">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z"/>
          </svg>
        </button>
        <span class="vote-count">0</span>
        <button class="vote-button downvote" data-vote="down">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 20l-8-8h6V4h4v8h6l-8 8z"/>
          </svg>
        </button>
      `;
      
      item.insertBefore(votesDiv, item.firstChild);
    }
  });
  
  // Add click handlers (visual only without backend)
  document.addEventListener('click', function(e) {
    if (e.target.closest('.vote-button')) {
      e.preventDefault();
      const button = e.target.closest('.vote-button');
      const votesContainer = button.closest('.topic-votes');
      
      // Toggle visual state
      if (button.classList.contains('voted')) {
        button.classList.remove('voted');
      } else {
        // Remove other votes
        votesContainer.querySelectorAll('.vote-button').forEach(btn => {
          btn.classList.remove('voted');
        });
        button.classList.add('voted');
      }
    }
  });
}