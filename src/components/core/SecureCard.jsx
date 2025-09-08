import { Shield } from "lucide-react";
import CardShell from "../common/CardShell";

export default function SecureCard() {
  return (
    <CardShell className="bg-blue-500/10">
      <div className="flex flex-col items-start gap-3">
        <div className="my-1 flex flex-row gap-2 items-center justify-between text-blue-500">
          <Shield className="h-4 w-4 mb-1" />
          <h3 className="text-base font-century-bold text-blue-500">
            Your Data is Secure
          </h3>
        </div>
        <span className="text-xs text-left font-century-regular text-blue-500">We use industry-standard encryption and never share your personal information with third parties without your consent.</span>
      </div>
    </CardShell>
  );
}
