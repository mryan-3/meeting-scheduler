import { cn } from './utils'
import { toast } from 'sonner'

const variants = {
	success:
		'bg-emerald-200 text-emerald-700 py-3 leading-3 flex items-center gap-4 px-4 text-sm rounded-lg border border-emerald-400',
	error: 'bg-red-300 text-red-800 leading-3 py-3 px-4 flex items-center gap-2 text-sm rounded-lg border border-red-500',
	info: 'bg-blue-200 text-blue-700 leading-3 py-3 px-4 flex items-center gap-2 text-sm rounded-lg border border-blue-400'
}

type ToastProps = {
	message: string
	variant?: 'success' | 'error' | 'info'
	duration?: number
}
export default function showToast({
	message,
	variant = 'info',
	duration = 3000
}: ToastProps) {
	return toast(message, {
		unstyled: true,
		classNames: {
			toast: cn("w-full",variants[variant])
		},
		duration
	})
}
