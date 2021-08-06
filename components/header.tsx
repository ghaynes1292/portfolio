import { Box, BoxProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

interface Props extends BoxProps {
  underlineColor?: string;
  emoji?: string;
}

const Header = ({ children, underlineColor, ...props }: PropsWithChildren<Props>) => (
  <Box as="h1" mt={10} mb={6} fontSize="3xl" lineHeight="shorter" fontWeight="bold" {...props} textAlign="left">
    <Box as="span" display="inline-block" position="relative">
      {children}
      <Box as="span" display="block" position="absolute" bg={'gray.200'} w={'100%'} h={props.h || '1px'} bottom={-2} />
    </Box>
  </Box>
);
export default Header;
