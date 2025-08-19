// import content
import { createElement, useState } from "react";
import { content } from "../Content";
// import modal package
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt="..." />
          <h6 className="font-semibold text-lg">{selectSkill?.name}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7 space-y-1">
          {selectSkill?.details?.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <br />
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="btn bg-blue-200 text-black px-4 py-1 border-none rounded-md hover:bg-yellow-300 transition"
          >
            Close
          </button>
        </div>
      </Modal>

      {/* content */}
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-6 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 300}
              className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
               gap-5 p-5 max-w-sm rounded-xl border border-slate-200 shadow-sm
               hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <div className="flex-shrink-0">
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-12 h-12 object-contain group-hover:scale-110 duration-300"
                />
              </div>
              <div className="flex-1">
                <h6 className="font-semibold text-gray-800">{skill.name}</h6>
                <p className="italic text-gray-600 text-sm">{skill.para}</p>
                <div
                  onClick={() => {
                    setSelectSkill(skill);
                    openModal();
                  }}
                  className="text-xl text-blue-600 absolute top-3 right-3 hover:scale-125 transition"
                >
                  {createElement(skills.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
