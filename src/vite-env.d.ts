/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly USEAPI_TOKEN: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }