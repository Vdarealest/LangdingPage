import LandingPage from "@/components/LandingPage";
import { getSiteCopy } from "@/data/i18n";

export default function VietnameseHome() {
  return <LandingPage copy={getSiteCopy("vi")} locale="vi" />;
}
