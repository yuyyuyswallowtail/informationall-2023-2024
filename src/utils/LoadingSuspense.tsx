import { Loader2 } from "lucide-react";

export const LoadingSuspense = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-dvh bg-primary">
      <h1 className="flex items-center justify-center gap-2 text-4xl text-card">
        Loading <Loader2 className="animate-spin" size={32} />
      </h1>
    </div>
  );
};
