const Hero = () => {
    return <div className="h-screen relative">
        <img className="h-full object-cover" src="https://picsum.photos/536/354" />

        <div className="absolute top-1/3 mx-auto left-0 right-0 text-center text-white text-3xl w-3/4">Something here that is long</div>

        <div className="text-gray-200 absolute top-1/3 mt-24 w-4/5 left-0 right-0 mx-auto text-center text-lg">
            something more to be explained for people who see my website
        </div>

        <button className="absolute top-1/3 mt-48 text-white bg-blue-400 left-0 right-0 mx-auto w-32 h-14 rounded-md hover:bg-blue-800">Click me!</button>
    </div>
}

export default Hero