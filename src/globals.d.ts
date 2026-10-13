import { IStaticMethods } from 'preline/preline'
import { ReactNode } from 'react'

declare global {
  type ChildrenType = {
    children: ReactNode
  }

  type StaticImageData = string

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
