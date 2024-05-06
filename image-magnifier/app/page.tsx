import ImageMagnifier from "./(components)/image-magnifier";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-50">
      <div className="bg-white p-10">
        <ImageMagnifier
          className="relative "
          width={2000}
          height={2000}
          src="/next.svg"
          alt="Next.js Logo"
          priority
        />
      </div>
    </main>
  );
}
