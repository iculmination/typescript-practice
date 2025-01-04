"use client";

import Arrays from "@/components/arrays";
import Classes from "@/components/classes";
import Enum from "@/components/enum";
import Functions from "@/components/functions";
import Objects from "@/components/objects";

export default function Home() {
  return (
    <div className="grid grid-cols-2 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-60">
        <p className="flex justify-between w-full">
          typeof 42: <span className="text-blue-400">{typeof 42}</span>
        </p>
        <p className="flex justify-between w-full">
          typeof &apos;str&apos;:{" "}
          <span className="text-blue-400">{typeof "str"}</span>
        </p>
        <p className="flex justify-between w-full">
          typeof true: <span className="text-blue-400">{typeof true}</span>
        </p>
        <p className="flex justify-between w-full">
          typeof [ ]: <span className="text-blue-400">{typeof []}</span>
        </p>
        <p className="flex justify-between w-full">
          typeof {"{ }"}: <span className="text-blue-400">{typeof {}}</span>
        </p>
        <p className="flex justify-between w-full">
          typeof null: <span className="text-blue-400">{typeof null}</span>
        </p>
        <p className="flex justify-between w-full">
          typeof undefined:{" "}
          <span className="text-blue-400">{typeof undefined}</span>
        </p>
        <p className="flex justify-between w-full">
          typeof Symbol():{" "}
          <span className="text-blue-400">{typeof Symbol()}</span>
        </p>
      </div>
      <div className="w-60">
        JavaScript:
        <p className="flex justify-between w-full">
          typeof null: <span className="text-blue-400">{typeof null}</span>
        </p>
        <p className="flex justify-between w-full">
          typeof undefined:{" "}
          <span className="text-blue-400">{typeof undefined}</span>
        </p>
        <br className="" />
        TypeScript:
        <p className="flex justify-between w-full">
          const n: null = <span className="text-blue-400">null</span>
        </p>
        <p className="flex justify-between w-full">
          const u: undefined = <span className="text-blue-400">undefined</span>
        </p>
      </div>
      <div className="w-60"></div>
      <div className="w-60"></div>
      <Functions />
      <Arrays />
      <Enum />
      <Objects />
      <Classes />
    </div>
  );
}
