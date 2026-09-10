import React from 'react';

export function FlutterIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M14.314 0L2.3 12l3.702 3.702L21.718 0h-7.404z" fill="#02569B" />
      <path d="M14.314 12.002L8.27 18.046l3.702 3.702 3.742-3.742 6.004-6.004h-7.404z" fill="#0175C2" />
      <path d="M8.27 18.046l3.702 3.702L8.27 24l-3.702-3.702 3.702-2.252z" fill="#29B6F6" opacity="0.6" />
      <path d="M11.972 21.748l3.742-3.742 6.004 6.004h-7.404l-2.342-2.262z" fill="#01579B" />
      <path d="M8.27 18.046l3.702 3.702 3.742-3.742-3.702-3.702-3.742 3.742z" fill="#29B6F6" />
    </svg>
  );
}

export function DartIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4.1 3.2L13.8 2 22 10.2l-1.2 9.7L12.6 22l-8.5-8.5V3.2z" fill="#0175C2" />
      <path d="M4.1 3.2l8.5 8.5 8.2-1.5L13.8 2 4.1 3.2z" fill="#00B4AB" />
      <path d="M12.6 11.7L4.1 3.2v10.3l8.5 8.5 8.2-2.1-8.2-8.2z" fill="#01579B" />
      <path d="M12.6 22l8.2-2.1-8.2-8.2-8.5 8.5 8.5 1.8z" fill="#29B6F6" />
    </svg>
  );
}

export function FirebaseIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4.6 18.4L6.9 3.8a.5.5 0 01.9-.2l2.8 5.3-6 9.5z" fill="#FFA000" />
      <path d="M12.1 12.3L9.7 7.7a.5.5 0 00-.9-.1l-4.2 10.8 7.5-6.1z" fill="#F57C00" />
      <path d="M12.1 12.3l2.8-5.3a.5.5 0 01.9.2l3.6 11.2-7.3-6.1z" fill="#FFCA28" />
      <path d="M19.4 18.4L12.1 22a.8.8 0 01-.8 0L4.6 18.4l7.5-6.1 7.3 6.1z" fill="#FFA000" />
    </svg>
  );
}

export function SupabaseIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M13.4 1.2a1 1 0 00-1.7.9l-2.1 9.9h-6a1 1 0 00-.8 1.6l8.8 9.2a1 1 0 001.7-.9l2.1-9.9h6a1 1 0 00.8-1.6l-8.8-9.2z" fill="url(#sb-grad)" />
      <defs>
        <linearGradient id="sb-grad" x1="3" y1="1" x2="21" y2="23" gradientUnits="userSpaceOnUse">
          <stop stopColor="#24E49F" />
          <stop offset="1" stopColor="#1EB881" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function GeminiIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 1c.5 5.5 4.5 9.5 10 10-5.5.5-9.5 4.5-10 10-.5-5.5-4.5-9.5-10-10 5.5-.5 9.5-4.5 10-10z" fill="url(#gemini-g)" />
      <defs>
        <linearGradient id="gemini-g" x1="2" y1="1" x2="22" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" />
          <stop offset="0.5" stopColor="#818CF8" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AndroidIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#3DDC84" className={className}>
      <path d="M5.3 8.8l-1.8-3a.6.6 0 01.2-.8.6.6 0 01.8.2l1.9 3.2A11 11 0 0112 7.4c2 0 3.8.5 5.6 1l1.9-3.2a.6.6 0 01.8-.2.6.6 0 01.2.8l-1.8 3A8.6 8.6 0 0120.7 13H3.3a8.6 8.6 0 012-4.2zM7.5 10.8a.7.7 0 100-1.4.7.7 0 000 1.4zm9 0a.7.7 0 100-1.4.7.7 0 000 1.4zM3.3 14.2h17.4V20a2 2 0 01-2 2h-13a2 2 0 01-2-2v-5.8z" />
    </svg>
  );
}

export function AppleIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.7 19.5c-.8 1.2-1.7 2.4-3.1 2.5-1.3.1-1.8-.7-3.3-.7-1.5 0-2 .7-3.3.7-1.3-.1-2.3-1.3-3.2-2.5-1.7-2.5-3-7.1-1.2-10.2.9-1.5 2.5-2.5 4.2-2.5 1.3 0 2.6.9 3.4.9.8 0 2.3-1.1 3.9-.9 1.6.1 3.1.8 4 2.1-3.6 1.9-3 6.9.7 8.4-.7 1.7-1.5 3.3-2.1 4.5zM15.4 5.3c.7-.9 1.2-2.1 1-3.3-1.1.1-2.3.7-3 1.5-.6.7-1.2 2-1 3.1 1.2.1 2.3-.5 3-1.3z" />
    </svg>
  );
}

