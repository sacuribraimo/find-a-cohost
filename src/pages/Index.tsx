
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { CoHostGrid } from "@/components/CoHostGrid";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { CallToAction } from "@/components/CallToAction";
import { Pricing } from "@/components/Pricing";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { FAQ } from "@/components/FAQ";
import { PodcastCoHost } from "@/components/PodcastCoHost";
import { NotCompatible } from "@/components/NotCompatible";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      <Hero />
      <Stats />
      <PodcastCoHost />
      <HowItWorks />
      <NotCompatible />
      <FeaturedCategories />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Discover Your Perfect Podcast Co-Host
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through talented podcasters ready to collaborate on your next show
          </p>
        </div>
        <SearchBar />
        <CoHostGrid />
      </div>
      <Testimonials />
      <Pricing />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
