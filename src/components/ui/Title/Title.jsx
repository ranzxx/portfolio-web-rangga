export default function Title({ title, className }) {
    return (
        <h1 className={`text-5xl text-center font-semibold mb-10 ${className}`}>{title}</h1>
    )
}