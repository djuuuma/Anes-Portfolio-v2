import React from 'react';

interface CinematicBackgroundProps {
  customImage?: string;
}

export const CinematicBackground: React.FC<CinematicBackgroundProps> = ({
  customImage,
}) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">

      {customImage ? (
        /* Real photo backdrop if the user selected/uploaded their photo */
        <div className="absolute inset-0 w-full h-full">
          <img
            src={customImage}
            alt="Hero Background"
            className="w-full h-full object-cover object-top scale-100 transition-transform duration-1000 ease-out"
          />
        </div>
      ) : (
        /* High-fidelity procedural SVG/Canvas cinematic seascape reproducing the reference photo */
        <div className="absolute inset-0 w-full h-full">
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Sky sunset gradient matching reference photo */}
              <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#768494" />
                <stop offset="35%" stopColor="#9da6b2" />
                <stop offset="60%" stopColor="#c5b9b8" />
                <stop offset="78%" stopColor="#dbbead" />
                <stop offset="85%" stopColor="#e8cfbf" />
                <stop offset="100%" stopColor="#f5e1d4" />
              </linearGradient>

              {/* Ocean gradient */}
              <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#43505c" />
                <stop offset="25%" stopColor="#35404b" />
                <stop offset="55%" stopColor="#28333e" />
                <stop offset="85%" stopColor="#1c242c" />
                <stop offset="100%" stopColor="#12181f" />
              </linearGradient>

              {/* Cloud dusk shadow */}
              <radialGradient id="cloudGrad1" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#968994" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#675d69" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#4a424e" stopOpacity="0.7" />
              </radialGradient>

              <radialGradient id="cloudGrad2" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#a3969e" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#7a6e78" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#554d57" stopOpacity="0.75" />
              </radialGradient>

              {/* Figure Navy Shirt Shading */}
              <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#23354c" />
                <stop offset="40%" stopColor="#2e435d" />
                <stop offset="80%" stopColor="#1c293c" />
                <stop offset="100%" stopColor="#141e2d" />
              </linearGradient>

              {/* Trouser gradient */}
              <linearGradient id="trousersGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ebe7df" />
                <stop offset="60%" stopColor="#dfd9cd" />
                <stop offset="100%" stopColor="#c5beaf" />
              </linearGradient>

              {/* Head / skin tone */}
              <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#bfa08a" />
                <stop offset="60%" stopColor="#cfae97" />
                <stop offset="100%" stopColor="#a88874" />
              </linearGradient>

              <filter id="cloudSoft" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="7" />
              </filter>
              <filter id="cloudDuskBlur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" />
              </filter>
            </defs>

            {/* 1. Sky */}
            <rect width="1920" height="660" fill="url(#skyGrad)" />

            {/* 2. Soft dusk clouds */}
            <g filter="url(#cloudSoft)">
              {/* Left sky clouds */}
              <ellipse cx="280" cy="240" rx="140" ry="85" fill="url(#cloudGrad1)" />
              <ellipse cx="220" cy="290" rx="110" ry="60" fill="url(#cloudGrad1)" />
              <ellipse cx="370" cy="260" rx="130" ry="75" fill="url(#cloudGrad2)" />
              <ellipse cx="440" cy="380" rx="100" ry="50" fill="url(#cloudGrad1)" />
              <ellipse cx="140" cy="400" rx="90" ry="45" fill="url(#cloudGrad2)" />

              {/* Center background clouds (behind figure) */}
              <ellipse cx="780" cy="280" rx="160" ry="90" fill="url(#cloudGrad1)" />
              <ellipse cx="920" cy="220" rx="130" ry="70" fill="url(#cloudGrad2)" />
              <ellipse cx="1060" cy="300" rx="180" ry="95" fill="url(#cloudGrad1)" />
              <ellipse cx="640" cy="390" rx="110" ry="55" fill="url(#cloudGrad1)" />

              {/* Right clouds with sunset underlighting */}
              <ellipse cx="1520" cy="180" rx="160" ry="85" fill="url(#cloudGrad2)" />
              <ellipse cx="1660" cy="260" rx="190" ry="100" fill="url(#cloudGrad1)" />
              <ellipse cx="1780" cy="340" rx="140" ry="70" fill="url(#cloudGrad2)" />
              <ellipse cx="1430" cy="370" rx="120" ry="60" fill="url(#cloudGrad1)" />
              <ellipse cx="1280" cy="420" rx="150" ry="65" fill="url(#cloudGrad2)" />
            </g>

            {/* 3. Ocean Horizon & Water */}
            <rect y="640" width="1920" height="440" fill="url(#oceanGrad)" />

            {/* Ocean horizon line & wave surf lines */}
            <line x1="0" y1="640" x2="1920" y2="640" stroke="#7e8996" strokeWidth="1.5" strokeOpacity="0.4" />
            
            {/* Distant gentle swells */}
            <path d="M0,660 Q480,656 960,660 T1920,660" fill="none" stroke="#687787" strokeWidth="2" strokeOpacity="0.4" />
            <path d="M0,685 Q400,680 960,684 T1920,683" fill="none" stroke="#7c8d9e" strokeWidth="2.5" strokeOpacity="0.45" />

            {/* Breaking surf foam line 1 (white caps like in photo) */}
            <path
              d="M0,715 C200,710 400,722 650,714 C850,708 1100,719 1350,713 C1600,708 1780,717 1920,714"
              fill="none"
              stroke="#e4ebf2"
              strokeWidth="5"
              strokeLinecap="round"
              strokeOpacity="0.8"
            />
            <path
              d="M80,720 C280,718 520,725 760,720 C1020,715 1250,724 1500,718 C1720,714 1860,721 1920,719"
              fill="none"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeOpacity="0.9"
            />

            {/* Secondary rolling surf wave line 2 */}
            <path
              d="M0,765 C220,758 450,772 700,764 C950,757 1220,770 1480,762 C1710,756 1860,767 1920,764"
              fill="none"
              stroke="#d5e1ec"
              strokeWidth="6"
              strokeLinecap="round"
              strokeOpacity="0.75"
            />
            <path
              d="M120,771 C340,768 590,774 840,769 C1110,763 1360,773 1620,768 C1790,765 1890,770 1920,769"
              fill="none"
              stroke="#ffffff"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeOpacity="0.95"
            />

            {/* Foreground Shore Foam & Wet Sand Pools (as in photo) */}
            <path d="M0,880 Q400,860 960,885 T1920,875" fill="none" stroke="#1d252f" strokeWidth="8" />
            <path d="M0,910 Q500,895 1020,915 T1920,905" fill="#151b22" opacity="0.9" />

            {/* Foreground Coastal Bluffs & Succulent Foliage at bottom corners */}
            <path
              d="M0,920 Q180,880 320,940 Q420,910 520,960 L540,1080 L0,1080 Z"
              fill="#0d1116"
            />
            <path
              d="M1420,960 Q1580,900 1720,930 Q1830,880 1920,910 L1920,1080 L1400,1080 Z"
              fill="#0d1116"
            />

            {/* 4. Center Silhouette of Founder (Anes) - Exact posture, hair, linen shirt, trousers, sunglasses */}
            <g transform="translate(960, 580)">
              {/* Shadow on ground */}
              <ellipse cx="0" cy="460" rx="140" ry="25" fill="#05070a" opacity="0.7" />

              {/* Lower Body - Cream Trousers */}
              <path
                d="M -70,220 L -80,450 L -25,455 L -10,290 L 10,290 L 25,455 L 80,450 L 70,220 Z"
                fill="url(#trousersGrad)"
              />
              {/* Trouser seam shadow */}
              <line x1="0" y1="280" x2="0" y2="440" stroke="#b2aa9b" strokeWidth="2" strokeOpacity="0.6" />

              {/* Upper Body - Navy Linen Shirt with shoulder breadth and natural fabric folds */}
              {/* Torso */}
              <path
                d="M -115,-30 
                   C -125,40 -120,140 -105,230 
                   C -50,245 50,245 105,230 
                   C 120,140 125,40 115,-30 
                   C 75,-45 25,-48 0,-48 
                   C -25,-48 -75,-45 -115,-30 Z"
                fill="url(#shirtGrad)"
              />
              {/* Left Arm & Sleeve */}
              <path
                d="M -115,-30 
                   C -140,20 -150,110 -140,210 
                   C -130,225 -105,225 -105,210 
                   C -110,120 -105,40 -95,-15 Z"
                fill="url(#shirtGrad)"
              />
              {/* Right Arm & Sleeve */}
              <path
                d="M 115,-30 
                   C 140,20 150,110 140,210 
                   C 130,225 105,225 105,210 
                   C 110,120 105,40 95,-15 Z"
                fill="url(#shirtGrad)"
              />
              {/* Hands at side */}
              <ellipse cx="-125" cy="235" rx="14" ry="20" fill="url(#skinGrad)" />
              <ellipse cx="125" cy="235" rx="14" ry="20" fill="url(#skinGrad)" />

              {/* Shirt back pleat and stitch shadow */}
              <line x1="0" y1="-20" x2="0" y2="180" stroke="#162335" strokeWidth="3" strokeOpacity="0.8" />
              <path d="M -30,-25 L 0,-15 L 30,-25" fill="none" stroke="#18273b" strokeWidth="2.5" />

              {/* Neck */}
              <path d="M -26,-48 L -26,-95 L 26,-95 L 26,-48 Z" fill="url(#skinGrad)" />
              {/* Collar of linen shirt */}
              <path d="M -35,-45 Q 0,-30 35,-45 L 30,-58 Q 0,-48 -30,-58 Z" fill="#1b2a3e" />

              {/* Head - Clean Fade Haircut seen from behind/profile */}
              {/* Head shape */}
              <ellipse cx="5" cy="-125" rx="36" ry="44" fill="url(#skinGrad)" />
              {/* Short textured dark hair on crown & fade on sides */}
              <path
                d="M -30,-128 
                   C -30,-165 35,-168 38,-132 
                   C 39,-120 37,-105 25,-102 
                   C 10,-100 -20,-102 -30,-128 Z"
                fill="#181514"
              />
              {/* Fade sides */}
              <path
                d="M -32,-130 C -34,-110 -30,-98 -24,-94 L -20,-96 C -28,-102 -30,-115 -28,-128 Z"
                fill="#2b2523"
              />
              {/* Right ear profile & stylish sunglasses temple arm seen in profile */}
              <ellipse cx="38" cy="-122" rx="7" ry="12" fill="url(#skinGrad)" />
              {/* Dark sunglasses arm extending to temple */}
              <line x1="28" y1="-128" x2="44" y2="-127" stroke="#101012" strokeWidth="3.5" strokeLinecap="round" />
            </g>
          </svg>
        </div>
      )}

      {/* Cinematic Vignette Overlays matching reference photo */}
      <div className="absolute inset-0 hero-vignette pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-48 sm:h-56 bg-gradient-to-t from-[#07080b] via-[#07080b]/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#07080b]/60 to-transparent pointer-events-none" />
    </div>
  );
};
