import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title text-center" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle text-center" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse gap-6">
          {/* Image - hidden on mobile */}
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />

          {/* Text box */}
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary w-full md:max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] text-center md:text-left"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white mx-auto md:mx-0">
              {Hireme.btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
