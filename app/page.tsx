"use client"
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  useGSAP(()=>{
     gsap.fromTo(
      ".an12 a",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.2,
        stagger: 0.9,
        scrollTrigger: {
          trigger: ".an12",
          start: "top 90%",
        },
      },
    );
     gsap.fromTo(
      ".an9 article",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.6,
        stagger: 0.4,
        scrollTrigger: {
          trigger: ".an9",
          start: "top 90%",
        },
      },
    );
    gsap.from(".an-im",{
      width:0,
      duration:1,
      delay:1,
      scrollTrigger:{
        trigger:".an-im",
        start:"top 95%"
      }
    })
    gsap.from(".an-im12",{
      width:0,
      duration:1,
      delay:0.5,
      scrollTrigger:{
        trigger:".an-im12",
        start:"top 90%"
      }
    })
    gsap.from(".an-im13",{
      width:0,
      duration:1,
      delay:0.9,
      scrollTrigger:{
        trigger:".an-im13",
        start:"top 95%"
      }
    })
    gsap.from(".an-im14",{
      width:0,
      duration:1,
      delay:1.3,
      scrollTrigger:{
        trigger:".an-im14",
        start:"top 95%"
      }
    })
    gsap.from(".im-an5",{
      width:0,
      duration:1,
      delay:1.3,
      scrollTrigger:{
        trigger:".im-an5",
        start:"top 95%"
      }
    })
    gsap.from(".an1",{
      opacity:0,
      y:20,
      delay:0.5,
      duration:1,
      stagger:0.06,
      scrollTrigger:{
        trigger:".an1",
        start:"top 95%"
      }
    })
    gsap.from(".an5",{
      opacity:0,
      y:20,
      delay:0.5,
      duration:1,
      stagger:0.06,
      scrollTrigger:{
        trigger:".an5",
        start:"top 95%"
      }
    })
    gsap.from(".an2",{
      opacity:0,
      y:20,
      delay:0.5,
      duration:1,
      stagger:0.06,
      scrollTrigger:{
        trigger:".an2",
        start:"top 95%"
      }
    })
    gsap.from(".an6",{
      opacity:0,
      y:20,
      delay:0.5,
      duration:1,
      stagger:0.06,
      scrollTrigger:{
        trigger:".an6",
        start:"top 95%"
      }
    })
    gsap.from(".an3",{
      opacity:0,
      y:20,
      delay:1.8,
      duration:1,
      stagger:0.06,
      scrollTrigger:{
        trigger:".an3",
        start:"top 95%"
      }
    })
     gsap.from(".an8",{
      opacity:0,
      y:20,
      delay:1.8,
      duration:1,
      stagger:0.06,
      scrollTrigger:{
        trigger:".an8",
        start:"top 95%"
      }
    })
    gsap.from(".an12",{
      opacity:0,
      y:20,
      delay:1.8,
      duration:1,
      stagger:0.06,
      scrollTrigger:{
        trigger:".an12",
        start:"top 95%"
      }
    })
    gsap.from(".an11",{
      opacity:0,
      y:20,
      delay:1.8,
      duration:1,
      stagger:0.06,
      scrollTrigger:{
        trigger:".an11",
        start:"top 95%"
      }
    })
    gsap.from(".an10",{
      opacity:0,
      y:20,
      delay:1.8,
      duration:1,
      stagger:0.06,
      scrollTrigger:{
        trigger:".an10",
        start:"top 95%"
      }
    })
    gsap.from(".an15",{
      opacity:0,
      y:20,
      delay:1.8,
      duration:1,
      stagger:0.06,
      scrollTrigger:{
        trigger:".an15",
        start:"top 95%"
      }
    })
    gsap.from(".an16",{
      opacity:0,
      y:20,
      delay:1.8,
      duration:1,
      stagger:0.06,
      scrollTrigger:{
        trigger:".an16",
        start:"top 95%"
      }
    })
     gsap.from(".an18",{
      opacity:0,
      y:20,
      delay:1.8,
      duration:1,
      stagger:0.06,
      scrollTrigger:{
        trigger:".an18",
        start:"top 95%"
      }
    })
     gsap.from(".an17",{
      opacity:0,
      y:20,
      delay:1.8,
      duration:1,
      stagger:0.06,
      scrollTrigger:{
        trigger:".an17",
        start:"top 95%"
      }
    })
    gsap.from(".an21 div",{
      opacity:0,
      y:20,
      delay:0.5,
      duration:1,
      stagger:0.06,
      scrollTrigger:{
        trigger:".an21",
        start:"top 90%"
      }
    })
     gsap.fromTo(
      ".ann11 span",
      {
        opacity: 0,
        x: 10,
        letterSpacing: "7px",
      },
      {
        opacity: 1,
        x: 0,
        letterSpacing: 1,
        stagger: 0.06,
        scrollTrigger:{
          trigger:".ann11",
          start:"top 95%"
        }
      },
    );
     gsap.fromTo(
      ".ann12 span",
      {
        opacity: 0,
        x: 10,
        letterSpacing: "7px",
      },
      {
        opacity: 1,
        x: 0,
        delay: 0.5,
        letterSpacing: 1,
        stagger: 0.06,
        scrollTrigger:{
          trigger:".ann12",
          start:"top 95%"
        }
      },
    );
    gsap.fromTo(
      ".an13 span",
      {
        opacity: 0,
        x: 10,
        letterSpacing: "7px",
      },
      {
        opacity: 1,
        x: 0,
        delay: 0.5,
        letterSpacing: 1,
        stagger: 0.06,
        scrollTrigger:{
          trigger:".an13",
          start:"top 95%"
        }
      },
    );
    gsap.fromTo(
      ".an20 span",
      {
        opacity: 0,
        x: 10,
        letterSpacing: "7px",
      },
      {
        opacity: 1,
        x: 0,
        delay: 0.5,
        letterSpacing: 1,
        stagger: 0.06,
        scrollTrigger:{
          trigger:".an20",
          start:"top 95%"
        }
      },
    );
    gsap.from(".ann14 div",{
      x:-20,opacity:0,duration:0.6,delay:1.5,stagger:0.2,scrollTrigger:{
        trigger:".ann14",
        start:"top 95%"
      }
    })
    
  },[])
  return (
    <div>

  
  <header className="border-b z-50 fixed top-0 w-screen bg-black/70 border-black">
    <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
      <a href="#home" className="text-xl sm:text-2xl font-extrabold">
        Home<span className="gold">Glow</span>
      </a>

      <div className="hidden md:flex gap-8 text-sm text-gray-300">
        <a href="#services" className="hover:text-yellow-300">Services</a>
        <a href="#work" className="hover:text-yellow-300">Our Work</a>
        <a href="#about" className="hover:text-yellow-300">About Us</a>
        <a href="#contact" className="hover:text-yellow-300">Contact</a>
      </div>

      <a href="#contact"
         className="gold-button rounded-full px-5 py-3 text-sm font-bold">
        Book Now ↗
      </a>
    </nav>
  </header>

  <main>

    <section id="home" className="hero-bg">
      <div className="w-screen h-screen bg-black/60 fixed z-10"></div>
      <div className=" fixed z-0 w-full h-screen overflow-hidden ">
      <Image
  src="/img/bg.png"
  alt="Home decorative lighting"
   fill
    priority
    sizes="100vw"
    className="object-cover  object-center"
    
/></div>
      <div className="max-w-7xl relative z-10 mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">

        <div className="reveal">
          <div className="flex items-center an1 gap-2 text-sm gold mb-6">
            <span className="bulb"></span>
            DELHI · LIGHTING & DECORATION
          </div>

          <h1 className="text-5xl ann11 sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            {"Make Your Home".split("").map((e,i)=>{ return <span key={i} className="an">{e}</span> })}
            {"Glow.".split("").map((e,i)=>{ return <span key={i} className="an gold">{e}</span> })}
           
          </h1>

          <p className="mt-6 an2 text-gray-300 leading-8 max-w-xl">
            Turn your home into something magical with beautiful
            decorative lights. From balconies to gates and shopfronts,
            we help brighten your special moments.
          </p>

          <div className="mt-9 an12 flex flex-wrap gap-4">
            <a href="#contact"
               className="gold-button rounded-full px-7 py-4 font-bold">
              Book Your Decoration ↗
            </a>

            <a href="#work"
               className="rounded-full border border-white/20 px-7 py-4 hover:border-yellow-300 transition">
              Explore Our Work ↓
            </a>
          </div>

          <div className="mt-9 an5 flex flex-wrap gap-5 text-sm text-gray-300">
            <span>✦ Neat Installation</span>
            <span>✦ Flexible Options</span>
            <span>✦ Local Service</span>
          </div>
        </div>

        <div className="reveal relative">
          <div className="absolute inset-0 bg-yellow-300/10 blur-3xl"></div>
          <img
            src="https://i5.walmartimages.com/seo/Twinkle-Star-Christmas-Decoration-String-Lights-Outdoor-317-LED-Light-Tree-Topper-Star-8-Lighting-Mode-Xmas-Lights-Decorative-Yard-Party-Home-Holiday_840c95cd-1460-4e03-8755-28dc61e16f0b.d2a20063e6cd28f458f81c30bfa68dc7.jpeg"
            alt="Beautifully decorated home"
            className="relative w-full an-im h-[420px] sm:h-[520px] object-cover rounded-3xl border border-white/10 glow"
          />

          <div className="absolute bottom-5 an3 left-5 right-5 rounded-2xl p-5 bg-black/60 backdrop-blur">
            <p className="gold text-sm">LIGHT UP YOUR SPECIAL MOMENTS</p>
            <h2 className="text-2xl font-bold mt-2">Your Home, Your Glow ✨</h2>
          </div>
        </div>

      </div>
    </section>

    <div className="bg-black/80 relative z-20">
      <section id="services" className="py-24  px-6">
      <div className="max-w-7xl mx-auto">

        <div className="reveal text-center max-w-2xl  mx-auto">
          <p className="gold uppercase tracking-[4px] an6 text-sm">What We Do</p>

          <h2 className="text-3xl ann12 sm:text-5xl font-extrabold mt-4">
            {"Our".split("").map((e,i)=>{ return <span key={i} className="an">{e}</span> })}
            <span> </span>
            {"Services".split("").map((e,i)=>{ return <span key={i} className="an gold">{e}</span> })}
           
          </h2>

          <p className="text-gray-400 mt-5 an8 leading-7">
            Beautiful lighting for every corner of your home and business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 an9 lg:grid-cols-4 gap-6 mt-14">

          <article className="service-card reveal border border-white/10 bg-white/[0.03] p-6 rounded-3xl">
            <div className="text-4xl gold">⌂</div>
            <h3 className="text-xl font-bold mt-6">Home Decoration</h3>
            <p className="text-gray-400 text-sm leading-7 mt-3">
              Decorative lights for home exteriors, entrances and special occasions.
            </p>
            <a href="#contact" className="inline-block gold mt-5 text-sm font-bold">
              Enquire Now ↗
            </a>
          </article>

          <article className="service-card reveal border border-white/10 bg-white/[0.03] p-6 rounded-3xl">
            <div className="text-4xl gold">✧</div>
            <h3 className="text-xl font-bold mt-6">Balcony & Terrace</h3>
            <p className="text-gray-400 text-sm leading-7 mt-3">
              Give your balcony, railing and terrace a warm festive glow.
            </p>
            <a href="#contact" className="inline-block gold mt-5 text-sm font-bold">
              Enquire Now ↗
            </a>
          </article>

          <article className="service-card reveal border border-white/10 bg-white/[0.03] p-6 rounded-3xl">
            <div className="text-4xl gold">⌑</div>
            <h3 className="text-xl font-bold mt-6">Gate & Entrance</h3>
            <p className="text-gray-400 text-sm leading-7 mt-3">
              Make your main gate and entrance stand out with decorative lights.
            </p>
            <a href="#contact" className="inline-block gold mt-5 text-sm font-bold">
              Enquire Now ↗
            </a>
          </article>

          <article className="service-card reveal border border-white/10 bg-white/[0.03] p-6 rounded-3xl">
            <div className="text-4xl gold">▤</div>
            <h3 className="text-xl font-bold mt-6">Shop & Office</h3>
            <p className="text-gray-400 text-sm leading-7 mt-3">
              Festive lighting for shops, offices and commercial entrances.
            </p>
            <a href="#contact" className="inline-block gold mt-5 text-sm font-bold">
              Enquire Now ↗
            </a>
          </article>

        </div>

        <p className="text-center an10 text-gray-500 text-sm mt-7">
          Use your own lights or ask us about arranging lights for you.
        </p>
      </div>
    </section>

   
<section id="work" className="py-24 px-6   border-y border-white/10">
  <div className="max-w-7xl mx-auto">

    <div className="reveal text-center">
      <p className="gold uppercase tracking-[4px] an11 text-sm">
        Lighting Ideas
      </p>

      <h2 className="text-3xl sm:text-5xl an13 font-extrabold mt-4">
        {"Light Up Your".split("").map((e,i)=>{ return <span key={i} className="an">{e}</span> })}
            
            <span> </span>{"Home.".split("").map((e,i)=>{ return <span key={i} className="an gold">{e}</span> })}
      </h2>

      <p className="text-gray-400 mt-5 an12 max-w-2xl mx-auto">
        Make your home shine this festive season with beautiful decorative
        lighting installed by our team.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

      <div className="gallery reveal overflow-hidden rounded-3xl relative group">
        <img
          className="w-full h-80 an-im12 object-cover transition duration-700 group-hover:scale-110"
          loading="lazy"
          src="https://i.ebayimg.com/images/g/L1MAAOSwDPlc27X3/s-l1200.webp"
          alt="Warm decorative lighting inspiration"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 an15 p-6">
          <h3 className="font-bold text-xl">Home Lighting</h3>
          <p className="text-gray-300 text-sm mt-2">
            Brighten up your home for the festive season.
          </p>
        </div>
      </div>

      <div className="gallery reveal overflow-hidden rounded-3xl relative group">
        <img
          className="w-full h-80 an-im13 object-cover transition duration-700 group-hover:scale-110"
          loading="lazy"
          src="https://tse4.mm.bing.net/th/id/OIP.4Ol5nYo56EgTt0h68HnZeQHaFE?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Decorative warm lights inspiration"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 an15 p-6">
          <h3 className="font-bold text-xl">Balcony Lights</h3>
          <p className="text-gray-300 text-sm mt-2">
            Beautiful lighting for balconies and terraces.
          </p>
        </div>
      </div>

      <div className="gallery reveal overflow-hidden rounded-3xl relative group">
        <img
          className="w-full h-80 an-im14 object-cover transition duration-700 group-hover:scale-110"
          loading="lazy"
          src="https://th.bing.com/th/id/OIP.aor81SIHATcjJXJ9IauC3wHaFj?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Decorative home lighting inspiration"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 an15 p-6">
          <h3 className="font-bold text-xl">Festive Lighting</h3>
          <p className="text-gray-300 text-sm mt-2">
            Add a festive glow to your home exterior.
          </p>
        </div>
      </div>

    </div>

    <div className="text-center mt-10 reveal">
      <p className="text-gray-400 an16 text-sm">
        Decorative lights installation for homes, balconies, gates and shops.
      </p>
    </div>

  </div>
</section>


    <section id="about" className="py-24  px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        <div className="reveal">
          <img
            src="https://i.pinimg.com/originals/c2/98/dd/c298dd37bc31443ed91cd02ae38d42cc.jpg"
            alt="Beautiful home interior"
            loading="lazy"
            className="w-full im-an5 h-[400px] object-cover rounded-3xl"
          />
        </div>

        <div className="reveal">
          <p className="gold uppercase tracking-[4px] an17 text-sm">Why Choose Us</p>

          <h2 className="text-3xl an20 sm:text-5xl font-extrabold mt-4 leading-tight">
            {"Simple Service.".split("").map((e,i)=>{ return <span key={i} className="an">{e}</span> })}
            <span> </span>
            {"Beautiful Results.".split("").map((e,i)=>{ return <span key={i} className="an gold">{e}</span> })}
           
            <span className="gold"></span>
          </h2>

          <p className="text-gray-400 mt-6 an18 leading-8">
            We help you plan lighting that suits your space, occasion
            and budget. Tell us what you have in mind and we'll discuss
            the decoration options with you.
          </p>

          <div className="space-y-5 ann14 mt-8">
            <div className="flex gap-4">
              <span className="gold text-xl">✓</span>
              <div>
                <h3 className="font-bold">Flexible Light Arrangements</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Customer-provided lights or lights arranged by us.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="gold text-xl">✓</span>
              <div>
                <h3 className="font-bold">Options for Different Spaces</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Home, balcony, gate, shop and office lighting.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="gold text-xl">✓</span>
              <div>
                <h3 className="font-bold">Local Service</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Serving delhi.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section id="contact" className="px-6 an21 pb-24">
      <div className=" max-w-6xl mx-auto rounded-3xl border border-yellow-300/20 bg-gradient-to-br from-yellow-300/10 to-transparent p-8 sm:p-14">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <p className="gold uppercase tracking-[4px] text-sm">Let's Get Started</p>

            <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 leading-tight">
              Ready to Make Your Home Shine?
            </h2>

            <p className="text-gray-400 leading-7 mt-5">
              Contact us to discuss your lighting requirements,
              availability and pricing.
            </p>
          </div>

          <div className="rounded-3xl bg-[#07111f] border border-white/10 p-7">
            <h3 className="text-xl font-bold">Home Lights Decoration Service</h3>
            <p className="text-gray-400 text-sm mt-2">delhi, Haryana</p>

            <p className="text-gray-300 text-sm leading-7 mt-5">
              Share a photo of your home or shop and tell us
              what type of decoration you need.
            </p>

            <div id="whatsappButton"
              onClick={()=>{window.open( "https://wa.me/9953524978?text=Hi%2C%20I%20want%20to%20book%20home%20decoration%20lights%20installation.",
    "_blank")}}
              className="gold-button block cursor-pointer text-center rounded-full py-4 px-5 font-bold mt-6">
              Contact Us on WhatsApp ↗
            </div>

            <p className="text-gray-500 text-xs text-center mt-4">
              9953524978 | 8076 098 585
            </p>
          </div>

        </div>
      </div>
    </section>
    </div>

  </main>

  <footer className="border-t  relative z-20 bg-black/80 border-white/10 py-8 px-6 text-center">
    <h3 className="font-extrabold text-xl">
      Home<span className="gold">Glow</span>
    </h3>

    <p className="text-gray-500 text-sm mt-3">
      Home Lights Decoration Service · delhi
    </p>

    <p className="text-gray-600 text-xs mt-4">
      © <span id="year"></span> HomeGlow. All rights reserved.
    </p>
  </footer>

  

</div>
  );
}
