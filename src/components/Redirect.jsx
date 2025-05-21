const Redirect = () => {
    return (
        <>
            <div className="flex items-center gap-4">
                <a
                    href="#"
                    className="bg-primary text-white font-bold px-6 py-2 rounded-[4px] transition hover:bg-primary/90"
                >
                    Entrar
                </a>
                <a
                    href="#"
                    className="text-dark-gray-2 underline underline-offset-4 hover:text-dark-gray transition"
                >
                    Cadastre-se
                </a>
            </div>
        </>
    );
}

export default Redirect;