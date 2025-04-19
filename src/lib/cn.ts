// src/lib/cn.ts (tailwind‑merge helper)
import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
