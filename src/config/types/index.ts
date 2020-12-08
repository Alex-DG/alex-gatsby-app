export type GlobalStyleProps = {
  theme: {
    background: string
    text: string
    icon: string
    icon_hover: string
    icon_opacity: number
  }
}

export type LoaderProps = {
  onClose: () => void
}
