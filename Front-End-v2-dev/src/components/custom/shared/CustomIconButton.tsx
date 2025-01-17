import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactElement } from "react";

interface IProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactElement | string;
  isLoading?: boolean;
}

const CustomIconButton = ({ className, children, isLoading = false, ...props }: IProp) => {
  return (
    <button
      className={cn(
        `p-2 rounded-full text-su_secondary hover:bg-su_active_bg hover:text-su_primary disabled:text-su_disabled disabled:pointer-events-none disabled:cursor-not-allowed cursor-pointer`,
        isLoading && "cursor-not-allowed pointer-events-none",
        className,
      )}
      {...props}
    >

      {isLoading ?
        <svg className="animate-spin duration-700 w-3.5" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0C3.58236 0 0 3.58236 0 8C0 12.4176 3.58236 16 8 16V14.0004C6.81346 14.0002 5.65362 13.6483 4.66712 12.989C3.68061 12.3296 2.91176 11.3926 2.45777 10.2964C2.00377 9.20014 1.88503 7.99389 2.11655 6.83016C2.34807 5.66643 2.91946 4.59748 3.75847 3.75847C4.59748 2.91946 5.66643 2.34807 6.83016 2.11655C7.99389 1.88503 9.20014 2.00377 10.2964 2.45777C11.3926 2.91176 12.3296 3.68061 12.989 4.66712C13.6483 5.65362 14.0002 6.81346 14.0004 8H16C16 3.58236 12.4176 0 8 0Z" fill="currentColor" />
        </svg>
        :
        <>{children}</>
      }


    </button>
  );
};

export default CustomIconButton;