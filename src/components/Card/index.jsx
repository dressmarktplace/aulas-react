export const Card = ({ title, children}) => {
    return (
        <div className="rounded-2xl border p-4 bg-white shadow-sm">
            <h3 className="font-semibold mb-2">{title}</h3>

            {children}
        </div>
    )
}