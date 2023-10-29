export const DropdownMenu = ({ category, links, dropdownPosition, currentCategory }) => {
    return (
        <div
            className={`dropdown ${category}`}
            style={category === currentCategory ? dropdownPosition : { display: 'none' }}
        >
            {links.map((link, index) => (
                <p key={index}>
                    {link}
                </p>
            ))}
        </div>
    );
};
