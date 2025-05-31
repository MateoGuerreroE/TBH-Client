import ReviewScroll from "@/app/components/static/ReviewScroll";
import WrappedMainReview from "@/app/components/wrapped/WrappedMainReview";
import { testReviews } from "@/test/sampleData";

export default function Ratings() {
  const mainReview = testReviews[0];
  const otherReviews = testReviews.slice(1);

  return (
    <section className="flex w-full bg-gradient-to-tr to-[#FFEAE2] from-[#68c2dd]">
      <div className="flex flex-col items-center w-full">
        <h2 className="font-poppins text-3xl md:text-4xl pt-6 font-bold text-center">
          Reseñas
        </h2>
        <div className="max-w-[1500px] flex flex-row gap-5 w-full p-5 md:p-7 lg:p-10">
          <div className="flex flex-col h-[500px] md:h-[600px] w-full lg:w-1/2 gap-16 pt-6 md:pt-10">
            <ReviewScroll reviews={otherReviews} />
          </div>
          <div className="hidden lg:flex items-center justify-center w-1/2 p-5 relative">
            <WrappedMainReview review={mainReview} />
          </div>
        </div>
      </div>
    </section>
  );
}
