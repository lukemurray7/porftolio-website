"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";

export const Products = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-10">
        {products.map((product: Product, idx: number) => (
          <motion.div
            key={product.href}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <Link
              href={product.slug ? `/projects/${product.slug}` : product.href}
              className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 p-4"
            >
              <div className="flex-shrink-0">
                <Image
                  src={product.thumbnail}
                  alt="thumbnail"
                  height={200}
                  width={200}
                  className="rounded-md object-cover w-full h-auto md:w-[200px] md:h-[200px]"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <Heading as="h4" className="font-black text-lg">
                    {product.title}
                  </Heading>
                  <Paragraph className="text-sm mt-2 max-w-full md:max-w-xl">
                    {product.description}
                  </Paragraph>
                </div>
                <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                  {product.stack?.map((stack: string) => (
                    <span
                      key={stack}
                      className="text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
