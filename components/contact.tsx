"use client";
import { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion, useScroll, useTransform } from "framer-motion";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import CustomButton from "./reuse/button";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  telegram: z.string().email("Invalid email address"),
  x: z.string().min(10, "Please enter a valid phone number"),
  details: z.string(),
});

export function SubscriptionForm() {
  const [showArrow, setShowArrow] = useState(false);
  const { scrollYProgress } = useScroll();
  const arrowRef = useRef(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      telegram: "",
      x: "",
      details: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
    console.log(values);
  }

  const handleSlot = () => {
    alert("Slot booked!");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 100
      ) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#002211] to-[#1A0B2E] p-6 md:p-8 flex items-center justify-center"
      data-aos="fade-up"
    >
      <div className="w-full max-w-4xl space-y-12">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Subscribe and stay connected
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Fill out your info below
          </p>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Reach out to us
          </h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Full Name"
                          className="border-t-0 border-x-0 rounded-none bg-transparent text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="telegram"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Telegram Handle"
                          className="border-t-0 border-x-0 rounded-none bg-transparent text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="x"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="X Handle"
                          className="border-t-0 border-x-0 rounded-none bg-transparent text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="details"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Details"
                        className="border-t-0 border-x-0 rounded-none bg-transparent text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-white min-h-[100px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <CustomButton text="Book a Slot" onClick={handleSlot} />
            </form>
          </Form>
        </div>
      </div>
      {showArrow && (
        <div
          ref={arrowRef}
          className="fixed bottom-4 right-4 p-2 border border-primary hover:bg-primary/20 text-white rounded-full cursor-pointer"
          onClick={scrollToTop}
        >
          <KeyboardArrowUpIcon />
        </div>
      )}
    </div>
  );
}
