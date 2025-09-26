import * as React from "react"
import { cn } from '@school-potato/utils'

export type TypographyH1Props = React.ComponentPropsWithoutRef<'h1'>
export function H1({ className, children, ...props }: TypographyH1Props) {
  return (
    <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)} {...props}>
      {children}
    </h1>
  )
}

export type TypographyH2Props = React.ComponentPropsWithoutRef<'h2'>
export function H2({ className, children, ...props }: TypographyH2Props) {
  return (
    <h2 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)} {...props}>
      {children}
    </h2>
  )
}

export type TypographyH3Props = React.ComponentPropsWithoutRef<'h3'>
export function H3({ className, children, ...props }: TypographyH3Props) {
  return (
    <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)} {...props}>
      {children}
    </h3>
  )
}

export type TypographyH4Props = React.ComponentPropsWithoutRef<'h4'>
export function H4({ className, children, ...props }: TypographyH4Props) {
  return (
    <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)} {...props}>
      {children}
    </h4>
  )
}

export type TypographyPProps = React.ComponentPropsWithoutRef<'p'>
export function P({ className, children, ...props }: TypographyPProps) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...props}>
      {children}
    </p>
  )
}

export type TypographySmallProps = React.ComponentPropsWithoutRef<'small'>
export function Small({ className, children, ...props }: TypographySmallProps) {
  return (
    <small className={cn("text-sm leading-none font-medium", className)} {...props}>
      {children}
    </small>
  )
}

//Large
export type TypographyLargeProps = React.ComponentPropsWithoutRef<'div'>
export function Large({ className, children, ...props }: TypographyLargeProps) {
  return (
    <div className={cn("text-lg font-semibold", className)} {...props}>
      {children}
    </div>
  )
}

export type TypographyBlockquoteProps = React.ComponentPropsWithoutRef<'blockquote'>
export function Blockquote({ className, children, ...props }: TypographyBlockquoteProps) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)} {...props}>
      {children}
    </blockquote>
  )
}

export type TypographyInlineCodeProps = React.ComponentPropsWithoutRef<'code'>
export function InlineCode({ className, children, ...props }: TypographyInlineCodeProps) {
  return (
    <code className={cn("bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)} {...props}>
      {children}
    </code>
  )
}

// muted
export type TypographyMutedProps = React.ComponentPropsWithoutRef<'p'>
export function Muted({ className, children, ...props }: TypographyMutedProps) {
  return (
    <p className={cn("text-muted-foreground text-sm", className)} {...props}>
      {children}
    </p>
  )
}

