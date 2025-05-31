const Section = ({ title, titleAlign = 'left', link, children, className }) => {
    return (
        <>
            <div className={`max-w-[1240px] m-auto px-5 ${className}`}>
                <h5 className={`text-dark-2 text-2xl mb-5 text-${titleAlign}`}>{title}</h5>
                <a className="text-primary text-lg" href={link}></a>
                {children}
            </div>
        </>
    );
}

export default Section;