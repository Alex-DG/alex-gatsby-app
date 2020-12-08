import Colors from './colors'

export const DARK_THEME = 'dark'

export const LIGHT_THEME = 'light'

export const defaultTheme = LIGHT_THEME

export const lightTheme = {
  background: `${Colors.WHITE}`,
  text: `${Colors.SECONDARY}`,
  icon: `${Colors.COOL_GREY}`,
  icon_hover: `${Colors.PRIMARY}`,
  icon_opacity: 0.7,
}

export const darkTheme = {
  background: `${Colors.DARK_MODE}`,
  text: `${Colors.WHITE}`,
  icon: `${Colors.WHITE}`,
  icon_hover: `${Colors.PRIMARY}`,
  icon_opacity: 1,
}
