import { motion } from "framer-motion";

// Variasi animasi
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// Menghitung delay secara mundur (Reverse Index)
// Agar efeknya seperti tirai yang menutup/membuka bergelombang
const reverseIndex = (index) => {
  const totalSteps = 12; // KITA TAMBAH JUMLAHNYA BIAR LEBIH HALUS
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* render 12 div (batang) alih-alih 6.
        Semakin banyak div, semakin halus efek "scan"-nya.
      */}
      {[...Array(12)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.3, // Durasi lebih cepat per batang
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.05, // Delay antar batang lebih rapat
            }}
            className="h-full w-full bg-white relative" 
            // Opsional: ganti bg-white dengan bg-accent jika ingin tirai berwarna
          />
        );
      })}
    </>
  );
};

export default Stairs;