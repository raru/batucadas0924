import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { TailcastLogo } from "../assets/logos/TailcastLogo";
import { TwitterIcon } from "../assets/icons/TwitterIcon";
import BatucadaLogo from "../assets/images/logo-batucada-green.png";

const footerData = [
  {
    title: "Products",
    items: ["Services", "About Us", "News and Stories", "Roadmap"],
  },
  {
    title: "Important Links",
    items: [
      "Organization Team",
      "Our Journeys",
      "Pricing Plans",
      "Roadmap",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Company",
    items: ["About Us", "Jobs", "Press", "Contact Us"],
  },
];

export const Footer = () => {
  return (
    <footer aria-label="Site footer" id="contato">
      <div className="pt-10  lg:pt-20 lg:pb-16 bg-bgDark1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                <img
src={BatucadaLogo.src}
width="100"
decoding="async"
loading="lazy"
alt="Batucadas Comunicação"
className="mx-auto sm:mx-unset"
aria-label="Batucadas Comunicação"
/>
                </div>

              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">

              </p>
              <div className="w-36 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] outlined-button"
                  href="https://www.facebook.com/profile.php?id=100048712459791"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>

                <a
                  className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                  href="https://www.instagram.com/batucada_comunicacao"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-1/3 mb-16 md:mb-0">
              </div>
              <div className="w-full md:w-2/3 lg:w-2/3">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">Contato</h3>
                <ul>

                    <li className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="mailto:batucada@batucadacomunicacao.com"
                        target="_blank"
                        aria-label="batucada@batucadacomunicacao.com"
                      >
                        batucada@batucadacomunicacao.com
                      </a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
