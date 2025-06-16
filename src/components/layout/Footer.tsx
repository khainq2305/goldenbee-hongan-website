import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import MailIcon from "../../../public/images/mail.svg";
import Phone from "../../../public/images/phone-call.svg";
import Twitter from "../../../public/images/twitter.svg";
import MapPin from "../../../public/images/map-pin.svg";
import Facebook from "../../../public/images/facebook.svg";
import Linkedin from "../../../public/images/in.svg";
import Instagram from "../../../public/images/instagram.svg";
import Logo from "../../../public/images/Logo.svg";

import { Button } from "@/components/ui/button";

const socialIcons = [
  { src: Facebook, alt: "Facebook" },
  { src: Twitter, alt: "Twitter" },
  { src: Linkedin, alt: "LinkedIn" },
  { src: Instagram, alt: "Instagram" },
  { src: MailIcon, alt: "Email" },
];
const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center bg-white px-4">
      <div className="container-wrapper w-full pt-42 relative">
        <div className="absolute top-0 left-0 right-0 -translate-y-1/2">
          <div className="w-ful bg-black rounded-2xl text-white pt-6 pb-15 px-4 md:pt-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-10 lg:px-8 lg:pl-6">

              <div className="space-y-3">
                <h2 className="text-xl md:text-2xl font-semibold leading-tight">
                  Đăng ký để nhận được thông báo về sản phẩm mới từ Hồng Ân
                </h2>
                <p className="text-gray-300 text-sm md:text-base">
                  Giảm giá 20% cho đơn hàng đầu tiên của bạn chỉ bằng cách đăng
                  ký nhận bản tin của chúng tôi
                </p>
              </div>

              <div className="w-full flex justify-start">
                <div className="relative flex items-center border-1 border-white rounded-full w-full lg:max-w-[480px] bg-black px-1 ">
                  <Mail className="absolute left-4 w-5 h-5 text-white z-10" />
                  <form action="">
                    <input
                    type="email"
                    placeholder="Nhập email của bạn"
                    className="bg-transparent border-none text-white placeholder:text-gray-400 pl-12 pr-28 py-3 rounded-full focus:outline-none w-full"
                  />
                  <button className="absolute right-1 bg-white hover:bg-gray-100 text-black font-semibold rounded-full text-sm px-4 py-2 h-auto top-0 bottom-0 my-1">
                    Subscribe
                  </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-12">
          <div className="space-y-4 md:col-span-2 md:mx-auto md:w-1/3 lg:w-auto justify-center ld:mx-0npmm lg:col-span-1">
            <div className="flex justify-center md:justify-start">
              <Image src={Logo} alt="Hồng Ân Logo" width={120} height={40} />
            </div>
            <p className="text-gray-500 text-sm">
              Serving both practical a navigational purposes, a typical website
              footer includes elements such as copyright notices, privacy
              policies, terms of service, and contact details.
            </p>
            <div className="flex gap-1 justify-center md:justify-start pt-2 mb-4 md:mb-0">
              {socialIcons.map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Image src={icon.src} alt={icon.alt} width={24} height={24} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-2 gap-x-12 justify-between grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8">
            <FooterColumn
              title="Sản phẩm"
              items={[
                "Sách mới",
                "Đồ chơi trẻ em",
                "Văn phòng phẩm",
                "Quà tặng",
                "Phụ kiện",
              ]}
            />
            <FooterColumn
              title="Danh mục"
              items={[
                "Giáo dục",
                "Giải trí",
                "Công nghệ",
                "Thể thao",
                "Nghệ thuật",
              ]}
            />
            <FooterColumn
              title="Dịch vụ"
              items={[
                "Giao hàng nhanh",
                "Đổi trả",
                "Bảo hành",
                "Hỗ trợ 24/7",
                "Tư vấn",
              ]}
            />

            <div className="md:col-span-3 lg:col-span-1 space-y-4 font-semibold">
              <h3 className="text-md font-semibold text-gray-900">
                Liên hệ chúng tôi
              </h3>
              <div className="space-y-3 lg:text-start">
                <ContactItem
                  icon={<Image src={Phone} alt="Phone" className="w-4 h-4" />}
                  text="123-456-789"
                  href="tel:123456789"
                />
                <ContactItem
                  icon={<Image src={MailIcon} alt="Phone" className="w-4 h-4" />}
                  text="honganh@gmail.com"
                  href="mailto:honganh@gmail.com"
                />
                <div className="block md:hidden">
                  <ContactItem
                    icon={<Image src={MapPin} alt="Phone" className="w-4 h-4" />}
                    text="Đường 30/4, Phường Xuân Khánh, Quận Ninh Kiều, Cần Thơ"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-400 mt-12 pt-6">
          <p className="text-center text-sm font-semibold">
            © {new Date().getFullYear()} Copyright Golden Bee IT Solution
          </p>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  items: string[];
};

const FooterColumn = ({ title, items }: FooterColumnProps) => (
  <div className="space-y-4 md:text-center lg:text-start">
    <h3 className="text-md font-semibold text-gray-900">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx}>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

type ContactItemProps = {
  icon: React.ReactNode;
  text: string;
  href?: string;
};

const ContactItem = ({ icon, text, href }: ContactItemProps) => (
  <div className="flex items-start gap-2">
    <div className="rounded-lg shrink-0">{icon}</div>
    {href ? (
      <a
        href={href}
        className="text-gray-700 text-sm transition-colors hover:text-gray-900"
      >
        {text}
      </a>
    ) : (
      <span className="text-gray-700 text-sm">{text}</span>
    )}
  </div>
);

export default Footer;
