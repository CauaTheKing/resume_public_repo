
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

export const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </label>
          <Input
            id="name"
            placeholder="Your name"
            required
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            required
            className="w-full"
          />
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        <label htmlFor="subject" className="text-sm font-medium text-gray-700">
          Subject
        </label>
        <Input
          id="subject"
          placeholder="Subject of your message"
          required
          className="w-full"
        />
      </div>
      
      <div className="space-y-2 mb-6">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Your message"
          required
          className="w-full min-h-[150px]"
        />
      </div>
      
      <Button
        type="submit"
        className="w-full bg-violet-600 hover:bg-violet-700 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </motion.form>
  );
};

export default ContactForm;
