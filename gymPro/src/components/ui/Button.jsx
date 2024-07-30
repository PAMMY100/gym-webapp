import React from 'react'
import { cva } from 'class-variance-authority'

const ButtonVariants = cva(
  /* button base style */
  "text-btnSize font-semibold transition-colors duration-150 ease-in-out",
  {
      variants: {
          /* button colors */
          intent: {
              primary:
                  "bg-btnColor-base hover:bg-btnColor-hover active:bg-btnColor-active text-btnText",
              secondary:
                  "bg-transparent text-white ring-2 ring-btnColor-base hover:bg-btnColor-btnSechover active:bg-btnColor-btnActive",
              default:
                  "bg-base hover:bg-muted",
          },

          /* button sizes */
          size: {
              small: ["text-sm", "py-1", "px-2"],
              medium: ["text-md", "py-2", "px-4"],
              large: ["sm:w-[9.25rem]", "sm:h-[2rem]", "sm:text-sm","text-btnSize", "w-btnW", "h-btnH"],
              xl: ["text-btnSize", "w-[14.5rem]", "h-btnH", "flex", "items-center", "px-[5px]", "justify-between"],
          },

          /* button roundness */
          roundness: {
              square: "rounded-none",
              round: "rounded-md",
              pill: "rounded-primary",
          },
          classes: {
            "": "",
          }
      },

      // defaults
      defaultVariants: {
          intent: "default",
          size: "medium",
          roundness: "round",
      },
  }
);


export default function Button({ intent, size, roundness, classes, children }) {
  return (
      <button className={ButtonVariants({ intent, size, roundness, classes})}>{children}</button>
  )
}
