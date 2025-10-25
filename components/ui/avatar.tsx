"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

/**
 * Renders a Radix Avatar root element with base avatar styling and forwarded props.
 *
 * @param className - Additional CSS class names to merge with the component's base avatar classes
 * @param props - Remaining props are forwarded to `AvatarPrimitive.Root`
 * @returns A React element that renders `AvatarPrimitive.Root` with composed class names and forwarded props
 */
function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders an avatar image element with standardized sizing, aspect ratio, and a data-slot for theming/overrides.
 *
 * @param className - Optional additional CSS classes to merge with the default avatar image classes
 * @param props - Additional props forwarded to `AvatarPrimitive.Image`
 * @returns The configured `AvatarPrimitive.Image` element for use inside an `Avatar` component
 */
function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

/**
 * Renders an avatar fallback element shown when the avatar image is unavailable.
 *
 * @param className - Additional CSS classes to merge with the component's default styling
 * @returns The AvatarPrimitive.Fallback element with centered, rounded, muted-background styling
 */
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }