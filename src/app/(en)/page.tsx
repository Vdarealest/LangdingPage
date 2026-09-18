import LandingPage from "@/components/LandingPage";
import { getSiteCopy } from "@/data/i18n";

export default function Home() {
  return <LandingPage copy={getSiteCopy("en")} locale="en" />;
}
