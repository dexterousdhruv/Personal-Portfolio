
import { TiSocialLinkedin } from "react-icons/ti";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { Github } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(5, "Name must be at least 5 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    const access_key = import.meta.env.VITE_FORM_API_KEY
    const formData = { ...data, access_key }
    console.log(formData)
    try {
      const res = await axios.post("https://api.web3forms.com/submit", formData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
      })
  
      if (res.status === 200) {
        toast({
          title: "Message sent successfully",
          className: "bg-green-500 border-green-500 text-white text-base"
        })
        reset()
      }
    } catch (e) {
      console.log("Error in sending message: ", e)
      toast({
        title: "Failed to send message. Please try again!",
        className: "bg-red-500 border-red-500 text-white text-base"
      })
    }
    
  };

  return (
    <div id="contact" className="pt-32 pb-16 px-8 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto animate-fade-in">
        <div className="flex items-center mb-8 gap-6">
          <h1 className="text-4xl font-medium">Contact</h1>
          <div className="w-full max-w-52 h-[1px] bg-foreground/50 "></div>
        </div>{" "}
        <p className="text-foreground/70 mb-10 max-w-2xl">
          Let's get in touch.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="w-full p-2.5 bg-transparent border border-foreground/20 rounded-md focus:outline-none focus:ring-1 focus:ring-foreground/40"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="w-full p-2.5 bg-transparent border border-foreground/20 rounded-md focus:outline-none focus:ring-1 focus:ring-foreground/40"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className="w-full p-3 bg-transparent border border-foreground/20 rounded-md focus:outline-none resize-none focus:ring-1 focus:ring-foreground/40"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 border border-foreground/20 rounded-md hover:bg-foreground/5 transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div>
            <div className="mb-8">
              <h3 className="text-xl mb-2">Email</h3>
              <p className="text-foreground/70">dhruvverma0110@gmail.com</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl mb-2">Location</h3>
              <p className="text-foreground/70">Prayagraj, India</p>
            </div>

            <div>
              <h3 className="text-xl mb-2">Social</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/dexterousdhruv/University-landing-page"
                  target="__blank"
                  className="text-foreground/70 hover:text-foreground transition-colors rounded-full"
                >
                  <Github />
                </a>
                <a
                  href="http://www.linkedin.com/in/dhruv-verma-5786-hero"
                  target="__blank"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  <TiSocialLinkedin size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
