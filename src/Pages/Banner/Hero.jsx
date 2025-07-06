import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import heroImage from "../../assets/Images/sv2-img.png";
import { useTypewriter } from "react-simple-typewriter";

const FallingStars = () => {
  const groupRef = useRef();

  const stars = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 120; i++) {
      temp.push({
        position: [
          Math.random() * 20 - 10,
          Math.random() * 10,
          Math.random() * 10 - 5,
        ],
        speed: 0.01 + Math.random() * 0.015,
      });
    }
    return temp;
  }, []);

  useFrame(() => {
    groupRef.current.children.forEach((star, index) => {
      star.position.y -= stars[index].speed;
      if (star.position.y < -5) {
        star.position.y = 10;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {stars.map((star, index) => (
        <mesh key={index} position={star.position}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color="white" />
        </mesh>
      ))}
    </group>
  );
};

const HeroCurve = () => {
  const siteBackgroundColor = "#1a1124";
  return (
    <svg
      viewBox="0 0 1440 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 left-0 w-full z-10"
    >
      <path
        d="M0 100 Q 360 0, 720 100 T 1440 100 V 200 H 0 Z"
        fill={siteBackgroundColor}
      />
      <filter
        id="neonGlow"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation="6 6" in="SourceAlpha" result="blur" />
        <feComponentTransfer in="blur" result="glow">
          <feFuncR type="linear" slope="1" intercept="0" />
          <feFuncG type="linear" slope="1" intercept="0" />
          <feFuncB type="linear" slope="1" intercept="0" />
          <feFuncA type="linear" slope="1" intercept="0" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode in="glow" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <path
        d="M0 100 Q 360 0, 720 100 T 1440 100"
        stroke="#FF00FF"
        strokeWidth="4"
        filter="url(#neonGlow)"
        fill="transparent"
      />
    </svg>
  );
};

const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Frontend Developer",
      "BSc in CSE",
      "Passionate about building responsive UIs",
      "Experienced in MERN stack",
      "Love working with JavaScript and React",
      "Problem solver and quick learner",
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <section className="relative h-auto md:h-[850px] w-full text-white overflow-hidden bg-gray-900 py-16 md:py-0">
      {/* Neon Blurs */}
      <div className="absolute top-0 left-0 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-fuchsia-500 opacity-20 blur-3xl rounded-full z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-cyan-500 opacity-20 blur-3xl rounded-full z-0 pointer-events-none"></div>

      {/* Stars Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <FallingStars />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-5 lg:pt-14">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-snug pb-4 sm:pb-6 md:pb-8"
            style={{
              textShadow:
                "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #00f, 0 0 20px #00f, 0 0 25px #00f, 0 0 30px #00f, 0 0 35px #00f",
            }}
          >
            Hello, I am <br />
            <span
              className="text-purple-400"
              style={{
                textShadow:
                  "0 0 5px #f0f, 0 0 10px #f0f, 0 0 15px #f0f, 0 0 20px #f0f, 0 0 25px #f0f, 0 0 30px #f0f, 0 0 35px #f0f",
              }}
            >
              Sourav Debnath
            </span>
          </h1>
          <p className="min-h-[40px] text-base sm:text-lg md:text-xl font-medium text-purple-300">
            {typeEffect}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 pb-3 sm:pb-4 md:pb-5">
            Results-driven MERN Stack Web Developer with a B.Sc. in CSE
            graduate. Passionate about building responsive, user-friendly, and
            scalable web applications.
          </p>
          <div>
            <a
              href="https://drive.google.com/file/d/15t15rjhY7E4hBHt1jFGjCbUnwofm5oKZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-purple-500 text-purple-300 px-4 sm:px-6 py-2 rounded-md shadow-lg hover:shadow-purple-glow transition-all duration-300 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="relative z-10">Download Resume</span>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
          <div className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 rounded-full bg-purple-600 opacity-40 blur-3xl z-[-1] animate-pulse"></div>
          <img
            src={heroImage}
            alt="Sourav Debnath"
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border-4 border-white shadow-xl ring-8 ring-purple-500 transition-all duration-500 ease-in-out hover:ring-[16px] hover:ring-pink-500 hover:shadow-[0_0_100px_30px_rgba(236,72,153,0.7)]"
          />
        </div>
      </div>

      {/* SVG Curve */}
      <HeroCurve />
    </section>
  );
};

export default Hero;
