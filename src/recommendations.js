//Testimonial Data
const testimonials = [
    {
      name: "~ Tomasz",
      job: "Software Engineer Lead",
      testimonial: `I had the pleasure of managing Olimpia for the past few years, and I can confidently say that she is a phenomenal asset to any team. She joined our team as a junior software engineer, and her journey from day one has been nothing short of impressive.
      Olimpia possesses an uncanny ability to absorb information like a sponge – a true testament to her status as a fast learner. Her ability to grasp new concepts at the speed of light is truly impressive. She not only conquered the learning curve but also applied her newly acquired knowledge with exceptional finesse.
      Attention to details is Olimpia's middle name (well, not literally, but you get the point). Whether it's ensuring the semicolons are in the right place or meticulously crafting user interfaces, her work showcases a level of precision that's hard to come by.
      Organisational skills? Olimpia has the kind of organisational prowess that makes Marie Kondo look disorganised - everything has its place, and everything runs efficiently. I can always count on her to have a well-thought-out plan, complete with contingencies for any unexpected hiccups along the way. She effortlessly juggles multiple tasks, prioritises like a pro, and has an uncanny knack for turning chaos into a well-orchestrated symphony.
      But it's not just about individual brilliance; Olimpia is an amazing team player. She effortlessly collaborates with team members, turning our projects into well-oiled machines. Her positive attitude and willingness to share knowledge helped create an environment where everyone thrives.
      If you're looking for a software engineer who is a fast learner, detail-oriented, organised, and an amazing team player – all sprinkled with a bit of humour – Olimpia is your go-to person. It's been a pleasure watching her evolve, and I can't wait to see the heights she reaches in the future. Olimpia is the kind of professional any manager would be lucky to have. If you're considering adding a dynamic force to your team, Olimpia is the one to watch. `
    },
    {
      name: "~ Noemi",
      job: "Senior Frontend Developer",
      testimonial: `I've seen Olimpia grown as a Software Engineer since the day I took part in her interview for Mendeley. It's been a pleasure to work with her in every aspect. She's driven, a fast learner, positive and a team player.
      Olimpia works hard to ensure the best quality in everything she does. She has an incredible eye for detail, finding solutions before a problem arises, she's proactive, committed, and not shy to ask for help as well as being inquisitive as she absorbs knowledge.
      She's a genuine and caring person and I cannot recommend Olimpia enough. 
      If you are looking for someone who is outstanding in her job, with a growth mindset, enthusiastic and a loving person to work with, do not look elsewhere!`
    },
    {
      name: "~ Lutfiye",
      job: "Senior Quality Test Engineer ",
      testimonial: `Olimpia is an exceptionally talented professional, demonstrating an unwavering commitment to the continuous development of her skills. Her fearless attitude towards learning new things, coupled with a proactive nature, has resulted in significant contributions that not only elevate her own capabilities but also have a positive impact on the entire team.
      What sets Olimpia apart is not just her impressive skill set, but also her dedication to personal and collaborative projects. She consistently goes above and beyond expectations, showcasing a level of commitment that is truly commendable. Whether working independently or as part of a team, Olimpia brings a unique blend of creativity and diligence to every task, resulting in successful outcomes that speak to her unwavering dedication.
      A key strength of Olimpia lies in her ability to share knowledge effectively. Through workshops and meticulously prepared documents, she not only imparts valuable insights but also empowers her colleagues with the tools and information needed for success. This willingness to contribute to the collective growth of the team reflects her collaborative spirit and demonstrates her commitment to fostering a culture of shared learning and development.
      Beyond her technical prowess, olimpia is known for her honesty and hardworking nature, making her an indispensable member of the team. Her transparency and integrity create an atmosphere of trust, contributing to a positive and collaborative work environment. It is no surprise that her efforts have not only been recognized but also earned her well-deserved accolades within the team.
      I feel incredibly fortunate to have had the opportunity to work alongside Olimpia. Her remarkable combination of talent, dedication, and integrity makes her a standout professional and an asset to any team. I am confident that her future endeavours will be marked by the same level of excellence that she consistently brings to her work.`
        
    },
    {
      name: "~ Leigh",
      job: "Junior Software Engineer",
      testimonial: `I had the pleasure of working alongside Olimpia as a software engineer. When I started out as a developer, she was always on hand to offer assistance and guidance, demonstrating knowledge and competence with the codebase.
      In addition to this technical knowledge, Olimpia possesses excellent teamwork and communication skills fostering a collaborative spirit within the team and making valuable contributions to team meetings.
      I have no doubt that Olimpia would excel in any role, software engineering or otherwise, and recommend her for her professionalism, dedication, and expertise.`
    },
    {
        name: "~ Sarah",
        job: "Senior Software Engineer",
        testimonial: `Olimpia has been an asset to our team and a joy to work with these past couple of years. Her work ethic is both efficient and resourceful and she really thrives when it comes to undertaking challenges outside of her remit, pushing the boundaries of her comfort zone in pursuit of learning, knowledge and growth. She’s a confident individual, who enjoys working autonomously, but she’s also an active team player, wanting to improve team productivity, code practices and product potential. I’m glad to have had the privilege to work with Olimpia; I have no doubt that she’ll go far in her career.`
    },
  ];
  
  //Current Slide
  let i = 0;
  //Total Slides
  let j = testimonials.length;
  
  let testimonialContainer = document.getElementById("testimonial-container");
  let nextBtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");
  
  nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
  });
  prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
  });
  
  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p>
      <h3>${testimonials[i].name}</h3>
      <h6>${testimonials[i].job}</h6>
    `;
  };
  window.onload = displayTestimonial;