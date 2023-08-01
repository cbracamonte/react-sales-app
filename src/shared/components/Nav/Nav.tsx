/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<ul>
				<CustomLink to="products">Productos</CustomLink>
			</ul>
		</nav>
	);
}

function CustomLink({ to, children, ...props }: any) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });

	return (
		<li>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	);
}
export default Nav;
