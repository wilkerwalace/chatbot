const placeholderEvents = [
  {
    date: '2022-10-01',
    headline: 'NVIDIA lança placa com I.A integrada',
    description:
      'NVIDIA acaba de lançar placas que mudaram todo o mercado de renderização'
  }
]

export const EventsSkeleton = () => {
  return (
    <div className="-mt-2 flex w-full flex-col gap-2 py-4">
      {placeholderEvents.map(event => (
        <div
          key={event.date}
          className="flex shrink-0 flex-col gap-1 rounded-lg bg-zinc-800 p-4"
        >
          <div className="w-fit rounded-md bg-zinc-700 text-sm text-transparent">
            {event.date}
          </div>
          <div className="w-fit rounded-md bg-zinc-700 text-transparent">
            {event.headline}
          </div>
          <div className="w-auto rounded-md bg-zinc-700 text-transparent">
            {event.description.slice(0, 70)}...
          </div>
        </div>
      ))}
    </div>
  )
}
