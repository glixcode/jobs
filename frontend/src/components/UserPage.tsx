import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const UserPage = () => {
	const location = useLocation()

	useEffect(()=> {
		const params = new URLSearchParams(location.search)
		const token = params.get('token')
		// console.log(document.title)

		if(token){
			localStorage.setItem('jwt', token)
			window.history.replaceState({}, document.title, 'userPage')
		}

	},[location])

	return (
		<div>You Signed In Via Google!</div>
	)
}

export default UserPage