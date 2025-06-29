// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'purple-950': '#1A0033', // Example: Very dark purple for base background
        'gray-950': '#0A0A0A',  // Example: Very dark gray for gradient
        // You might also want to define gray-900 if you use it extensively and it's not a default Tailwind color
        // 'gray-900': '#1F2937', // Example for gray-900 if it's not default for your Tailwind version
      },
      boxShadow: {
        // Existing glows (ensure these match your Hero section)
        'purple-glow': '0 0 15px rgba(168, 85, 247, 0.7), 0 0 30px rgba(168, 85, 247, 0.5), 0 0 45px rgba(168, 85, 247, 0.3)',
        'purple-glow-sm': '0 0 8px rgba(168, 85, 247, 0.7), 0 0 15px rgba(168, 85, 247, 0.5)',
        'pink-glow': '0 0 10px rgba(236, 72, 153, 0.8), 0 0 20px rgba(236, 72, 153, 0.6), 0 0 30px rgba(236, 72, 153, 0.4)',
        
        // NEW: Larger, more intense glow for project cards
        'purple-glow-lg': '0 0 20px rgba(168, 85, 247, 0.8), 0 0 40px rgba(168, 85, 247, 0.6), 0 0 60px rgba(168, 85, 247, 0.4)',
        
        // NEW: Inner shadow for project cards (more subtle glow inside)
        'shadow-inner-purple': 'inset 0 0 8px rgba(168, 85, 247, 0.3), inset 0 0 15px rgba(168, 85, 247, 0.1)',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.08' },
          '50%': { transform: 'scale(1.1)', opacity: '0.15' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'pulse-slow': 'pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      }
    },
  },
  plugins: [],
};