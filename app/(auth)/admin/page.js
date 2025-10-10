import { Suspense } from "react";
import AdminContent from "./AdminContent";

export default function AdminPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      }
    >
      <AdminContent />
    </Suspense>
  );
}
