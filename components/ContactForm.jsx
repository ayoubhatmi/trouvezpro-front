"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
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
import { useState } from "react";
import emailjs from "@emailjs/browser";

// Define form schema
const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  entreprise: z.string().optional(),
  fonction: z.string().optional(),
  message: z.string().min(10),
});

const ContactForm = () => {
  // Initialize form hook
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      entreprise: "",
      fonction: "",
      message: "",
    },
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle form submission
  const onSubmit = async (values) => {
    try {
      const formElement = document.getElementById("form");

      await emailjs.sendForm(
        "service_6srdjoa",
        "template_hrnz427",
        formElement,
        "vDoC3aT8-zoFqnB55"
      );
      setSubmitStatus("success");
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col max-w-xl gap-4 w-full"
        id="form"
      >
        <FormField
          control={form.control}
          name="username"
          id="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom et Nom</FormLabel>
              <FormControl>
                <Input placeholder="Ex. Jean Dupont" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          id="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Ex. jean.dupont@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="entreprise"
          id="entreprise"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Entreprise</FormLabel>
              <FormControl>
                <Input placeholder="Ex. Entreprise SA" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fonction"
          id="fonction"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fonction</FormLabel>
              <FormControl>
                <Input placeholder="Ex. Directeur Marketing" {...field} />
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
              <FormLabel>Votre message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ex. Je souhaite ajouter mon entreprise à votre annuaire."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-fit self-start bg-[#03346E]">
          Envoyer le message
        </Button>
        {submitStatus === "success" && (
          <p className="text-green-600">
            Votre message a été envoyé avec succès. Merci!
          </p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-600">
            Une erreur est survenue. Veuillez réessayer.
          </p>
        )}
      </form>
    </Form>
  );
};

export default ContactForm;
