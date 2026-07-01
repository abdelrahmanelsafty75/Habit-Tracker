import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "Primary" | "Secondary" | "Destructive"


type ButtonProps = {
    variant?: Variant;
} & ComponentProps<"button"> //has all properties include(disabled , children)

function Button({variant = "Primary", className, ...props}: ButtonProps) {
  return ( // twMerge it allow override styles over the predefined
    <button {...props}
     className={twMerge(`${variantStyle(variant)},
     rounded transition-colors px-2 py-1 mt-2 disabled:opacity-30 disabled:cursor-not-allowed hover:cursor-pointer`,
     className,
     )}>
        {props.children}
    </button>
  )
}

export default Button
// <Button>Next</Button>

function variantStyle(variant: Variant){
      switch(variant){
        case "Primary":
          return "bg-violet-600 hover:bg-violet-500"
        case "Secondary":
          return "bg-zinc-700 hover:bg-zinc-600 hover text-zinc-400"
        case "Destructive":
          return "text-red-200 text-red-700 hover:bg-red-700 hover:text-white "

        default:
          throw new Error(`Invalid Variant! : ${variant satisfies never}`)  

      }
}


/************************************************************************* */


// type ButtonProps = {
//     name: string;
// }

// function Button(props: ButtonProps) {
//   return (
//     <button className="bg-violet-600 hover:bg-violet-500 rounded transition-colors
//     px-2 py-1 mt-2 disabled:opacity-30 disabled:cursor-not-allowed hover:cursor-pointer">
//         {props.name}
//     </button>
//   )
// }

// export default Button

// // <Button name="Next"></Button>



/****************************************************** */

// type ButtonProps = {
//     name: string;
// }

// function Button({name}: ButtonProps) {
//   return (
//     <button className="bg-violet-600 hover:bg-violet-500 rounded transition-colors
//     px-2 py-1 mt-2 disabled:opacity-30 disabled:cursor-not-allowed hover:cursor-pointer">
//         {name}
//     </button>
//   )
// }

// export default Button

// // <Button name="Next"></Button>