import Link from 'next/link';

const Hero = () => {
  return (
    <Link href="/movies/40028">
      <div
        className="h-[60vh] bg-cover bg-no-repeat w-full mb-8 relative bg-hero shadow-hero"
        style={{
          backgroundPositionX: 'center',
        }}
      >
        <div className="top-[23%] lg:top-[33%] md:w-9/12 p-3 md:ml-8 top-2/4 absolute z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Shingeki no Kyojin: The Final Season
          </h2>
          <p className="text-lg">
            With Eren and company now at the shoreline and the threat of Marley
            looming, what’s next for the Scouts and their quest to unravel the
            mysteries of the Titans, humanity, and more?
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Hero;
