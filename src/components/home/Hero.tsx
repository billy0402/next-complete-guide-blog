import Image from 'next/image';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__image'>
        <Image
          src='/images/home/billy.jpg'
          alt='A image showing Billy'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Billy</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
};

export default Hero;
