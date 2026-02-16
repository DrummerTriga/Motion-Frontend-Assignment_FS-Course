export function Spinner() {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 64 64"
         className="h-14 w-14 animate-spin text-slate-700"
      >
         {/* dicker Außenring (Reifen) */}
         <circle
            cx="32"
            cy="32"
            r="28"
            stroke="currentColor"
            strokeWidth="10"
            fill="none"
         />

         {/* innerer Ring (Felge) */}
         <circle
            cx="32"
            cy="32"
            r="14"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            className="opacity-50"
         />

         {/* Nabe */}
         <circle
            cx="32"
            cy="32"
            r="6"
            fill="currentColor"
            className="opacity-80"
         />

         {/* Reifenprofil (damit es wirklich wie ein Reifen aussieht) */}
         <g stroke="currentColor" strokeWidth="4" strokeLinecap="round">
            <line x1="32" y1="4" x2="32" y2="14" />
            <line x1="32" y1="50" x2="32" y2="60" />

            <line x1="4" y1="32" x2="14" y2="32" />
            <line x1="50" y1="32" x2="60" y2="32" />

            {/* Schräge Profilmarkierungen */}
            <line x1="12" y1="12" x2="18" y2="18" />
            <line x1="46" y1="46" x2="52" y2="52" />

            <line x1="12" y1="52" x2="18" y2="46" />
            <line x1="46" y1="18" x2="52" y2="12" />
         </g>
      </svg>
   )
}
export default Spinner
