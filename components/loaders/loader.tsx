"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Loader() {
  const [showLoader, setShowLoader] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const onLoadingComplete = () => {
      setShowLoader(false);
      // Simulate a delay before redirecting to the home page
      setShowLoader(false);
      router.replace("/home");
    };

    const timeout = setTimeout(() => {
      onLoadingComplete();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-dutchwhite"
        >
          <div className="relative w-full max-w-md px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <Image
                src="/images/logo.svg"
                alt="Earthycrafts Logo"
                width={500}
                height={120}
                className="w-full"
                priority
              />
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: showLoader ? "100%" : "90%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute -bottom-8 left-0 h-0.5 bg-black/30"
              >
                <motion.div
                  className="absolute top-0 left-0 h-full w-full bg-black"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: showLoader ? 1 : 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
