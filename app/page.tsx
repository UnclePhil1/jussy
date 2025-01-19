"use client";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import Headers from "../components/header";
import Vision from "@/components/vision";
import Archivements from "@/components/archivement";
import Partners from "@/components/partners";
import Join from "@/components/join";
import { Footer } from "@/components/footer";
import { SubscriptionForm } from "@/components/contact";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      {isClient && (
        <div>
          <section id="home">
            <Headers />
          </section>
          <section id="about">
            <Vision />
          </section>
          <section id="archive">
            <Archivements />
          </section>
          <section id="partner">
            <Partners />
          </section>
          <section id="community">
            <Join />
          </section>
          <section id="home">
            <SubscriptionForm />
          </section>

          <Footer />
        </div>
      )}
    </div>
  );
}
