const brands = [
    {
        img: 'https://picsum.photos/100/50'
    },
    {
        img: 'https://picsum.photos/100/50'
    },
    {
        img: 'https://picsum.photos/100/50'
    },
    {
        img: 'https://picsum.photos/100/50'
    }
]

const Brands = () => {
    return <div className="bg-green-100 py-10 px-6 ">
        <h2 className="text-xl font-semibold text-slate-900 ">These brands have trusted us, so that you can too</h2>
        <p className="text-slate-700 mt-4 text-lg">Make sure you test our free product because we are sure that you will upgrade it as soon as you test it.</p>
        <div className="mt-8 grid grid-cols-2 place-items-center gap-8">
            {
                brands.map((brand, index) => <div key={index} className="shadow-xl shadow-slate-400 w-full h-full"> 
                    <img src={brand.img} className='object-cover w-full h-full rounded-md' />
                </div>)
            }
        </div>
    </div>
}

export default Brands