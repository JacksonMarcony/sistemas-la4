import "react";

declare module "react" {
  export interface IframeHTMLAttributes<T> {
    controls?: 0 | 1;
    fs?: 0 | 1;
    hl?: string;
  }
}
