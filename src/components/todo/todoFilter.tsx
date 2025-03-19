// "use client";

// import React, { Children, useCallback } from "react";
// import { Button } from "../ui/button";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { log } from "console";

// const FilterButton = ({ filter, children, type }) => {
//   console.log({ filter });

//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const createQueryString = useCallback(
//     (name: string, value: string) => {
//       const params = new URLSearchParams(searchParams.toString());
//       params.set(name, value);

//       return params.toString();
//     },
//     [searchParams]
//   );

//   return (
//     <Button
//       variant={filter === type ? "default" : "secondary"}
//       className={`flex-1 rounded-none border-x border-[#1E1211] ${
//         !filter ? "bg-[#1E1211] text-[#B2A39D]" : "bg-[#7c716c] text-[#1E1211]"
//       }`}
//       onClick={() => {
//         if (type) {
//           router.push(pathname + "?" + createQueryString("filter", type));
//         } else {
//           {
//             router.push(pathname);
//           }
//         }
//       }}
//     >
//       {children}
//     </Button>
//   );
// };

// const TodoFilter = ({ filter }) => {
//   return (
//     <footer className="w-full flex">
//       <FilterButton filter={filter}>All</FilterButton>
//       <FilterButton filter={filter} type="pending">
//         Pending
//       </FilterButton>
//       <FilterButton filter={filter} type="completed">
//         Completed
//       </FilterButton>
//     </footer>
//   );
// };

// export default TodoFilter;

"use client";

import React, { useCallback } from "react";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const TodoFilter = ({ filter }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <footer className="w-full flex">
      <Button
        variant={!filter ? "default" : "secondary"}
        // className="flex-1 rounded-none"
        className={`flex-1 rounded-none border-x border-[#1E1211] ${
          !filter
            ? "bg-[#1E1211] text-[#B2A39D]"
            : "bg-[#7c716c] text-[#1E1211]"
        }`}
        onClick={() => {
          router.push(pathname);
        }}
      >
        All
      </Button>
      <Button
        variant={filter === "pending" ? "default" : "secondary"}
        // className="flex-1 rounded-none"
        className={`flex-1 rounded-none border-x border-[#1E1211] ${
          filter === "pending"
            ? "bg-[#1E1211] text-[#B2A39D]"
            : "bg-[#7c716c] text-[#1E1211]"
        }`}
        onClick={() => {
          router.push(pathname + "?" + createQueryString("filter", "pending"));
        }}
      >
        Pending
      </Button>
      <Button
        variant={filter === "completed" ? "default" : "secondary"}
        // className="flex-1 rounded-none"
        className={`flex-1 rounded-none border-x border-[#1E1211] ${
          filter === "completed"
            ? "bg-[#1E1211] text-[#B2A39D]"
            : "bg-[#7c716c] text-[#1E1211]"
        }`}
        onClick={() => {
          router.push(
            pathname + "?" + createQueryString("filter", "completed")
          );
        }}
      >
        Completed
      </Button>
    </footer>
  );
};

export default TodoFilter;
