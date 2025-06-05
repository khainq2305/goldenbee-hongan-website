import React from "react";
import Image from "next/image";
import facebook from "../../../../public/assets/images/facebook.svg";
import google from "../../../../public/assets/images/google.svg";
import instagram from "../../../../public/assets/images/instagram.svg";
import twitter from "../../../../public/assets/images/twitter.svg";
import ins from "../../../../public/assets/images/in.svg";
import phone from "../../../../public/assets/images/phone-call.svg";
import mail from "../../../../public/assets/images/mail.svg";
import Logo from "../../../../public/assets/images/Logo.svg";
import Mappin from "../../../../public/assets/images/map-pin.svg";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
const Footer = () => {
  return (
    <footer className="w-full h-auto flex justify-center items-center bg-white px-4 ">
      <div className="container-wrapper px-4 md:px-0">
        <div className="relative">
          <div className="absolute -top-70 md:-top-60 bg-black rounded-2xl text-white p-6 lg:p-10 lg:pl-0 md:mx-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-8 items-center lg:mx-8 lg:pr-7">
              <div className="lg:col-span-2 space-y-3 lg:ml-4 lg:pr-8 lg:mr-8">
                <h2 className="text-xl md:text-2xl font-semibold leading-tight">
                  Đăng ký để nhận được thông báo về sản phẩm mới từ Hồng Ân
                </h2>
                <p className="text-gray-300 text-sm md:text-base">
                  Giảm giá 20% cho đơn hàng đầu tiên của bạn chỉ bằng cách đăng
                  ký nhận bản tin của chúng tôi
                </p>
              </div>
              <div className="w-full md:pb-6 lg:pb-0">
                <div className="relative flex items-center border-2 border-gray-400 py-1 rounded-full bg-black">
                  <Mail className="absolute left-4 w-5 h-5 text-white z-10" />
                  <Input
                    type={"email"}
                    placeholder="Nhập email của bạn"
                    className="bg-transparent border-0 text-white placeholder:text-gray-400 pl-12 pr-24 py-3 rounded-full focus-visible:ring-0"
                  />
                  <Button className="absolute right-1 bg-gray-200 hover:bg-gray-300 text-black font-medium rounded-full text-sm px-4 py-2 h-auto">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-12">
            <div className="space-y-4 md:col-span-2 lg:col-span-1 md:mx-auto md:w-1/3 lg:w-full mt-0 md:mt-5 lg:mt-0">
              <div className="flex justify-center md:justify-start">
                <Image src={Logo} alt={""} />
              </div>
              <p className="text-gray-500 text-sm">
                Serving both practical a navigational purposes, a typical
                website footer includes elements such as copyright notices,
                privacy policies, terms of service, and contact details.
              </p>

              <div className="flex gap-1 justify-center md:justify-start pt-2 mb-4 md:mb-0 ">
                <a href="#" className="p-2  ">
                  <Image src={facebook} alt="Facebook" width={20} height={20} />
                </a>
                <a href="#" className="p-2 ">
                  <Image src={twitter} alt="Twitter" width={20} height={20} />
                </a>
                <a href="#" className="p-2  ">
                  <Image src={ins} alt="LinkedIn" width={20} height={20} />
                </a>
                <a href="#" className="p-2  ">
                  <Image
                    src={instagram}
                    alt="Instagram"
                    width={20}
                    height={20}
                  />
                </a>
                <a href="#" className="p-2  ">
                  <Image src={google} alt="Google" width={20} height={20} />
                </a>
              </div>
            </div>

            <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8">
              <div className="space-y-4 md:text-center lg:text-start">
                <h3 className="text-md font-semibold text-gray-900">
                  Sản phẩm
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                    >
                      Sách mới
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                    >
                      Đồ chơi trẻ em
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                    >
                      Văn phòng phẩm
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                    >
                      Quà tặng
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                    >
                      Phụ kiện
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 ">
                <h3 className="text-md font-semibold text-gray-900">
                  Sản phẩm
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                    >
                      Sách mới
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                    >
                      Đồ chơi trẻ em
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                    >
                      Văn phòng phẩm
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                    >
                      Quà tặng
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                    >
                      Phụ kiện
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 md:text-center lg:text-start">
                <h3 className="text-md font-semibold text-gray-900">Dịch vụ</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                    >
                      Giao hàng nhanh
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                    >
                      Đổi trả
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                    >
                      Bảo hành
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                    >
                      Hỗ trợ 24/7
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                    >
                      Tư vấn
                    </a>
                  </li>
                </ul>
              </div>
              <div className="md:col-span-3 lg:col-span-1 space-y-4 font-semibold">
                <h3 className="text-md font-semibold text-gray-900">
                  Liên hệ chúng tôi
                </h3>
                <div className="space-y-1 md:grid md:grid-cols-4 lg:block lg:text-start">
                  <div className="md:col-span-2 md:flex justify-between mr-4 lg:flex-col">
                    <div className="flex items-center gap-1 md:col-span-1">
                      <div className="p-2 rounded-lg shrink-0">
                        <Image
                          src={phone}
                          width={24}
                          height={24}
                          alt="Phone"
                          className="w-4 h-4 md:w-6 md:h-6 block"
                        />
                      </div>
                      <a
                        href="tel:123456789"
                        className="text-back text-sm transition-colors"
                      >
                        123-456-789
                      </a>
                    </div>
                    <div className="flex items-center gap-2 md:col-span-2 ">
                      <div className="p-2 rounded-lg shrink-0">
                        <Image
                          src={mail}
                          alt="Email"
                          className="w-4 h-4 md:w-6 md:h-6 block"
                        />
                      </div>
                      <a
                        href="mailto:honganh@gmail.com"
                        className="text-black text-sm transition-colors"
                      >
                        honganh@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-1 md:col-span-2 lg:hidden">
                    <div className="p-2 rounded-lg shrink-0">
                      <Image
                        src={Mappin}
                        width={24}
                        height={24}
                        alt="Email"
                        className="w-4 h-4 md:w-6 md:h-6 block"
                      />
                    </div>
                    <a
                      href="mailto:honganh@gmail.com"
                      className="text-black text-sm transition-colors"
                    >
                      Đường 30/4,Phường Xuân Khánh, Quận Ninh Kiều, Cần Thơ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-400 mt-12 pt-6">
            <p className="text-center text-sm font-semibold">
              © {new Date().getFullYear()} Copyright Golden Bee IT Solution
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
