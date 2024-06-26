"use client";
import { motion } from "framer-motion";
import { PenBox, Share, Swords, Trash } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

type CardProps = {
    imageUrl: string;
    title: string;
    description: string;
  };
  
  const Card = (cardDetails: CardProps) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
  
    const handleClickOutside = () => {
      setOpen(false);
    };
  
    useOnClickOutside(ref, handleClickOutside);
  
    return (
      <div className="relative p-4 flex flex-col w-full max-w-sm bg-white border rounded-[28px] border-primary">
        <div className="w-full h-[250px] rounded-[12px] overflow-hidden">
          <Image
            src={cardDetails.imageUrl}
            alt="raycast bg"
            className="size-full object-cover hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            width={400}
            quality={100}
            unoptimized
            height={250}
          />
        </div>
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-lg font-medium text-primary/90">
              {cardDetails.title}
            </h3>
            <motion.p
            className="text-xs px-3 py-1.5 bg-gold/40 rounded-[8px] font-medium text-primary/90 relative overflow-hidden"
            transition={{
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 2,
              ease: 'linear'
            }}
          >
            <span className="relative z-10">Premium</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
              style={{ mixBlendMode: 'overlay' }}
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 2,
                ease: 'linear'
              }}
            />
          </motion.p>
          </div>
          <p className="text-sm text-primary/40">{cardDetails.description}</p>
        </div>
        <div className="flex justify-between w-full">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex cursor-pointer buttonShadow gap-2 px-3 py-2 border border-primary rounded-[12px] w-fit"
          >
            <Swords size={24} />
            <p className="font-medium select-none">Start Challenge</p>
          </motion.div>
          <div className="relative z-[999]">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setOpen(!open)}
              className="flex flex-col gap-1 buttonShadow border justify-center cursor-pointer items-center border-primary rounded-[12px] px-5 aspect-square"
            >
              <div className="size-0.5 rounded-full bg-primary"></div>
              <div className="size-0.5 rounded-full bg-primary"></div>
              <div className="size-0.5 rounded-full bg-primary"></div>
            </motion.div>
            {open && (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="absolute z-[999] top-[calc(100%+2px)] origin-top-left flex flex-col p-2 w-fit gap-2 bg-white border border-primary rounded-[12px]"
              >
                <p className="whitespace-nowrap select-none text-sm flex items-center px-3 py-2 hover:bg-secondary/40 rounded-[8px] cursor-pointer">
                  <PenBox size={16} className="mr-2" />
                  Edit Challenge
                </p>
                <p className="whitespace-nowrap select-none text-sm flex items-center px-3 py-2 hover:bg-secondary/40 rounded-[8px] cursor-pointer">
                  <Share size={16} className="mr-2" />
                  Share Challenge
                </p>
                <p className="whitespace-nowrap select-none text-sm flex items-center text-destructive/90 px-3 py-2 hover:bg-secondary/40 rounded-[8px] cursor-pointer">
                  <Trash size={16} className="mr-2" />
                  Edit Challenge
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    );
  };

export default Card;
