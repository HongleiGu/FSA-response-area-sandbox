// import { Fira_Sans, Fira_Mono, Lato, Roboto } from 'next/font/google'

// export const roboto = Roboto({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   style: ['normal', 'italic'],
//   fallback: [
//     '-apple-system',
//     'BlinkMacSystemFont',
//     'Segoe UI',
//     'Roboto',
//     'Helvetica Neue',
//     'Arial',
//     'sans-serif',
//     'Apple Color Emoji',
//     'Segoe UI Emoji',
//     'Segoe UI Symbol',
//   ],
//   variable: '--font-roboto',
//   preload: false,
// })

// export const firaSans = Fira_Sans({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700'],
//   style: ['normal', 'italic'],
//   fallback: [
//     '-apple-system',
//     'BlinkMacSystemFont',
//     'Segoe UI',
//     'Roboto',
//     'Helvetica Neue',
//     'Arial',
//     'sans-serif',
//     'Apple Color Emoji',
//     'Segoe UI Emoji',
//     'Segoe UI Symbol',
//   ],
//   variable: '--font-fira-sans',
//   preload: false,
// })

// export const firaMono = Fira_Mono({
//   subsets: ['latin'],
//   weight: ['400'],
//   fallback: [
//     '-apple-system',
//     'BlinkMacSystemFont',
//     'Segoe UI',
//     'Roboto',
//     'Helvetica Neue',
//     'Arial',
//     'sans-serif',
//     'Apple Color Emoji',
//     'Segoe UI Emoji',
//     'Segoe UI Symbol',
//   ],
//   variable: '--font-fira-mono',
//   preload: false,
// })

// export const lato = Lato({
//   subsets: ['latin'],
//   weight: ['400'],
//   style: ['normal', 'italic'],
//   fallback: [
//     '-apple-system',
//     'BlinkMacSystemFont',
//     'Segoe UI',
//     'Roboto',
//     'Helvetica Neue',
//     'Arial',
//     'sans-serif',
//     'Apple Color Emoji',
//     'Segoe UI Emoji',
//     'Segoe UI Symbol',
//   ],
//   variable: '--font-lato',
//   preload: false,
// })

// please see the sandbox issue #2 for this

export const firaSans = {
  className: 'font-fira-sans',
  style: { fontFamily: 'Fira Sans, sans-serif' },
}

export const firaMono = {
  className: 'font-fira-mono',
  style: { fontFamily: 'Fira Mono, monospace' },
}

export const lato = {
  className: 'font-lato',
  style: { fontFamily: 'Lato, sans-serif' },
}

export const roboto = {
  className: 'font-roboto',
  style: { fontFamily: 'Roboto, sans-serif' },
}