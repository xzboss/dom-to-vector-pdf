declare module 'dompdf.js' {
  interface DompdfOptions {
    useCORS?: boolean
    backgroundColor?: string | null
    foreignObjectRendering?: boolean
    divisionDisable?: boolean
    removeContainer?: boolean
    [key: string]: any
  }
  const dompdf: (element: HTMLElement, options?: Partial<DompdfOptions>) => Promise<any>
  export default dompdf
}
