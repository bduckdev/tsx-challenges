function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-black my-10 mx-auto gap-10 p-10 rounded-xl flex justify-between w-5/6">
            {children}
        </div>
    );
}

export default Card;
