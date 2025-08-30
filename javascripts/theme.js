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
      
      // Initialize dark mode toggle if enabled
      if (settings.enable_dark_mode_toggle) {
        initDarkModeToggle();
      }
      
      // Initialize voting system if enabled
      if (settings.enable_reddit_style_voting) {
        initVotingSystem();
      }
      
      // Initialize community features
      initCommunityFeatures();
    });
  }
};

// Dark mode toggle
function initDarkModeToggle() {
  const toggleButton = document.createElement('button');
  toggleButton.className = 'dark-mode-toggle btn btn-icon no-text';
  toggleButton.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
    </svg>
  `;
  
  const headerButtons = document.querySelector('.header-buttons');
  if (headerButtons) {
    headerButtons.appendChild(toggleButton);
  }
  
  toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('yodev-dark-mode', document.body.classList.contains('dark-mode'));
  });
  
  // Load saved preference
  if (localStorage.getItem('yodev-dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
  }
}

// Reddit-style voting system
function initVotingSystem() {
  // This would require a plugin for actual functionality
  // Here we just add the visual elements
  
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

// Community features
function initCommunityFeatures() {
  // Add community badges
  document.querySelectorAll('.topic-list-item').forEach(item => {
    const categoryElement = item.querySelector('.category-name');
    if (categoryElement) {
      categoryElement.classList.add('community-badge');
    }
  });
  
  // Enhance user avatars with fallback
  document.querySelectorAll('.topic-avatar img').forEach(avatar => {
    avatar.addEventListener('error', function() {
      this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNmOTczMTYiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDEyYzIuMjEgMCA0LTEuNzkgNC00cy0xLjc5LTQtNC00LTQgMS43OS00IDQgMS43OSA0IDQgNHptMCAyYy0yLjY3IDAtOCAxLjM0LTggNHYyaDE2di0yYzAtMi42Ni01LjMzLTQtOC00eiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==';
    });
  });
}