import { extendTheme } from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';

import { env } from '@/config';
import { adjust } from '@/utils/style/color';

const fonts: Partial<(typeof chakraTheme)['fonts']> = {
  body: ` 'pretendard', 'Noto Sans KR', 'Noto Sans', sans-serif`,
};

const adjustPrimary = (adVal: number) => adjust(env.colors.primary, adVal);
const colors = {
  molak: {
    50: adjustPrimary(15),
    100: adjustPrimary(10),
    200: adjustPrimary(5),
    300: adjustPrimary(0),
    400: adjustPrimary(-10),
    500: adjustPrimary(-30),
    600: adjustPrimary(-35),
    700: adjustPrimary(-40),
    800: adjustPrimary(-45),
    900: adjustPrimary(-50),
  },
};

export const theme = extendTheme({ fonts, colors });
