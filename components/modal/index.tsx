"use client";
import { useCallback, useRef, useEffect, MutableRefObject } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }:{
  children:React.ReactNode
}) {
  const overlay = useRef();
  const wrapper = useRef();
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e:React.MouseEvent) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e:React.KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown as unknown as ((this: Document, ev: KeyboardEvent) => void));
    return () => document.removeEventListener("keydown", onKeyDown as unknown as ((this: Document, ev: KeyboardEvent) => void));
  }, [onKeyDown]);

  return (
    <div
      ref={overlay as unknown as MutableRefObject<HTMLDivElement>}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto grid content-center bg-black/60"
      onClick={onClick}
    >
      <div
        ref={wrapper as unknown as MutableRefObject<HTMLDivElement>}
        className=" w-full"
      >
        {children}
      </div>
    </div>
  );
}
