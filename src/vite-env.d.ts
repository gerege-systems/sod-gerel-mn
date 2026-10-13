/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Формын хүлээн авах хаяг (жишээ нь https://formspree.io/f/xxxx). Хоосон бол имэйл програм нээгдэнэ. */
  readonly VITE_CONTACT_ENDPOINT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
