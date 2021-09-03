import { SVGProps } from "react";
import Svg from "../svgs/arrow-up-1.svg";

const ArrowUp1Icon = (props: SVGProps<SVGElement>) => (
	<Svg
		data-icon="arrow-up-1"
		width="1em"
		height="1em"
		aria-hidden="true"
		fill="currentcolor"
		{...props}
	/>
);

export default ArrowUp1Icon;