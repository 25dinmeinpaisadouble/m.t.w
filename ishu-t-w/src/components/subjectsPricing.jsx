import React from 'react'

const SubjectsPricing = () => {
  const SubjectCard = ({ name, price, height = "" }) => {
    return (
      <div className={`rounded-[calc(var(--radius))] border border-border text-card-foreground shadow border-t-4 border-t-blue-500/70 bg-white ${height}`}>
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold tracking-tight text-lg sm:text-xl text-black">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mt-2 text-blue-600">{price}</p>
        </div>
      </div>
    );
  };

  const subjects = [
    {
      category: "Primary School (Years 3-6)",
      courses: [
        { name: "Mathematics", price: "$25/hr x 1.5hr class" },
        { name: "English - Reading Comprehension & Writing", price: "$25/hr x 1.5hr class" }
      ],
    },
    {
      category: "Years 7-10",
      courses: [
        { name: "Mathematics", price: "$30/hr x 2hr class" }
      ],
    },
    {
      category: "Years 11-12 (HSC)",
      courses: [
        { name: "Mathematics (Stn/Adv)", price: "$35/hr x 2hr class" },
        { name: "Physics", price: "$40/hr x 2hr class" }
      ],
    }
  ];

  return (
    <section id="subjects" className="px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto transform transition-all duration-1000 ease-out translate-y-0 opacity-100 scale-100">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          Tutoring Subjects
        </h2>

        {/* Primary School */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-blue-600">
            {subjects[0].category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subjects[0].courses.map((subject, index) => (
              <SubjectCard key={index} name={subject.name} price={subject.price} />
            ))}
          </div>
        </div>

        {/* High School */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-blue-600">High School</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Years 7-10 */}
            <div>
              <h4 className="text-xl font-medium mb-4 text-gray-700">
                {subjects[1].category}
              </h4>
              <SubjectCard name={subjects[1].courses[0].name} price={subjects[1].courses[0].price} height="h-[140px]" />
            </div>

            {/* Years 11-12 */}
            <div className="col-span-2">
              <h4 className="text-xl font-medium mb-4 text-gray-700">
                {subjects[2].category}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {subjects[2].courses.map((subject, index) => (
                  <SubjectCard key={index} name={subject.name} price={subject.price} height="h-[140px]" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Note */}
        <p className="text-center text-gray-600 italic mb-6">
          * All prices shown above are for group lessons
        </p>

        {/* CTA Button */}
        <div className="text-center">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-9 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
            Enquire about 1-on-1 tuition rates now
          </button>
        </div>
      </div>
    </section>
  );
}

export default SubjectsPricing