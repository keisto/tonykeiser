export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const HomeIcon = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" {...props}>
    <g
      fill="none"
      fill-rule="evenodd"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      transform="translate(1 1)"
    >
      <path d="M.5 9.5l9-9 9 9"></path>
      <path d="M2.5 7.5v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"></path>
    </g>
  </svg>
)

export const BlogIcon = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" {...props}>
    <g
      fill="none"
      fill-rule="evenodd"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      transform="translate(1 2)"
    >
      <path d="M16.5 12.5v-10a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z"></path>
      <path d="M4.305 2.935l-2.004.73a2 2 0 0 0-1.195 2.563l3.42 9.397A2 2 0 0 0 7.09 16.82l5.568-2.198"></path>
      <path d="M7.5 5.5h5"></path>
      <path d="M7.5 7.5h6"></path>
      <path d="M7.5 9.5h3"></path>
    </g>
  </svg>
)

export const InboxIcon = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" {...props}>
    <g
      fill="none"
      fill-rule="evenodd"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      transform="translate(2.5 4.5)"
    >
      <path d="M3.66 0h8.68a1 1 0 0 1 .92.606L16 7v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7L2.74.606A1 1 0 0 1 3.66 0z"></path>
      <path d="M0 7h4a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h4"></path>
    </g>
  </svg>
)

export const ExternalLinkIcon = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" {...props}>
    <g
      fill="none"
      fill-rule="evenodd"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      transform="translate(6 6)"
    >
      <path d="M8.5 7.5v-7h-7"></path>
      <path d="M8.5.5l-8 8"></path>
    </g>
  </svg>
)

export const MailIcon = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" {...props}>
    <g
      fill="none"
      fill-rule="evenodd"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      transform="translate(3.5 4.5)"
    >
      <path d="M0 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2z"></path>
      <path d="M2 3l5 3 5-3"></path>
    </g>
  </svg>
)
