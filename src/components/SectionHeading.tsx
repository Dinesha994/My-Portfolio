export default function SectionHeading({ title }: { title: string }) {
    return (
      <h2 className="text-3xl md:text-2xl lg:text-4xl font-bold text-center mb-12">
        {title}
      </h2>
    );
  }
  