import { LoadingPage } from "@/components/common/Loading";

export default function Loading() {
  return (
    <div className="fixed inset-0 h-screen w-full flex items-center justify-center bg-third">
      <LoadingPage />
    </div>
  );
}
