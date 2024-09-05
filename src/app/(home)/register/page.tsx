import ResgistrationForm from "@/components/custom-component/authComponent/register";
import { Toaster } from "@/components/ui/toaster";
export default function RegisterPage() {
  return (
    <div className={`sm:px-2 lg:px-[150px] md:px-[150px]`}>
      <ResgistrationForm />
      <Toaster />
    </div>
  );
}
