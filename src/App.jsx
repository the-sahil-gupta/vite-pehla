import { useState } from 'react';

const App = () => {
	const [username, setusername] = useState('');
	const [error, seterror] = useState(false);

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(username);
	};

	return (
		<>
			<div className="h-screen bg-sky-200 flex justify-center items-center">
				<form onSubmit={submitHandler}>
					<input
						onChange={(e) => setusername(e.target.value)}
						onInput={(e) =>
							seterror(
								e.target.value.trim().length < 5 ? true : false
							)
						}
						className="px-4 py-2 rounded"
						type="text"
						name="username"
						placeholder="Username"
						value={username}
					/>
					{/* {error && (
						<p className="absolute text-red-500">
							Username is very small... Don't submit❌
						</p>
					)} */}
					{username.trim().length > 0 &&
						(error ? (
							<p className="absolute text-red-500">
								Username is very small... Don't submit❌
							</p>
						) : (
							<p className="absolute text-green-500">
								Username is valid...✅
							</p>
						))}
					<button
						className="ml-4 bg-blue-700 text-white px-3 py-1 rounded-lg"
						type="submit">
						Submit
					</button>
				</form>
			</div>
		</>
	);
};
export default App;
