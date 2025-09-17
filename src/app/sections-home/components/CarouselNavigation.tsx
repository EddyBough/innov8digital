interface CarouselNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  className?: string;
}

export default function CarouselNavigation({
  onPrevious,
  onNext,
  className = "",
}: CarouselNavigationProps) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <button
        onClick={onPrevious}
        className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 group"
        aria-label="Étape précédente"
      >
        <svg
          className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={onNext}
        className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 group"
        aria-label="Étape suivante"
      >
        <svg
          className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
