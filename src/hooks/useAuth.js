import { useState, useCallback } from "react";

// Stub mínimo de autenticación para desarrollo.
export default function useAuth() {
	const [user, setUser] = useState(null);

	const login = useCallback(() => {
		// Simula login (sustituir por llamada real)
		setUser({ name: "Demo User" });
		return Promise.resolve({ name: "Demo User" });
	}, []);

	const logout = useCallback(() => {
		setUser(null);
	}, []);

	return { user, login, logout };
}
