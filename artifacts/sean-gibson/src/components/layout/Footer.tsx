import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSubscribeNewsletter } from "@workspace/api-client-react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

export function Footer() {
  const subscribe = useSubscribeNewsletter();
  
  const form = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (values: z.infer<typeof newsletterSchema>) => {
    subscribe.mutate({ data: { email: values.email } }, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <footer className="border-t border-white/5 bg-[#0a1520] pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        <div className="md:col-span-4">
          <div className="font-sans font-medium tracking-wide text-lg mb-4">
            <span className="text-foreground">SEAN</span>
            <span className="text-primary ml-1">GIBSON</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Systems Thinker · Sport Governance · AI Risk
          </p>
        </div>
        
        <div className="md:col-span-4">
          <h4 className="text-sm font-medium text-foreground mb-6">Links</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>
              <a href="https://www.linkedin.com/in/sgibson13/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://theperformancesystem.substack.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Substack
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-sm font-medium text-foreground mb-6">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Occasional writing on systems, performance, and governance.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input 
                        placeholder="Email address" 
                        className="bg-card border-white/10 text-foreground" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                disabled={subscribe.isPending}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {subscribe.isPending ? "..." : "Subscribe"}
              </Button>
            </form>
          </Form>
          {subscribe.isSuccess && (
            <p className="text-sm text-primary mt-2">Subscribed successfully.</p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 text-xs text-muted-foreground">
        © 2025 Sean Gibson. All rights reserved.
      </div>
    </footer>
  );
}
