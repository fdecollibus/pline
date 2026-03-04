declare module "ink-spinner" {
	import type { FC } from "react"

	interface SpinnerProps {
		type?:
			| "dots"
			| "line"
			| "pipe"
			| "simpleDots"
			| "simpleDotsScrolling"
			| "star"
			| "arc"
			| "arrow"
			| "bouncingBar"
			| "bouncingBall"
			| string
	}

	const Spinner: FC<SpinnerProps>
	export default Spinner
}
