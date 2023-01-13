import React from "react";
import { useSelector } from "react-redux";
import HeaderNavSignIn from "./HeaderNavSignIn";
import HeaderNavSignOut from "./HeaderNavSignOut";

const SingInToggle = () => {
	const user = useSelector((state) => state.auth.user);

	return (
		<>
			{user ? (
				<>
					<HeaderNavSignOut />
				</>
			) : (
				<>
					<HeaderNavSignIn />
				</>
			)}
		</>
	);
};

export default SingInToggle;