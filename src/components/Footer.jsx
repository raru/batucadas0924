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
      <div className="pt-10 bg-bgDark1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">

            <div className="w-full flex-wrap justify-between text-left">

                
                <ul>

                    <li className="mb-4 text-center">
                      <a
                        className="text-gray-400 hover:text-gray-300 pl-4"
                        href="mailto:batucada@batucadacomunicacao.com"
                        target="_blank"
                        aria-label="batucada@batucadacomunicacao.com"
                      >
                        <span className="text-xl text-secondaryColor mr-4"><strong>Contato:</strong></span>
                        <br/>
                        batucada@batucadacomunicacao.com
                      </a>
                    </li>
                </ul>

                <div className="w-full items-center text-center  pl-4 my-10">


                <a
                  className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                  href="https://www.instagram.com/batucada_comunicacao"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>

                <a
                  className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] outlined-button"
                  href="https://www.facebook.com/profile.php?id=100048712459791"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>                

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
