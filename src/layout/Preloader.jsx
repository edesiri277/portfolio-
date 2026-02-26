import image from "../asset/logoname2.png";

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
      
      {/* Logo */}
      <img
        src={image}
        alt="Loader"
        className="
          relative z-10
          w-56
          drop-shadow-[0_0_25px_rgba(180,120,255,0.8)]
          animate-[logoGlow_2.5s_ease-in-out_infinite]
        "
      />

      {/* Scan Lines */}
      <ScanLine top="35%" delay="0s" />
      <ScanLine top="50%" delay="0.4s" />
      <ScanLine top="65%" delay="0.8s" />

      {/* Keyframes */}
      <style>{`
        @keyframes scan {
          0% {
            transform: translateX(-120%);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateX(120%);
            opacity: 0;
          }
        }

        @keyframes logoGlow {
          0%, 100% {
            filter: drop-shadow(0 0 15px rgba(180,120,255,0.6));
          }
          50% {
            filter: drop-shadow(0 0 35px rgba(120,200,255,0.9));
          }
        }
      `}</style>
    </div>
  );
}

function ScanLine({ top, delay }) {
  return (
    <div
      style={{ top, animationDelay: delay }}
      className="
        absolute
        left-0
        h-[2px]
        w-full
        opacity-80
        animate-[scan_1.6s_ease-in-out_infinite]
        bg-[linear-gradient(135deg,rgba(173,0,255,0.4),rgba(0,150,255,0.35),rgba(255,0,150,0.35))]
      "
    />
  );
}
