import { motion } from "framer-motion";

export default function MainFooter() {
    return (
      <footer className="bg-black text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Song Joo</p>
      </footer>
    );
  }
  