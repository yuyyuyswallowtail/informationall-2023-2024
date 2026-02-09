import { Suspense, lazy } from "react";
import Navbar from "./components/layout/navbar";
import Ribbon from "./components/custom/ribbon";
import {
  Asterisk,
  Gamepad2,
  Info,
  ShoppingBag,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { LoadingSuspense } from "./utils/LoadingSuspense";
const Hero = lazy(() => import("./components/custom/hero"));
const WebinarAndWorkshop = lazy(
  () => import("./components/custom/webinar-and-workshop")
);
const Perlombaan = lazy(() => import("./components/custom/perlombaan"));
const Merchandise = lazy(() => import("./components/custom/merchandise"));
const SponsorMediaPartner = lazy(
  () => import("./components/custom/sponsor-and-media-partner")
);
const Timeline = lazy(() => import("./components/custom/timeline"));
const Footer = lazy(() => import("./components/layout/footer"));

function App() {
  return (
    <div className="flex flex-col gap-1 min-h-dvh bg-primary">
      <Navbar />
      <Ribbon
        props={{
          direction: "left",
          text: "Explore Trends And Innovation In Developer World!",
          icon: <Asterisk strokeWidth={1.5} size={48} />,
        }}
      />
      <Timeline />
      <Ribbon
        props={{
          direction: "right",
          text: "About",
          icon: <Info size={48} strokeWidth={1.5} />,
        }}
      />
      <Suspense fallback={<LoadingSuspense />}>
        <Hero />
      </Suspense>
      <Ribbon
        props={{
          direction: "right",
          text: "Webinar & Workshop",
          icon: <Asterisk strokeWidth={1.5} size={48} />,
        }}
      />
      <Suspense fallback={<LoadingSuspense />}>
        <WebinarAndWorkshop />
      </Suspense>
      <Ribbon
        props={{
          direction: "left",
          text: "Perlombaan IT Development & E-SPORT",
          icon: <Gamepad2 strokeWidth={1.5} size={48} />,
        }}
      />
      <Suspense fallback={<LoadingSuspense />}>
        <Perlombaan />
      </Suspense>
      <Ribbon
        props={{
          direction: "right",
          text: "Merchandise & Snack",
          icon: <ShoppingBag strokeWidth={1.5} size={48} />,
        }}
      />
      <Suspense fallback={<LoadingSuspense />}>
        <Merchandise />
      </Suspense>
      <Ribbon
        props={{
          direction: "left",
          text: "Sponsor & Media Partner",
          icon: <Sparkles strokeWidth={1.5} size={48} />,
        }}
      />
      <Suspense fallback={<LoadingSuspense />}>
        <SponsorMediaPartner />
      </Suspense>
      <Ribbon
        props={{
          direction: "right",
          text: "Social Media",
          icon: <Smartphone size={48} strokeWidth={1.5} />,
        }}
      />
      <Suspense fallback={<LoadingSuspense />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
