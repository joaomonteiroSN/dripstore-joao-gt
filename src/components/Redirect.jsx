const Redirect = ({ mobile = false }) => {
    const baseClasses = mobile
        ? "flex flex-col gap-3 mt-6 md:hidden"
        : "hidden md:flex items-center gap-5";

    return (
        <div className={baseClasses}>
            <a
                href="#"
                className="text-base text-dark-gray-2 underline underline-offset-4 hover:text-dark-gray transition text-left"
            >
                Cadastre-se
            </a>
            <a
                href="#"
                className="bg-primary text-white font-bold px-6 py-2 rounded-[4px] transition hover:bg-primary/90 text-center"
            >
                Entrar
            </a>
        </div>
    );
};

export default Redirect;
