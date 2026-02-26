import type { Theme, Components } from '@mui/material/styles'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import SvgIcon from '@mui/material/SvgIcon'

// ----------------------------------------------------------------------

declare module '@mui/material/InputBase' {
  interface InputBasePropsSizeOverrides {
    xs: true
  }
}

// ----------------------------------------------------------------------

/**
 * Icons
 * https://icon-sets.iconify.design/eva/arrow-ios-downward-fill/
 */
const ArrowDownIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fill="currentColor"
      d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16"
    />
  </SvgIcon>
)

// ----------------------------------------------------------------------

const MuiSelect: Components<Theme>['MuiSelect'] = {
  /** **************************************
   * DEFAULT PROPS
   *************************************** */
  defaultProps: {
    IconComponent: ArrowDownIcon,
  },

  /** **************************************
   * STYLE
   *************************************** */
  styleOverrides: {
    icon: {
      right: 10,
      width: 18,
      height: 18,
      top: 'calc(50% - 9px)',
    },
  },

  /** **************************************
   * VARIANTS
   *************************************** */
  variants: [
    {
      props: { size: 'xs' },
      style: ({ theme }) => ({
        fontSize: theme.typography.pxToRem(12),
        '& .MuiSelect-select': {
          paddingTop: theme.spacing(0.5),
          paddingBottom: theme.spacing(0.5),
          paddingLeft: theme.spacing(1),
          paddingRight: theme.spacing(3),
          display: 'flex',
          alignItems: 'center',
        },
        '& .MuiSelect-icon': {
          right: 4,
          width: 14,
          height: 14,
          top: 'calc(50% - 7px)',
        },
      }),
    },
  ],
}

// ----------------------------------------------------------------------

const MuiNativeSelect: Components<Theme>['MuiNativeSelect'] = {
  /** **************************************
   * DEFAULT PROPS
   *************************************** */
  defaultProps: { IconComponent: ArrowDownIcon },

  /** **************************************
   * STYLE
   *************************************** */
  styleOverrides: {
    icon: {
      right: 10,
      width: 18,
      height: 18,
      top: 'calc(50% - 9px)',
    },
  },
}

// ----------------------------------------------------------------------

export const select = { MuiSelect, MuiNativeSelect }
