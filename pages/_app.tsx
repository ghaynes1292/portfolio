import App, { AppProps } from "next/app";
import { ChakraProvider, Box } from "@chakra-ui/react";
import TopNav from "components/top-nav";
import Footer from "components/footer";
import { theme } from "styles/theme";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <TopNav />
      <Box
        textAlign="center"
        fontSize="xl"
        w={["90%", "85%", "80%"]}
        maxW={800}
        mx="auto"
      >
        <Box pt={'7rem'} pb={10}>
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Box key={router.route}>
              <Component {...pageProps} />
            </Box>
          </AnimatePresence>
        </Box>
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
