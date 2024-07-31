"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
export function SliderCard() {
  const images = [
      "https://img.freepik.com/photos-gratuite/elegant-elegant-allee-mariage-blanc-chaises-escaliers_8353-77.jpg?t=st=1722102966~exp=1722106566~hmac=9f8401c35c2e1917b1e2bbfd90476729e32d9b167f52eac32ae010794911cf31&w=900",
          "https://img.freepik.com/photos-gratuite/gateau-anniversaire-accessoires-fete-confettis-fond-bleu_23-2147942657.jpg?t=st=1722103117~exp=1722106717~hmac=52d1e000986447f3a831a9c47eee4a281ee00bf92edf21dfc11245e05a98ca5d&w=900",
          "https://img.freepik.com/photos-gratuite/decoration-fleur-artificielle-filtre-image-traitee-vintag_1232-3005.jpg?t=st=1722103221~exp=1722106821~hmac=46b7a5d815f2135220a27abed676583168f5f935dee66e9b0fc24f1435785b8f&w=900",
        ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold font-Playwrite text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
         Eve EVENT
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}

