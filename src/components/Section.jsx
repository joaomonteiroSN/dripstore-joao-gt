const Section = ({title, titleAlign, link, children}) => {
    return (
        <>
            <h5 className="text-dark-2 text-2xl text-left">{title}</h5>
            <a className="text-primary text-lg" href={link}></a>
            {children}
        </>
    );
}

export default Section;