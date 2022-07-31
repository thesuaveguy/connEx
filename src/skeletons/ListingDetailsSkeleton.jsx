import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { v4 as uuidv4 } from 'uuid';

function ListingDetailsSkeleton() {
  return (
    <main>
      <Skeleton width={`100%`} height={640} />
      <article className="min-h-screen max-w-7xl px-3 mx-auto lg:py-24 md:py-20 py-14">
        <section className="lg:grid lg:grid-cols-[1fr_448px] lg:gap-9 lg:items-start">

          <div className="lg:order-1">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton count={4} />
            <Skeleton count={20} />
          </div>
        </section>
        <section className="lg:pt-24 md:pt-20 pt-14">
          <h2 className="text-gray-900 font-extrabold text-3xl mb-4">Gallery</h2>
          <Skeleton width={`100%`} height={640} />
        </section>
        <section className="lg:pt-24 md:pt-20 pt-14">
          <h2 className="text-gray-900 font-extrabold text-3xl mb-4">Location</h2>
          <div className="w-full h-[40rem]">
            <Skeleton width={`100%`} height={640} />
          </div>
        </section>
      </article>
    </main>
  );
}

export default ListingDetailsSkeleton;
