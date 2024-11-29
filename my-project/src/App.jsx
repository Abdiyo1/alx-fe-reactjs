import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <div class="flex flex-col min-h-screen">

  <header class="bg-blue-600 text-white py-4">
    <h1 class="text-center text-xl">Header Section</h1>
  </header>

 
  <main class="flex-grow container mx-auto max-w-4xl p-6 bg-gray-100 rounded-lg">
    <h2 class="text-2xl font-bold mb-4">Main Content</h2>
    <p>
      This is the main content area. It is centered and limited to a maximum
      width of 960px.
    </p>
  </main>


  <footer class="bg-gray-800 text-white py-4">
    <p class="text-center">&copy; 2024 Your Website</p>
  </footer>
</div>

    </>
  )
}

export default App
