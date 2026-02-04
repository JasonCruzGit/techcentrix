import SectionTitle from "../Common/SectionTitle";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="mx-auto max-w-[770px] rounded-md border border-body-color/20 bg-white px-8 py-12 text-center dark:border-body-color/20 dark:bg-gray-dark md:py-16">
          <p className="text-xl font-semibold text-dark dark:text-white md:text-2xl">
            Website still under construction
          </p>
          <p className="mt-3 text-base text-body-color dark:text-body-color-dark">
            We are working on something new. Please check back soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
