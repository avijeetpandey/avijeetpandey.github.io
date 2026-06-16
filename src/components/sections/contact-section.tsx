import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Copy, Mail, Phone, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { fadeUp, interactiveLift, staggerContainer, viewport } from "@/lib/animations";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter at least 2 characters."),
  email: z.email("Enter a valid email address."),
  message: z.string().min(20, "Share enough context so I can respond meaningfully."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: initialValues,
  });

  const onSubmit = form.handleSubmit(async () => {
    setIsSubmitting(true);

    const submission = new Promise<void>((resolve, reject) => {
      window.setTimeout(() => {
        if (!navigator.onLine) {
          reject(new Error("Offline"));
          return;
        }

        resolve();
      }, 1400);
    });

    try {
      await toast.promise(submission, {
        loading: "Sending your message…",
        success: "Message sent. I’ll be in touch.",
        error: "Submission failed while offline. Please retry when connected.",
      });

      form.reset(initialValues);
    } finally {
      setIsSubmitting(false);
    }
  });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("avijeet2200@gmail.com");
      toast.success("Copied to clipboard.");
    } catch {
      toast.error("Couldn’t access the clipboard just now.");
    }
  };

  return (
    <section id="contact" className="section-shell">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s build something serious."
          description="If the work involves scale, reliability, or difficult backend decisions, I&apos;m happy to talk."
        />

        <motion.div
          className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp}>
            <Card className="h-full">
              <CardContent className="flex h-full flex-col gap-6 p-6 sm:p-8">
                <div className="space-y-5">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary">
                    <Sparkles className="size-6" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white sm:text-2xl">
                      Open to serious product work.
                    </h3>
                    <p className="text-base leading-8 text-slate-300">
                      Best fit: backend systems, distributed platforms, internal tooling,
                      and teams that care about shipping something that actually holds up.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="inline-flex w-full items-center justify-between rounded-[1.25rem] border border-white/8 bg-white/[0.02] px-4 py-3 text-sm text-slate-300">
                    <span className="inline-flex items-center gap-2">
                      <Phone className="size-4" />
                      +91 83181 23598
                    </span>
                  </div>
                  <Button
                    type="button"
                    variant="secondary"
                    size="lg"
                    className="w-full justify-between rounded-[1.25rem]"
                    onClick={copyEmail}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Mail className="size-4" />
                      avijeet2200@gmail.com
                    </span>
                    <Copy className="size-4" />
                  </Button>
                  <a
                    href="https://linkedin.com/in/avijeet2200"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-[1.25rem] border border-white/8 bg-white/[0.02] px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-white/[0.04] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <BriefcaseBusiness className="size-4" />
                      linkedin.com/in/avijeet2200
                    </span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card>
              <CardContent className="p-6 sm:p-8">
                <Form {...form}>
                  <form className="space-y-5" onSubmit={onSubmit}>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="you@company.com" type="email" {...field} />
                          </FormControl>
                          <FormDescription>
                            I&apos;ll only use this to reply.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about the product, system constraints, or delivery challenge."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <motion.div {...interactiveLift}>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full rounded-[1.5rem]"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Submit inquiry"}
                        <Send className="size-4" />
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
