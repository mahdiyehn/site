const items = [
    {
        number: 117,
        title: 'Projects done',
        logo: 'https://picsum.photos/200/300'
    },
    {
        number: 15400,
        title: 'Revenu in Dollars',
        logo: 'https://picsum.photos/200/300'
    },
    {
        number: 9,
        title: 'Strategic partners',
        logo: 'https://picsum.photos/200/300'
    }
]

const Stats = () => {
    return <div className="my-12 flex flex-col items-center ">
        <h2 className="text-xl font-semibold mb-8">Trust us by these numbers</h2>
        {
            items.map(item => <div className="mb-9 flex flex-col items-center " key={item.title}>
                <div className="text-3xl font-semibold text-slate-800 tracking-widest mb-1">{item.number}</div>
                <div className="text-sm text-slate-500 mb-3">{item.title}</div>
                <img className="w-20 aspect-video" src={item.logo} />
            </div>)
        }
    </div>
}

export default Stats