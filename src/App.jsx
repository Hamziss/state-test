import "./App.css"
import reactLogo from "./assets/react.svg"
import vitelogo from "/vite.svg"

function App() {
	const [inputContent, setInputContent] = useState("")
	const age = 10
	if (age > 10) {
		const [count, setCount] = useState(0)
	}

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={vitelogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setcount(count + 1)}>count is {count}</button>
				<input
					type="text"
					value={inputContent}
					onChange={setInputContent(e.target.valueee)}
				/>
			</div>
		</>
	)
}

export default App
