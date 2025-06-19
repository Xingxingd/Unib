import { Position, Size } from "../base/index.js"

export type WindowMeta = {
	id: string
	name?: string
	title?: string
	position?: Position<"2D">
	resize?: Size<"2D">
	maximized?: boolean
	minimized?: boolean
	focused?: boolean
	visible?: boolean
	header?: boolean
	resizable?: boolean
	draggable?: boolean
	closable?: boolean
	fullscreen?: boolean
}
