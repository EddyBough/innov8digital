import { testimonials } from "./testimonials";

// Transformation of testimonials for the AnimatedTooltip format
export const clientsForTooltip = testimonials.map((testimonial, index) => ({
  id: index + 1,
  name: testimonial.name,
  designation: testimonial.company,
  image: testimonial.avatar || "/img/default-avatar.webp",
}));
