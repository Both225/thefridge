export default function Loading() {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#145A3A]" />

      <p className="text-sm font-medium text-[#145A3A]">Loading...</p>
    </div>
  );
}
