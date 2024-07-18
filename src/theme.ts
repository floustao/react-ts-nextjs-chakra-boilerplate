import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      a: {
        color: "inherit",
        textDecoration: "underline",
      },
    },
  },
  components: {},
});
