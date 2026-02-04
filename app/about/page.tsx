import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | TechCentrix",
  description: "About TechCentrix",
};

const AboutPage = () => {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-24">
      <div className="mx-auto max-w-[770px] rounded-md border border-body-color/20 bg-white px-8 py-12 text-center dark:border-body-color/20 dark:bg-gray-dark md:py-16">
        <p className="text-xl font-semibold text-dark dark:text-white md:text-2xl">
          Website under construction
        </p>
        <p className="mt-3 text-base text-body-color dark:text-body-color-dark">
          We are working on something new. Please check back soon.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
