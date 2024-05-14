import logo from "../assets/elits.svg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col h-[36rem] p-8 text-center items-center gap-4 mb-5 bg-[url(./src/assets/hero/DIT.png)] bg-cover bg-gray-700 bg-blend-multiply"
    >
      <div className="block">
        <img src={logo} />
      </div>
      <div className="px-4 max-w-[64ch]">
        <h1 className="text-5xl tracking-wide font-extrabold">Welcome</h1>
        <p className="text-pretty text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          corrupti debitis laboriosam aspernatur, quis hic nulla, dolore ut
          iusto eaque fuga dolores rerum, asperiores similique. Voluptate
          mollitia ipsa quisquam dolores.
        </p>
      </div>
      <button className="p-4 border border-white rounded-lg">Sign up</button>
    </section>
  );
};

export default Hero;
