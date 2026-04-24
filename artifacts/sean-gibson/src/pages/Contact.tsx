import { PageLayout } from "@/components/layout/PageLayout";
import { useSEO } from "@/lib/seo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSubmitContact, ContactFormBodyType } from "@workspace/api-client-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("Valid email is required"),
  type: z.enum([ContactFormBodyType.advisory, ContactFormBodyType.speaking, ContactFormBodyType.general]),
  subject: z.string().max(300).optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const seo = useSEO({
    title: "Contact — Sean Gibson",
    description: "Let's talk about the system. Enquire about advisory work or speaking engagements."
  });

  const submitContact = useSubmitContact();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      type: ContactFormBodyType.general,
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    submitContact.mutate({ data: values }, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <PageLayout>
      {seo}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-16 text-center">Let's talk about the system.</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-card border border-white/5 p-8">
            <h3 className="text-xl font-medium text-foreground mb-3">Advisory</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Strategy and governance work for boards, executive teams, and federations navigating complexity or adopting AI.
            </p>
          </div>
          <div className="bg-card border border-white/5 p-8">
            <h3 className="text-xl font-medium text-foreground mb-3">Speaking</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Keynotes, conferences, and half-day workshops exploring system coherence and performance debt.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="mb-12 text-center">
            <a href="mailto:sean@seangibson.co" className="text-lg text-primary hover:underline font-medium">sean@seangibson.co</a>
          </div>

          <div className="bg-[#0a1520] border border-white/5 p-8">
            {submitContact.isSuccess ? (
              <Alert className="bg-primary/10 border-primary/20 text-primary mb-6">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  Your message has been sent. I will get back to you shortly.
                </AlertDescription>
              </Alert>
            ) : submitContact.isError ? (
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  There was a problem sending your message. Please try again or email directly.
                </AlertDescription>
              </Alert>
            ) : null}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" className="bg-background border-white/10" {...field} />
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
                        <FormLabel className="text-foreground">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" className="bg-background border-white/10" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Enquiry Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background border-white/10">
                            <SelectValue placeholder="Select enquiry type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={ContactFormBodyType.advisory}>Advisory</SelectItem>
                          <SelectItem value={ContactFormBodyType.speaking}>Speaking</SelectItem>
                          <SelectItem value={ContactFormBodyType.general}>General</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Subject (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="What is this regarding?" className="bg-background border-white/10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message..." 
                          className="min-h-[150px] bg-background border-white/10 resize-y" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={submitContact.isPending || submitContact.isSuccess}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {submitContact.isPending ? "Sending..." : submitContact.isSuccess ? "Sent" : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
