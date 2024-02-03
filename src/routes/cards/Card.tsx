function Card({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="bg-gray-500 m-10 p-10 rounded-xl">
            <p className="text-3xl font-bold">{title}</p>
            {children}
        </div>
    );
}

export default Card;
