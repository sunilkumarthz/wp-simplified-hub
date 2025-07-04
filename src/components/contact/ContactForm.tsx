
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';
import { submitContactForm, type ContactFormData } from '@/services/api';

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  whatsapp: z.string().min(10, {
    message: 'WhatsApp number must be at least 10 digits.',
  }),
  purpose: z.string().min(5, {
    message: 'Purpose must be at least 5 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      whatsapp: '',
      purpose: '',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(values as ContactFormData);

      if (result.success) {
        toast({
          title: 'Message sent successfully!',
          description: 'We will get back to you within 24 hours.',
        });
        form.reset();
      } else {
        toast({
          title: 'Something went wrong.',
          description:
            result.message ||
            'There was an error sending your message. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      // Display error toast
      toast({
        title: 'Something went wrong.',
        description:
          'There was an error sending your message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="creative-card bg-slate-800/80 border-slate-700/50 backdrop-blur-sm">
      <CardHeader className="pb-6">
        <CardTitle className="text-3xl font-baloo font-bold text-white flex items-center gap-3">
          <Send className="h-8 w-8 text-wp-teal" />
          Send us a Message
        </CardTitle>
        <p className="text-slate-400 font-roboto">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-slate-300"
              >
                Full Name *
              </label>
              <Input
                id="name"
                placeholder="Your full name"
                type="text"
                {...form.register('name')}
                disabled={isSubmitting}
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-wp-teal focus:ring-wp-teal/20"
              />
              {form.formState.errors.name && (
                <p className="text-red-400 text-sm">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-slate-300"
              >
                Email Address *
              </label>
              <Input
                id="email"
                placeholder="your.email@example.com"
                type="email"
                {...form.register('email')}
                disabled={isSubmitting}
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-wp-teal focus:ring-wp-teal/20"
              />
              {form.formState.errors.email && (
                <p className="text-red-400 text-sm">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="whatsapp"
              className="text-sm font-medium text-slate-300"
            >
              WhatsApp Number *
            </label>
            <Input
              id="whatsapp"
              placeholder="+91 98765 43210"
              type="tel"
              {...form.register('whatsapp')}
              disabled={isSubmitting}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-wp-teal focus:ring-wp-teal/20"
            />
            {form.formState.errors.whatsapp && (
              <p className="text-red-400 text-sm">
                {form.formState.errors.whatsapp.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="purpose"
              className="text-sm font-medium text-slate-300"
            >
              Purpose *
            </label>
            <Input
              id="purpose"
              placeholder="What can we help you with?"
              type="text"
              {...form.register('purpose')}
              disabled={isSubmitting}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-wp-teal focus:ring-wp-teal/20"
            />
            {form.formState.errors.purpose && (
              <p className="text-red-400 text-sm">
                {form.formState.errors.purpose.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-slate-300"
            >
              Message *
            </label>
            <Textarea
              id="message"
              placeholder="Tell us more about your project or question..."
              rows={6}
              {...form.register('message')}
              disabled={isSubmitting}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-wp-teal focus:ring-wp-teal/20 resize-none"
            />
            {form.formState.errors.message && (
              <p className="text-red-400 text-sm">
                {form.formState.errors.message.message}
              </p>
            )}
          </div>

          <Button
            variant="solid"
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <Send className="mr-2 h-5 w-5 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
