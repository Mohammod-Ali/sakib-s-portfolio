const Award = () => {
  const cardData = [
    {
      id: 1,
      img: "/photos/award.jpeg",
      title: "Outstanding Contribution Award",
      description: `It has been an inspiring four-year journey with It’s Humanity Foundation, starting from a simple internship and gradually growing into greater responsibility. Throughout this time, I learned valuable lessons, contributed to meaningful projects, and connected with incredible people who supported my development. This experience shaped my personal and professional identity, allowing me to grow with purpose, dedication, and a commitment to serving communities with genuine passion.`,
    },
    {
      id: 2,
      img: "/photos/award2.jpeg",
      title: "Awarded by United Nations",
      description: `Photography began as a simple hobby, yet it led me to an unexpected milestone when my image was selected for the UN80 Youth Photo Contest, “Youth as Catalysts of Change.” This recognition from the United Nations encouraged me to continue creating meaningful work through It’s Humanity Foundation. I remain deeply grateful for this honor, and for the people whose love, guidance, and constant encouragement continue to inspire my creative journey every day.`,
    },
    {
      id: 3,
      img: "/photos/award1.jpeg",
      title: "Awarded for outstanding contribution",
      description: `This moment reflects the honor of receiving the Outstanding Contribution Award (2021–2022) from It’s Humanity Foundation, acknowledging a year of dedication and impactful service. The award symbolizes meaningful involvement in community-focused initiatives and a commitment to positive change. It serves as a reminder of the value of purposeful work and reinforces my motivation to continue contributing, learning, and growing through initiatives that support people and create lasting, transformative outcomes.`,
    },
  ];

  return (
    <div className="bg-base-100 text-black">
      <h2 className="text-4xl mt-16 font-bold text-center">Awards</h2>

      <div className="flex flex-col sm:flex-row gap-16 justify-center items-center my-16">

        {cardData.map((card) => {
          const wordLimit = 80;
          const words = card.description.trim().split(/\s+/);
          const isLong = words.length > wordLimit;
          const shortText = isLong
            ? words.slice(0, wordLimit).join(" ") + "..."
            : card.description;

          return (
            <div
              className="card flex flex-col lg:card-side bg-base-200 shadow-sm w-96"
              key={card.id}
            >
              <figure>
                <img
                  src={card.img}
                  alt="award"
                  className="h-[500px] w-[360px] rounded object-cover transition-transform duration-500 hover:scale-105"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{card.title}</h2>

                {/* DESCRIPTION WITH TOOLTIP */}
                <div className="relative group">
                  <p className="text-justify ">{shortText}</p>

                  {isLong && (
                    <div className="absolute z-50 hidden group-hover:block w-72 p-3 rounded-xl bg-black text-white text-sm shadow-xl top-0 left-1/2 -translate-x-1/2">
                      {card.description}
                    </div>
                  )}
                </div>
                {/* END DESCRIPTION */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Award;
