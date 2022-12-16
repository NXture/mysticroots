import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const contactFormWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
})

export const buttonWrapper = style({
  border: "none",
  display: "inline-flex",
  textDecoration: "none",
  fontWeight: theme.fontWeights.bold,
  fontSize: theme.fontSizes[2],
  lineHeight: theme.lineHeights.solid,
  paddingTop: theme.space[3],
  paddingBottom: theme.space[3],
  paddingLeft: theme.space[3],
  paddingRight: theme.space[3],
  borderRadius: theme.radii.button,
  color: theme.colors.primary,
  backgroundColor: theme.colors.background,
  ":hover": {
    color: theme.colors.background,
    backgroundColor: theme.colors.active,
  },
  ":focus": {
    color: theme.colors.background,
    backgroundColor: theme.colors.active,
  },
})

export const inputWrapper = style({
  border: "none",
  display: "inline-flex",
  textDecoration: "none",
  fontWeight: theme.fontWeights.bold,
  fontSize: theme.fontSizes[2],
  lineHeight: theme.lineHeights.solid,
  paddingTop: theme.space[3],
  paddingBottom: theme.space[3],
  paddingLeft: theme.space[3],
  paddingRight: theme.space[3],
  borderRadius: theme.radii.button,
  color: theme.colors.background,
  backgroundColor: theme.colors.active,
})

export const wrapper = style({
  display: "flex",
  justifyContent: "center",
  paddingBottom: "5%",
})
