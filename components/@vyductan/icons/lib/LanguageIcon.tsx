import { SVGProps } from "react";
import Svg from "../svgs/language.svg";

const LanguageIcon = (props: SVGProps<SVGElement>) => (
	<Svg
		data-icon="language"
		width="1em"
		height="1em"
		aria-hidden="true"
		fill="currentcolor"
		{...props}
	/>
);

export default LanguageIcon;