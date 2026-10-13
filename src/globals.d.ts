import { IStaticMethods } from 'preline/preline'

declare global {
  type ImageSrc = string

  interface Window {
    HSStaticMethods: IStaticMethods
    HSOverlay?: {
      close: (selector: string) => void
      open: (selector: string) => void
      getInstance: (
        selector: string,
        open?: boolean,
      ) => {
        element: {
          close: () => void
          open: () => void
        }
      }
    }
  }
}
