
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="w-full min-h-[calc(100vh-73px)] flex items-center justify-center px-5 py-16">
      <div className="w-full max-w-2xl mx-auto text-center">

        {/* 404 */}
        <div className="relative inline-block">
          <h1 className="text-[100px] sm:text-[140px] desktop:text-[180px] font-black leading-none tracking-tight text-[#C2F800]">
            404
          </h1>

          <div className="absolute inset-0 blur-3xl bg-[#C2F800]/10 -z-10"></div>
        </div>

        {/* Text */}
        <div className="mt-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Workout Not Found
          </h2>

          <p className="text-[#9CA3AF] text-sm sm:text-base md:text-lg mt-3 max-w-md mx-auto leading-7">
            Looks like this page skipped leg day. The workout you're looking
            for doesn't exist or has been moved.
          </p>
        </div>

        {/* Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#C2F800] text-[#14171E] font-semibold px-6 py-3 rounded-full hover:bg-[#d4ff4d] hover:-translate-y-0.5 transition-all duration-300"
          >
            <i className="ri-arrow-left-line"></i>
            Back to Workouts
          </Link>
        </div>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <span className="w-12 sm:w-20 h-px bg-[#272B35]"></span>

          <span className="text-[#525866] text-xs uppercase tracking-[0.25em]">
            FITLOG
          </span>

          <span className="w-12 sm:w-20 h-px bg-[#272B35]"></span>
        </div>
      </div>
    </main>
  );
};

export default NotFound;

