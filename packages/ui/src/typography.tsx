import * as React from "react"
import { cn } from '@school-potato/utils'

function H1({ className, children, ...props }: React.ComponentPropsWithoutRef<'h1'>) {
  return (
    <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)} {...props}>
      {children}
    </h1>
  )
}

function H2({ className, children, ...props }: React.ComponentPropsWithoutRef<'h2'>) {
  return (
    <h2 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)} {...props}>
      {children}
    </h2>
  )
}

function H3({ className, children, ...props }: React.ComponentPropsWithoutRef<'h3'>) {
  return (
    <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)} {...props}>
      {children}
    </h3>
  )
}

function H4({ className, children, ...props }: React.ComponentPropsWithoutRef<'h4'>) {
  return (
    <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)} {...props}>
      {children}
    </h4>
  )
}

function P({ className, children, ...props }:React.ComponentPropsWithoutRef<'p'>) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...props}>
      {children}
    </p>
  )
}

function Small({ className, children, ...props }: React.ComponentPropsWithoutRef<'small'>) {
  return (
    <small className={cn("text-sm leading-none font-medium", className)} {...props}>
      {children}
    </small>
  )
}

function Large({ className, children, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={cn("text-lg font-semibold", className)} {...props}>
      {children}
    </div>
  )
}

function Blockquote({ className, children, ...props }: React.ComponentPropsWithoutRef<'blockquote'>){
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)} {...props}>
      {children}
    </blockquote>
  )
}

function InlineCode({ className, children, ...props }: React.ComponentPropsWithoutRef<'code'>) {
  return (
    <code className={cn("bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)} {...props}>
      {children}
    </code>
  )
}

function Muted({ className, children, ...props }: React.ComponentPropsWithoutRef<'p'>) {
  return (
    <p className={cn("text-muted-foreground text-sm", className)} {...props}>
      {children}
    </p>
  )
}

export {
  H1,
  H2,
  H3,
  H4,
  Small,
  Large,
  Blockquote,
  InlineCode,
  Muted
}