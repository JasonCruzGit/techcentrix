"use client";

import SectionTitle from "../Common/SectionTitle";

const Video = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] rounded-md border border-body-color/20 bg-white px-8 py-12 text-center dark:border-body-color/20 dark:bg-gray-dark md:py-16"
              data-wow-delay=".15s"
            >
              <p className="text-xl font-semibold text-dark dark:text-white md:text-2xl">
                Website under construction
              </p>
              <p className="mt-3 text-base text-body-color dark:text-body-color-dark">
                We are working on something new. Please check back soon.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
