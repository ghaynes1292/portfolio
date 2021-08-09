import {
  useColorMode,
  useColorModeValue,
  IconButtonProps,
  Box,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
  
  type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;
  
  export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = () => {
    const { toggleColorMode } = useColorMode();
    const mode = useColorModeValue("dark", "light");
  
    return (
      <AnimatePresence exitBeforeEnter initial={false}>
        <Box
          cursor="pointer"
          fontSize={["2xl", "3xl", "3xl"]}
          onClick={toggleColorMode}
          key={mode === "dark" ? "dark-icon" : "light-icon"}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {mode === "dark" ? "🌤" : "🌙"}
          </motion.div> 
        </Box>
      </AnimatePresence>
    );
  };
  