export function BlocIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="8" height="8" rx="2" fill="#818CF8" />
      <rect x="13" y="3" width="8" height="8" rx="2" fill="#38BDF8" />
      <rect x="3" y="13" width="8" height="8" rx="2" fill="#34D399" />
      <rect x="13" y="13" width="8" height="8" rx="2" fill="#F472B6" />
      <path d="M7 7l10 10M17 7L7 17" stroke="#090A0F" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function MapboxIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#4264FB" />
      <path d="M12 6l3.5 6-3.5 6-3.5-6L12 6z" fill="#ffffff" />
      <circle cx="12" cy="12" r="2" fill="#4264FB" />
    </svg>
  );
}

export function PaymobIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="5" width="20" height="14" rx="3" stroke="#00C48C" strokeWidth="2" />
      <path d="M2 10h20M6 15h4" stroke="#00C48C" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function DioIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 7a4 4 0 014-4h8a4 4 0 014 4v10a4 4 0 01-4 4H8a4 4 0 01-4-4V7z" stroke="#0EA5E9" strokeWidth="1.8" />
      <path d="M8 12h8M13 8l4 4-4 4" stroke="#0EA5E9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CleanArchIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="12" cy="12" r="6" stroke="#0EA5E9" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" fill="#34D399" />
    </svg>
  );
}

export function FigmaIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M8 24a4 4 0 01-4-4 4 4 0 014-4h4v4a4 4 0 01-4 4z" fill="#0ACF83" />
      <path d="M4 12a4 4 0 014-4h4v8H8a4 4 0 01-4-4z" fill="#A259FF" />
      <path d="M4 4a4 4 0 014-4h4v8H8a4 4 0 01-4-4z" fill="#F24E1E" />
      <path d="M12 0h4a4 4 0 014 4 4 4 0 01-4 4h-4V0z" fill="#FF7262" />
      <path d="M20 12a4 4 0 11-8 0 4 4 0 018 0z" fill="#1ABCFE" />
    </svg>
  );
}

export function GitIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M21.6 10.9L13.1 2.4a1.7 1.7 0 00-2.4 0L8.3 4.8l3 3a2 2 0 012.6 2.6l2.9 2.9a2 2 0 11-1.2 1.2L12.9 12a2 2 0 01-2-1.9L8 7.2 2.4 12.8a1.7 1.7 0 000 2.4l8.5 8.5a1.7 1.7 0 002.4 0l8.3-8.3a1.7 1.7 0 000-2.5z" fill="#F05032" />
    </svg>
  );
}

export function GitHubIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function PostmanIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#FF6C37" />
      <path d="M6 14l6-8 2 3-3 2 4 1-9 2z" fill="#ffffff" />
    </svg>
  );
}

export function VSCodeIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M17.5 1.5L6.5 10.5l4.5 3.5 6.5-12.5z" fill="#0065A9" />
      <path d="M17.5 22.5L6.5 13.5l4.5-3.5 6.5 12.5z" fill="#007ACC" />
      <path d="M2.5 8l4 4-4 4 1 2 5.5-4.5L3.5 6l-1 2z" fill="#1F9CF0" />
      <path d="M17.5 1.5l5 2.5v16l-5 2.5-6.5-9 6.5-12z" fill="#007ACC" />
    </svg>
  );
}

export function GooglePlayIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3.5 2.5l11.2 10.8L3.5 24V2.5z" fill="#00D775" />
      <path d="M18.8 9.5L14.7 13.3 3.5 2.5C4 2.2 4.7 2.2 5.3 2.5l13.5 7z" fill="#FF3A44" />
      <path d="M14.7 13.3l4.1 3.9-13.5 7c-.6.3-1.3.3-1.8 0L14.7 13.3z" fill="#00A1F1" />
      <path d="M21.2 11.2l-2.4-1.3-4.1 3.4 4.1 3.4 2.4-1.3c.9-.5.9-1.7 0-2.2z" fill="#FFC800" />
    </svg>
  );
}

export function LinkedInIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.19 0-.49.07-.75.35-.26.28-1 1-1 2.43 0 1.43 1.03 2.81 1.18 3.01.15.19 2.03 3.1 4.92 4.35 2.4 1.04 2.89.83 3.41.78.53-.05 1.7-.69 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.75.94-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.08-.14-.64-1.54-.87-2.11-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.56-.01z" />
    </svg>
  );
}

export function TikTokIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

export function TelegramIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" />
    </svg>
  );
}
