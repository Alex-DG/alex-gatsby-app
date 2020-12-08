export type LayoutProps = {
  children: React.ReactNode
}

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

export type WindowSize = {
  width?: number
  height?: number
}
