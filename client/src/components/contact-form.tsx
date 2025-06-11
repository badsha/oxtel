import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  companyName: z.string().optional(),
  tasks: z.string().optional(),
  expectedHours: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      tasks: "",
      expectedHours: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For static website, just show success message
    setIsSubmitted(true);
    form.reset();
    toast({
      title: "Thank you!",
      description: "We'll respond within 24 hours with your custom savings estimate.",
    });
    
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-sm border border-slate-200">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h2>
                <p className="text-xl text-slate-600">
                  We've received your information and will contact you within 24 hours with your custom savings estimate.
                </p>
              </div>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-primary-600 text-primary-600 hover:bg-primary-50"
              >
                Submit Another Request
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-slate-600">
            Get your free consultation and custom savings estimate
          </p>
        </div>

        <Card className="shadow-sm border border-slate-200">
          <CardContent className="p-8">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    {...form.register("firstName")}
                    placeholder="John"
                    className={form.formState.errors.firstName ? "border-red-500" : ""}
                  />
                  {form.formState.errors.firstName && (
                    <p className="text-sm text-red-500 mt-1">{form.formState.errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    {...form.register("lastName")}
                    placeholder="Doe"
                    className={form.formState.errors.lastName ? "border-red-500" : ""}
                  />
                  {form.formState.errors.lastName && (
                    <p className="text-sm text-red-500 mt-1">{form.formState.errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    placeholder="john@company.com"
                    className={form.formState.errors.email ? "border-red-500" : ""}
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-red-500 mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...form.register("phone")}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  {...form.register("companyName")}
                  placeholder="Your Company Inc."
                />
              </div>

              <div>
                <Label htmlFor="tasks">What type of tasks do you need help with?</Label>
                <Textarea
                  id="tasks"
                  {...form.register("tasks")}
                  rows={4}
                  placeholder="Describe the tasks and projects you'd like assistance with..."
                />
              </div>

              <div>
                <Label htmlFor="expectedHours">Expected Hours Per Week</Label>
                <Select 
                  onValueChange={(value) => form.setValue("expectedHours", value)}
                  defaultValue=""
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select expected hours" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10-20 hours">10-20 hours</SelectItem>
                    <SelectItem value="20-30 hours">20-30 hours</SelectItem>
                    <SelectItem value="30-40 hours">30-40 hours</SelectItem>
                    <SelectItem value="40+ hours">40+ hours</SelectItem>
                    <SelectItem value="Not sure yet">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="text-center">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-primary-600 text-white px-8 py-4 text-lg font-semibold hover:bg-primary-700 h-auto"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Submitting..." : "Get Your Free Consultation"}
                </Button>
                <p className="text-sm text-slate-500 mt-3">
                  We'll respond within 24 hours with your custom savings estimate
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
