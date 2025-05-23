const Section = ({title, titleAlign = 'left', link, children}) => {
    return (
        <>
            <h5 className={`text-dark-2 text-2xl text-${titleAlign}`}>{title}</h5>
            <a className="text-primary text-lg" href={link}></a>
            {children}
        </>
    );
}

export default Section;