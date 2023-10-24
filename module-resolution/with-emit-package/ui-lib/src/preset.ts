import { definePreset, defineRecipe } from '@pandacss/dev'

const buttonRecipe = defineRecipe({
  className: 'button',
  description: 'The styles for the Button component',
  base: {
    display: 'flex',
  },
  variants: {
    visual: {
      funky: { bg: 'red.200', color: 'white' },
      edgy: { border: '1px solid {colors.red.500}' },
    },
    size: {
      sm: { padding: '4', fontSize: '12px' },
      lg: { padding: '8', fontSize: '40px' },
    },
    shape: {
      square: { borderRadius: '0' },
      circle: { borderRadius: 'full' },
    },
  },
  defaultVariants: {
    visual: 'funky',
    size: 'sm',
    shape: 'circle',
  },
})

export const preset = definePreset({
  theme: {
    recipes: {
      button: buttonRecipe,
    },
  },
})

export default preset
