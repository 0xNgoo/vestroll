"use client";
import { AuthLayoutProps } from "@/types/interface";
import Link from "next/link";
import Image from "next/image";
import Globe from "@/../public/images/globe.png";
import mobilelogo from "@/../public/logo/mologo.png";
import logo from "@/../public/images/Logo.png";
import cad from "@/../public/images/cad.png";
import usd from "@/../public/images/usd.png";
import eur from "@/../public/images/eur.png";
import gbp from "@/../public/images/gbp.png";
import ngn from "@/../public/images/ngn.png";
import { motion } from "framer-motion";
function AuthLayer({ children }: AuthLayoutProps) {
  return (
    <div className="relative flex min-h-screen p-5 md:max-w-screen ">
      <motion.div
        initial={{
          x: 50,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute z-50 hidden gap-2 px-5 py-3 bg-white md:flex top-2 lg:top-12 lg:left-12 rounded-xl h-fit"
      >
        <Image
          src={logo.src}
          width={logo.width}
          height={logo.height}
          priority
          alt="vestroll logo"
          className="w-auto h-6"
        />
      </motion.div>

      {/* Left Side */}
      <div className="hidden relative justify-center lg:flex z-20 w-[640px] min-w-[640px] rounded-2xl bg-primary-500">
        <div className="relative mt-25">
          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative perspective-distant "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -left-7 top-22 "
            >
              <Image
                alt="illustration of canada dollar"
                className="w-auto h-10"
                src={cad.src}
                width={cad.width}
                height={cad.height}
              />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="absolute left-6 top-40 "
            >
              <Image
                alt="illustration of canada dollar"
                className="w-auto h-10"
                src={usd.src}
                width={usd.width}
                height={usd.height}
              />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="absolute right-15 top-18 "
            >
              <Image
                alt="illustration of canada dollar"
                className="w-auto h-10"
                src={eur.src}
                width={eur.width}
                height={eur.height}
              />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -right-7 top-34 "
            >
              <Image
                alt="illustration of canada dollar"
                className="w-auto h-10"
                src={gbp.src}
                width={gbp.width}
                height={gbp.height}
              />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="absolute right-11 top-59 "
            >
              <Image
                alt="illustration of canada dollar"
                className="w-auto h-10"
                src={ngn.src}
                width={ngn.width}
                height={ngn.height}
              />
            </motion.div>
            <Image
              className="max-w-[394]  h-auto"
              src={Globe.src}
              width={Globe.width}
              height={Globe.height}
              priority
              alt="globe showing our connetivities"
              blurDataURL={Globe.blurDataURL}
            />
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 px-8 pb-19 ">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 font-bold leading-[100%] tracking-[0%]  text-4xl xl:text-[3.5rem]"
          >
            Seamless payments, anywhere.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base font-medium leading-[120%]"
          >
            VestRoll lets you manage payroll and invoicing in crypto and
            fiat—quickly and securely.
          </motion.p>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative flex flex-col flex-1">
        <div className="absolute z-50 bg-white md:hidden top rounded-xl h-fit">
          <Image
            src={mobilelogo}
            height={mobilelogo.height}
            width={mobilelogo.width}
            priority
            alt="vestroll logo"
            className="w-auto h-10"
          />
        </div>
        {/* MAIN CONTENT */}
        <motion.div
          initial={{
            y: 30,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center flex-1 mt-20 md:mt-0"
        >
          {children}
        </motion.div>

        {/* FOOTER */}
        <div className="justify-between hidden pl-6 md:flex">
          <motion.p
            initial={{
              x: -30,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[#7F8C9F] font-medium tracking-[0%] leading-[120%]"
          >
            &copy; 2025, all rights reserved
          </motion.p>
          <motion.div
            initial={{
              x: 10,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-2 text-text-header"
          >
            <div>
              <Link
                href=""
                className="font-medium leading-[120%] tracking-[0%] hover:text-primary-500/90 transition ease-in-out duration-300"
              >
                Privacy Policy
              </Link>
            </div>
            <span className="size-0.5 rounded-full bg-text-header inline-block" />
            <Link
              href=""
              className="font-medium leading-[120%] tracking-[0%] hover:text-primary-500/90 transition ease-in-out duration-300"
            >
              Terms and condition
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default AuthLayer;
