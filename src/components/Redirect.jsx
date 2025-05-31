const Redirect = ({ mobile = false }) => {
    const baseClasses = mobile
        ? "flex flex-col gap-3 mt-6 mx-8 md:hidden"
        : "hidden md:flex items-center gap-5 flex-col xl:flex-row";

    return (
        <div className={baseClasses}>
            <a
                href="#"
                className="text-base text-dark-gray-2 underline underline-offset-4 hover:text-dark-3 transition text-left"
            >
                Cadastre-se
            </a>
            <a
                href="#"
                className="bg-primary text-white font-bold px-6 py-2 rounded-[4px] transition hover:bg-tertiary text-center"
            >
                Entrar
            </a>
        </div>
    );
};

export default Redirect;
