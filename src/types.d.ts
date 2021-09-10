import React, { ReactNode} from "react";

export interface ChildrenProps {
  children?: ReactNode;
}

export interface InputTypes {
  target: { value: React.SetStateAction<string>; };
}

declare module "*.png" {
  const value: string;
  export default value;
}

import 'styled-components';

declare module 'styled-components' {
    export default interface DefaultTheme {
  
      colors: {
        moonGrey: string;
        fern: string;
        viola: string;
        violaOpacity: string;
      },
      mediaQuery: {
        mobileWidth: string,
        tabletWidth: string,
        smallDesktopWidth: string,
        desktopWidth: string,
      },
    }
  }
  