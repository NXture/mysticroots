import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"

export const flexWrapper = style({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  alignItems: "flex-start"
})

export const productWrapper = style({
  maxWidth: "350px",
})
