'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimation() {
  const pathname = usePathname();

  useEffect(() => {
    // Add a slight delay to ensure Next.js has completed rendering DOM nodes
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Drop observation after it has appeared once for better performance
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      const animatedElements = document.querySelectorAll('.animate-up, .animate-fade');
      animatedElements.forEach((el) => observer.observe(el));

      return () => {
        animatedElements.forEach((el) => observer.unobserve(el));
      };
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
